import React from 'react';
import { NavLink } from 'react-router-dom';

function Header({ isDarkMode, handleToggleDarkMode }) {
  

  const handleClick = (event) => {
    handleToggleDarkMode();
  }

  return (
    <header>
      <nav>
        <h1 className="branding">
          <span className="logo">{"//"}</span>
          Project Showcase
        </h1>
        <div className="navigation">
          <NavLink className="button" exact to="/projects">
            All Projects
          </NavLink>
          <NavLink className="button" exact to="/projects/new">
            Add Project
          </NavLink>
          <button onClick={handleClick}>{isDarkMode ? 'Dark' : 'Light'} Mode</button>
        </div>
      </nav>
    </header>
  );
}

export default Header;

/* 
function useState(initialValue) {
  let stateVariable = initialValue;
  function updateState(newValue) {
    stateVariable = newValue;
    reRender();
  }
  return [stateVariable, updateState]
}
*/