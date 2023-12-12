import { Model, Types } from 'mongoose';

interface IUserName {
  firstName: string;
  middleName: string;
  lastName: string;
}

interface IGuardian {
  fatherName: string;
  fatherOccupation: string;
  fatherContactNo: string;
  motherName: string;
  motherOccupation: string;
  motherContactNo: string;
}

interface ILocalGuardian {
  name: string;
  occupation: string;
  contactNo: string;
  address: string;
}

interface IStudent {
  id: string;
  user: Types.ObjectId;
  password: string;
  name: IUserName;
  gender: 'male' | 'female';
  dateOfBirth: Date;
  email: string;
  contactNo: string;
  emergencyContactNo: string;
  bloodGroup?: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';
  presentAddress: string;
  permanentAddress: string;
  guardian: IGuardian;
  localGuardian: ILocalGuardian;
  profileImg?: string;
  admissionSemester: Types.ObjectId;
  isDeleted: boolean;
}

interface Student extends Model<IStudent> {
  // eslint-disable-next-line no-unused-vars
  isStudentExists(id: string): Promise<IStudent | null>;
}

export { IStudent, IUserName, IGuardian, ILocalGuardian, Student };
