import React from "react";
import { FaCartArrowDown } from "react-icons/fa";

function Header() {
  return (
   <nav className="bg-white shadow-lg p-4">
    <div className="max-w-7xl max-auto flex justify-between items-center">
    
      <div className="flex items-center space-x-2"> {/* Logo & heading */}
        <FaCartArrowDown/>
        <h1 className="text-xl font-bold">E-Mart</h1>
      </div>
      

    </div>

   </nav>
  );
}

export default Header;
