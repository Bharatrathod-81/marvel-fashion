import { Navigate, useLocation } from "react-router-dom";
import { useAuthContext } from "./contexts/auth-context";

export const RequireAuth = ({ children }) => {
    
    const { isLogin: { user } } = useAuthContext();
    const location = useLocation();

    return user ? children : <Navigate to="/login" state={{pathname: location.pathname }} replace/>
}