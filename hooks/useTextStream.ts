import { useState, useEffect } from 'react';

export function useTextStream(text: string, delay: number = 50) {
  const [displayedText, setDisplayedText] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    let i = 0;
    setIsComplete(false);
    setDisplayedText('');

    const intervalId = setInterval(() => {
      setDisplayedText((prev) => prev + text[i]);
      i++;

      if (i === text.length) {
        clearInterval(intervalId);
        setIsComplete(true);
      }
    }, delay);

    return () => clearInterval(intervalId);
  }, [text, delay]);

  return { displayedText, isComplete };
}