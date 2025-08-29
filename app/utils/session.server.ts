// app/utils/session.server.ts
import { createCookieSessionStorage, redirect } from "@remix-run/node";
import jwt from "jsonwebtoken";
import { connectDB } from "~/utils/db.server";
import { User } from "~/models/user.server";

const sessionSecret = process.env.SESSION_SECRET!;
if (!sessionSecret) throw new Error("SESSION_SECRET must be set");

export const storage = createCookieSessionStorage({
  cookie: {
    name: "RJ_session",
    secure: process.env.NODE_ENV === "production",
    secrets: [sessionSecret],
    sameSite: "lax",
    path: "/",
    httpOnly: true,
  },
});

export async function createUserSession(userId: string, redirectTo: string) {
  const session = await storage.getSession();
  const token = jwt.sign({ id: userId }, process.env.JWT_SECRET as string, { expiresIn: "1d" });
  session.set("token", token);
  return redirect(redirectTo, {
    headers: { "Set-Cookie": await storage.commitSession(session) },
  });
}

export async function getUserId(request: Request): Promise<string | null> {
  const session = await storage.getSession(request.headers.get("Cookie"));
  const token = session.get("token");
  if (!token) return null;
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as { id: string };
    return decoded.id;
  } catch {
    return null;
  }
}

export async function getUser(request: Request) {
  const id = await getUserId(request);
  if (!id) return null;
  await connectDB();
  // Keep it lean for serialization in loader
  const user = await User.findById(id).select("_id username email").lean();
  return user ? { id: String(user._id), username: user.username, email: user.email } : null;
}

export async function requireUserId(request: Request) {
  const userId = await getUserId(request);
  if (!userId) throw redirect("/login");
  return userId;
}

export async function logout(request: Request) {
  const session = await storage.getSession(request.headers.get("Cookie"));
  return redirect("/login", {
    headers: { "Set-Cookie": await storage.destroySession(session) },
  });
}
