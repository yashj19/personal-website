import React from 'react';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="py-16 bg-gray-100 flex flex-col items-center">
      {/* Contact Title */}
      <h2 className="text-4xl font-bold mb-12 text-center underline underline-offset-[10px] decoration-8 decoration-[#3bb399]">Contact Me</h2>
      
      {/* Contact Links */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 w-full max-w-4xl px-4">
        <div className="flex items-center">
          <FaEnvelope className="text-blue-500 text-4xl mr-4" />
          <a href="mailto:y6joshi@uwaterloo.ca" className="text-lg text-gray-700 hover:text-blue-500">
            y6joshi@uwaterloo.ca
          </a>
        </div>

        <div className="flex items-center">
          <FaGithub className="text-gray-800 text-4xl mr-4" />
          <a href="https://github.com/RubiksCoder" target="_blank" rel="noopener noreferrer" className="text-lg text-gray-700 hover:text-blue-500">
            github.com/RubiksCoder
          </a>
        </div>

        <div className="flex items-center">
          <FaLinkedin className="text-blue-700 text-4xl mr-4" />
          <a href="https://www.linkedin.com/in/yashj16/" target="_blank" rel="noopener noreferrer" className="text-lg text-gray-700 hover:text-blue-500">
            linkedin.com/in/yashj16
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
