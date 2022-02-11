import { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import ProjectForm from './components/ProjectForm';
import ProjectList from './components/ProjectList';
import ProjectEditForm from './components/ProjectEditForm';
import ProjectDetail from './components/ProjectDetail';
import { AiOutlineReload } from 'react-icons/ai'


function App() {
  const [projects, setProjects] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(true)
  const [projectToEdit, setProjectToEdit] = useState(null);

  function completeEditing() {
    setProjectToEdit(null);
  }

  useEffect(fetchProjects, [])

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

  // add function to handle projects updating
  function handleUpdateProject(updatedProject) {
    const updatedProjects = projects.map(originalProject => {
      if (originalProject.id === updatedProject.id) {
        return updatedProject;
      } else {
        return originalProject;
      }
    })
    setProjects(updatedProjects);
  }

  function handleDeleteProject(deletedProjectId) {
    const updatedProjects = projects.filter(project => project.id !== deletedProjectId);
    setProjects(updatedProjects);
  }

  function enterProjectEditModeFor(project) {
    setProjectToEdit(project);
  }

  const darkModeClass = isDarkMode ? 'App' : 'App light'

  function renderForm() {
    if (projectToEdit) {
      return (
        <ProjectEditForm
          projectToEdit={projectToEdit}
          completeEditing={completeEditing}
          handleUpdateProject={handleUpdateProject}
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
      <Home />
      {renderForm()}
      <button onClick={() => fetchProjects()}><AiOutlineReload /></button>
      <ProjectList 
        projects={projects} 
        enterProjectEditModeFor={enterProjectEditModeFor}
        handleDeleteProject={handleDeleteProject}
      />
      <ProjectDetail />
    </div>
  );
}

export default App;
