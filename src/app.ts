import express, { Application } from 'express';
import cors from 'cors';
import { StudentRoute } from './app/modules/student/student.route';
import { UserRoute } from './app/modules/user/user.route';
import globalErrorHandler from './app/middlewares/globalErrorHandler';
import notFound from './app/middlewares/notFound';
import router from './app/routes';

const app: Application = express();

//  parsers
app.use(express.json());
app.use(cors());

//  application routes
app.use('/api/v1', router);

app.use(globalErrorHandler);

//  not found
app.use(notFound);

export default app;
