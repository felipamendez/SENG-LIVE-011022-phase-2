import React from 'react';

function Header({ isDarkMode, handleToggleDarkMode }) {
  

  const handleClick = (event) => {
    // setIsDarkMode(!isDarkMode)
    // setIsDarkMode(isDarkMode => !isDarkMode)
    handleToggleDarkMode();
  }

  return (
    <header>
      <h1>
        <span className="logo">{"//"}</span>
        Project Showcase
      </h1>
      <button onClick={handleClick}>{isDarkMode ? 'Dark' : 'Light'} Mode</button>
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