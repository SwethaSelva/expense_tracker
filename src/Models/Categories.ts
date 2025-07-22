import mongoose, { SchemaTypes } from "mongoose";

const categorySchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: String,
  sub_categories: [{
    type: String
  }],
  type: {
    type: String,
    enum: ['income', 'expense'],
    default: 'expense'
  },
  user_id: {
    type: SchemaTypes.ObjectId,
    ref: 'user'
  },
  created_at: {
    type: Date,
    default: Date.now()
  },
  updated_at: {
    type: Date,
    default: Date.now()
  }
});

export const Category = mongoose.model('category', categorySchema);
