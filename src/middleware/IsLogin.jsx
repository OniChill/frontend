import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hook/useAuth";

const IsLogin = ({children}) => {
    const { auth } = useAuth();
    const location = useLocation()
    if (auth.token){
        return <Navigate to={'/'} state={{from : location }} replace />;
    }
    return children
    
};

export default IsLogin;