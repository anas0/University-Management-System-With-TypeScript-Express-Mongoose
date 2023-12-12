import { IAcademicSemester } from './academicSemester.interface';
import AcademicSemester from './academicSemester.model';

const createAcademicSemesterIntoDB = async (data: IAcademicSemester) => {
  console.log('Anas3');

  const result = await AcademicSemester.create(data);

  return result;
};

export const AcademicSemesterServices = {
  createAcademicSemesterIntoDB,
};
