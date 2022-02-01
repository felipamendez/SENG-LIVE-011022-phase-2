import React from 'react';
import ProjectListItem from './ProjectListItem';

function ProjectList({ projects }) {
  
  const projectItems = projects.map((project) => {
    return (
      <ProjectListItem
        key={project.id}
        {...project}
      />
    )
  })

  return (
    <section>
      <h2>Project List</h2>
      {projectItems}
    </section>
  );
}

export default ProjectList;
