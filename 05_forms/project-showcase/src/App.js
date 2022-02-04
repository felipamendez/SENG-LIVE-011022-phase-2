import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import ProjectForm from './components/ProjectForm';
import ProjectList from './components/ProjectList';




function App() {
  const [projects, setProjects] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(true)

  function fetchProjects() {
    fetch("http://localhost:4000/projects")
      .then(r => r.json())
      .then(projects => {
        setProjects(projects);
      })
  }
  
  function toggleDarkMode() {
    setIsDarkMode(isDarkMode => !isDarkMode);
  }

  const darkModeClass = isDarkMode ? 'App' : 'App light'

  return (
    <div className={darkModeClass}>
      <Header
        isDarkMode={isDarkMode}
        handleToggleDarkMode={toggleDarkMode}
      />
      <ProjectForm />
      <button onClick={() => fetchProjects()}>Fetch Projects</button>
      <ProjectList projects={projects} />
    </div>
  );
}

export default App;
