import { useContext } from "react";
import { Navigate } from "react-router";
import { authcontext } from "../Context/authcontext";

function userLoggedin() {
  const { user, setUser, isAuthenticated } = useContext(authcontext);
  //answers true or false
  if (isAuthenticated === true) {
    return true;
  } else {
    return false;
  }
}

export const ProtectedRoute = ({ children }) => {
  const isAuthenticated = useContext(authcontext);
  console.log("bool", isAuthenticated);
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

export const PublicRoute = ({ children }) => {
  return children;
};

export const SemiprotectedRoute = ({ children }) => {
  if (userLoggedin()) {
    return <Navigate to="/" replace />;
  }
  return children;
};
