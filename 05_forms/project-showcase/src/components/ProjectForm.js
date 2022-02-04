import React, { useState } from "react";

function ProjectForm({ handleAddProject }) {
  const [name, setName] = useState("");
  const [about, setAbout] = useState("");
  const [phase, setPhase] = useState("");
  const [link, setLink] = useState("");
  const [image, setImage] = useState("");

  // individual handlers for each input
  // const handleNameChange = (event) => {
  //   setName(event.target.value);
  // }

  // const handleAboutChange = (event) => {
  //   setAbout(event.target.value);
  // }

  // const handlePhaseChange = (event) => {
  //   setPhase(event.target.value);
  // }

  // const handleLinkChange = (event) => {
  //   setLink(event.target.value)
  // }

  // const handleImageChange = (event) => {
  //   setImage(event.target.value)
  // }


  // the same handler for all inputs
  const setters = {
    name: setName,
    about: setAbout,
    phase: setPhase,
    link: setLink,
    image: setImage
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log(event.target);
    const setState = setters[name];
    setState(value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    // object property shorthand
    // const formData = { name, about, phase, link, image };
    // equivalent to
    const formData = {
      name: name,
      about: about,
      phase: phase,
      link: link,
      image: image
    }
    fetch("http://localhost:4000/projects", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    })
      .then(response => response.json())
      .then(savedProject => {
        handleAddProject(savedProject)
      })
  }
  

  return (
    <section>
      <form onSubmit={handleSubmit} className="form" autoComplete="off">
        <h3>Add New Project</h3>

        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={handleChange}
        />

        <label htmlFor="about">About</label>
        <textarea
          id="about"
          name="about"
          value={about}
          onChange={handleChange}
        />

        
        <label htmlFor="phase">Phase</label>
        <select
          name="phase"
          id="phase"
          value={phase}
          onChange={handleChange}
        >
          <option value="1">Phase 1</option>
          <option value="2">Phase 2</option>
          <option value="3">Phase 3</option>
          <option value="4">Phase 4</option>
          <option value="5">Phase 5</option>
        </select>

        <label htmlFor="link">Project Homepage</label>
        <input
          type="text"
          id="link"
          name="link"
          value={link}
          onChange={handleChange}
        />

        
        <label htmlFor="image">Screenshot</label>
        <input
          type="text" 
          id="image" 
          name="image"
          value={image}
          onChange={handleChange}
        />

        <button type="submit">Add Project</button>
      </form>
    </section>
  );
}

export default ProjectForm;