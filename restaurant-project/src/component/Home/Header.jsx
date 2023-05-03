import React, { useEffect, useState } from "react";
import img from "../../../../restaurant-project/public/Images/1870126.png";
import { Link } from "react-router-dom";
import app from "../../firebase/firebase.config";
import { onAuthStateChanged, signOut, getAuth } from "firebase/auth";
const auth = getAuth();
const Header = () => {
  const [users, setUsers] = useState({});
  useEffect(() => {
    if (app) {
      onAuthStateChanged(auth, (user) => {
        setUsers(user);
      });
    }
  }, [app]);

  const logout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };

  console.log(users);

  return (
    <div>
      <div className="navbar bg-gray-700">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <Link to="/home">
                <li className="text-white">
                  <a>Home</a>
                </li>
              </Link>
              <Link to="/blog">
                <li className="text-white">
                  <a>Blog</a>
                </li>
              </Link>
              <Link to="/error">
                <li className="text-white">
                  <a>About</a>
                </li>
              </Link>
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl text-white">Khadok</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <Link to="/home">
              <li className="text-white">
                <a>Home</a>
              </li>
            </Link>
            <Link to="/blog">
              <li className="text-white">
                <a>Blog</a>
              </li>
            </Link>
            <Link to="/error">
              <li className="text-white">
                <a>About</a>
              </li>
            </Link>
          </ul>
        </div>

        <div className="navbar-end flex gap-2">
          <div className="w-10 rounded-full">
            <img className="w-10 rounded-full"  src={users?.photoURL} />
          </div>
          <div>
            {users ? (
              <button
                onClick={() => {
                  logout();
                }}
                className="btn btn-outline text-white"
              >
                Log out
              </button>
            ) : (
              <Link to="/login">
                <a className="btn btn-outline text-white">Log In</a>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
