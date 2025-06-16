import React from 'react';

const StatusBadge = ({ status }) => {
  const normalizedStatus = status ? status.toLowerCase().replace(/ /g, '-') : 'default';

  const statusMap = {
    'in-progress': {
      textColor: 'text-orange-700',
      bgColor: 'bg-orange-100',
      labelText: 'In Progress'
    },
    'complete': {
      textColor: 'text-green-700',
      bgColor: 'bg-green-100',
      labelText: 'Complete'
    },
    'draft': {
      textColor: 'text-gray-700',
      bgColor: 'bg-gray-100',
      labelText: 'Draft'
    },
    'rejected': {
      textColor: 'text-red-700',
      bgColor: 'bg-red-100',
      labelText: 'Rejected'
    },
    'default': {
      textColor: 'text-gray-700',
      bgColor: 'bg-gray-100',
      labelText: 'Unknown Status'
    }
  };

  const { textColor, bgColor, labelText } = statusMap[normalizedStatus] || statusMap['default'];

  return (
    <span
      className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium gap-x-1.5 ${textColor} ${bgColor}`}
    >
      <div className="w-1.5 h-1.5 rounded-full bg-current"></div>
      {labelText}
    </span>
  );
};

export default StatusBadge;