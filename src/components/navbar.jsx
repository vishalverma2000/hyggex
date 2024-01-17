import React from "react";
import logo from "../Resource/Hy.png";

const Navbar = () => {
  return (
    <div>
      <nav className="flex justify-between items-center">
        <img src={logo} alt="" className="max-w-[150px]" />
        <div className="flex items-center gap-8">
          <ul className="flex gap-8">
            <li className="text-sm">
              <a href="/">Home</a>
            </li>
            <li className="text-sm">
              <a href="/">Flashcard</a>
            </li>
            <li className="text-sm">
              <a href="/">Contact</a>
            </li>
            <li className="text-sm">
              <a href="/">FAQ</a>
            </li>
          </ul>
          <button className="text-sm bg-gradient-to-b from-blue-900 to-blue-700 text-white px-[45px] py-[15px] rounded-medium">
            <a href="/">Login</a>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
