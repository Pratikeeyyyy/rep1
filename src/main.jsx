import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Login from "./component/Login.jsx";
import FacebookProfileUI from "./component/FacebookProfileUI.jsx";
import Register from "./component/register.jsx";
import Header from "./component/header.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import AboutUs from "./component/aboutus.jsx";
import { PublicRoute } from "./route/routeguard.jsx";
import { SemiprotectedRoute } from "./route/routeguard.jsx";
import { ProtectedRoute } from "./route/routeguard.jsx";
import Logout from "./component/logout.jsx";
import Post from "./component/post.jsx";
import Footer from "./component/footer.jsx";
import { AuthProvider } from "./Context/authContext.jsx";
import ThemeProvider from "./Context/themeContext.jsx";
createRoot(document.getElementById("root")).render(
  <>
    <StrictMode>
      <AuthProvider>
        <ThemeProvider>
          {/* {newposts.map((newpost) => {
      return <Post />;
      })} */}
          <BrowserRouter>
            <Header />
            <Routes>
              <Route
                path="/"
                element={
                  // <ProtectedRoute>
                  <App />
                  // </ProtectedRoute>
                }
              />
              <Route
                path="/logout"
                element={
                  <PublicRoute>
                    <Logout />
                  </PublicRoute>
                }
              />
              {/* <Route
            path="/post"
            element={
              <ProtectedRoute>
                <Post />
              </ProtectedRoute>
            }
          /> */}
              <Route
                path="/aboutus"
                element={
                  <PublicRoute>
                    <AboutUs />
                  </PublicRoute>
                }
              />
              <Route
                path="/login"
                element={
                  <SemiprotectedRoute>
                    <Login />
                  </SemiprotectedRoute>
                }
              />
              <Route
                path="/register"
                element={
                  <SemiprotectedRoute>
                    <Register />
                  </SemiprotectedRoute>
                }
              />

              <Route
                path="/facebookprofileui/:idforall"
                element={
                  <ProtectedRoute>
                    <FacebookProfileUI />
                  </ProtectedRoute>
                }
              />
            </Routes>
            <Footer />
          </BrowserRouter>
        </ThemeProvider>
      </AuthProvider>
    </StrictMode>
  </>,
);
