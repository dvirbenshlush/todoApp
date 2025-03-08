import { Express } from 'express';

export const swaggerDocs = {
  openapi: '3.0.0',
  info: {
    title: 'To-Do List API',
    version: '1.0.0',
    description: 'API for managing a to-do list',
  },
  servers: [{ url: 'http://localhost:5000' }],
  components: {
    schemas: {
      Task: {
        type: 'object',
        required: ['title', 'completed'],
        properties: {
          id: { type: 'string', description: 'Task ID' },
          title: { type: 'string', description: 'Task title' },
          description: { type: 'string', description: 'Task description' },
          completed: { type: 'boolean', description: 'Task status' },
        },
      },
    },
  },
  paths: {
    '/api/tasks': {
      get: {
        summary: 'Get all tasks',
        tags: ['Tasks'],
        responses: {
          200: {
            description: 'List of all tasks',
            content: {
              'application/json': {
                schema: {
                  type: 'array',
                  items: { $ref: '#/components/schemas/Task' },
                },
              },
            },
          },
        },
      },
      post: {
        summary: 'Create a new task',
        tags: ['Tasks'],
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: { $ref: '#/components/schemas/Task' },
            },
          },
        },
        responses: {
          201: { description: 'Task created successfully' },
          400: { description: 'Invalid input' },
        },
      },
    },
    '/api/tasks/{id}': {
      get: {
        summary: 'Get a task by ID',
        tags: ['Tasks'],
        parameters: [
          {
            in: 'path',
            name: 'id',
            required: true,
            description: 'Task ID',
            schema: { type: 'string' },
          },
        ],
        responses: {
          200: { description: 'Task data', content: { 'application/json': { schema: { $ref: '#/components/schemas/Task' } } } },
          404: { description: 'Task not found' },
        },
      },
      put: {
        summary: 'Update an existing task',
        tags: ['Tasks'],
        parameters: [
          {
            in: 'path',
            name: 'id',
            required: true,
            description: 'Task ID',
            schema: { type: 'string' },
          },
        ],
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: { $ref: '#/components/schemas/Task' },
            },
          },
        },
        responses: {
          200: { description: 'Task updated successfully' },
          400: { description: 'Invalid input' },
          404: { description: 'Task not found' },
        },
      },
      delete: {
        summary: 'Delete a task',
        tags: ['Tasks'],
        parameters: [
          {
            in: 'path',
            name: 'id',
            required: true,
            description: 'Task ID',
            schema: { type: 'string' },
          },
        ],
        responses: {
          200: { description: 'Task deleted successfully' },
          404: { description: 'Task not found' },
        },
      },
    },
  },
};
