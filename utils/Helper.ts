import { Request, Response, NextFunction} from "express";
import { ObjectSchema } from 'joi';

export function validateBody(schema: ObjectSchema) {
  return (req: Request, res: Response, next: NextFunction) => {
    const { error } = schema.validate(req.body);
    if (error) return res.status(400).json({ message: error.message });
    next();
  };
}