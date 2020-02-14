import React from 'react';
import useDarkMode from '../hooks/useDarkMode';


const Header = () => {
    const [darkMode,setDarkMode] = useDarkMode(false);
const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };

  return (
      <header>
          <h1>Players</h1>
          <div>
              <button onClick={toggleMode}>Dark Mode !</button>
          </div>
      </header>
  )
}

export default Header
