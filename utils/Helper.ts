import { Request, Response, NextFunction} from "express";
import { ObjectSchema } from 'joi';

export function validateBody(schema: ObjectSchema) {
  return (req: Request, res: Response, next: NextFunction) => {
    const { error } = schema.validate(req.body);
    if (error) return res.status(400).json({ message: error.message });
    next();
  };
}

// Middleware to check content type
export const checkJsonContentType = (req: Request, res: Response, next: NextFunction) => {
  const contentType = req.headers['content-type'];
  if (req.method !== 'GET' && contentType !== 'application/json') {
    return res.status(415).json({ message: 'Unsupported Media Type. Use application/json.' });
  }
  next();
};