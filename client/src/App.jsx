import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import GetStarted from "./pages/GetStarted";
import Dashboard from "./pages/Dashboard";
import Generate from "./pages/Generate";
import "./styles.css";

export default function App() {
  return (
    <Router>
      <nav className="navbar">
        <Link to="/">Home</Link>
        {/* <Link to="/signup">Sign Up</Link> */}
        <Link to="/generate">Generate</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/get-started">Get Started</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/signup" element={<Signup />} /> */}
        <Route path="/get-started" element={<GetStarted />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/generate" element={<Generate />} />
      </Routes>
    </Router>
  );
}
