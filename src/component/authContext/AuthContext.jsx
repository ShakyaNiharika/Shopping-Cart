import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Load user data from localStorage when the app loads
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  const login = (username, password) => {
    if (username === "Reema" && password === "reema123") {
      const userData = { username: "Reema" };
      setUser(userData);
      // Store user data in localStorage
      localStorage.setItem("user", JSON.stringify(userData));
      return true;
    }
    return false;
  };
  const logout = (username, password) => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
