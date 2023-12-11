import { NextFunction, Request, Response } from 'express';
import { AnyZodObject } from 'zod';

const validateRequest = (schema: AnyZodObject) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      //  validation
      const zodParsedData = await schema.parseAsync({
        body: req.body,
      });

      next(zodParsedData);
    } catch (err) {
      next(err);
    }
  };
};

export default validateRequest;
