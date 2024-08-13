//require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Middleware
const corsOptions = {
    origin: 'http://localhost:5173', // Replace with your frontend origin if necessary
    optionsSuccessStatus: 200,
  };
  
  app.use(cors(corsOptions));
  
app.use(bodyParser.json()); // Parse incoming request bodies as JSON

// Import Routes
const registrationRoutes = require('./Routes/registration');

// Use Routes
app.use('/api', registrationRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
