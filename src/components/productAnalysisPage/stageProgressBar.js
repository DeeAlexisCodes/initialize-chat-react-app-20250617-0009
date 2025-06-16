import React from 'react';

// StageCard Component (Child Component)
// This component represents a single stage in the progress bar, displaying its icon, text, and status.
const StageCard = ({ id, text, icon, status }) => {
  const isCompleted = status === 'completed';
  const isActive = status === 'active';

  // Base styling for the card, including responsiveness and hover effects.
  let cardClasses = 'flex flex-col items-center text-center p-4 rounded-lg shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg';
  // Base styling for the icon container, responsible for size and margin.
  let iconContainerClasses = 'w-8 h-8 mb-2';
  // Base styling for the text label.
  let textClasses = 'text-sm font-medium whitespace-nowrap';

  // Apply conditional styling based on the stage's status.
  if (isActive) {
    // Styling for the active stage.
    cardClasses += ' bg-indigo-100 text-indigo-700 ring-2 ring-indigo-500';
    iconContainerClasses += ' text-indigo-500'; // Icon color for active state
  } else if (isCompleted) {
    // Styling for completed stages.
    cardClasses += ' bg-green-100 text-green-700';
    iconContainerClasses += ' text-green-500'; // Icon color for completed state
  } else {
    // Default styling for pending/inactive stages.
    cardClasses += ' bg-white text-gray-700';
    iconContainerClasses += ' text-gray-500'; // Default icon color
  }

  return (
    <div className={cardClasses} data-stage={id}>
      <div className={iconContainerClasses}>
        {icon} {/* The SVG icon is passed as a ReactNode prop */}
      </div>
      <span className={textClasses}>{text}</span>
    </div>
  );
};

// StageProgressBar Component (Main Component)
// This component displays a grid of StageCard components, visualizing product analysis progress.
const StageProgressBar = ({ stages }) => {
  // Mapping of stage IDs to their corresponding SVG icons, extracted from the original HTML.
  const stageIcons = {
    goals: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg>
    ),
    personas: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle></svg>
    ),
    features: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
    ),
    metrics: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>
    ),
    flows: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 10v4c0 .55.45 1 1 1h3l7-7-7-7H4c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h3"></path><path d="M14 17l7-7-7-7"></path></svg>
    ),
    context: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
    ),
  };

  // Define a default set of stages if the 'stages' prop is not provided or is empty.
  // This ensures the component can render with example data out-of-the-box.
  const defaultStages = [
    { id: 'goals', name: 'Defining Goals', status: 'completed' },
    { id: 'personas', name: 'User Personas', status: 'active' },
    { id: 'features', name: 'Core Features', status: 'pending' },
    { id: 'metrics', name: 'Success Metrics', status: 'pending' },
    { id: 'flows', name: 'User Flows', status: 'pending' },
    { id: 'context', name: 'Finalizing Context', status: 'pending' },
  ];

  // Determine which set of stages to render: provided props or default.
  const stagesToRender = stages && stages.length > 0 ? stages : defaultStages;

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 p-4 max-w-7xl mx-auto">
      {stagesToRender.map((stage) => (
        <StageCard
          key={stage.id} // Essential for list rendering in React
          id={stage.id}
          text={stage.name}
          icon={stageIcons[stage.id]} // Pass the corresponding SVG JSX to the StageCard
          status={stage.status}
        />
      ))}
    </div>
  );
};

export default StageProgressBar;