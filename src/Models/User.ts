import mongoose, { SchemaTypes } from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  },
  password_hash: {
    type: String,
    required: true
  },
  access_token: {
    type: String,
  },
  expense_ids: [{
    type: SchemaTypes.ObjectId,
    ref: 'expense'
  }],
  receipt_ids: [{
    type: SchemaTypes.ObjectId,
    ref: 'receipt'
  }],
  created_at: {
    type: Date,
    default: Date.now()
  },
  updated_at: {
    type: Date,
    default: Date.now()
  }
});

export const User = mongoose.model("User", userSchema);