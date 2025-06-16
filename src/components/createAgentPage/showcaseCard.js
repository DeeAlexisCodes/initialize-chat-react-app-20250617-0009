import React from 'react';

const ShowcaseCard = ({ iconSvg, title, description, bgColorClass }) => {
  return (
    <div className={`${bgColorClass} flex flex-col items-center p-6 rounded-lg shadow-md text-center`}>
      <div className="w-20 h-20 mb-4 flex items-center justify-center">
        {/* Render the SVG content directly from the iconSvg prop */}
        <div className="w-full h-full" dangerouslySetInnerHTML={{ __html: iconSvg }} />
      </div>
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-base text-gray-600">{description}</p>
    </div>
  );
};

export default ShowcaseCard;