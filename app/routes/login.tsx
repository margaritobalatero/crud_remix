import type { ActionFunction, LoaderFunction, MetaFunction } from "@remix-run/node";
import { Form, useActionData } from "@remix-run/react";
import { connectDB } from "~/utils/db.server";
import { User } from "~/models/user.server";
import { createUserSession, getUserId } from "~/utils/session.server";
import bcrypt from "bcryptjs";
import { redirect } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [{ title: "Login - Remix CRUD" }];
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
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  const user = await User.findOne({ email });
  if (!user) return { error: "Invalid credentials" };

  const valid = await bcrypt.compare(password, user.password);
  if (!valid) return { error: "Invalid credentials" };

  return createUserSession(user._id.toString(), "/tasks");
};

export default function Login() {
  const actionData = useActionData<{ error?: string }>();

  return (
    <div className="max-w-md mx-auto mt-12 p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold mb-4">Login</h1>

      {actionData?.error && (
        <p className="mb-3 text-sm text-red-600">{actionData.error}</p>
      )}

      <Form method="post" className="flex flex-col gap-3">
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
          className="bg-blue-600 text-white rounded px-4 py-2 hover:bg-blue-700"
        >
          Login
        </button>
      </Form>
    </div>
  );
}
