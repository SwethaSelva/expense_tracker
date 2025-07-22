import bcrypt from 'bcrypt';
import jwt, { JwtPayload } from 'jsonwebtoken';

import { SALT_VALUE } from '../utils/Constants';
import User from '../src/Services/User';

interface myJWTPayload extends JwtPayload{
  _id: string
}

const hashedPassword = async function (password: string) {
  let passwordHash = await bcrypt.hash(password, SALT_VALUE);
  return passwordHash;
}

const comparePassword = async function (password: string, hash: string) {
  return await bcrypt.compare(password, hash);
}

const generateToken = function (tokenData: Object) {
  return jwt.sign(
    tokenData,
    process.env.JWT_SECRET!
  );
}

const verifyToken = async function (token: string) {
  const response = { isValid: false };
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as myJWTPayload;
    console.log("Decoded JWT:", decoded);
    if (!decoded || !decoded._id) return response;

    const userData = await User.getOne({ _id: decoded._id }, { email: 1, name: 1, access_token: 1 }, { lean: true });

    if (!userData || !userData.access_token || userData.access_token !== token) return response;

    return { isValid: true, userData };
  } catch (err) {
    console.error("JWT verification failed:", err);
  }
}

export default {
  hashedPassword,
  comparePassword,
  generateToken,
  verifyToken
}