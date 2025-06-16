import React from 'react';

const PageHeader = () => {
  return (
    <header className="w-full p-4 flex justify-between items-center bg-gray-900 text-white shadow-md">
      <a href="/" className="flex-shrink-0">
        <img src="https://www.utom.dev/images/utom-workspace.svg" alt="Utom Logo" className="h-8 w-auto" />
      </a>
      <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-300 ease-in-out">
        Login
      </button>
    </header>
  );
};

export default PageHeader;