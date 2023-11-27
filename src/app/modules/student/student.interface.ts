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
  name: IUserName;
  gender: 'male' | 'female';
  dateOfBirth: string;
  email: string;
  contactNo: string;
  emergencyContactNo: string;
  bloodGroup?: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';
  presentAddress: string;
  permanentAddress: string;
  guardian: IGuardian;
  localGuardian: ILocalGuardian;
  profileImg?: string;
  isActive: 'active' | 'inActive';
}

export { IStudent, IUserName, IGuardian, ILocalGuardian };
