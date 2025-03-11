import { io } from '../services/socket';
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
        const tasks = await taskService.getTaskById(req.params.id);
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
        const task = await taskService.createTask(req.body.task);
        res.status(200).json(task);

        io.emit('taskCreated', task);
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
        const updatedTask = await taskService.updateTask(req.params.id, req.body.task);
        res.status(200).json(updatedTask);

        io.emit('taskUpdated', updatedTask); 
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
        const success = await taskService.deleteTask(req.params.id);
        if (success) {
            res.status(200).json({ message: 'Task deleted' });

            io.emit('taskDeleted', req.params.id); 
        } else {
            res.status(404).json({ message: 'Task not found' });
        }
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ message: error.message });
        } else {
            res.status(500).json({ message: 'An unknown error occurred' });
        }
    }
}
