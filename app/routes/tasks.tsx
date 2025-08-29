import type { LoaderFunction, ActionFunction, LinksFunction } from "@remix-run/node";
import { Form, useLoaderData } from "@remix-run/react";
import { useState } from "react";
import { connectDB } from "~/utils/db.server";
import { Task } from "~/models/task.server";
import { requireUserId } from "~/utils/session.server";
import styles from "~/styles/task.css";

export const links: LinksFunction = () => [{ rel: "stylesheet", href: styles }];

// 🔹 Loader: fetch tasks (with optional search)
export const loader: LoaderFunction = async ({ request }) => {
  await connectDB();
  const userId = await requireUserId(request);

  const url = new URL(request.url);
  const q = url.searchParams.get("q") || "";

  let tasks;
  if (q) {
    tasks = await Task.find({
      user: userId,
      $or: [
        { title: { $regex: q, $options: "i" } },
        { description: { $regex: q, $options: "i" } },
      ],
    }).sort({ createdAt: -1 });
  } else {
    tasks = await Task.find({ user: userId }).sort({ createdAt: -1 });
  }

  return { tasks, q };
};

// 🔹 Action: create, delete, or update task
export const action: ActionFunction = async ({ request }) => {
  await connectDB();
  const userId = await requireUserId(request);
  const formData = await request.formData();

  // Delete task
  if (formData.get("_method") === "delete") {
    await Task.findOneAndDelete({ _id: formData.get("taskId"), user: userId });
    return redirectToTasks();
  }

  // Update task
  if (formData.get("_method") === "update") {
    const taskId = formData.get("taskId") as string;
    const title = (formData.get("title") as string) || "";
    const description = (formData.get("description") as string) || "";
    const imageUrl = (formData.get("imageUrl") as string) || "";

    await Task.findOneAndUpdate(
      { _id: taskId, user: userId },
      { title, description, imageUrl }
    );

    return redirectToTasks();
  }

  // Create task (default)
  const title = (formData.get("title") as string) || "";
  const description = (formData.get("description") as string) || "";
  const imageUrl = (formData.get("imageUrl") as string) || "";

  if (!title.trim()) {
    // simple server-side validation
    return redirectToTasks();
  }

  const task = new Task({ user: userId, title, description, imageUrl });
  await task.save();

  return redirectToTasks();
};

function redirectToTasks() {
  return { headers: { Location: "/tasks" }, status: 302 } as any;
}

// 🔹 Component
export default function Tasks() {
  const { tasks, q } = useLoaderData<{ tasks: any[]; q: string }>();
  const [selectedTask, setSelectedTask] = useState<any | null>(null);
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className="task-container">
      <h1>Your Tasks</h1>

      {/* Add new task form */}
      <Form method="post" className="task-form">
        <input type="text" name="title" placeholder="Task title" required />
        <input type="text" name="description" placeholder="Description" />
        <input type="text" name="imageUrl" placeholder="Image URL" />
        <button type="submit">Add</button>
      </Form>

      {/* Search bar */}
      <Form method="get" className="task-search">
        <input type="text" name="q" defaultValue={q} placeholder="Search tasks..." />
        <button type="submit">Search</button>
      </Form>

      {/* Task list */}
      <ul className="task-list">
        {tasks.map((task) => (
          <li key={task._id} className="task-item">
            <div>
              <strong>{task.title}</strong>
              <p>{task.description}</p>
              {task.imageUrl && <img src={task.imageUrl} alt={task.title} />}
            </div>

            <div>
              {/* Details button: open modal (view mode) */}
              <button
                type="button"
                onClick={() => {
                  setSelectedTask(task);
                  setIsEditing(false);
                }}
              >
                Details
              </button>

              {/* Edit button: open modal (edit mode) */}
              <button
                type="button"
                onClick={() => {
                  setSelectedTask(task);
                  setIsEditing(true);
                }}
              >
                Edit
              </button>

              {/* Delete */}
              <Form method="post" style={{ display: "inline" }}>
                <input type="hidden" name="taskId" value={task._id} />
                <button type="submit" name="_method" value="delete">
                  Delete
                </button>
              </Form>
            </div>
          </li>
        ))}
      </ul>

      {/* Modal (view OR edit) */}
      {selectedTask && (
        <div className="modal-backdrop" role="dialog" aria-modal="true">
          <div className="modal-box">
            {/* Task edit */}
            {isEditing ? (
              <Form method="post" className="flex flex-col gap-2">
                <input type="hidden" name="_method" value="update" />
                <input type="hidden" name="taskId" value={selectedTask._id} />

                <label>
                  Title
                  <input type="text" name="title" defaultValue={selectedTask.title} className="border p-2 rounded" />
                </label>

                <label>
                  Description
                  <input type="text" name="description" defaultValue={selectedTask.description} className="border p-2 rounded" />
                </label>

                <label>
                  Image URL
                  <input type="text" name="imageUrl" defaultValue={selectedTask.imageUrl || ""} className="border p-2 rounded" />
                </label>

                <div style={{ display: "flex", gap: 8 }}>
                  <button type="submit" className="bg-yellow-500 text-white px-4 py-2 rounded">
                    Save Changes
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setIsEditing(false);
                    }}
                    className="px-4 py-2 rounded"
                  >
                    Cancel
                  </button>
                </div>
              </Form>
            ) : (
              <>
                <h2>{selectedTask.title}</h2>
                <p>{selectedTask.description}</p>
                {selectedTask.imageUrl && <img src={selectedTask.imageUrl} alt={selectedTask.title} />}
                <div style={{ marginTop: 12 }}>
                  <button
                    type="button"
                    onClick={() => {
                      setIsEditing(true);
                    }}
                    className="px-3 py-1 rounded"
                  >
                    Edit
                  </button>
                </div>
              </>
            )}

            <button
              onClick={() => {
                setSelectedTask(null);
                setIsEditing(false);
              }}
              className="mt-4"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
