// import { createContext, useEffect, useState } from "react";
// import apiClient from "../api";

// export const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     userstatus();
//   }, []);

//   async function userstatus() {
//     const token = localStorage.getItem("token");

//     if (!token) {
//       setUser(null);
//       return;
//     }

//     try {
//       const response = await apiClient.get("/auth/me", {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });

//       setUser(response.data.data.user);
//     } catch (error) {
//       setUser(null);
//     }
//   }

//   const value = {
//     user,
//     setUser,
//     userstatus,
//     isAuthenticated: !!user,
//   };

//   return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
// };
import { createContext, useEffect, useState } from "react";
import apiClient from "../api";

export const AuthContext = createContext(); // ✅ FIXED NAME

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

      setUser(response.data.data.user);
    } catch (error) {
      setUser(null);
    }
  }

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};
