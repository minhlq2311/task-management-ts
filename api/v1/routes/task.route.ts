import { Request, Response, Router } from 'express';
import taskController from '../controllers/task.controller';
const router = Router();

router.get('/', taskController.getAllTasks);

router.get('/:id', taskController.getTaskById);

export const taskRoutes: Router = router;