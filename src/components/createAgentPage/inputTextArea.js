import React from 'react';

const InputTextArea = ({ value, onChange, placeholder }) => {
  return (
    <textarea
      className="block w-full px-3 py-2 text-gray-900 rounded-md border border-gray-300 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 focus:border-blue-500 sm:text-sm sm:leading-6 resize-y min-h-[100px]"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    ></textarea>
  );
};

export default InputTextArea;