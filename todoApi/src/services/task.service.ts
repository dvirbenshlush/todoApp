import { ITask } from "../models/task.model";
import { TaskRepository } from "../repositories/task.repository";

export class TaskService {

    private taskRepository: TaskRepository;

    constructor() {
        this.taskRepository = new TaskRepository();
    }
   
    async getAllTasks() {
        return this.taskRepository.getAllTasks();
    }

    async getTaskById(id: string) {
        return this.taskRepository.getTaskById(id);
    }

    async createTask(task: ITask) {
        return this.taskRepository.createTask(task);
    }

    async updateTask(id: string, task: ITask) {
        return this.taskRepository.updateTask(id, task);
    }
    
    async deleteTask(id: string) {
        return this.taskRepository.deleteTask(id);
    }
}