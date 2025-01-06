import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";
import { useEffect } from "react";
import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://assignment-11-server-rouge-ten.vercel.app",
    withCredentials: true,
  });
  const useAxiosSecure = () => {
    const { logOutUser } = useAuth();
    const navigate = useNavigate();
  
    useEffect(() => {
      axiosInstance.interceptors.response.use(
        (response) => {
          return response;
        },
        (error) => {
          if (error.status === 401 || error.status === 403) {
            logOutUser()
              .then(() => {
                navigate("/login");
              })
              .catch((error) => {
                // console.log(error)
              });
          }
          return Promise.reject(error);
        }
      );
    }, []);
    return axiosInstance;
  };
  
  export default useAxiosSecure;