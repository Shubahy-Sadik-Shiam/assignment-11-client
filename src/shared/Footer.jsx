import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import logo from "../assets/icons8-books-96.png";
const Footer = () => {
  return (
    <footer className="footer gap-2  footer-center bg-gradient-to-r from-yellow-100 to-pink-200 py-4">
      <div className="md:flex">
        <div className="backdrop-blur-sm w-full space-y-4 py-4">
          <aside className="space-y-5 pt-4">
            <p className="font-bold">
              Book Nest Library Ltd.
              <br />
              Providing reliable service since 1992
            </p>
            <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
          </aside>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="flex items-center">
            <p className="text-3xl font-bold bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">
              BookNest
            </p>
            <img className="w-20 mx-auto" src={logo} alt="" />
          </div>
          <div className="flex gap-4">
            <a href="https://web.facebook.com/shorgo.shiam" target="_blank">
              <FaFacebook className="text-3xl bg-white text-blue-500 rounded-full" />
            </a>
            <a href="https://github.com/Shubahy-Sadik-Shiam" target="_blank">
              <FaGithub className="text-3xl" />
            </a>
            <a href="https://www.linkedin.com/in/shubahy-sadik-shiam/" target="_blank">
              <FaLinkedin className="text-3xl bg-white text-blue-500" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
