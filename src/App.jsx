import React from 'react';
import { cvData } from './cvData';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Skills from './components/Skills';
import './App.css';

function App() {
  return (
    <div className = "portfolio-container">
      <header>
        <h1>{cvData.personalInfo.name}</h1>
        <h2>{cvData.personalInfo.tagline}</h2>
      </header>
      <main>
        <Projects projectList={cvData.projects} />
        <Experience experienceList={cvData.experience} />
        <Skills skillsList = {cvData.skills} />
      </main>
      </div>
  );
}

export default App;
