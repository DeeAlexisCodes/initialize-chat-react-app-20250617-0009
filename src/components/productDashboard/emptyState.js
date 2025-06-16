import React from 'react';

const EmptyState = ({ onCreateNewProduct }) => {
  return (
    <button
      type="button"
      className="group bg-white border-2 border-dashed border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center text-center cursor-pointer hover:border-blue-500 hover:text-blue-600 hover:shadow-lg transition-all duration-200 w-full max-w-sm min-h-48 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      onClick={onCreateNewProduct}
    >
      <svg
        className="w-12 h-12 mb-4 group-hover:scale-110 transition-transform duration-200"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
      >
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="8" x2="12" y2="16" />
        <line x1="8" y1="12" x2="16" y2="12" />
      </svg>
      <h3 className="text-xl font-semibold mb-2">Create New Product</h3>
      <p className="text-gray-600 text-sm">Start a new AI product scoping session</p>
    </button>
  );
};

export default EmptyState;