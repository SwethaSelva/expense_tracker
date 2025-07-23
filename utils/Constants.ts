import Joi from "joi";

const PORT = 3000;
const SALT_VALUE = 10;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const OBJECT_ID = Joi.string().regex(/^[0-9a-fA-F]{24}$/);

export {
  PORT,
  SALT_VALUE,
  EMAIL_REGEX,
  OBJECT_ID,
}