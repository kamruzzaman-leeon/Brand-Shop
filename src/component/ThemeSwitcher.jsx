import React, { useState } from 'react';

const ThemeSwitcher = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode((prevIsDarkMode) => !prevIsDarkMode);
  };

  return (
    <div>
      <button onClick={toggleTheme}>Toggle Theme</button>
      {/* Rest of your app content */}
    </div>
  );
};

export default ThemeSwitcher;
