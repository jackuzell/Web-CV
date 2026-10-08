import React from 'react';
import { cvData } from './cvData';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Achievements from './components/Achievments'; 
import Footer from './components/Footer';
import './App.css';


function App() {
  return (
    <div className="portfolio-app">
      <Navbar />
      <div className="portfolio-container">
        <main>
          <Hero personalInfo={cvData.personalInfo}/>
          <About personalInfo={cvData.personalInfo}/>
          <Education educationList={cvData.education}/>
          <Experience experienceList={cvData.experience}/>
          <Projects projectList={cvData.projects}/>
          <Skills skillsData={cvData.skills}/>
          <Achievements achievementsList={cvData.achievements}/>
        </main>
      </div>
      <Footer personalInfo={cvData.personalInfo}/>
    </div>
  );
}
export default App;