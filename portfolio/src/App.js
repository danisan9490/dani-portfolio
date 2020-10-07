import React, { useState, useEffect } from 'react';
import './App.css';
import Home from './components/Home/Home';
import Projects from './components/Projects/Projects';
import Navbar from './components/Navbar/Navbar';
import { projectsDb } from './components/DB/projectsDb';

function App() {

  const [projects, setProjects] = useState([])

  useEffect(() => {
    setProjects([projectsDb])
  }, [])

  return (
    <div className="App">
      <Navbar />
      <Home />
      <Projects
        projects={projects}
      />


    </div>
  );
}

export default App;
