import { Link } from "react-router-dom";
import pic from "../assets/404-page.png.jpg";
import { Helmet } from "react-helmet";
const ErrorPage = () => {
  return (
    <div className="relative">
      <Helmet>
        <title>Error page || BookNest </title>
      </Helmet>
      <img className="max-h-screen" src={pic} alt="" />
      <Link to="/">
        <button className="absolute btn lg:w-52  lg:right-96 md:right-52 md:bottom-40 right-10 lg:bottom-10 md: w-40 bottom-20 bg-cyan-200">
          Back to Home
        </button>
      </Link>
    </div>
  );
};

export default ErrorPage;
