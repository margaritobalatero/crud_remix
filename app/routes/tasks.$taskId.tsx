import { LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { connectDB } from "~/utils/db.server";
import { Task } from "~/models/task.server";
import { requireUserId } from "~/utils/session.server";

export const loader: LoaderFunction = async ({ params, request }) => {
  await connectDB();
  const userId = await requireUserId(request);

  const task = await Task.findOne({ _id: params.taskId, user: userId });
  if (!task) {
    throw new Response("Not Found", { status: 404 });
  }

  return { task };
};

export default function TaskDetail() {
  const { task } = useLoaderData<{ task: any }>();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">{task.title}</h1>
      <div
        className="mt-2 text-gray-700"
        dangerouslySetInnerHTML={{ __html: task.description }}
      />
      {task.imageUrl && (
        <img
          src={task.imageUrl}
          alt={task.title}
          className="mt-4 max-h-80 rounded"
        />
      )}
      <a
        href="/tasks"
        className="inline-block mt-6 bg-blue-500 text-white px-4 py-2 rounded"
      >
        Back to Tasks
      </a>
    </div>
  );
}
