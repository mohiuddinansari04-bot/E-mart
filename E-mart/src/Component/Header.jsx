import React from 'react'
import { FaCartArrowDown } from "react-icons/fa";

function Header() {
  return (
    <header className="bg-gray-800 text-white flex justify-between ">
      <div className="text-3xl font-bold flex items-center">
         <FaCartArrowDown className="mr-2" />
        <h1 >E-Mart</h1>
      

      </div>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/products">Products</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
    </header>
    
   )
}

export default Header;