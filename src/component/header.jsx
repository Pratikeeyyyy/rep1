import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { themeContext } from "../Context/themeContext";

function Header() {
  const { theme, setDarktheme, setlighttheme } = useContext(themeContext);

  const { user, setUser } = useContext(AuthContext);

  const isAuthenticated = !!user;

  function logout() {
    localStorage.removeItem("token");
    setUser(null);
  }

  function toggleTheme() {
    if (theme === "light") {
      setDarktheme();
    } else {
      setlighttheme();
    }
  }

  return (
    <div className="bg-blue-600 text-white px-6 py-3 flex justify-between items-center">
      <h1 className="text-xl font-bold">MyApp</h1>

      <div className="space-x-4 flex items-center">
        <Link to="/aboutus">Home</Link>

        <button
          onClick={toggleTheme}
          className="px-3 py-1 bg-gray-200 text-black rounded"
        >
          {theme === "light" ? "🌙 Dark" : "☀️ Light"}
        </button>

        {isAuthenticated ? (
          <button onClick={logout}>Logout</button>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </div>
    </div>
  );
}

export default Header;
