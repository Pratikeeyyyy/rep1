import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { authcontext } from "../Context/authContext";

export const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useContext(authcontext);

  if (isAuthenticated === undefined) return null; // or loading spinner

  return isAuthenticated ? children : <Navigate to="/login" replace />;
};

export const PublicRoute = ({ children }) => {
  const { isAuthenticated } = useContext(authcontext);

  return isAuthenticated ? <Navigate to="/" replace /> : children;
};

export const SemiprotectedRoute = ({ children }) => {
  const { isAuthenticated } = useContext(authcontext);

  return isAuthenticated ? <Navigate to="/" replace /> : children;
};
