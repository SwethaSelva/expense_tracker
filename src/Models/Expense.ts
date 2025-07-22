import mongoose, { SchemaTypes } from 'mongoose';

const expenseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  user_id: {
    type: SchemaTypes.ObjectId,
    ref: 'user',
    require: true
  },
  description: String,
  merchant_id: {
    type: SchemaTypes.ObjectId,
    ref: 'merchant',
    require: true
  }, 
  item_ids: [{
    type: SchemaTypes.ObjectId,
    ref: 'item'
  }],
  category: {
    type: SchemaTypes.ObjectId,
    ref: 'category'
  },
  receipt_id: {
    type: SchemaTypes.ObjectId,
    ref: 'receipt'
  },
  amount: {
    type: Number,
    required: true
  },
  currency: {
    type: String,
    enum: ['EUR', 'INR'],
    default: 'EUR'
  },
  payment_method: {
    type: String,
    enum: ['cash', 'card', 'net banking', 'upi'],
    default: 'cash'
  },
  expense_date: {
    type: Date,
    require: true,
    default: Date.now()
  },
  is_recurring: {
    type: Boolean,
    default: false
  },
  recurrenceType: {
    type: String,
    enum: ['monthly', 'weekly', 'yearly', 'daily', 'once'],
    default: 'once',
    validate: {
      validator: function (this: any, value: String) {
        if (this.is_recurring && !value) return false;
        return true;
      },
      message: 'recurrenceType must be specified when recurring is true.'
    }
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

export const expense = mongoose.model('expense', expenseSchema);