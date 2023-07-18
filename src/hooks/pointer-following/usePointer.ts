import { useEffect, useState } from 'react';

export const usePointer = (delay: number) => {
  const [position, setPosition] = useState<{ x: number; y: number }>();
  useEffect(() => {
    const handler = (e: PointerEvent) => {
      setTimeout(() => {
        setPosition({ x: e.clientX, y: e.clientY });
      }, delay);
    };
    window.addEventListener('pointermove', handler);
    return () => {
      window.removeEventListener('pointermove', handler);
    };
  });
  return position;
};
