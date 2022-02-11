import React, { useState } from "react";
import { FaPencilAlt, FaTrash } from 'react-icons/fa';

function ProjectItem({
  project,
  enterProjectEditModeFor,
  handleDeleteProject
}) {
  const {
    id,
    name,
    about,
    phase,
    link,
    image
  } = project;
  const [claps, setClaps] = useState(0);

  function handleClapClick(event) {
    setClaps(claps => claps + 1)
    // why does setClaps(claps++) cause a problem when setClaps(claps + 1) wouldn't?
    // claps++ is equivalent to claps = claps + 1
  }

  function handleDeleteClick() {
    fetch(`http://localhost:4000/projects/${id}`, {
      method: "DELETE"
    })
    handleDeleteProject(id)
  }

  return (
    <li className="card">
      <figure className="image">
        <img src={image} alt={name} />
        <button onClick={handleClapClick} className="claps">👏{claps}</button>
      </figure>

      <section className="details">
        <h4>{name}</h4>
        <p>{about}</p>
        {link ? (
          <p>
            <a href={link}>Link</a>
          </p>
        ) : null}
      </section>

      <footer className="extra">
        <span className="badge blue">Phase {phase}</span>
        <div className="manage">
          <button
            onClick={() => enterProjectEditModeFor(project)}
          >
            <FaPencilAlt />
          </button>
          <button
            onClick={handleDeleteClick}
          >
            <FaTrash />
          </button>
        </div>
      </footer>
    </li>
  );
}

export default ProjectItem;


