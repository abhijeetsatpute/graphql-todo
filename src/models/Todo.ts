import mongoose, { Schema } from "mongoose";
import { TodoType } from "../types/todo";

const TodoSchema: Schema = new mongoose.Schema(
  {
    title: {
      type: String,
      trim: true,
      required: [true, "Please provide todo title"],
      maxlength: [100, "Title can not be more than 100 characters"],
    },
    description: {
      type: String,
      required: [true, "Please provide todo description"],
      maxlength: [1000, "Description can not be more than 1000 characters"],
    },
    completed: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

export const Todo = mongoose.model<TodoType>("Todo", TodoSchema);
