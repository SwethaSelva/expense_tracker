import express from "express";
import cookieParser from "cookie-parser";
import mongoose from "mongoose";
import cors from 'cors';

import { MONGO_URI, PORT } from './utils/Constants';
import { ServerConnectErr } from './src/Interface/Common';
import { userRouter } from './src/Routers';

require('dotenv').config();

// Server Setup
const app = express();
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
}).on('error', (err: ServerConnectErr) => {
    if (err.code === 'EADDRINUSE') {
      console.log(`----- Port ${PORT} is busy -----`);
    } else {
      console.log({ err }, err.code);
    }
});

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors());

// Routers
app.use("/api/user", userRouter);

// MongoDB Setup
mongoose.Promise = global.Promise;
mongoose.connect(MONGO_URI).then(() => {
  console.log('Connected to MongoDB');
}).catch((error) => {
  console.error('MongoDB connection error:', error);
});

mongoose.connection.on('error', (err) => {
  console.log({ err });
})