import express, {Express,Request,Response} from 'express';
import * as database from './config/database';
import dotenv from 'dotenv';
import Task from './models/task.model';

dotenv.config();

database.connect();

const app: Express = express();
const PORT: number | string = process.env.PORT;

app.get('/tasks', async (req: Request, res: Response) => {
    const tasks = await Task.find({ deleted: false });
    res.json(tasks);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
