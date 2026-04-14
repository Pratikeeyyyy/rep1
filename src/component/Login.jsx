import { Link } from "react-router";
import { useEffect } from "react";
import authentication from "../const.js";
import Header from "./header.jsx";
import { useNavigate, Navigate } from "react-router";
import axios from "axios";
import apiClient from "../api.js";
function Login() {
  const navigate = useNavigate();
  // const [userinput, setUserinput] = usestate([]);
  function submit(idandpass) {
    idandpass.preventDefault();
    console.log(idandpass);
    let email = idandpass.target.username.value;
    console.log(email);
    let password = idandpass.target.password.value;
    console.log(password);
    gettingvalueoflogin(email, password);
  }
  function gettingvalueoflogin(email, password) {
    apiClient
      .post("/auth/login", {
        email: email,
        password: password,
      })
      .then((response) => {
        console.log(response);
        const logintoken = localStorage.setItem(
          "token",
          response.data.data.token,
        );
        console.log(logintoken);
        console.log(response.data.success);
        if (response.data.success === true) {
          console.log("login success:", response.data.success);
          navigate("/");
        }
      })
      .catch((error) => {
        console.error("error", error.response);
      });
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Header */}
      <div className="flex justify-center items-center flex-1 px-4">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between w-full max-w-5xl">
          {/* Left Section */}
          <div className="mb-10 md:mb-0 md:mt-16 max-w-md text-center md:text-left">
            <h1 className="text-blue-600 text-5xl font-bold mb-4">facebook</h1>
            <p className="text-xl text-gray-700">
              Facebook helps you connect and share with the people in your life.
            </p>
          </div>

          {/* Right Section (Login Card) */}
          <div className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-sm">
            <form className="flex flex-col gap-3" onSubmit={submit}>
              <input
                type="text"
                name="username"
                placeholder="Email address or phone number"
                className="border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 "
              />
              <button
                type="submit"
                className="bg-blue-600 text-white py-3 rounded-md font-semibold text-lg hover:bg-blue-700"
              >
                submit
              </button>
            </form>
            {/* <Link to="/register">*/}
            <a
              href="#"
              className="text-blue-600 text-sm text-center hover:underline"
            >
              Forgotten password?
            </a>
            {/* </Link> */}
            <hr className="my-2" />
            <div className="flex justify-center">
              <button
                type="button"
                className="bg-green-500 text-white px-4 py-3 rounded-md font-semibold hover:bg-green-600"
              >
                <Link to="/register" className="hover:underline">
                  Create new account
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="text-center text-sm text-gray-500 pb-6">
        <p>
          <span className="font-semibold">Create a Page</span> for a celebrity,
          brand or business.
        </p>
      </div>
    </div>
  );
}
export default Login;
