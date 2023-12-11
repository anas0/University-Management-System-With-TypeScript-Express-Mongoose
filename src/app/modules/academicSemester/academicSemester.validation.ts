import { z } from 'zod';

const MonthSchema = z.enum([
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
]);

const AcademicSemesterValidationSchema = z.object({
  body: z.object({
    name: z.enum(['Autumn', 'Summer', 'Fall']),
    code: z.enum(['01', '02', '03']),
    year: z.date(),
    startMonth: MonthSchema,
    endMonth: MonthSchema,
  }),
});

export const AcademicSemesterValidation = {
  AcademicSemesterValidationSchema,
};
