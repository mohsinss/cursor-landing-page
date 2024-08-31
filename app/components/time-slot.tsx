import React from 'react';

interface TimeSlotProps {
  startTime: string;
  endTime: string;
  isAvailable: boolean;
}

const TimeSlot: React.FC<TimeSlotProps> = ({ startTime, endTime, isAvailable }) => {
  return (
    <button
      className={`w-full p-2 rounded-lg text-center transition-colors border ${
        isAvailable 
          ? 'bg-blue-100 text-black hover:bg-blue-200 border-blue-500' 
          : 'bg-gray-100 text-gray-400 cursor-not-allowed border-gray-300'
      }`}
      disabled={!isAvailable}
    >
      {startTime} - {endTime}
    </button>
  );
};

export default TimeSlot;