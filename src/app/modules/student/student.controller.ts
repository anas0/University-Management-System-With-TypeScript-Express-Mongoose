/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from 'express';
import { StudentServices } from './student.service';

const getAllStudents = async (req: Request, res: Response) => {
  try {
    const result = await StudentServices.getAllStudentsFromDB();

    res.status(200).json({
      status: 'success',
      message: 'Students Retrieved Successfully',
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
      message: 'Students Retrieved Successfully',
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

const deleteStudents = async (req: Request, res: Response) => {
  try {
    const studentId = req.params.id;
    const result = await StudentServices.deleteStudentsFromDB(studentId);

    res.status(200).json({
      status: 'success',
      message: 'Students Deleted Successfully',
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
  getAllStudents,
  getSingleStudents,
  deleteStudents,
};
