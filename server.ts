import express from "express";
import cookieParser from "cookie-parser";
import mongoose from "mongoose";
import cors from 'cors';

// constants
const MONGO_URI = "mongodb+srv://swethalakshmideepak:S%40Weth29GR-EaT@expense-tracker.ah3wcum.mongodb.net/";
const PORT = 3000;

// Server Setup
interface ServerConnectErr extends Error {
  code?: string | number;
  status?: number;
}

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
// app.use("/api", router);

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