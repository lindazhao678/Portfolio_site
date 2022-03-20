import './App.css';
import React , {useRef}from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Footer from "./components/Footer";
import Header from "./components/Header";

import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Project from './pages/Project';

import PageNotFound from "./pages/PageNotFound";


function App() {
  const projectsRef = useRef(null);
  return (
    <Router>
      <Header projectsRef={projectsRef}/>
      <Routes>
        <Route exact path="/" element={<Home projectsRef={projectsRef}/>}></Route>
        <Route path="/projects" element={<Projects />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/project" element={<Project />}></Route>
        <Route path="/pagenotfound" element={<PageNotFound />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
