import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import connectDB from './DB/Database.js';

dotenv.config();
connectDB();

const app = express();
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}`);
});
