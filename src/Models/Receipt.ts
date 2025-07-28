import mongoose, { SchemaTypes } from "mongoose";

const receiptSchema = new mongoose.Schema({
  file_url: {
    type: String,
    require: true
  },
  file_name: {
    type: String,
    require: true
  },
  merchant: {
    type: SchemaTypes.ObjectId,
    ref: 'merchant'
  },
  expense_id: {
    type: SchemaTypes.ObjectId,
    ref: 'expense'
  },
  uploaded_at: {
    type: Date,
    default: Date.now()
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

export const Receipt = mongoose.model('receipt', receiptSchema);
