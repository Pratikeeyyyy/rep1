import { createContext, useEffect, useState } from "react";
import apiClient from "../api";
export const authcontext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  //check if the user is logged in when component mounts
  useEffect(() => {
    userstatus();
  }, []);
  async function userstatus() {
    // const newtoken = localStorage.getItem("token");
    // console.log(newtoken);
    try {
      const response = await apiClient.get(`/auth/me`);
      console.log("response from /me endpoint", response);
      setUser(response.data.data.user);
    } catch (error) {
    //   localStorage.removeItem("token");
      setUser(null);
      console.log("token removed .me failed");
    }
  }
  const value = {
    user: user,
    setUser,
    userstatus,
    isAuthenticated: !!user,
  };
  return <authcontext.Provider value={value}>{children}</authcontext.Provider>;
};
