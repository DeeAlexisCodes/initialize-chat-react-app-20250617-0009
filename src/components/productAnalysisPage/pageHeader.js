import React from 'react';

const PageHeader = ({ logoSrc, logoAlt, loginHref }) => {
  return (
    <header className="flex justify-between items-center p-4 bg-gray-100 shadow-md">
      <a href="/" className="block">
        <img src={logoSrc} alt={logoAlt} className="h-10" />
      </a>
      <a href={loginHref} className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">Login</a>
    </header>
  );
};

export default PageHeader;