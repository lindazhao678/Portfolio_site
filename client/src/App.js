import './App.css';
import React , {useRef}from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Footer from "./components/Footer";
import Header from "./components/Header";

import Home from "./pages/Home";
import ProjectDetail from './components/ProjectDetail';

import PageNotFound from "./pages/PageNotFound";


function App() {
  const projectsRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);
  return (
    <Router>
      <Header projectsRef={projectsRef} aboutRef={aboutRef} contactRef={contactRef} />
      <Routes>
        <Route exact path="/" element={<Home projectsRef={projectsRef} aboutRef={aboutRef} contactRef={contactRef}/>}></Route>
        <Route path="/projectdetail" element={<ProjectDetail />}></Route>
        <Route path="/pagenotfound" element={<PageNotFound />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
