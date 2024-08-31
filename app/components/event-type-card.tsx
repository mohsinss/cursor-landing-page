import React from 'react';

interface EventTypeCardProps {
  title: string;
  duration: number;
  description: string;
  onClick: () => void;
  isSelected: boolean;
}

const EventTypeCard: React.FC<EventTypeCardProps> = ({ title, duration, description, onClick, isSelected }) => {
  return (
    <div 
      className={`border border-blue-500 rounded-lg p-4 mb-4 cursor-pointer transition-colors ${
        isSelected ? 'bg-blue-100' : 'hover:bg-gray-50'
      }`}
      onClick={onClick}
    >
      <h3 className="text-lg font-semibold text-black">{title}</h3>
      <p className="text-sm text-black">{duration} minutes</p>
      <p className="mt-2 text-sm text-black">{description}</p>
    </div>
  );
};

export default EventTypeCard;