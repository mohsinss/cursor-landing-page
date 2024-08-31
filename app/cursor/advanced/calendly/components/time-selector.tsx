import React from 'react';

interface TimeSelectorProps {
  date: Date;
  onSelect: (time: string) => void;
  onClose: () => void;
  position: { top: number; left: number };
}

const availableTimes = [
  '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
  '13:00', '13:30', '14:00', '14:30', '15:00', '15:30',
  '16:00', '16:30', '17:00'
];

export default function TimeSelector({ date, onSelect, onClose, position }: TimeSelectorProps) {
  return (
    <div 
      className="absolute bg-white rounded-lg shadow-lg p-2 z-10 w-32 border border-gray-300"
      style={{ top: `${position.top}px`, left: `${position.left}px` }}
    >
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-sm font-semibold text-black">{date.getDate()}</h3>
        <button onClick={onClose} className="text-black hover:text-gray-700">&times;</button>
      </div>
      <div className="max-h-48 overflow-y-auto">
        {availableTimes.map((time) => (
          <button
            key={time}
            className="w-full text-left py-1 px-2 hover:bg-gray-100 transition-colors duration-150 text-sm text-black"
            onClick={() => onSelect(time)}
          >
            {time}
          </button>
        ))}
      </div>
    </div>
  );
}