import type {
  LinksFunction,
  LoaderFunctionArgs,
  MetaFunction,
} from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
  Form,
  Link,
} from "@remix-run/react";
import { getUser } from "~/utils/session.server";

// ✅ Correct meta function (Remix v2 style)
export const meta: MetaFunction = () => {
  return [
    { charSet: "utf-8" },
    { title: "Remix + Mongo CRUD" },
    { name: "viewport", content: "width=device-width,initial-scale=1" },
  ];
};

// ✅ Optional stylesheet links (empty for now)
export const links: LinksFunction = () => {
  return [];
};

// ✅ Loader: provides user info to layout
export const loader = async ({ request }: LoaderFunctionArgs) => {
  const user = await getUser(request);
  return { user };
};

export default function App() {
  const { user } = useLoaderData<typeof loader>();

  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="min-h-screen bg-gray-50 text-gray-900">
        {/* ---- Header Nav ---- */}
        <header className="border-b bg-white shadow-sm">
          <nav className="mx-auto max-w-4xl flex items-center justify-between p-4">
            <Link to="/" className="font-semibold text-lg">
              Remix CRUD
            </Link>

            <div className="flex items-center gap-4">
              {user ? (
                <>
                  <Link to="/tasks">Tasks</Link>
                  <span className="opacity-70">Hi, {user.username}</span>
                  <Form method="post" action="/logout">
                    <button
                      type="submit"
                      className="underline text-red-600 hover:text-red-800"
                    >
                      Logout
                    </button>
                  </Form>
                </>
              ) : (
                <>
                  <Link to="/login">Login</Link>
                  <Link to="/signup">Signup</Link>
                </>
              )}
            </div>
          </nav>
        </header>

        {/* ---- Page Content ---- */}
        <main className="mx-auto max-w-4xl p-6">
          <Outlet />
        </main>

        {/* ---- Remix Runtime ---- */}
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
