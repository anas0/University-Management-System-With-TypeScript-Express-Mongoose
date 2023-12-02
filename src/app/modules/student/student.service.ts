import { IStudent } from './student.interface';
import Student from './student.model';

const createStudentIntoDB = async (studentData: IStudent) => {
  // const student = new Student(studentData);
  // const result = student.save();

  if (await Student.isStudentExists(studentData.id)) {
    throw new Error('Student Already Exits');
  }

  const result = await Student.create(studentData);

  return result;
};

const getAllStudentsFromDB = async () => {
  const result = await Student.find();
  return result;
};

const getSingleStudentsFromDB = async (id: string) => {
  const result = await Student.findOne({ id: id });
  return result;
};

const deleteStudentsFromDB = async (id: string) => {
  const result = await Student.updateOne({ id }, { isDeleted: true });
  return result;
};

export const StudentServices = {
  createStudentIntoDB,
  getAllStudentsFromDB,
  getSingleStudentsFromDB,
  deleteStudentsFromDB,
};
