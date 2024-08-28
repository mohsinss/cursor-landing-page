'use client'

import { useState, useEffect } from 'react';
import { useTextStream } from '@/hooks/useTextStream';

export default function Header() {
  const [visible, setVisible] = useState(true);
  const text = "Elevating Your Digital Experience";
  const { displayedText, isComplete } = useTextStream(text);

  useEffect(() => {
    if (isComplete) {
      const timeout = setTimeout(() => {
        setVisible(false);
      }, 2000);

      return () => clearTimeout(timeout);
    }
  }, [isComplete]);

  useEffect(() => {
    if (!visible) {
      const timeout = setTimeout(() => {
        setVisible(true);
      }, 2000);

      return () => clearTimeout(timeout);
    }
  }, [visible]);

  return (
    <header className="bg-blue-500 text-white p-4">
      <h1 className="text-2xl font-bold">
        {visible && (
          <span className="inline-block">
            {displayedText}
            <span className="animate-blink">|</span>
          </span>
        )}
      </h1>
    </header>
  );
}