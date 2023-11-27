/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from 'express';
import { StudentServices } from './student.service';
import { studentValidationSchema } from './student.validation';
import { ZodError } from 'zod';

const createStudent = async (req: Request, res: Response) => {
  try {
    const student = req.body;

    //  data validation using zod
    const zodParsedData = studentValidationSchema.parse(student);
    console.log({ zodParsedData });

    const result = await StudentServices.createStudentIntoDB(zodParsedData);

    res.status(200).json({
      status: 'success',
      message: 'Student created successfully',
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

const getAllStudents = async (req: Request, res: Response) => {
  try {
    const result = await StudentServices.getAllStudentsFromDB();

    res.status(200).json({
      status: 'success',
      message: 'Students Retrieved successfully',
      data: result,
    });
  } catch (err: any) {
    console.log(err);
    res.status(500).json({
      status: 'fail',
      message: err.message || 'Something went wrong',
    });
  }
};

const getSingleStudents = async (req: Request, res: Response) => {
  try {
    const studentId = req.params.id;
    const result = await StudentServices.getSingleStudentsFromDB(studentId);

    res.status(200).json({
      status: 'success',
      message: 'Students Retrieved successfully',
      data: result,
    });
  } catch (err: any) {
    console.log(err);
    res.status(500).json({
      status: 'fail',
      message: err.message || 'Something went wrong',
    });
  }
};

export const StudentController = {
  createStudent,
  getAllStudents,
  getSingleStudents,
};
