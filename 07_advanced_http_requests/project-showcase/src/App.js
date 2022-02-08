import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import ProjectForm from './components/ProjectForm';
import ProjectList from './components/ProjectList';
import ProjectEditForm from './components/ProjectEditForm';


function App() {
  const [projects, setProjects] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(true)
  const [projectToEdit, setProjectToEdit] = useState(null);

  function completeEditing() {
    setProjectToEdit(null);
  }

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

  function handleAddProject(project) {
    setProjects(projects => [...projects, project])
  }

  function enterEditModeFor(project) {
    setProjectToEdit(project);
  }

  const darkModeClass = isDarkMode ? 'App' : 'App light'

  function renderForm() {
    if (projectToEdit) {
      return (
        <ProjectEditForm
          projectToEdit={projectToEdit}
          completeEditing={completeEditing}
        />
      )
    } else {
      return (
        <ProjectForm
          handleAddProject={handleAddProject}
        />
      )
    }
  }

  return (
    <div className={darkModeClass}>
      <Header
        isDarkMode={isDarkMode}
        handleToggleDarkMode={toggleDarkMode}
      />
      {renderForm()}
      <button onClick={() => fetchProjects()}>Fetch Projects</button>
      <ProjectList 
        projects={projects} 
        enterEditModeFor={enterEditModeFor}
      />
    </div>
  );
}

export default App;
