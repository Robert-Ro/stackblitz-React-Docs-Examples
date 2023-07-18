import * as React from 'react';

export const useFadeIn = (
  ref: React.RefObject<HTMLDivElement>,
  duration: number
) => {
  const [isRunning, setIsRunning] = React.useState<boolean>(true);

  useAnimationLoop(isRunning, (timePassed: number) => {
    const progress = Math.min(timePassed / duration, 1);
    ref.current.style.opacity = `${progress}`;
    if (progress === 1) {
      setIsRunning(false);
    }
  });
};

// 专门的动画处理钩子
// 使用useEffectEvent钩子
function useAnimationLoop(
  isRunning: boolean,
  drawFrame: (timePassed: number) => void
) {
  const onFrame = React.experimental_useEffectEvent(drawFrame);
  React.useEffect(() => {
    if (!isRunning) {
      return;
    }
    const startTime = performance.now();
    let frameId = null;
    function tick(now: number) {
      const timePassed = now - startTime;
      onFrame(timePassed);
      frameId = requestAnimationFrame(tick);
    }
    tick(startTime);
    return () => cancelAnimationFrame(frameId);
  }, [isRunning]);
}
