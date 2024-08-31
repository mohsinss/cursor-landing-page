import React from 'react';

interface TimeSlotProps {
  startTime: string;
  endTime: string;
  isAvailable: boolean;
}

const TimeSlot: React.FC<TimeSlotProps> = ({ startTime, endTime, isAvailable }) => {
  return (
    <div className={`p-2 rounded-lg ${isAvailable ? 'bg-green-100' : 'bg-gray-100'}`}>
      <p className="text-sm font-medium">{startTime} - {endTime}</p>
    </div>
  );
};

export default TimeSlot;