import { Request, Response } from 'express';
import authenticate from '../../utils/Authenticate';
import userServices from '../Services/User';
import { SuccessReponse, AppError } from '../../utils/Response';
import { UserSchema } from '../Interface/User';

const login = async function (req: Request, res: Response) {
  let { email, password } = req.body;
  // get the user by email
  let user = await userServices.getOne(email);
  // Check the user is there or not - 404
  if (!user) {
    return new Error('User is not found. Please enter the correct email');
  } 
  
  // match enter_password with hashed password
  let isValidPassword = await authenticate.comparePassword(password, user.password_hash);

  // not - throw error
  if (!isValidPassword) {
    throw new AppError({
      name: 'client side Error',
      statusCode: 403,
      message: 'Password Incorrect. Please check your password.'
    });
  }

  // match - create access and send (success, token)
  let accessToken = await insertToken(user);

  res.json(new SuccessReponse({
    data: { accessToken },
    statusCode: 200,
    message: 'Login Successful!'
  }));
};

const insertToken = async function (user: UserSchema) {
  let accessToken = authenticate.generateToken({ _id: user._id });

  await userServices.updateOne({ _id: user._id }, { access_token: accessToken });

  return accessToken;
}

const register = async function (req: Request, res: Response) {
  let { name, email, password } = req.body;
  try {
    let passwordHash = await authenticate.hashedPassword(password);

    let user = await userServices.addOne({
      name, email, password_hash: passwordHash,
    });

    let accessToken = await insertToken(user);

    res.json(new SuccessReponse({
      data: { accessToken },
      statusCode: 200,
      message: 'Registation Successful!'
    }));

  } catch (err: any) {
    console.log({ err })
    if (err.code === 11000 && err.keyPattern?.email) {
      throw new AppError({
        name: 'Conflict',
        statusCode: 409,
        message: 'Email already exists'
      });
    }

    // fallback error
    throw new AppError({
      name: 'Unknown error',
      statusCode: 500,
      message: 'Something went wrong'
    });
  }
};

export const userController = {
  login,
  register
};