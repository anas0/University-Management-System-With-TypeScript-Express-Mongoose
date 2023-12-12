import { academicSemesterNameCodeMapper } from './academicSemester.constant';
import { IAcademicSemester } from './academicSemester.interface';
import AcademicSemester from './academicSemester.model';

const createAcademicSemesterIntoDB = async (data: IAcademicSemester) => {
  //  Semester name -> code
  if (academicSemesterNameCodeMapper[data.name] !== data.code) {
    throw new Error('Invalid Semester Code !');
  }

  const result = await AcademicSemester.create(data);

  return result;
};

export const AcademicSemesterServices = {
  createAcademicSemesterIntoDB,
};
