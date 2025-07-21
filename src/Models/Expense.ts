import mongoose, { SchemaType, SchemaTypes } from 'mongoose';

const expenseScheme = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: String,
  category: String,
  amount: {
    type: Number,
    required: true
  },
  created_at: {
    type: Date,
    default: Date.now()
  },
  expense_date: String,
  currency: {
    type: String,
    enum: ['EUR', 'INR'],
    default: 'EUR'
  },
  userId: {
    type: SchemaTypes.ObjectId,
    ref: 'user',
    require: true
  },
  paymentMethod: {
    type: String,
    enum: ['cash', 'card', 'net banking', 'upi'],
    default: 'cash'
  },
  receiptUrl: String,
  isRecurring: {
    type: Boolean,
    default: false
  },
  recurrenceType: {
    type: String,
    enum: ['monthly', 'weekly', 'yearly', 'daily', 'once'],
    default: 'once',
    validate: {
      validator: function (this: any, value: String) {
        if (this.isRecurring && !value) return false;
        return true;
      },
      message: 'recurrenceType must be specified when recurring is true.'
    }
  }
});

export const expense = mongoose.model('expense', expenseScheme);