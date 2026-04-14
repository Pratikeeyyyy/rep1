import { Link } from "react-router";
import { useEffect } from "react";
import authentication from "../const.js";
function Logout() {
  function logoutfrompage() {
    localStorage.removeItem("token1");
  }

  return (
    <div className="bg-gray-100 flex items-center justify-center h-screen">
      <div className="bg-white shadow-lg rounded-lg p-6 w-96 text-center">
        {/* <!-- Facebook Logo --> */}
        <h1 className="text-blue-600 text-3xl font-bold mb-4">facebook</h1>

        {/* <!-- Message --> */}
        <p className="text-gray-700 mb-6">Are you sure you want to log out?</p>

        {/* <!-- Buttons --> */}
        <div className="flex justify-center gap-4">
          {/* <!-- Cancel Button --> */}
          <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300">
            <Link to="/" className="hover:underline">
              Cancel
            </Link>
          </button>

          {/* <!-- Logout Button --> */}
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
            onClick={logoutfrompage}
          >
            {" "}
            <Link to="/login" className="hover:underline">
              Log Out
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}
export default Logout;
