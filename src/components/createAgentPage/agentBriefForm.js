import React from 'react';

const AgentBriefForm = ({ inputParagraphs, onParagraphChange, onAddParagraph, onSubmit, isSubmitEnabled }) => {
  return (
    <div className="flex flex-col p-6 max-w-3xl mx-auto bg-white shadow-lg rounded-xl space-y-6">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold text-gray-900">Let's scope your new AI agent</h1>
        <p className="text-lg text-gray-600">Start with the big picture. Describe your core idea, and our AI will create a comprehensive development brief to get you started.</p>
      </div>
      <div className="w-full">
        <div className="space-y-4">
          {inputParagraphs.map((paragraph, index) => (
            <textarea
              key={index}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-y min-h-[100px] text-gray-800 placeholder-gray-400"
              placeholder="e.g., An AI agent that helps busy families plan their weekly meals, taking into account allergies and picky eaters..."
              value={paragraph}
              onChange={(e) => onParagraphChange(index, e.target.value)}
            ></textarea>
          ))}
        </div>
      </div>
      <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0 sm:space-x-4 mt-4">
        <button
          className="flex items-center justify-center space-x-2 px-4 py-2 bg-blue-50 border border-blue-200 text-blue-700 rounded-lg hover:bg-blue-100 transition-colors duration-200 w-full sm:w-auto"
          onClick={onAddParagraph}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <line x1="5" y1="12" x2="19" y2="12"></line>
          </svg>
          Add another paragraph
        </button>
        <button
          className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed w-full sm:w-auto"
          onClick={onSubmit}
          disabled={!isSubmitEnabled}
        >
          Build My Agent Brief
        </button>
      </div>
    </div>
  );
};

export default AgentBriefForm;