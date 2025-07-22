import express from "express";
import Joi from 'joi';

import { userController } from '../Controllers/User';
import { validateBody } from '../../utils/Helper';

const router = express.Router();

const loginSchema = Joi.object({
  email: Joi.string().required().regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/g),
  password: Joi.string().required().min(8),
});

const registerSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required().regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/g),
  password: Joi.string().required().min(8),
});

router.post('/v1/login', validateBody(loginSchema), userController.login);
router.post('/v1/register', validateBody(registerSchema), userController.register);

export const userRouter = router;