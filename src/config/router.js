import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../screens/Home";
import Login from "../screens/Login";
import Signup from "../screens/Signup";

const Approuter = () => {
    
    return (
    
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  </Router>
)
};
export default Approuter;
