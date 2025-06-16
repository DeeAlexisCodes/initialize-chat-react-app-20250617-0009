import React from 'react';

const ProductIcon = ({ category }) => {
  const categoryBackgrounds = {
    meal: 'bg-gradient-to-br from-orange-400 to-red-500',
    // Add more categories and their corresponding Tailwind gradient classes here
    // Example:
    // dairy: 'bg-gradient-to-br from-blue-300 to-cyan-500',
    // vegetable: 'bg-gradient-to-br from-green-300 to-lime-500',
    // meat: 'bg-gradient-to-br from-red-600 to-pink-700',
    // fruit: 'bg-gradient-to-br from-pink-300 to-purple-500',
  };

  const backgroundClass = categoryBackgrounds[category] || 'bg-gray-400'; // Fallback to a default grey background if category not found

  return (
    <div
      className={`w-12 h-12 rounded-full flex items-center justify-center text-white ${backgroundClass}`}
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className="w-[18px] h-[18px]"
      >
        <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" />
        <path d="M7 2v20" />
        <path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3z" />
      </svg>
    </div>
  );
};

export default ProductIcon;