'use client'

import { useState } from 'react';
import CalendarView from './components/calendar-view';
import EventDescription from './components/event-description';

export default function CalendlyClone() {
    const [selectedDateTime, setSelectedDateTime] = useState<{ date: Date; time: string } | null>(null);

    const handleDateTimeSelect = (date: Date, time: string) => {
        setSelectedDateTime({ date, time });
    };

    const getTimeDifference = () => {
        if (!selectedDateTime) return '';
        const now = new Date();
        const meetingDate = new Date(selectedDateTime.date);
        meetingDate.setHours(parseInt(selectedDateTime.time.split(':')[0]), parseInt(selectedDateTime.time.split(':')[1]));
        const diffMs = meetingDate.getTime() - now.getTime();
        const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
        const diffHours = Math.floor((diffMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        return `in ${diffDays} days and ${diffHours} hours from now`;
    };

    return (
        <div className="flex flex-col space-y-8 p-8">
            {selectedDateTime && (
                <div className="bg-blue-100 p-4 rounded-lg text-blue-800">
                    Your meeting will be on {selectedDateTime.date.toDateString()} at {selectedDateTime.time} ({getTimeDifference()})
                </div>
            )}
            <div className="flex space-x-8">
                <div className="w-1/3">
                    <EventDescription />
                </div>
                <div className="w-2/3">
                    <CalendarView onDateTimeSelect={handleDateTimeSelect} />
                </div>
            </div>
        </div>
    );
}