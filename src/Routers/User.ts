import express from "express";
import Joi from 'joi';

import { userController } from '../Controllers/User';
import { validateBody } from '../../utils/Helper';

const router = express.Router();

const loginSchema = Joi.object({
  email: Joi.string().required().pattern(/^[^\s@]+@[^\s@]+\.[^\s@]+$/),
  password: Joi.string().required().min(8),
});

const registerSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required().pattern(/^[^\s@]+@[^\s@]+\.[^\s@]+$/),
  password: Joi.string().required().min(8),
});

router.post('/v1/register', validateBody(registerSchema), userController.register);
router.post('/v1/login', validateBody(loginSchema), userController.login);

export const userRouter = router;