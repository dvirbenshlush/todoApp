import Task, { ITask } from "../models/task.model";

export class TaskRepository {
   
    async getAllTasks(): Promise<ITask[]> {
        return await Task.find();
    }

    async getTaskById(id: string): Promise<ITask | null> {
        return await Task.findById(id);
    }

    async createTask(task: ITask): Promise<ITask> {
        return await Task.create(task);
    }

    async updateTask(id: string, task: ITask): Promise<ITask | null> {
        return await Task.findByIdAndUpdate(id, task, { new: true });
    }
    
    async deleteTask(id: string): Promise<boolean> {
        const result = await Task.findByIdAndDelete(id);

        return result ? true : false;
    }
}