import { Server } from 'socket.io';
import { TaskService } from './task.service';

const taskService = new TaskService();

const editingTasks: Set<string> = new Set();
export let io: Server;

export const setupSocket = (server: any) => {
  io = new Server(server);

  io.on('connection', (socket) => {
    console.log('A user connected');

    socket.on('taskEditRequest', (taskId: string) => {
      if (editingTasks.has(taskId)) {
        socket.emit('taskLocked', taskId);
      } else {
        editingTasks.add(taskId);
        socket.emit('taskUnlocked', taskId);
      }
    });

    socket.on('taskUpdate', async (taskId: string, updatedTask: any) => {
      try {
        await taskService.updateTask(taskId, updatedTask);
        io.emit('taskUpdated', updatedTask);
      } catch (error) {
        console.error(error);
      } finally {
        editingTasks.delete(taskId);
      }
    });

    socket.on('taskDelete', async (taskId: string) => {
      try {
        await taskService.deleteTask(taskId);
        io.emit('taskDeleted', taskId);
      } catch (error) {
        console.error(error);
      } finally {
        editingTasks.delete(taskId);
      }
    });

    socket.on('disconnect', () => {
      console.log('A user disconnected');
    });
  });

  return io;
};
