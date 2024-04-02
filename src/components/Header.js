import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/img/logo.svg";

const Header = () => {
  return (
    <header className="py-2 flex  justify-around mb-12  ">
        <div className="py-4 ">
          <NavLink to="/">
            <img
              className=" text-center mr-48"
              src={logo}
              alt=""
            />
          </NavLink>
        </div>

      <div className=" flex gap-6 items-center justify-between ">
         
             <NavLink
            className=" hover:bg-violet-700  hover:text-white px-4 py-3 rounded"
            to="" >
            {" "}
            Log In{" "}
          </NavLink>
        
            <NavLink
            className="bg-violet-700 hover:bg-violet-800 text-white px-4 py-3 rounded-lg"
            to="">
            {" "}
            Sign Up{" "}
          </NavLink>
        </div>
    </header>
  );
};

export default Header;
