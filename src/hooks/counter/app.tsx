import { useCounter } from './useCounter';
import { useInterval } from './useInterval';
import * as React from 'react';

export default function Counter() {
  const count = useCounter(1000);
  const ref = React.useRef<HTMLDivElement | null>();
  useInterval(() => {
    const randomColor = `hsla(${Math.random() * 360}, 100%, 50%, 0.2)`;
    if (ref.current) {
      ref.current.style.backgroundColor = randomColor;
    }
  }, 2000);

  return (
    <h1 ref={ref} style={{ padding: '10px' }}>
      Seconds passed: {count}
    </h1>
  );
}
