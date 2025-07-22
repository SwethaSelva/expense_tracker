import mongoose, { SchemaTypes } from "mongoose";

const budgetSchema = new mongoose.Schema({
  user_id: {
    type: SchemaTypes.ObjectId,
    ref: 'user',
    required: true
  },
  category_id: {
    type: SchemaTypes.ObjectId,
    ref: 'category'
  },
  limit_amount: {
    type: Number,
    required: true
  },
  start_date: {
    type: Date,
    required: true,
    default: Date.now()
  },
  end_date: {
    type: Date,
    required: true
  },
  is_recurring: Boolean,
  created_at: {
    type: Date,
    default: Date.now()
  },
  updated_at: {
    type: Date,
    default: Date.now()
  }
});

export const Budget = mongoose.model('budget', budgetSchema);
