import mongoose from "mongoose";

const { Schema, model, models } = mongoose;

const taskSchema = new Schema({
  user: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String },
  imageUrl: { type: String }, // ✅ added image field
});

// Reuse model if already compiled (important for Remix hot reload)
export const Task = models.Task || model("Task", taskSchema);
