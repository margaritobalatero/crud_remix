import mongoose from "mongoose";

const { Schema, model, models } = mongoose;

const userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

userSchema.methods.matchPassword = async function (entered: string) {
  const bcrypt = await import("bcryptjs"); // dynamic import works well in ESM
  return bcrypt.compare(entered, this.password);
};

export const User = models.User || model("User", userSchema);
