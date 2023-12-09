import { z } from 'zod';

const studentValidationSchema = z.object({
  password: z
    .string({
      invalid_type_error: 'Password must be string',
    })
    .max(20, { message: 'Password can not be more then 20 character' })
    .optional(),
});

export const UserValidation = {
  studentValidationSchema,
};
