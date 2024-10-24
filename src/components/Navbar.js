import React, { useState, useEffect } from 'react';
import logo from "../assets/personalLogo.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`bg-[#252525] text-white fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-4 px-7 transition-shadow duration-300 ${
        isScrolled ? 'shadow-md' : ''
      }`}
    >
      <div className="flex items-center">
        <a href="#home">
          <img src={logo} alt="Logo" className="w-10 h-auto rounded-xl" /> {/* Adjust size as needed */}
        </a>
      </div>
      <ul className="flex space-x-8">
        <li><a href="#projects" className="text-[1.1rem] hover:text-gray-400">Projects</a></li>
        <li><a href="#experience" className="text-[1.1rem] hover:text-gray-400">Experience</a></li>
        <li><a href="#contact" className="text-[1.1rem] hover:text-gray-400">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
