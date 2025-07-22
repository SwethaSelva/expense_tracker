import mongoose, { SchemaTypes } from "mongoose";

const recurringTransSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  user_id: {
    type: SchemaTypes.ObjectId,
    ref: 'user'
  },
  amount: Number,
  frequency: {
    type: String,
    enum: ['daily', 'weekly', 'monthly', 'yearly']
  },
  lastRun: {
    type: Date,
  },
  nextDueDate: {
    type: Date,
  },
  linkedExpenseIds: [{
    type: SchemaTypes.ObjectId,
    ref: 'expense'
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

export const recurring_transaction = mongoose.model('recurring_transaction', recurringTransSchema);