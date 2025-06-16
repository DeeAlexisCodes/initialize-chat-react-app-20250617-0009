import React from 'react';

const CardActionButtons = ({ onOpen, onNewVersion, isNewVersionDisabled }) => {
  return (
    <div className="flex gap-2">
      <button
        onClick={onOpen}
        className="px-4 py-2 rounded-md font-semibold text-sm transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed
                   bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500"
      >
        Open
      </button>
      <button
        onClick={onNewVersion}
        disabled={isNewVersionDisabled}
        className="px-4 py-2 rounded-md font-semibold text-sm transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed
                   bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-400"
      >
        New Version
      </button>
    </div>
  );
};

export default CardActionButtons;