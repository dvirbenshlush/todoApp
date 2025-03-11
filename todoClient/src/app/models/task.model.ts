export interface Task {
    _id?: any;
    isEditing: boolean;
    lockedBy?: string;
    title: string;
    description?: string;
    completed: boolean;
    priority: "low" | "medium" | "high";
    dueDate?: Date;
    editedBy?: string;
    createdAt: Date;
    updatedAt?: Date;
    updatedBy?: string;
}