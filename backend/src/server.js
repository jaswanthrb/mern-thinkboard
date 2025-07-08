import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import notesRoutes from './routes/notesRoutes.js';
import { connectDB } from './config/db.js';
import rateLimiter from './middleware/rateLimiter.js';


dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;


app.use(cors({
  // origin: ['http://localhost:5173']
  origin: '*' // Allow all origins for simplicity; adjust as needed for security
})); // Enable CORS for all routes

app.use(express.json()); // Middleware to parse JSON request bodies


app.use(rateLimiter); // Apply rate limiting middleware



app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next(); // pass to next middleware
});


 

app.use("/api/notes", notesRoutes);

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
