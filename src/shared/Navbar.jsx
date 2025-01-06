import { Link, NavLink } from "react-router-dom";
import logo from "../assets/icons8-books-96.png";
import useAuth from "../hooks/useAuth";

const Navbar = () => {

  const {user, logOutUser} = useAuth()

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
    </>
  );
  return (
    <header className="sticky top-0 z-10">
      <div className="navbar py-4 px-10 bg-opacity-50 backdrop-blur-lg shadow-md">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
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
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <div className="md:flex items-center gap-2">
            <a className="text-3xl font-bold bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">BookNest</a>
            <img className="w-16" src={logo} alt="" />
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
              <button onClick={logOutUser} className="btn bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-500 rounded-lg hover:bg-gradient-to-l hover:from-yellow-500 hover:to-yellow-300 transition duration-500 font-bold">
                Log out
              </button>
            </div>
          ) : (
            <div>
              {" "}
              <Link to="/login" className="btn bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-500 rounded-lg hover:bg-gradient-to-l hover:from-yellow-500 hover:to-yellow-300 transition duration-500 font-bold">
                Login
              </Link>
              <Link to="/register" className="btn bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-500 rounded-lg hover:bg-gradient-to-l hover:from-yellow-500 hover:to-yellow-300 transition duration-500 font-bold ml-2">
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
