import { Request, Response, Router } from 'express';
import Task from '../../../models/task.model';

const router = Router();

router.get('/', async (req: Request, res: Response) => {
    const tasks = await Task.find({ deleted: false });
    res.json(tasks);
});

router.get('/:id', async (req:Request, res: Response) => {
    const taskId = req.params.id;
    const tasks = await Task.findOne({ _id: taskId, deleted: false });
    res.json(tasks);
});

export const taskRoutes: Router = router;