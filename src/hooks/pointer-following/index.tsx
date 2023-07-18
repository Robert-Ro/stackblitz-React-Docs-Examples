import * as React from 'react';
import { usePointer } from './usePointer';
interface Position {
  x: number;
  y: number;
}

const Dot = ({
  position,
  opacity,
}: {
  position: Position;
  opacity: number;
}) => {
  return (
    <div
      style={{
        width: 48,
        height: 48,
        borderRadius: '50%',
        position: 'absolute',
        transform: `translate(${position?.x || 0}px, ${position?.y || 0}px)`,
        pointerEvents: 'none',
        left: -24,
        top: -24,
        background: '#ff9500',
        opacity,
      }}
    ></div>
  );
};
export default () => {
  const position1 = usePointer(0);
  const position2 = usePointer(100);
  const position3 = usePointer(200);
  const position4 = usePointer(300);
  const position5 = usePointer(400);

  return (
    <div style={{ height: 400, position: 'relative' }}>
      <Dot position={position1} opacity={1} />
      <Dot position={position2} opacity={0.8} />
      <Dot position={position3} opacity={0.6} />
      <Dot position={position4} opacity={0.4} />
      <Dot position={position5} opacity={0.2} />
    </div>
  );
};
