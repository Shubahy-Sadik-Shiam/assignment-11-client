import useAuth from "../hooks/useAuth";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({children}) => {

    const {user, loading} = useAuth();

    if(loading){
        return <div className="flex justify-center min-h-screen"><span className="loading  loading-bars loading-lg"></span></div>
    }

    if (user){
        return children;
    }else{
        return <Navigate to="/login"></Navigate>;
    }
};

export default PrivateRoute;