import { useContext } from "react";
import { Navigate, useLocation } from "react-router";
import { AuthContext } from "../contexts/AuthContext";

export default function RequiresAuth({ children }) {
  const location = useLocation();
  const { isLoggedIn } = useContext(AuthContext);

  return isLoggedIn ? (
    children
  ) : (
    <Navigate to="/login" state={{ from: location }} />
  );
}
