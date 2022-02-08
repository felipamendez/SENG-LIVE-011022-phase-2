import React, { useState } from "react";
import ProjectListItem from "./ProjectListItem";

function ProjectList({projects, enterEditModeFor}) {
  const [searchText, setSearchText] = useState("")
  

  const searchResults = projects.filter((project) => {
    return (
      project.name.toLowerCase().includes(searchText.toLowerCase()) ||
      project.about.toLowerCase().includes(searchText.toLowerCase())
    );
  })
  console.log(searchResults);


  const projectItems = searchResults.map((project) => {
  return (
    <ProjectListItem 
      key={project.id} 
      project={project} 
      enterEditModeFor={enterEditModeFor}
    />
  );
});

  const handleSearch = ({target}) => {
    setSearchText(target.value)
  }

  return (
    <section>
      <h2>Projects</h2>

      <div className="filter">
        <button>All</button>
        <button>Phase 5</button>
        <button>Phase 4</button>
        <button>Phase 3</button>
        <button>Phase 2</button>
        <button>Phase 1</button>
      </div>
      <input
        type="text"
        placeholder="Search..."
        onChange={handleSearch}
      />

      <ul className="cards">{projectItems}</ul>
    </section>
  );
}

export default ProjectList;