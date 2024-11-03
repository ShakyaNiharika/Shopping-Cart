import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import UseAuth from "../cutomHook/useAuthcompo/UseAuth";

const ProtectedRoute = ({ element: Component }) => {
  console.log("going");
  const { authenticated } = UseAuth();
  const location = useLocation();
  console.log(location, "location?");
  console.log(authenticated, "auth");
  if (!authenticated) {
    console.log(authenticated, "after auth");
    return <Navigate to="/loginPage" state={{ from: location }} replace />;
  }

  return <Component />;
};

export default ProtectedRoute;
