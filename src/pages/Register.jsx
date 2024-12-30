import Lottie from "lottie-react";
import registerData from "../assets/Lottie/Animation - 1735578629692.json";
import { Link } from "react-router-dom";
const Register = () => {
  return (
    <div className="hero">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left w-full">
          <Lottie className="" animationData={registerData}></Lottie>
        </div>
        <div className="card bg-base-100 w-full shadow-2xl">
          <h1 className="text-3xl mt-4 text-center font-bold">Register now!</h1>
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="name"
                className="input input-bordered"
                required
              />
            </div>
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
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                placeholder="photo url"
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
              <button className="btn btn-primary">Register</button>
            </div>
            <p className="text-center">
              Already have an account?{" "}
              <span className="text-blue-500 font-semibold">
                <Link to="/login">Login</Link>{" "}
              </span>
              now!
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
