import React from 'react';

const Navbar = () => {
  return (
    <nav data-testid ="nav" className="pl-10 flex justify-between text-xl pt-2 italic bg-blue-900">
      <div className=' w-20 pt-4'>
        CRUD
      </div>
      <ul className='pr-8 flex justify-between w-30 mb-2'>
            <a href ="/home" data-testid ="home" className='cursor-pointer p-2 shadow-md border-solid rounded-xl ml-8 transition duration-500 ease-in-out bg-blue-700 hover:bg-blue-300 transform hover:-translate-y-1 hover:scale-110 text-white hover:text-blue-700'>
            Home
            </a>
            <li className='cursor-pointer p-2 shadow-md border-solid rounded-xl ml-8 transition duration-500 ease-in-out bg-blue-700 hover:bg-blue-300 transform hover:-translate-y-1 hover:scale-110 text-white hover:text-blue-700'>
            Menu
            </li>
            <li className='cursor-pointer p-2 shadow-md border-solid rounded-xl ml-8 transition duration-500 ease-in-out bg-blue-700 hover:bg-blue-300 transform hover:-translate-y-1 hover:scale-110 text-white hover:text-blue-700'>
            About
            </li>
            <li className='cursor-pointer p-2 shadow-md border-solid rounded-xl ml-8 transition duration-500 ease-in-out bg-blue-700 hover:bg-blue-300 transform hover:-translate-y-1 hover:scale-110 text-white hover:text-blue-700'>
            Contact
            </li>
      </ul>
    </nav>
  );
};

export default Navbar;