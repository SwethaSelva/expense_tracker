import express from "express";
import cookieParser from "cookie-parser";
import mongoose from "mongoose";
import cors from 'cors';

const MONGO_URI = "mongodb+srv://swethalakshmideepak:S%40Weth29GR-EaT@expense-tracker.ah3wcum.mongodb.net/";
const PORT = 3000;
const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors());

// app.use("/api", router);
interface ServerConnectErr {
  code: String
}

function appStart (curPort = PORT) {
  app.listen(curPort, () => {
    console.log(`Server is running on http://localhost:${curPort}`);
  }).on('error', (err: ServerConnectErr) => {

    if (err.code === 'EADDRINUSE') {
      console.log(`----- Port ${curPort} is busy, trying with port ${curPort + 1} -----`);
      appStart(curPort + 1)
    }
    console.log({ err }, err.code);
  });
}

appStart(PORT);
mongoose.Promise = global.Promise;
mongoose.connect(MONGO_URI).then(() => {
  console.log('Connected to MongoDB');
}).catch((error) => {
  console.error('MongoDB connection error:', error);
});

mongoose.connection.on('error', (err) => {
  console.log({ err });
})