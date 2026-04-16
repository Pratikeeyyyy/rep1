import { createContext, useState, useEffect } from "react";

export const themeContext = createContext({});

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  //   theme: theme,
  //   setThemevalue: (theme) => {
  //     setTheme(theme);
  //   },
  // });

  // const [theme, setTheme] = useState("light");
  //   const [themetoggle,setThemetoggler]= useState("dark")
  // function togglethetheme(){
  // i
  // }

  function setDarktheme() {
    setTheme("dark");
  }

  function setlighttheme() {
    setTheme("light");
  }

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <themeContext.Provider value={{ theme, setDarktheme, setlighttheme }}>
      {children}
    </themeContext.Provider>
  );
};
export default ThemeProvider;
