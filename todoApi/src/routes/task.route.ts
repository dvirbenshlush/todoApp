import express from 'express';
import { authMiddleware } from '../middleware/auth.middleware';
import { getAllTasks, getTaskById, createTask, updateTask, deleteTask } from '../controllers/task.controller';

const router = express.Router();

router.get('/', getAllTasks);
router.get('/:id', getTaskById);
router.post('/', createTask);
router.put('/:id', authMiddleware, updateTask);
router.delete('/:id', authMiddleware, deleteTask);

export default router;