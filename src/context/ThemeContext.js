import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext(null);

export function ThemeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(() => {
    try {
      const saved = localStorage.getItem('product_store_theme');
      return saved !== null ? JSON.parse(saved) : false;
    } catch {
      return false;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('product_store_theme', JSON.stringify(darkMode));
    } catch (e) {
      console.error(e);
    }
  }, [darkMode]);

  const toggleTheme = () => setDarkMode((prev) => !prev);

  const containerStyle = {
    minHeight: '100vh',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: darkMode ? '#0f172a' : '#f8fafc',
    color: darkMode ? '#f1f5f9' : '#1e293b',
    transition: 'background-color 0.25s ease, color 0.25s ease',
    boxSizing: 'border-box',
    margin: 0,
    padding: 0,
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif"
  };

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      <div style={containerStyle}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    // Return a default fallback to prevent crashes if used outside ThemeProvider
    return { darkMode: false, toggleTheme: () => {} };
  }
  return context;
};
