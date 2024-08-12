import Navbar from "../Navbar/Navbar";
import HeroSection from '../Homepage/HeroSection';
import AboutBloodDonation from '../Homepage/AboutBloodDonation';
import AboutUs from "../Homepage/AboutUs";
import Footer from "../Homepage/Footer";
function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="totalContent">
      <HeroSection />
      <AboutBloodDonation />
      <AboutUs />
      <Footer />
      </div>
    </div>
  );
}
export default App;
