import React from 'react';

const CreateNewProductCard = ({ onClick }) => {
  return (
    <button
      type="button"
      className="
        relative
        flex flex-col items-center justify-center
        p-6 md:p-8
        min-h-[200px] md:min-h-[240px]
        w-full
        bg-white
        border-2 border-dashed border-gray-300
        rounded-lg
        text-gray-500
        cursor-pointer
        transition-all duration-200 ease-in-out
        hover:border-blue-500 hover:bg-blue-50 hover:text-blue-600
        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
        group
        space-y-4
      "
      onClick={onClick}
    >
      <svg
        className="
          w-12 h-12
          text-gray-400
          group-hover:text-blue-500
          transition-colors duration-200
        "
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
      >
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="8" x2="12" y2="16" />
        <line x1="8" y1="12" x2="16" y2="12" />
      </svg>
      <h3
        className="
          text-xl font-semibold
          text-gray-700
          group-hover:text-blue-700
          transition-colors duration-200
        "
      >
        Create New Product
      </h3>
      <p
        className="
          text-sm text-center
          text-gray-500
          group-hover:text-blue-600
          transition-colors duration-200
        "
      >
        Start a new AI product scoping session
      </p>
    </button>
  );
};

export default CreateNewProductCard;