import React from 'react'
import { FaCartArrowDown } from "react-icons/fa";

function Header() {
  return (
    <div className='max-w'>
   <nav className='bg-gray-800 shadow-lg text-white p-2 flex justify-between items-center '>
    <div className='flex items-center space-x-2 '>
      <FaCartArrowDown />
      <h1>E-Mart</h1>
    </div>
    <ul className='flex space-x-4'>
      <li className='hover:text-gray-300'><a href="/">Home</a></li>
      <li className='hover:text-gray-300'><a href="/products">Products</a></li>
      <li className='hover:text-gray-300'><a href="/about">About</a></li>
      <li className='hover:text-gray-300'><a href="/contact">Contact</a></li>
    </ul>

   </nav>
   </div>
    
   )
}

export default Header;