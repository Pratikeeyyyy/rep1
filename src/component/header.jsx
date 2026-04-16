// import { Link } from "react-router-dom";
// import { useContext } from "react";
// import { themeContext } from "../Context/themeContext";
// import { authcontext } from "../Context/authContext";

// function Header() {
//   const { theme, setDarktheme, setlighttheme } = useContext(themeContext);
//   const { isAuthenticated, user, logout } = useContext(authcontext);

//   function toggleTheme() {
//     if (theme === "light") {
//       setDarktheme();
//     } else {
//       setlighttheme();
//     }
//   }

//   return (
//     <div className="bg-blue-600 text-white px-6 py-3 flex justify-between items-center">
//       {/* Logo */}
//       <h1 className="text-xl font-bold">MyApp</h1>

//       <div className="space-x-4 flex items-center">
//         {/* Home */}
//         <Link to="/aboutus">Home</Link>

//         {/* Theme Toggle */}
//         <button
//           onClick={toggleTheme}
//           className="px-3 py-1 bg-gray-200 text-black rounded"
//         >
//           {theme === "light" ? "🌙 Dark" : "☀️ Light"}
//         </button>

//         {/* AUTH SECTION */}
//         {isAuthenticated ? (
//           <>
//             {/* optional user name
//             <span className="font-semibold">
//               Hi, {user?.name || "User"}
//             </span> */}

//             <button onClick={logout} className="hover:underline">
//               Logout
//             </button>
//           </>
//         ) : (
//           <>
//             <Link to="/login" className="hover:underline">
//               Login
//             </Link>
//             <Link to="/register" className="hover:underline">
//               Register
//             </Link>
//           </>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Header;
import { Link } from "react-router-dom";
import { useContext } from "react";
import { themeContext } from "../Context/themeContext";
import { authcontext } from "../Context/authContext";

function Header() {
  const { theme, setDarktheme, setlighttheme } = useContext(themeContext);

  const { user, setUser } = useContext(authcontext);

  const isAuthenticated = !!user;

  function logout() {
    localStorage.removeItem("token"); // remove token
    setUser(null); // clear user state
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

        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="px-3 py-1 bg-gray-200 text-black rounded"
        >
          {theme === "light" ? "🌙 Dark" : "☀️ Light"}
        </button>

        {/* AUTH */}
        {isAuthenticated ? (
          <button onClick={logout} className="hover:underline">
            Logout
          </button>
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
