import { Request, Response } from 'express';
import Task from '../models/task.model';

const getAllTasks = async (req: Request, res: Response) => {
    const tasks = await Task.find({ deleted: false });
    res.json(tasks);
};

const getTaskById = async (req:Request, res: Response) => {
    const taskId = req.params.id;
    const tasks = await Task.findOne({ _id: taskId, deleted: false });
    res.json(tasks);
};

export default {
    getAllTasks,
    getTaskById
};