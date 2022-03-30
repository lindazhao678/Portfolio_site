
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Footer from "./components/Footer";
import Header from "./components/Header";

import Home from "./pages/Home";

import ProjectDetail from './pages/ProjectDetail';
import PageNotFound from "./pages/PageNotFound";


function App() {
 
 
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>

        <Route exact path="/projects" element={<Home />}></Route>
        <Route exact path="/about" element={<Home />}></Route>
        <Route exact path="/contact" element={<Home />}></Route>

        <Route path="/projectdetail" element={<ProjectDetail />}></Route>
        <Route path="/pagenotfound" element={<PageNotFound />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
