const express = require('express');
const router = express.Router();

// Route to handle registration form data
router.post('/register', (req, res) => {
  const formData = req.body;

  // Shaibal ka section (Database)

  res.status(201).json({
    message: 'User registered successfully',
    userData: formData,
  });
  console.log(formData)
});

module.exports = router;
