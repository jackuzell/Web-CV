import React from 'react';
import { cvData } from './cvData';
import Projects from './components/Projects';
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
      </main>
      </div>
  );
}

export default App;
