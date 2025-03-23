"use client";
import React, { useState } from 'react';
import { Bars3 } from '../../public/svg/svg';

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  
  const handleClick = () => {
      setIsOpen(!isOpen);
  };

return(
    
  <button onClick={handleClick} 
  className="flex flex-col justify-center items-center ">
    <Bars3></Bars3>
    <ul className={`transition duration-300 ease-in-out${isOpen ? 'not-sr-only':'sr-only'}`}>
        <li className={`bg-steel-500 block transition-all duration-300 ease-out ${isOpen ? 'opacity-100' : 'opacity-0'}`} >
                            <p>hi</p>
        </li>
        <li className={`bg-steel-500 block transition-all duration-300 ease-out 
                        h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? 
                        'opacity-100' : 'opacity-0'
                        }`} >
                            jjj
        </li>
        <li className={`pt-6 bg-steel-500 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? 'opacity-100' : 'opacity-0'}`} >
                            mmm
        </li>    
    </ul>
  </button>
  
)
};