import React from 'react';

interface TimeSlotProps {
  day: number;
  time: string;
}

export default function TimeSlot({ day, time }: TimeSlotProps) {
  const isAvailable = Math.random() > 0.3; // Simulating availability

  if (!isAvailable) {
    return <div className="h-8"></div>; // Empty space for unavailable slots
  }

  return (
    <div
      className="h-8 flex items-center justify-center cursor-pointer transition-all duration-150 bg-blue-50 hover:bg-blue-100 rounded-md"
      onClick={() => {
        alert(`Slot selected: ${day} at ${time}`);
      }}
    >
      <div className="text-xs font-medium text-blue-700">{time}</div>
    </div>
  );
}