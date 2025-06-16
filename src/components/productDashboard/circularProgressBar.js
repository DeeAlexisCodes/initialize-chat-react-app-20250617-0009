import React from 'react';

const CircularProgressBar = ({ progress, lastModified }) => {
  // Constants for SVG calculations
  const radius = 16;
  const circumference = 2 * Math.PI * radius;
  const strokeWidth = 4; // Defines the thickness of the progress bar

  // Calculate stroke-dasharray for the progress fill circle
  // The first value is the length of the dash (filled portion), the second is the length of the gap (remaining portion).
  // By setting the gap to the full circumference, any value for the dash will correctly represent the progress
  // within the full circle.
  const progressDashArray = `${(progress / 100) * circumference} ${circumference}`;

  // Determine the text to display based on the progress
  const progressText = progress === 100 ? 'Complete' : `${progress}% Complete`;

  return (
    <div className="flex items-center space-x-4 p-4 rounded-lg bg-white shadow-md">
      <div className="relative w-10 h-10">
        <svg className="w-full h-full transform -rotate-90 origin-center" viewBox="0 0 40 40">
          {/* Background circle - represents the full path */}
          <circle
            cx="20"
            cy="20"
            r={radius}
            strokeWidth={strokeWidth}
            className="stroke-gray-200 fill-none"
          />
          {/* Progress fill circle - represents the completed portion */}
          <circle
            cx="20"
            cy="20"
            r={radius}
            strokeWidth={strokeWidth}
            className="stroke-blue-500 fill-none stroke-linecap-round transition-all duration-500 ease-out"
            strokeDasharray={progressDashArray}
          />
        </svg>
      </div>
      <div className="flex flex-col">
        <p className="font-bold text-lg text-gray-800">
          {progressText}
        </p>
        <p className="text-sm text-gray-500">
          {lastModified}
        </p>
      </div>
    </div>
  );
};

export default CircularProgressBar;