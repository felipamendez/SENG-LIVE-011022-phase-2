import './App.css';
import Header from './components/Header';
import ProjectForm from './components/ProjectForm';
import ProjectList from './components/ProjectList';

// TODO: We'll be fetching projects later on
import projects from './data/projects';


function App() {
  return (
    <div className="App">
      <Header />
      <ProjectForm />
      <ProjectList projects={projects} />
    </div>
  );
}

export default App;
