import React, { createContext, useContext, useState } from 'react';

// Create a context with a default theme
const ThemeContext = createContext({
  theme: 'light',
  toggleTheme: () => {},
});

// Custom hook to access the theme context
export const useTheme = () => useContext(ThemeContext);

// Theme Provider component
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  // Function to toggle between light and dark themes
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
