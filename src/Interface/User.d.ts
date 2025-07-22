import { SchemaTypes } from 'mongoose';
export interface UserSchema {
  _id?: SchemaTypes.ObjectId,
  name: string,
  email: string,
  password_hash: string,
  access_token?: string | null,
  expense_ids?: Array<SchemaTypes.ObjectId | string>,
  receipt_ids?: Array<SchemaTypes.ObjectId | string>,
  created_at?: Date,
  updated_at?: Date,
}