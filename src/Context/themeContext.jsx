import { Children, createContext } from "react";
import { useEffect, useState } from "react";
export const themeContext = createContext({});
//   theme: theme,
//   setThemevalue: (theme) => {
//     setTheme(theme);
//   },
// });

// export const ThemeProvider = themeContext.Provider;
const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  //   const [themetoggle,setThemetoggler]= useState("dark")
  // function togglethetheme(){
  // i
  // }

  function setDarktheme() {
    setTheme = "dark";
  }
  function setlighttheme() {
    setTheme = "light";
  }
  return (
    <themeContext.Provider value={{ theme, setDarktheme, setlighttheme }}>
      {children}
    </themeContext.Provider>
  );
};
export default ThemeProvider;
