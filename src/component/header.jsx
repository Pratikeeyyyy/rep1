import { Link } from "react-router-dom";

function Header() {
  // Read login status from localStorage
  const isLoggedIn = localStorage.getItem("isAuthenticate") === "true";

  return (
    <div className="bg-blue-600 text-white px-6 py-3 flex justify-between items-center">
      <h1 className="text-xl font-bold">MyApp</h1>

      <div className="space-x-4">
        <Link to="/aboutus" className="hover:underline">
          Home
        </Link>

        {/* If user is logged inonlyshow Logout only */}
        {isLoggedIn ? (
          <Link to="/logout" className="hover:underline">
            Logout
          </Link>
        ) : (
          // If user is NOT logged in, show Login & Register
          <>
            <Link to="/login" className="hover:underline">
              Login
            </Link>
            <Link to="/register" className="hover:underline">
              Register
            </Link>
          </>
        )}
      </div>
    </div>
  );
}

export default Header;
