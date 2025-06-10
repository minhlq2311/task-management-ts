import { taskRoutes } from "./task.route";
import {Express} from 'express';

const mainRoutes = (app: Express): void => {
    const version: string = '/api/v1';
    app.use(version + '/tasks', taskRoutes);
};

export default mainRoutes;