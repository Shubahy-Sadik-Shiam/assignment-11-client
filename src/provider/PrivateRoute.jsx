import useAuth from "../hooks/useAuth";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({children}) => {

    const {user, loading} = useAuth();
    const location = useLocation();

    if(loading){
        return <div className="flex justify-center min-h-screen"><span className="loading  loading-bars loading-lg"></span></div>
    }

    if (user){
        return children;
    }
        return <Navigate state={location.pathname} to="/login"></Navigate>;
    
};

export default PrivateRoute;