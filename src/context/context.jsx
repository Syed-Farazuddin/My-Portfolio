import { createContext, useState } from "react";

export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {
  const [darkMode, setDarkMode] = useState(true);
  const [currentColor, setCurrentColor] = useState("#BA68C8");
  return (
    <GlobalContext.Provider
      value={{ darkMode, setDarkMode, currentColor, setCurrentColor }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
