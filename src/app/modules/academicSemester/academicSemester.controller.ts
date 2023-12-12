import { RequestHandler } from 'express';
import sendResponse from '../../utils/sendResponse';
import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import { AcademicSemesterServices } from './academicSemester.service';

const createAcademicSemester: RequestHandler = catchAsync(async (req, res) => {
  console.log('Anas');
  const data = req.body;

  const result =
    await AcademicSemesterServices.createAcademicSemesterIntoDB(data);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Academic semester created Successfully',
    data: result,
  });
});

export const AcademicSemesterController = {
  createAcademicSemester,
};
