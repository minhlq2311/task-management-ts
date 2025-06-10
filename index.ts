import express, {Express} from 'express';
import * as database from './config/database';
import dotenv from 'dotenv';
import mainRoutes from './api/v1/routes/index.route';

dotenv.config();

database.connect();

const app: Express = express();
const PORT: number | string = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mainRoutes(app);


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
