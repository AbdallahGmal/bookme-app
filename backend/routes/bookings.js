// backend/routes/bookings.js
import express from 'express';
import { prisma } from '../index.js';
import authMiddleware from '../middleware/auth.js';

const router = express.Router();

// --- 1. Create a new booking (Protected - Logged-in users) ---
// POST /api/bookings
router.post('/', authMiddleware, async (req, res) => {
  const { property_id, check_in, check_out, total_price } = req.body;
  const user_id = req.user.id; // Get user from auth middleware

  try {
    // Basic validation
    if (!property_id || !check_in || !check_out || !total_price) {
      return res.status(400).json({ msg: 'Please provide all booking details' });
    }

    const newBooking = await prisma.booking.create({
      data: {
        property_id: parseInt(property_id),
        user_id: user_id,
        check_in: new Date(check_in),
        check_out: new Date(check_out),
        total_price: parseFloat(total_price),
        status: 'PENDING', // Default status
      },
    });

    res.status(201).json(newBooking);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// --- 2. Get bookings for the logged-in user (Protected) ---
// GET /api/bookings/mybookings
router.get('/mybookings', authMiddleware, async (req, res) => {
  try {
    const bookings = await prisma.booking.findMany({
      where: {
        user_id: req.user.id,
      },
      include: {
        property: { // Include details of the property they booked
          include: {
            location: true
          }
        },
      },
      orderBy: {
        check_in: 'desc', // Show newest bookings first
      },
    });

    res.json(bookings);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

export default router;