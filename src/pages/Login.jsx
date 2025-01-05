import Lottie from "lottie-react";
import loginData from "../assets/Lottie/Animation - 1735578998563.json";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { FcGoogle } from "react-icons/fc";
import Toast from "../hooks/Toast";

const Login = () => {
  const { loginUser, googleLogin } = useAuth();

  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        Toast.fire({
          icon: "success",
          title: "Google Login successful",
        });
      })
      .catch((error) => {
        console.log(error);
        Toast.fire({
          icon: "error",
          title: "Login with google failed",
        });
      });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    loginUser(email, password)
      .then((result) => {
        Toast.fire({
          icon: "success",
          title: "Signed in successfully",
        });
      })
      .catch((error) => {
        Toast.fire({
          icon: "error",
          title: "Login failed",
        });
      });
  };
  return (
    <div className="hero">
      <div className="hero-content pt-10 flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left w-full">
          <Lottie animationData={loginData}></Lottie>
        </div>
        <div className="card bg-base-200 w-full shadow-2xl">
          <h1 className="text-3xl text-center text-yellow-400 mt-4 font-bold">Login now!</h1>
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn bg-gradient-to-r from-yellow-200 via-yellow-300 to-yellow-500">
                Login
              </button>
              <div className="divider">OR</div>
              <button
                onClick={handleGoogleLogin}
                className="btn btn-block bg-white"
              >
                {" "}
                <FcGoogle className="text-2xl" /> Sign In with Google
              </button>
            </div>
            <p className="text-center">
              New to this site?{" "}
              <span className="text-blue-500 font-semibold">
                <Link to="/register">Sign Up </Link>{" "}
              </span>
              now!
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
