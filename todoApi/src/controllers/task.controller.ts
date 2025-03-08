import { Request, Response } from 'express';
import { TaskService } from '../services/task.service';

const taskService = new TaskService();

export const getAllTasks = async (req: Request, res: Response) => { 
    try {
        const tasks = await taskService.getAllTasks();
        res.status(200).json(tasks);
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ message: error.message });
        } else {
            res.status(500).json({ message: 'An unknown error occurred' });
        }
    }
}

export const getTaskById = async (req: Request, res: Response) => { 
    try {
        const tasks = await taskService.getTaskById(req.body.taskId);
        res.status(200).json(tasks);
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ message: error.message });
        } else {
            res.status(500).json({ message: 'An unknown error occurred' });
        }
    }
}

export const createTask = async (req: Request, res: Response) => { 
    try {
        const tasks = await taskService.createTask(req.body.task);
        res.status(200).json(tasks);
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ message: error.message });
        } else {
            res.status(500).json({ message: 'An unknown error occurred' });
        }
    }
}

export const updateTask = async (req: Request, res: Response) => { 
    try {
        const tasks = await taskService.updateTask(req.body.taskId, req.body.task);
        res.status(200).json(tasks);
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ message: error.message });
        } else {
            res.status(500).json({ message: 'An unknown error occurred' });
        }
    }
}


export const deleteTask = async (req: Request, res: Response) => { 
    try {
        const tasks = await taskService.deleteTask(req.body.taskId);
        res.status(200).json(tasks);
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ message: error.message });
        } else {
            res.status(500).json({ message: 'An unknown error occurred' });
        }
    }
}