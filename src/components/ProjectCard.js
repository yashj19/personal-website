import React from 'react';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'; // React Icons for GitHub icon
import ChipList from './ChipList';

const ProjectCard = ({ imageSrc, title, subtitle, githubLink, skills }) => {
  return (

    <div
      className="w-80 bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer transition-transform transform hover:scale-105"
    >
      <a
        href={githubLink}
        target="_blank"
        rel="noopener noreferrer"
      >
        {/* Card Image */}
        <img src={imageSrc} alt="Project Image" className="w-full h-48 object-cover" />
        
        {/* Card Content */}
        <div className="p-4">
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center mt-4 text-[#3bb399] hover:underline"
            onClick={(e) => e.stopPropagation()} // Prevent click on link from triggering card click
          >
            <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
          </a>
          <p className="text-gray-600 mt-2">{subtitle}</p>

          <ChipList chips={skills} color='#fe9c4b'></ChipList>
        </div>
      </a>
    </div>
  );
};

export default ProjectCard;
