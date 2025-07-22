import mongoose, { SchemaTypes } from "mongoose";

const itemSchema = new mongoose.Schema({
  name: {
    type: String,  // e.g., 'Tomatoes'
    require: true
  },
  expense_id: {
    type: SchemaTypes.ObjectId,
    ref: 'expense'
  },
  total_price: {
    type: Number,
    require: true
  },
  quantity: {
    type: String,  // e.g., '1'
  },
  uom: {
    type: String, // Kg or Strück or litre
  },
  unit_price: {
    type: Number,
  },
  category_id: {
    type: SchemaTypes.ObjectId,
    ref: 'category'
  },
  merchant_id: {
    type: SchemaTypes.ObjectId,
    ref: 'merchant'
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

export const item = mongoose.model("item", itemSchema);