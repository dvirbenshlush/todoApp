import { DTO } from "./dto";

export interface Model {
    addTask(task: DTO): Promise<DTO>;
    getAllTasks(symbol: string): Promise<DTO[]>;
}