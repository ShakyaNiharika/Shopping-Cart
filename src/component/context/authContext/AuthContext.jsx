import React, { createContext, useEffect, useReducer } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const initialstate = {
    user: JSON.parse(localStorage.getItem("user")) || null, // Corrected parsing
  };

  const LOGIN = "LOGIN";
  const LOGOUT = "LOGOUT";

  const authreducer = (state, action) => {
    switch (action.type) {
      case LOGIN:
        console.log("static");
        console.log(action, "action");
        return { ...state, user: action.payload }; // Corrected payload property
      case LOGOUT:
        console.log("logout");
        console.log(action, "logout-action");
        return { ...state, user: null };
      default:
        return state; // Ensure default case is handled
    }
  };

  const [state, dispatch] = useReducer(authreducer, initialstate);

  //Load user data from localStorage when the app loads
  // useEffect(() => {
  //   if (state.user) {
  //     localStorage.setItem("user", JSON.stringify(state.user));
  //   } else {
  //     console.log("removing");
  //     localStorage.removeItem("user");
  //   }
  // }, [state.user]);

  const login = (username, password) => {
    if (username === "Reema" && password === "reema123") {
      const userData = { username: "Reema" };
      dispatch({ type: LOGIN, payload: userData }); // Corrected dispatch action
      return {
        success: true,
        data: {
          username,
          password,
        },
      };
    }
    return { success: false, data: null };
  };

  const logout = () => {
    // Removed unnecessary parameters
    dispatch({ type: LOGOUT }); // Corrected dispatch action
  };

  return (
    <AuthContext.Provider value={{ user: state.user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
