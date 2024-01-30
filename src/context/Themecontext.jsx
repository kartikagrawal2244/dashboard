
import { createContext, useContext, useState } from 'react';

const DarkModeContext = createContext();

export const DarkModeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isToggled, setIsToggled] = useState(false);


  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
    setIsToggled((prevMode) => !prevMode)
  };

  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode , isToggled }}>
      {children}
    </DarkModeContext.Provider>
  );
};

export const useDarkMode = () => useContext(DarkModeContext);
