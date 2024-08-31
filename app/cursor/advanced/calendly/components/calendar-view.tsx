'use client'

import React, { useState, useRef } from 'react';
import DateSlot from './date-slot';
import TimeSelector from './time-selector';

const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

export default function CalendarView({ onDateTimeSelect }: { onDateTimeSelect: (date: Date, time: string) => void }) {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectorPosition, setSelectorPosition] = useState({ top: 0, left: 0 });
  const calendarRef = useRef<HTMLDivElement>(null);

  const getDaysInMonth = (year: number, month: number) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (year: number, month: number) => {
    return new Date(year, month, 1).getDay();
  };

  const generateCalendarDays = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const daysInMonth = getDaysInMonth(year, month);
    const firstDayOfMonth = getFirstDayOfMonth(year, month);

    const days = [];
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(null);
    }
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(new Date(year, month, i));
    }
    return days;
  };

  const calendarDays = generateCalendarDays();

  const handleDateSelect = (date: Date, event: React.MouseEvent<HTMLDivElement>) => {
    setSelectedDate(date);
    if (calendarRef.current) {
      const rect = calendarRef.current.getBoundingClientRect();
      const target = event.target as HTMLDivElement;
      const targetRect = target.getBoundingClientRect();
      setSelectorPosition({
        top: targetRect.top - rect.top + targetRect.height,
        left: targetRect.left - rect.left
      });
    }
  };

  const handleTimeSelect = (time: string) => {
    if (selectedDate) {
      onDateTimeSelect(selectedDate, time);
      setSelectedDate(null);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-4 w-[350px] relative" ref={calendarRef}>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-800">
          {currentDate.toLocaleString('default', { month: 'long', year: 'numeric' })}
        </h2>
        <div className="space-x-1">
          <button onClick={() => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1))} className="px-2 py-1 bg-white border border-gray-300 rounded-md text-xs font-medium text-gray-700 hover:bg-gray-50 transition-colors duration-150">&lt;</button>
          <button onClick={() => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1))} className="px-2 py-1 bg-white border border-gray-300 rounded-md text-xs font-medium text-gray-700 hover:bg-gray-50 transition-colors duration-150">&gt;</button>
        </div>
      </div>
      <div className="grid grid-cols-7 gap-2 mb-2">
        {daysOfWeek.map((day) => (
          <div key={day} className="text-center text-xs font-medium text-gray-500">
            {day}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-2">
        {calendarDays.map((day, index) => (
          <DateSlot 
            key={index} 
            date={day} 
            currentMonth={currentDate.getMonth()} 
            currentDate={new Date()} // Pass the current date
            onSelect={handleDateSelect} 
          />
        ))}
      </div>
      {selectedDate && (
        <TimeSelector 
          date={selectedDate} 
          onSelect={handleTimeSelect} 
          onClose={() => setSelectedDate(null)} 
          position={selectorPosition}
        />
      )}
    </div>
  );
}