import React, { useContext } from "react";
import { AuthContext } from "../../context/authContext/AuthContext";

const useAuth = () => {
  const { user, login, logout } = useContext(AuthContext);
  console.log(user, "check");
  function authenticated() {
    return user != null ? true : false;
  }

  return {
    user,
    login,
    logout,
    get authenticated() {
      console.log(authenticated, "reached?");
      return authenticated();
    },
  };
};
export default useAuth;
