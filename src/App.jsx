import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";

import Projects from "./pages/Projects";

import ProjectDetail from "./pages/ProjectDetail";

import About from "./pages/About";

import Contact from "./pages/Contact";

import "./App.css";
 
export default function App() {

  return (
<div className="app">
<Navbar />
<div className="page">
<Routes>
<Route path="/" element={<Home />} />
<Route path="/projecten" element={<Projects />} />
<Route path="/projecten/:id" element={<ProjectDetail />} />
<Route path="/over-mij" element={<About />} />
<Route path="/contact" element={<Contact />} />
</Routes>
</div>
</div>

  );

}

 