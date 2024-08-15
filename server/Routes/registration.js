import express from 'express';
import mongoose from 'mongoose';
const router = express.Router();

const donorSchema = new mongoose.Schema(
  {
    firstName: String,
    lastName: String,
    mobileNumber: String,
    email: String,
    gender: String,
    dob: String,
    pincode: String,
    state: String,
    district: String,
    area: String,
    weight: String,
    bloodGroup: String,
    healthSymptoms: {
      bloodPressure: Boolean,
      diabetes: Boolean,
    },
  }
)
const Donor = mongoose.model("Donor",donorSchema);
// Route to handle registration form data
router.post('/register', async(req, res) => {
  const formData = req.body;
  try{
    const donor=new Donor(formData);
    res.status(201).json({
      message: 'User registered successfully',
      userData: formData,
    });
    await donor.save();
    console.log(await Donor.find({firstName:"Rishabh"}));
  }catch{
    res.status(501).json({
      message: 'Error Insering the Data',
      userData: formData,
    });
    console.log(`Erorr ${formData}`)
  }
});

export default router;
