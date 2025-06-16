import React from 'react';

const AppHeader = () => {
  return (
    <header className="flex items-center justify-between px-4 py-3 bg-white border-b border-gray-200 shadow-sm">
      <a href="/" className="focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded">
        <img src="https://www.utom.dev/images/utom-workspace.svg" alt="Utom Logo" className="h-8 w-auto" />
      </a>
      <button
        type="button"
        className="px-4 py-2 text-white font-medium bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        onClick={() => alert('Login button clicked!')} // Example handler
      >
        Login
      </button>
    </header>
  );
};

export default AppHeader;