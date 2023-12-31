import express from 'express';
import { UserController } from './user.controller';
import { studentValidations } from '../student/student.validation';
import validateRequest from '../../middlewares/validateRequest';

const router = express.Router();

router.post(
  '/create-student',
  validateRequest(studentValidations.studentValidationSchema),
  UserController.createStudent,
);

export const UserRoute = router;
