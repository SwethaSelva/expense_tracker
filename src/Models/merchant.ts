import mongoose, { SchemaTypes } from "mongoose";

const merchantSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true
  },
  address: {
    type: String
  },
  category: {
    type: String, // 'Grocery', 'Restaurant', 'E-commerce'
  },
  // logourl      
  notes: String,
  created_by: {
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

export const merchant = mongoose.model('merchant', merchantSchema);