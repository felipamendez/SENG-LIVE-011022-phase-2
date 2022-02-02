import React from "react";
import ProjectListItem from "./ProjectListItem";

function ProjectList(props) {
  // map over the array of project objects => return an array of ProjectItem components
  // [{},{},{},{}] => [<ProjectListItem />, <ProjectListItem />, <ProjectListItem />, <ProjectListItem />]
  const projectItems = props.projects.map((project) => {
    return <ProjectListItem key={project.id} {...project} />;
  });

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
      <input type="text" placeholder="Search..." />

      <ul className="cards">{projectItems}</ul>
    </section>
  );
}

export default ProjectList;