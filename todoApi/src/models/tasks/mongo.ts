import { DTO } from "./dto";
import { Model } from "./model";
import mongoose from "../../db/mongo";

const taskSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String },
    completed: { type: Boolean, default: false },
    priority: { type: String, enum: ["low", "medium", "high"], default: "medium" },
    dueDate: { type: Date },
    editedBy: { type: String, default: null },
  },
  { timestamps: true });

const Task = mongoose.model<DTO>('tasks', taskSchema);

class Mongo implements Model {
  [x: string]: any;

  async getAllTasks(title: string): Promise<DTO[]> {
    const latest = await Task.find({ title }).limit(1);
    console.log(latest);
    if (!latest.length) return [];
  
    return latest.map((task) => ({
      _id: task._id,
      title: task.title,
      description: task.description,
      completed: task.completed,
      priority: task.priority,
      dueDate: task.dueDate,
      editedBy: task.editedBy,
      createdAt: task.createdAt,
      updatedAt: task.updatedAt
    }));
  }
  

  async addTask(task: DTO): Promise<DTO> {
    const newTask = new Task(task);
    await newTask.save();
    return newTask;
  }    
}

const mongo = new Mongo();
export default mongo;