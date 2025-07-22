import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import { SALT_VALUE } from '../utils/Constants';

const hashedPassword = async function (password: string) {
  let passwordHash = await bcrypt.hash(password, SALT_VALUE);
  return passwordHash;
}

const comparePassword = async function (password: string, hash: string) {
  return await bcrypt.compare(password, hash);
}

const generateToken = function (tokenData: Object) {
  jwt.sign(
    tokenData,
    process.env.JWT_SECRET!
  );
}

export default {
  hashedPassword,
  comparePassword,
  generateToken
}