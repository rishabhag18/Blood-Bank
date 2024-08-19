import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import { fileURLToPath } from 'url';
import {dirname} from "path";
import registrationRoutes from './Routes/registration.js';

const app = express();
const PORT = 3000;
const _dirname = dirname(fileURLToPath(import.meta.url));
const corsOptions = {
    origin: 'http://localhost:5173', 
    optionsSuccessStatus: 200,
  };
  
app.use(cors(corsOptions));
// Parse incoming request bodies as JSON
app.use(bodyParser.json()); 
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/donorsDB");

app.get("/",(req,res)=>{
  res.sendFile(_dirname+"/index.html");
})

// Use Routes
app.use('/api', registrationRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
