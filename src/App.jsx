import { useEffect, useState } from 'react';
import { cvData } from './cvData';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Achievements from './components/Achievements';
import Footer from './components/Footer';

function App() {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('theme');
      if (stored) return stored;
    }
    return 'light'; // Default to light mode
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div className="flex min-h-svh flex-col">
      <Navbar
        name={cvData.personalInfo.name}
        theme={theme}
        toggleTheme={toggleTheme}
      />
      <main className="mx-auto w-full max-w-5xl flex-1 divide-y divide-zinc-200 px-6 dark:divide-zinc-800/80">
        <Hero personalInfo={cvData.personalInfo} />
        <About personalInfo={cvData.personalInfo} stats={cvData.stats} />
        <Education educationList={cvData.education} />
        <Experience experienceList={cvData.experience} />
        <Projects projectList={cvData.projects} />
        <Skills skillsData={cvData.skills} />
        <Achievements achievementsList={cvData.achievements} />
      </main>
      <Footer personalInfo={cvData.personalInfo} />
    </div>
  );
}

export default App;