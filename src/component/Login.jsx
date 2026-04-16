import { Link, useNavigate } from "react-router-dom";
import apiClient from "../api.js";
import { useContext } from "react";
import { authcontext } from "../Context/authContext";
function Login() {
  const navigate = useNavigate();
  const { userstatus } = useContext(authcontext);

  function submit(e) {
    e.preventDefault();

    let email = e.target.username.value;
    let password = e.target.password.value;

    gettingvalueoflogin(email, password);
  }

  async function gettingvalueoflogin(email, password) {
    try {
      const response = await apiClient.post("/auth/login", {
        email,
        password,
      });

      console.log(response);

      // store token
      localStorage.setItem("token", response.data.data.token);

      if (response.data.success === true) {
        localStorage.setItem("token", response.data.data.token);

        await userstatus();

        navigate("/");
      }
    } catch (error) {
      console.error("error", error.response);
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <div className="flex justify-center items-center flex-1 px-4">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between w-full max-w-5xl">
          {/* Left */}
          <div className="mb-10 md:mb-0 md:mt-16 max-w-md text-center md:text-left">
            <h1 className="text-blue-600 text-5xl font-bold mb-4">facebook</h1>
            <p className="text-xl text-gray-700">
              Facebook helps you connect and share with the people in your life.
            </p>
          </div>

          {/* Right */}
          <div className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-sm">
            <form className="flex flex-col gap-3" onSubmit={submit}>
              <input
                type="text"
                name="username"
                placeholder="Email address or phone number"
                className="border px-4 py-3 rounded-md"
              />

              <input
                type="password"
                name="password"
                placeholder="Password"
                className="border px-4 py-3 rounded-md"
              />

              <button
                type="submit"
                className="bg-blue-600 text-white py-3 rounded-md font-semibold"
              >
                Login
              </button>
            </form>

            <hr className="my-3" />

            <div className="flex justify-center">
              <Link
                to="/register"
                className="bg-green-500 text-white px-4 py-2 rounded-md"
              >
                Create new account
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
