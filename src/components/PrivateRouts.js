import { useAuth } from "Hooks/useAuth"
import { Navigate } from "react-router-dom"

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
    const { isLoggedIn, isRefreshing } = useAuth();
    const shouldRedirect = !isRefreshing && !isLoggedIn;
  console.log("isRefreshing", isRefreshing)
  console.log("isLoggedIn", isLoggedIn)
    return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
  };