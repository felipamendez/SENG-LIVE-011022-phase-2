import { useState, useEffect } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom'
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

  const darkModeClass = isDarkMode ? 'App' : 'App light'

  return (
    <div className={darkModeClass}>
      <Header
        isDarkMode={isDarkMode}
        handleToggleDarkMode={toggleDarkMode}
      />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route> 
        <Route path="/projects/new">
          <ProjectForm
            handleAddProject={handleAddProject}
          />
        </Route> 
        <Route path="/projects/:id/edit">
          <ProjectEditForm
            handleUpdateProject={handleUpdateProject}
          />
        </Route> 
        <Route exact path="/projects/:id">
          <ProjectDetail />
        </Route> 
        <Route path="/projects">
          <ProjectList 
            projects={projects} 
            handleDeleteProject={handleDeleteProject}
          />
        </Route> 
      </Switch>      
    </div>
  );
}

export default App;
