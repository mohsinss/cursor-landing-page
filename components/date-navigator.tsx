import React from 'react';

const DateNavigator: React.FC = () => {
  return (
    <div className="flex items-center space-x-4">
      <button className="px-3 py-1 bg-blue-500 text-white rounded-md">Today</button>
      <button>&lt;</button>
      <span>Current Month Year</span>
      <button>&gt;</button>
    </div>
  );
};

export default DateNavigator;