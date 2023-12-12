import { IAcademicSemester } from '../academicSemester/academicSemester.interface';
import User from './user.model';

const findLastStudentId = async () => {
  const lastStudent = await User.findOne(
    {
      role: 'student',
    },
    {
      id: 1,
      _id: 0,
    },
  )
    .sort({ createdAt: -1 })
    .lean();

  return lastStudent?.id ? lastStudent.id.substring(6) : undefined;
};

//  year - semester code - 4 digit number
export const generateStudentId = async (payLoad: IAcademicSemester) => {
  const currentId = (await findLastStudentId()) || '0';
  const incrementId = (Number(currentId) + 1).toString().padStart(4, '0');

  const newId = `${payLoad.year}${payLoad.code}${incrementId}`;

  return newId;
};
