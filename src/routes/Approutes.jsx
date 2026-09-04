import { Routes, Route } from "react-router-dom";

import Home from "../pages/home";
import About from "../pages/about";
import Upload from "../pages/upload";
import Dashboard from "../pages/dashboard";
import Login from "../pages/login";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/upload" element={<Upload />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}
