import { createContext, useEffect, useState } from "react";
import apiClient from "../api";

export const authcontext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    userstatus();
  }, []);

  async function userstatus() {
    const token = localStorage.getItem("token");

    if (!token) {
      setUser(null);
      return;
    }

    try {
      const response = await apiClient.get("/auth/me", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log("response from /me endpoint", response);

      setUser(response.data.data.user);
    } catch (error) {
      console.log("token invalid or expired");
      setUser(null);
    }
  }

  const value = {
    user,
    setUser,
    userstatus,
    isAuthenticated: !!user,
  };

  return <authcontext.Provider value={value}>{children}</authcontext.Provider>;
};
