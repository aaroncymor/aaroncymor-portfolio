import { createContext, useContext, useState } from "react";

const Context = createContext();

const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(true);
  const [introDone, setIntroDone] = useState(false);

  return (
    <Context.Provider
      value={{
        theme: [darkMode, setDarkMode],
        intro: [introDone, setIntroDone]
      }}
    >
      {children}
    </Context.Provider>
  );
};
export default ThemeProvider;

export const useThemeContext = () => useContext(Context);
