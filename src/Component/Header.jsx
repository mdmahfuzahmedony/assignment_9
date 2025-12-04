import React, { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router"; // Note: react-router-dom usually instead of react-router
import { AuthContext } from "../AuthContext/AuthContext";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  // Title effect
  useEffect(() => {
    document.title = "Header | ToyStore";
  }, []);

  // Theme Toggle Logic
  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.querySelector("html").setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = (e) => {
    if (e.target.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  const handleLogOut = () => {
    logOut()
      .then(() => console.log("User logged out successfully"))
      .catch((error) => console.error(error));
  };

  // Nav items list for reuse
  const navLinks = (
    <>
      <li>
        <NavLink
          to="/home"
          className={({ isActive }) =>
            isActive ? "font-bold text-yellow-400 bg-transparent" : "text-white hover:text-yellow-200"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/alltoy"
          className={({ isActive }) =>
            isActive ? "font-bold text-yellow-400 bg-transparent" : "text-white hover:text-yellow-200"
          }
        >
          All Items
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/blogs"
          className={({ isActive }) =>
            isActive ? "font-bold text-yellow-400 bg-transparent" : "text-white hover:text-yellow-200"
          }
        >
          Blogs
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "font-bold text-yellow-400 bg-transparent" : "text-white hover:text-yellow-200"
          }
        >
          About Us
        </NavLink>
      </li>
      {user && (
        <li>
          <NavLink
            to="/myprofile"
            className={({ isActive }) =>
              isActive ? "font-bold text-yellow-400 bg-transparent" : "text-white hover:text-yellow-200"
            }
          >
            My Profile
          </NavLink>
        </li>
      )}
    </>
  );

  return (
    // Sticky header with Full Width Purple Background
    <div className="sticky  top-0 z-50 bg-purple-700 shadow-lg transition-all duration-300">
      
      {/* Inner Content Centered with max-w-1400px */}
      <div className="max-w-[1600px] mx-auto px-4">
        <div className="navbar min-h-[4rem]">
          
          {/* Navbar Start - Logo & Mobile Menu */}
          <div className="navbar-start">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
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
              {/* Mobile Dropdown Menu (Needs dark text for visibility inside white box) */}
              <ul
                tabIndex="-1"
                className="menu menu-sm dropdown-content bg-base-100 text-base-content rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                {/* Mobile links need styling adjustment since bg is white here */}
                <li><NavLink to="/home">Home</NavLink></li>
                <li><NavLink to="/alltoy">All Items</NavLink></li>
                <li><NavLink to="/blogs">Blogs</NavLink></li>
                <li><NavLink to="/about">About Us</NavLink></li>
                {user && <li><NavLink to="/myprofile">My Profile</NavLink></li>}
                {!user && (
                  <>
                    <li><NavLink to="/login">Login</NavLink></li>
                    <li><NavLink to="/register">Register</NavLink></li>
                  </>
                )}
              </ul>
            </div>
            
            {/* Logo */}
            <NavLink to="/home" className="text-2xl md:text-[35px] font-bold text-white flex gap-1 items-center">
              Toy<span className="text-yellow-400">Land</span>
            </NavLink>
          </div>

          {/* Navbar Center - Desktop Menu */}
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 gap-2">
              {navLinks}
            </ul>
          </div>

          {/* Navbar End - Theme Toggle, User Profile, Buttons */}
          <div className="navbar-end gap-3 items-center">
            
            {/* Dark Mode Toggle Switch */}
            <label className="swap swap-rotate text-white hover:text-yellow-400 transition">
              <input type="checkbox" onChange={toggleTheme} checked={theme === "dark"} />
              
              {/* Sun Icon (Light Mode) */}
              <svg className="swap-on fill-current w-7 h-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,5.64,7.05Zm13.02,9.9a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,18.66,16.95ZM21,12a1,1,0,0,0-1-1H19a1,1,0,0,0,0,2h1A1,1,0,0,0,21,12Zm-7,7a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,14,19Zm4.24-9.17a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41l-.71-.71a1,1,0,0,0-1.41,0,1,1,0,0,0,0,1.41Z"/></svg>
              
              {/* Moon Icon (Dark Mode) */}
              <svg className="swap-off fill-current w-7 h-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Z"/></svg>
            </label>

            {/* Auth Buttons / Profile */}
            {user ? (
              <div className="flex items-center gap-3">
                {user.photoURL ? (
                  <div className="tooltip tooltip-bottom" data-tip={user.displayName || "User"}>
                     <img
                      src={user.photoURL}
                      alt="User"
                      className="w-10 h-10 rounded-full border-2 border-yellow-400 object-cover"
                    />
                  </div>
                ) : (
                  <div className="w-10 h-10 rounded-full bg-yellow-400 flex items-center justify-center text-purple-800 font-bold border-2 border-white">
                    {user.displayName ? user.displayName[0].toUpperCase() : "U"}
                  </div>
                )}
                <button
                  onClick={handleLogOut}
                  className="btn border-none bg-yellow-500 text-black hover:bg-red-600 btn-sm md:btn-md"
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="flex gap-2">
                <NavLink
                  to="/login"
                  className="btn border-none bg-yellow-400 text-purple-900 hover:bg-yellow-500 btn-sm md:btn-md font-bold"
                >
                  Login
                </NavLink>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;