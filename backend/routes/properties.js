// backend/routes/properties.js
import express from 'express';
import { prisma } from '../index.js';
import authMiddleware from '../middleware/auth.js'; // Import auth middleware

const router = express.Router();

// --- 1. Get all properties (Public) ---
// GET /api/properties
router.get('/', async (req, res) => {
  try {
    const properties = await prisma.property.findMany({
      include: { 
        location: true, // Include location data
      },
    });
    res.json(properties);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// --- 2. Get a single property by ID (Public) ---
// GET /api/properties/:id
router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const property = await prisma.property.findUnique({
      where: { id: parseInt(id) },
      include: {
        location: true,
        host: { // Get host info
          select: { full_name: true, id: true } 
        },
        reviews: { // Get reviews for this property
          include: { 
            user: { select: { full_name: true } } 
          } 
        },
      },
    });

    if (!property) {
      return res.status(404).json({ msg: 'Property not found' });
    }
    res.json(property);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// --- 3. Create a new property (Protected - Host only) ---
// POST /api/properties
router.post('/', authMiddleware, async (req, res) => {
  // Check if user is a host
  if (req.user.role !== 'HOST') {
    return res.status(403).json({ msg: 'Access denied. Hosts only.' });
  }

  const { title, description, price_per_night, location_id } = req.body;

  try {
    const newProperty = await prisma.property.create({
      data: {
        title,
        description,
        price_per_night: parseFloat(price_per_night),
        host_id: req.user.id, // The logged-in host
        location_id: parseInt(location_id),
      },
    });
    res.status(201).json(newProperty);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

export default router;