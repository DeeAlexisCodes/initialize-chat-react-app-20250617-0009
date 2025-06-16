import React from 'react';

const StageCard = ({ name, initialIconSvg, status }) => {
  let cardBgClass;
  let textColorClass;
  let iconColorClass;

  switch (status) {
    case 'pending':
      cardBgClass = 'bg-gray-100';
      textColorClass = 'text-gray-700';
      iconColorClass = 'text-gray-500';
      break;
    case 'processing':
      cardBgClass = 'bg-blue-100';
      textColorClass = 'text-blue-800';
      iconColorClass = 'text-blue-600';
      break;
    case 'done':
      cardBgClass = 'bg-green-100';
      textColorClass = 'text-green-800';
      iconColorClass = 'text-green-600';
      break;
    default:
      // Default to pending styles if status is unrecognized
      cardBgClass = 'bg-gray-100';
      textColorClass = 'text-gray-700';
      iconColorClass = 'text-gray-500';
  }

  const baseCardClasses = `
    flex items-center space-x-3 p-4 rounded-lg
    transition-all duration-300 ease-in-out transform
    cursor-pointer select-none
    ${cardBgClass}
    ${textColorClass}
    hover:shadow-lg hover:scale-105
  `.replace(/\s+/g, ' ').trim();

  const iconWrapperClasses = `
    flex-shrink-0 w-8 h-8 flex items-center justify-center
    ${iconColorClass}
    ${status === 'processing' ? 'animate-pulse' : ''}
  `.replace(/\s+/g, ' ').trim();

  const textClasses = `font-medium`;

  return (
    <div className={baseCardClasses}>
      {/* The SVG is injected here. Its 'currentColor' attribute will pick up iconColorClass. */}
      <div
        className={iconWrapperClasses}
        dangerouslySetInnerHTML={{ __html: initialIconSvg }}
      />
      <span className={textClasses}>{name}</span>
    </div>
  );
};

export default StageCard;