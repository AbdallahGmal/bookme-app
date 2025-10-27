// backend/middleware/auth.js
import jwt from 'jsonwebtoken';

const authMiddleware = (req, res, next) => {
  // Get token from the header
  const authHeader = req.header('Authorization');
  
  if (!authHeader) {
    return res.status(401).json({ msg: 'No token, authorization denied' });
  }

  // Check if it's a Bearer token
  const token = authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ msg: 'Token format is invalid' });
  }

  try {
    // Verify token
    // !! IMPORTANT: Create a JWT_SECRET in your .env file !!
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Add user from payload to the request object
    req.user = decoded.user;
    next();
  } catch (err) {
    res.status(401).json({ msg: 'Token is not valid' });
  }
};

export default authMiddleware;