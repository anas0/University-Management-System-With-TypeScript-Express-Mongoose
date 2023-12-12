import { Schema, model } from 'mongoose';
import { IAcademicSemester } from './academicSemester.interface';
import { MonthSchema } from './academicSemester.constant';

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
      type: String,
      required: true,
    },
    startMonth: {
      type: String,
      enum: MonthSchema,
      required: true,
    },
    endMonth: {
      type: String,
      enum: MonthSchema,
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
