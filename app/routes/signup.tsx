import type { ActionFunction, LoaderFunction, MetaFunction } from "@remix-run/node";
import { Form, useActionData } from "@remix-run/react";
import { connectDB } from "~/utils/db.server";
import { User } from "~/models/user.server";
import { createUserSession, getUserId } from "~/utils/session.server";
import bcrypt from "bcryptjs";
import { redirect } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [{ title: "Signup - Remix CRUD" }];
};

// Redirect logged-in users to /tasks
export const loader: LoaderFunction = async ({ request }) => {
  const userId = await getUserId(request);
  if (userId) return redirect("/tasks");
  return null;
};

export const action: ActionFunction = async ({ request }) => {
  await connectDB();
  const formData = await request.formData();
  const username = formData.get("username") as string;
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  const existing = await User.findOne({ email });
  if (existing) return { error: "Email already registered" };

  const hashed = await bcrypt.hash(password, 10);
  const user = new User({ username, email, password: hashed });
  await user.save();

  return createUserSession(user._id.toString(), "/tasks");
};

export default function Signup() {
  const actionData = useActionData<{ error?: string }>();

  return (
    <div className="max-w-md mx-auto mt-12 p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold mb-4">Signup</h1>

      {actionData?.error && (
        <p className="mb-3 text-sm text-red-600">{actionData.error}</p>
      )}

      <Form method="post" className="flex flex-col gap-3">
        <input
          type="text"
          name="username"
          placeholder="Username"
          required
          className="border rounded px-3 py-2"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          className="border rounded px-3 py-2"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
          className="border rounded px-3 py-2"
        />
        <button
          type="submit"
          className="bg-green-600 text-white rounded px-4 py-2 hover:bg-green-700"
        >
          Signup
        </button>
      </Form>
    </div>
  );
}
