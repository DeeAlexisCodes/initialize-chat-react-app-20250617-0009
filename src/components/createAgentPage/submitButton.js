import React from 'react';

const SubmitButton = ({ onClick, isDisabled }) => {
  return (
    <button
      className="bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
      disabled={isDisabled}
      onClick={onClick}
    >
      Build My Agent Brief
    </button>
  );
};

export default SubmitButton;