import React from 'react';

const StageProgressBar = ({ name, text, icon, status }) => {
  const isCompleted = status === 'completed';
  const isActive = status === 'active';

  let containerClasses = 'flex flex-col items-center p-4 rounded-lg transition-all duration-300 ease-in-out border border-transparent min-w-[120px]'; // min-width to prevent squishing
  let iconWrapperClasses = 'w-8 h-8 mb-2 flex items-center justify-center'; // Ensure icon is centered
  let iconClasses = 'w-full h-full'; // Make SVG fill its container
  let textClasses = 'text-sm font-medium text-center leading-tight'; // Use leading-tight for tighter text lines

  if (isCompleted) {
    containerClasses += ' bg-green-50 dark:bg-green-900/30';
    iconClasses += ' text-green-600 dark:text-green-400';
    textClasses += ' text-green-700 dark:text-green-300';
  } else if (isActive) {
    containerClasses += ' bg-indigo-50 dark:bg-indigo-900/50 ring-2 ring-indigo-500 dark:ring-indigo-400';
    iconClasses += ' text-indigo-600 dark:text-indigo-400';
    textClasses += ' text-indigo-700 dark:text-indigo-200';
  } else {
    containerClasses += ' bg-gray-100 dark:bg-gray-700';
    iconClasses += ' text-gray-500 dark:text-gray-400';
    textClasses += ' text-gray-700 dark:text-gray-300';
  }

  return (
    <div className={containerClasses}>
      <div className={iconWrapperClasses}>
        {React.cloneElement(icon, { className: iconClasses })}
      </div>
      <span className={textClasses}>{text}</span>
    </div>
  );
};

const AnalysisProgressSection = ({ title, description, stages }) => {
  return (
    <div className="max-w-5xl mx-auto p-4 sm:p-6 lg:p-8 flex flex-col items-center text-center bg-white dark:bg-gray-800 rounded-lg shadow-xl my-8">
      <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
        {title}
      </h1>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl">
        {description}
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6 w-full mt-8">
        {stages.map((stage) => (
          <StageProgressBar
            key={stage.name}
            name={stage.name}
            text={stage.text}
            icon={stage.icon}
            status={stage.status}
          />
        ))}
      </div>
    </div>
  );
};

export default AnalysisProgressSection;