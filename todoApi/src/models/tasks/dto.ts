import { ObjectId } from "mongoose";

export interface DTO {
    _id?: ObjectId;
    title: string;
    description?: string;
    completed: boolean;
    priority: "low" | "medium" | "high";
    dueDate?: Date;
    editedBy?: string;
    createdAt: Date;
    updatedAt?: Date;
}