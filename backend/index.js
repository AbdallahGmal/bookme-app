// backend/index.js
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { PrismaClient } from '@prisma/client';

// Import routes
import authRoutes from './routes/auth.js';
import propertyRoutes from './routes/properties.js';
import bookingRoutes from './routes/bookings.js';

// Load .env variables
dotenv.config();

// Initialize Prisma
export const prisma = new PrismaClient();

const app = express();
const port = process.env.PORT || 5000;

// --- Middleware ---
// Enable CORS for your frontend (http://localhost:5173)
app.use(cors({
  origin: 'http://localhost:5173' 
}));
// Parse JSON bodies
app.use(express.json());

// --- API Routes ---
app.use('/api/auth', authRoutes);
app.use('/api/properties', propertyRoutes);
app.use('/api/bookings', bookingRoutes);

// Simple test route
app.get('/', (req, res) => {
  res.send('BookMe API is running!');
});

// --- Start Server ---
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});