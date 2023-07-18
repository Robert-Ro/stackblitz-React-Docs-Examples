import * as React from 'react';

export const useFadeIn = (
  ref: React.RefObject<HTMLDivElement>,
  duration: number
) => {
  React.useEffect(() => {
    // 操作dom，改变样式，为了更平缓，放到raf里面处理
    const node = ref.current;
    let startTime = performance.now();
    let frameId = null;

    function onFrame(now: number) {
      const timePassed = now - startTime;

      const progress = Math.min(timePassed / duration, 1);
      // 确保每次执行在每一帧内执行： 时间间隔：100/60
      onProgress(progress);
      if (progress < 1) {
        // still have more frames to paint
        frameId = requestAnimationFrame(onFrame);
      }
    }
    function onProgress(progress: number) {
      console.log(progress);
      node.style.opacity = `${progress}`;
    }
    function start() {
      onProgress(0);
      startTime = performance.now();
      frameId = requestAnimationFrame(onFrame);
    }
    function stop() {
      cancelAnimationFrame(frameId);
      startTime = null;
      frameId = null;
    }
    start();
    return () => stop();
    // }, [ref, duration]);
  }, [duration]);
};
