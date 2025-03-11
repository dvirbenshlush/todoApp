import taskRoutes from './routes/task.route';
import authRoutes from './routes/auth.routes';
import { Router } from 'express';

export const router  = Router();
router.use('/api/auth', authRoutes);
router.use('/api/tasks', taskRoutes);