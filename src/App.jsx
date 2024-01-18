import "bootstrap/dist/css/bootstrap.min.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Profile from "./Pages/Profile/Profile";
import Home from "./Pages/Home/Home";
import Onboarding from "./Pages/Onboarding/Onboarding";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Onboarding />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
