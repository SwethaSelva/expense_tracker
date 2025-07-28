import express from "express";
import Joi from 'joi';

import { userController } from '../Controllers/User';
import { validateBody } from '../../utils/Helper';
import { EMAIL_REGEX } from '../../utils/Constants';

// Vaidator Schemas
const loginSchema = Joi.object({
  email: Joi.string().required().pattern(EMAIL_REGEX).messages({
    'string.pattern.base': 'Invalid email. Please enter proper email',
    'any.required': 'Email is required'
  }),
  password: Joi.string().required().min(8).messages({
    'string:password': 'Please enter at least {#limit} character long password',
    'any.required': 'Password cannot be empty!'
  }),
});

const registerSchema = loginSchema.keys({
  name: Joi.string().required()
});

// Routers
const router = express.Router();
router.post('/v1/register', validateBody(registerSchema), userController.register);
router.post('/v1/login', validateBody(loginSchema), userController.login);

export const userRouter = router;