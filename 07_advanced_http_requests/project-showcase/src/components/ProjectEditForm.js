import React, { useState } from 'react';

function ProjectEditForm({ projectToEdit, completeEditing }) {
  const [formState, setFormState] = useState({ ...projectToEdit })
  
  function handleChange(event) {
    const { name, value } = event.target;
    setFormState({...formState, [name]: value})
  }

  function handleSubmit(event) {
    event.preventDefault();
    // fill me in!
    completeEditing();
  }

  const { name, about, phase, link, image } = formState;
  return (
    <form onSubmit={handleSubmit} className="form" autoComplete="off">
      <h3>Edit Project</h3>

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

      <button type="submit">Update Project</button>
    </form>
  );
}

export default ProjectEditForm;
