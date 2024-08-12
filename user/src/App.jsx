import "bootstrap/dist/css/bootstrap.css";
import HomepageRoute from "./components/Routes/HomepageRoute";
import LoginRoute from "./components/Routes/LoginRoute";
import RegistrationRoute from "./components/Routes/RegistrationRoute";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomepageRoute />} />
          <Route path="/login" element={<LoginRoute />} />
          <Route path="/register" element={<RegistrationRoute />} />
        </Routes>
      </Router>
    </>
  );
};
export default App;
