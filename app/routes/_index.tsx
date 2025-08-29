// app/routes/_index.tsx
import type { LoaderFunction } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import { getUserId } from "~/utils/session.server";

export const loader: LoaderFunction = async ({ request }) => {
  const userId = await getUserId(request);
  return redirect(userId ? "/tasks" : "/login");
};

export default function Index() {
  // Won't render because loader always redirects
  return null;
}
