
import React, { useState} from 'react';
function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h1 className="navbar-logo">Donor Connect</h1>
        <div className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          <li className="nav-item"><a href="#home" className="nav-links">Home</a></li>
          <li className="nav-item"><a href="#about-blood-donation" className="nav-links">Blood Donation</a></li>
          <li className="nav-item"><a href="#about-us" className="nav-links">About Us</a></li>
          <li className="nav-item"><a href="#contact" className="nav-links">Contact</a></li>
        </div>
        <div className="mobile-menu-icon" onClick={toggleMobileMenu}>
          <i className={isMobileMenuOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
