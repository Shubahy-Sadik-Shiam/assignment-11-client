import Lottie from "lottie-react";
import registerData from "../assets/Lottie/Animation - 1735578629692.json";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { useState } from "react";
import Toast from "../hooks/Toast";
import { Helmet } from "react-helmet";

const Register = () => {
  const { createUser, updateUserInfo } = useAuth();
  const [error, setError] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;

    if (!/^(?=.*[a-z])(?=.*[A-Z])/.test(password)) {
      return setError(
        "Password must include at least one uppercase and one lowercase letter!"
      );
    }
    if (password.length < 6) {
      return setError("Password must be at least 6 characters long!");
    }
    setError("");

    createUser(email, password)
      .then((result) => {
        updateUserInfo(name, photo);
        Toast.fire({
          icon: "success",
          title: "Registration successful",
        });
      })
      .catch((error) => {
        Toast.fire({
          icon: "error",
          title: "Registration failed!",
        });
      });
    form.reset();
  };

  return (
    <div className="hero">
      <Helmet>
        <title>Register || BookNest </title>
      </Helmet>
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left w-full">
          <Lottie className="" animationData={registerData}></Lottie>
        </div>
        <div className="card bg-base-100 w-full shadow-2xl">
          <h1 className="text-3xl mt-4 text-yellow-400 text-center font-bold">
            Register now!
          </h1>
          <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
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
                name="email"
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
                name="photo"
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
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              {error && <p className="text-sm text-red-500">{error}</p>}
            </div>
            <div className="form-control mt-6">
              <button
                type="submit"
                className="btn bg-gradient-to-r from-yellow-200 via-yellow-300 to-yellow-500"
              >
                Register
              </button>
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
