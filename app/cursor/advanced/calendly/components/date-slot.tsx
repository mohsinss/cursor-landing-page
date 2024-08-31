import React from 'react';

interface DateSlotProps {
  date: Date | null;
  currentMonth: number;
  currentDate: Date;
  onSelect: (date: Date, event: React.MouseEvent<HTMLDivElement>) => void;
}

export default function DateSlot({ date, currentMonth, currentDate, onSelect }: DateSlotProps) {
  if (!date) {
    return <div className="h-8"></div>;
  }

  const isCurrentMonth = date.getMonth() === currentMonth;
  const isToday = currentDate.toDateString() === date.toDateString();
  const isPastDate = date < new Date(currentDate.setHours(0, 0, 0, 0));

  return (
    <div
      className={`h-8 w-8 flex items-center justify-center transition-all duration-150 rounded-full
        ${isCurrentMonth ? (isPastDate ? 'text-gray-400' : 'text-gray-700') : 'text-gray-400'}
        ${isToday ? 'bg-blue-500 text-white' : ''}
        ${!isPastDate && !isToday ? 'hover:bg-gray-100 cursor-pointer' : 'cursor-default'}`}
      onClick={(event) => !isPastDate && onSelect(date, event)}
    >
      <div className="text-sm font-medium">{date.getDate()}</div>
    </div>
  );
}