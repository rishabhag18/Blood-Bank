//require('dotenv').config();
import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import { fileURLToPath } from 'url';
import {dirname} from "path";
const app = express();
const PORT = 3000;

// dotenv.config();
// Middleware
const corsOptions = {
    origin: 'http://localhost:5173', 
    optionsSuccessStatus: 200,
  };
  
  app.use(cors(corsOptions));
  
app.use(bodyParser.json()); // Parse incoming request bodies as JSON
const _dirname = dirname(fileURLToPath(import.meta.url));

mongoose.connect("mongodb://localhost:27017/donorsDB");
// Import Routes
import registrationRoutes from './Routes/registration.js';

// Middleware to parse JSON
app.use(express.json());

// Route to send OTP

app.get("/",(req,res)=>{
  res.sendFile(_dirname+"/index.html")
})
// Use Routes
app.use('/api', registrationRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
