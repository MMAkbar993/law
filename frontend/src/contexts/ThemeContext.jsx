import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

const THEMES = {
  'white-black': {
    name: 'White/Black',
    primary: '#000000',
    secondary: '#FFFFFF',
    accent: '#000000',
    background: '#FFFFFF',
    text: '#000000',
  },
  'blue-yellow': {
    name: 'Blue/Yellow',
    primary: '#0a2043',
    secondary: '#f5d000',
    accent: '#f5d000',
    background: '#FFFFFF',
    text: '#0a2043',
  },
  'default': {
    name: 'Default',
    primary: '#0a2043',
    secondary: '#f5d000',
    accent: '#f5d000',
    background: '#FFFFFF',
    text: '#0a2043',
  },
};

export const ThemeProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved || 'default';
  });
  
  const [logo, setLogo] = useState(() => {
    const saved = localStorage.getItem('logo');
    return saved || null;
  });
  
  const [caseTypes, setCaseTypes] = useState(() => {
    const saved = localStorage.getItem('caseTypes');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('theme', currentTheme);
  }, [currentTheme]);

  useEffect(() => {
    if (logo) {
      localStorage.setItem('logo', logo);
    }
  }, [logo]);

  useEffect(() => {
    localStorage.setItem('caseTypes', JSON.stringify(caseTypes));
  }, [caseTypes]);

  const theme = THEMES[currentTheme] || THEMES.default;

  return (
    <ThemeContext.Provider
      value={{
        theme,
        currentTheme,
        setCurrentTheme,
        logo,
        setLogo,
        caseTypes,
        setCaseTypes,
        themes: THEMES,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

