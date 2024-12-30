import Lottie from "lottie-react";
import loginData from "../assets/Lottie/Animation - 1735578998563.json";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="hero">
      <div className="hero-content ite flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left w-full">
          <Lottie animationData={loginData}></Lottie>
        </div>
        <div className="card bg-base-100 w-full shadow-2xl">
          <h1 className="text-3xl text-center mt-4 font-bold">Login now!</h1>
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
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
                placeholder="password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
            <p className="text-center">
              New to this site?{" "}
              <span className="text-blue-500 font-semibold"><Link to='/register'>Sign Up </Link> </span>now!
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
