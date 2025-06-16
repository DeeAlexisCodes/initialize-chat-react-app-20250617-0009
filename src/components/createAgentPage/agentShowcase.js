import React from 'react';

const AgentShowcase = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
      <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md">
        <div className="flex items-center justify-center w-16 h-16 mb-4">
          <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="24" cy="24" r="22" fill="#fff" stroke="#D8F0F1" strokeWidth="4"></circle>
            <circle cx="24" cy="24" r="10" stroke="#00A9B2" strokeWidth="2.5"></circle>
            <line x1="24" y1="28" x2="24" y2="22" stroke="#00A9B2" strokeWidth="2.5" strokeLinecap="round"></line>
            <line x1="24" y1="18" x2="24.01" y2="18" stroke="#00A9B2" strokeWidth="3.5" strokeLinecap="round"></line>
          </svg>
        </div>
        <h3 className="text-xl font-semibold mb-2 text-gray-800">Focus on the "Why"</h3>
        <p className="text-base leading-relaxed text-gray-600">Start with the core problem. A clear problem statement leads to a clear solution.</p>
      </div>

      <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md">
        <div className="flex items-center justify-center w-16 h-16 mb-4">
          <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="24" cy="24" r="22" fill="#fff" stroke="#FFE9A9" strokeWidth="4"></circle>
            <path d="M31 32V30C31 27.2386 28.7614 25 26 25H22C19.2386 25 17 27.2386 17 30V32" stroke="#F2C94C" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"></path>
            <circle cx="24" cy="20" r="4" stroke="#F2C94C" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"></circle>
          </svg>
        </div>
        <h3 className="text-xl font-semibold mb-2 text-gray-800">Describe Your Target User</h3>
        <p className="text-base leading-relaxed text-gray-600">Who is this for? Be specific. This helps tailor every feature to their needs.</p>
      </div>

      <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md">
        <div className="flex items-center justify-center w-16 h-16 mb-4">
          <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="24" cy="24" r="22" fill="#fff" stroke="#D5E9D9" strokeWidth="4"></circle>
            <path d="M20 20H32" stroke="#27AE60" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"></path>
            <path d="M20 26H32" stroke="#27AE60" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"></path>
            <path d="M20 32H32" stroke="#27AE60" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"></path>
            <path d="M16 20H16.01" stroke="#27AE60" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path>
            <path d="M16 26H16.01" stroke="#27AE60" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path>
            <path d="M16 32H16.01" stroke="#27AE60" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path>
          </svg>
        </div>
        <h3 className="text-xl font-semibold mb-2 text-gray-800">List Key Features</h3>
        <p className="text-base leading-relaxed text-gray-600">What are the must-have functions? Prioritize the 1-3 most important things the product must do.</p>
      </div>
    </div>
  );
};

export default AgentShowcase;