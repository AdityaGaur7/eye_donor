const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    if (token) {
      const decoded = jwt.verify(token, process.env.JWT_KEY);
      req.body._id = decoded.id; // Attach decoded user ID to req.body._id
      next(); // Proceed to the next middleware
    } else {
      throw new Error('Token not found');
    }
  } catch (error) {
    console.error(error);
    res.status(401).json({ message: 'Authentication failed' });
  }
};

module.exports = authMiddleware;
