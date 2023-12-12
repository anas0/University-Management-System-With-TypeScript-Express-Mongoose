/* eslint-disable @typescript-eslint/no-explicit-any */
import { RequestHandler } from 'express';
import sendResponse from '../../utils/sendResponse';
import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';

const createAcademicSemester: RequestHandler = catchAsync(async (req, res) => {
  //   const { password, student: studentData } = req.body;

  //   const result = await AcademicSemesterService.createAcademicSemesterIntoDB(
  //     password,
  //     studentData,
  //   );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Student created Successfully',
    data: result,
  });
});

export const AcademicSemesterController = {
  createAcademicSemester,
};
