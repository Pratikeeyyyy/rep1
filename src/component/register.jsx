import { useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import apiClient from "../api";
function Register() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
    let username = e.target.username.value;
    let fullname = e.target.fullname.value;
    let email = e.target.email.value;
    let password = e.target.password.value;
    console.log("data", username, fullname, email, password);
    gettingvalue(username, email, fullname, password);

    // fullname = e.target.fulName.value;
    // email = e.target.email.value;
    //  password = e.target.password.value;
    // alert("Registration successful!");
    // alert("Please Login now with the registered data");
  };
function gettingvalue(username, email, fullname, password) {
    apiClient
      .post("/auth/signup", {
        username: username,
        fullName: fullname,
        email: email,
        password: password,
      })
      .then((response) => {
        console.log(response);
        // localStorage.setItem("token", "true");
        const registertoken = localStorage.setItem(
          "token",
          response.data.data.token,
        );
        console.log(registertoken);
      })
      .catch((error) => {
        console.error("error", error.response);
      });
  }

  // console.log(username, fullname, email, password);

  return (
    <div className="bg-gray-100 flex items-center justify-center min-h-screen">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Register
        </h2>  
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="username" className="block text-gray-600 mb-1">
              UserName
            </label>
            <input
              type="text"
              id="username"
              placeholder="Enter username"
              className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label htmlFor="username" className="block text-gray-600 mb-1">
              Full Name
            </label>
            <input
              type="text"
              id="fullname"
              placeholder="Enter username"
              className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label id="email" className="block text-gray-600 mb-1">
              Email
            </label>
            <input
              type="text"
              id="email"
              placeholder="Enter email"
              className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label id="password" className="block text-gray-600 mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter password"
              className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 font-semibold transition"
            >
              Register
            </button>
          </div>
        </form>
        <p>already had an account? Login Below!!</p>
        <Link to="/login" className="block text-center mt-4 ">
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 font-semibold transition"
          >
            Login
          </button>
        </Link>
        {/* React Router Home Button */}
        <Link
          to="/"
          className="block text-center mt-4 bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 font-semibold transition"
        >
          Home
        </Link>
      </div>
    </div>
  );
}

export default Register;
