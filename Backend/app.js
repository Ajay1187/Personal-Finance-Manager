import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import connectDB from './DB/Database.js';
import cors from 'cors';

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

// Initialize the app
const app = express();

// Middleware
app.use(express.json()); // To parse JSON requests
app.use(cors()); // Enable CORS for frontend-backend communication

// Basic route to test the API
app.get('/', (req, res) => {
  res.send('API is running...');
});

// Set the port from .env or default to 5000
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}`);
});
