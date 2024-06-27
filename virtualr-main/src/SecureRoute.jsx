import React from "react";
import { useKeycloak } from "@react-keycloak/web";
import { Route, Navigate } from "react-router-dom";

const SecureRoute = ({ component: Component }) => {
  const { keycloak } = useKeycloak();

  return keycloak?.authenticated ? <Component /> : <Navigate to="/" />;
};

export default SecureRoute;
