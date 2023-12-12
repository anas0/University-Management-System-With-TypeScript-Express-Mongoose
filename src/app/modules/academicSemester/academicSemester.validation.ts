import { z } from 'zod';
import { MonthSchema } from './academicSemester.constant';

const AcademicSemesterValidationSchema = z.object({
  body: z.object({
    name: z.enum(['Autumn', 'Summer', 'Fall']),
    code: z.enum(['01', '02', '03']),
    year: z.string(),
    startMonth: z.enum([...MonthSchema] as [string, ...string[]]),
    endMonth: z.enum([...MonthSchema] as [string, ...string[]]),
  }),
});

export const AcademicSemesterValidation = {
  AcademicSemesterValidationSchema,
};
