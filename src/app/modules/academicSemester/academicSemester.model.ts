import { Schema, model } from 'mongoose';
import { IAcademicSemester, IMonth } from './academicSemester.interface';

const monthSchema: IMonth[] = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const academicSemesterSchema = new Schema<IAcademicSemester>(
  {
    name: {
      type: String,
      enum: ['Autumn', 'Summer', 'Fall'],
      required: true,
    },
    code: {
      type: String,
      enum: ['01', '02', '03'],
      required: true,
    },
    year: {
      type: Date,
      required: true,
    },
    startMonth: {
      type: String,
      enum: monthSchema,
      required: true,
    },
    endMonth: {
      type: String,
      enum: monthSchema,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

const AcademicSemester = model<IAcademicSemester>(
  'AcademicSemester',
  academicSemesterSchema,
);

export default AcademicSemester;
