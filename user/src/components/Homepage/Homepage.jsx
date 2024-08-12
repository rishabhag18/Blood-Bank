import React from 'react'
import HeroSection from "./components/HeroSection"
import AboutBloodDonation from './components/AboutBloodDonation';
import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";
import "./Homepage.css"
export default function Homepage() {
  return (
    
      <div className="totalContent">
      <HeroSection />
      <AboutBloodDonation />
      <AboutUs />
      <Footer />
      </div>
  )
}
