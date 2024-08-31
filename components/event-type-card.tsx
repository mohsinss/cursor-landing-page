import React from 'react';

interface EventTypeCardProps {
  title: string;
  duration: number;
  description: string;
}

const EventTypeCard: React.FC<EventTypeCardProps> = ({ title, duration, description }) => {
  return (
    <div className="border rounded-lg p-4 shadow-sm">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-sm text-gray-600">{duration} minutes</p>
      <p className="mt-2 text-sm">{description}</p>
    </div>
  );
};

export default EventTypeCard;