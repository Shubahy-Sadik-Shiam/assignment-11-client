import { Link, NavLink, useLocation } from "react-router-dom";
import logo from "../assets/icons8-books-96.png";
import useAuth from "../hooks/useAuth";
import { useEffect, useState } from "react";

const Navbar = () => {
  const { user, logOutUser } = useAuth();
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const [isDark, setIsDark] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      document.body.style.backgroundColor = "black";
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      document.body.style.backgroundColor = "#F4F1F8";
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/allBooks">All Books</NavLink>
      </li>
      <li>
        <NavLink to="/addBook">Add Book</NavLink>
      </li>
      <li>
        <NavLink to="/borrowedBooks">Borrowed Books</NavLink>
      </li>
      <li>
        <label className="flex cursor-pointer gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="5" />
            <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
          </svg>
          <input
            type="checkbox"
            value="dark"
            checked={isDark}
            onChange={() => setIsDark(!isDark)}
            className="toggle theme-controller"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
          </svg>
        </label>
      </li>
    </>
  );
  return (
    <header className="sticky top-0 z-10">
      <div
        className={`navbar py-4 md:px-10 ${
          location.pathname === "/" ? "fixed text-white" : ""
        } ${isScrolled ? "bg-opacity-30 backdrop-blur-lg" : "bg-transparent"}`}
      >
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-opacity-50 bg-gray-300 backdrop-blur-lg rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <div className="md:flex items-center gap-2">
            <Link
              to="/"
              className="text-3xl font-bold bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent"
            >
              BookNest
            </Link>
            <img className="w-14" src={logo} alt="" />
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <div className="flex items-center gap-2">
              <div
                className="tooltip tooltip-bottom"
                data-tip={user?.displayName}
              >
                <img
                  className="w-12 h-12 rounded-full"
                  src={user?.photoURL}
                  alt=""
                />
              </div>
              <button
                onClick={logOutUser}
                className="btn bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-500 rounded-lg hover:bg-gradient-to-l hover:from-yellow-500 hover:to-yellow-300 transition duration-500 font-bold"
              >
                Log out
              </button>
            </div>
          ) : (
            <div>
              {" "}
              <Link
                to="/login"
                className="btn bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-500 rounded-lg hover:bg-gradient-to-l hover:from-yellow-500 hover:to-yellow-300 transition duration-500 font-bold"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="btn bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-500 rounded-lg hover:bg-gradient-to-l hover:from-yellow-500 hover:to-yellow-300 transition duration-500 font-bold ml-2"
              >
                Register
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
