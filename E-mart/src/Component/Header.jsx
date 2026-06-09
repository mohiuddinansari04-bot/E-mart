import React from "react";
import { FaCartArrowDown } from "react-icons/fa";
import { RiShoppingCart2Line } from "react-icons/ri";

function Header() {
  return (
    <nav className="bg-white shadow-lg p-4">
      <div className="max-w-9xl max-auto flex justify-between items-center md:flex-row sm:flex-col">
        <div className="flex items-center space-x-2">
          {" "}
          {/* Logo & heading */}
          <FaCartArrowDown />
          <h1 className="text-xl font-bold">E-Mart</h1>
        </div>
        <ul className="space-x-4  md:flex">
          <li><a href="#" className="text-bold hover:text-blue-500   ">Home</a></li>
         </ul>

        <button className="flex items-center space-x-1 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300">
           <RiShoppingCart2Line/>
           <span className="sm:inline ">Cart</span>
        </button>
      </div>
    </nav>
  );
}

export default Header;
