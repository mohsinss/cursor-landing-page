import React from 'react';
import { format } from 'date-fns';

interface DateNavigatorProps {
  currentDate: Date;
  onPrevMonth: () => void;
  onNextMonth: () => void;
}

const DateNavigator: React.FC<DateNavigatorProps> = ({ currentDate, onPrevMonth, onNextMonth }) => {
  return (
    <div className="flex items-center justify-between mb-4">
      <button onClick={onPrevMonth} className="text-black hover:text-blue-700">&lt; Previous</button>
      <h2 className="text-xl font-semibold text-black">{format(currentDate, 'MMMM yyyy')}</h2>
      <button onClick={onNextMonth} className="text-black hover:text-blue-700">Next &gt;</button>
    </div>
  );
};

export default DateNavigator;