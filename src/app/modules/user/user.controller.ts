/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from 'express';
import { UserValidation } from './user.validation';
import { ZodError } from 'zod';
import { UserServices } from './user.service';

const createStudent = async (req: Request, res: Response) => {
  try {
    const { password, studentData } = req.body;

    // const zodParsedData = UserValidation.studentValidationSchema.parse(studentData);

    const result = await UserServices.createStudentIntoDB(
      password,
      studentData,
    );

    res.status(200).json({
      status: 'success',
      message: 'User created Successfully',
      data: result,
    });
  } catch (err: any) {
    if (err instanceof ZodError) console.log(err);
    res.status(500).json({
      status: 'fail',
      message: err.message || 'Something went wrong',
    });
  }
};

export const UserController = {
  createStudent,
};
