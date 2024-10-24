import React from 'react';

const ExperienceItem = ({ icon, title, company, bullets }) => {
  return (
    <div className="flex items-start">
      {/* Icon and Line */}
      <div className="flex flex-col items-center">
        <div className="w-12 h-12 flex justify-center items-center bg-blue-500 text-white rounded-full">
          {icon}
        </div>
        <div className="w-1 h-full bg-gray-300"></div> {/* Vertical Line */}
      </div>

      {/* Experience Content */}
      <div className="ml-8 mb-8">
        <h3 className="text-xl font-semibold">{title}</h3>
        <h4 className="text-gray-500 mb-2">{company}</h4>
        <ul className="list-disc ml-4 text-gray-700">
          {bullets.map((bullet, index) => (
            <li key={index}>{bullet}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ExperienceItem;
