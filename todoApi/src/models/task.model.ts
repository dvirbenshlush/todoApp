import { ObjectId } from "mongoose";
import mongoose from "mongoose";

export interface ITask extends Document {
    _id?: ObjectId;
    title: string;
    description?: string;
    lockedBy?: string;
    completed: boolean;
    priority: "low" | "medium" | "high";
    dueDate?: Date;
    editedBy?: string;
    createdAt: Date;
    updatedAt?: Date;
}


const taskSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String },
    lockedBy: { type: String },
    completed: { type: Boolean, default: false },
    priority: { type: String, enum: ["low", "medium", "high"], default: "medium" },
    dueDate: { type: Date },
    editedBy: { type: String, default: null },
  },
  { timestamps: true });

export default mongoose.model<ITask>('Task', taskSchema);
