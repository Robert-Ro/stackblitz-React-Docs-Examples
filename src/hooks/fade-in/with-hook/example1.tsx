import * as React from 'react';
import './welcome.css';

const Welcome = () => {
  const ref = React.useRef<HTMLDivElement | null>(null);
  const gapRef = React.useRef<number>(0);
  React.useEffect(() => {
    // 操作dom，改变样式，为了更平缓，放到raf里面处理
    const duration = 5000;
    const node = ref.current;
    let startTime = performance.now();
    let frameId = null;
    gapRef.current = startTime;

    function onFrame(now: number) {
      const timePassed = now - startTime;

      const progress = Math.min(timePassed / duration, 1);
      // 确保每次执行在每一帧内执行： 时间间隔：100/60
      console.log({ progress, timePassed: timePassed - gapRef.current });
      gapRef.current = timePassed;
      onProgress(progress);
      if (progress < 1) {
        // still have more frames to paint
        frameId = requestAnimationFrame(onFrame);
      }
    }
    function onProgress(progress: number) {
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
  }, []);

  return (
    <h1 className="welcome" ref={ref}>
      Welcome
    </h1>
  );
};

export default function WithoutHook() {
  const [show, setShow] = React.useState<boolean>(false);
  return (
    <>
      <button
        onClick={() => {
          setShow((_) => !_);
        }}
      >
        {show ? 'Remove' : 'Show'}
      </button>
      <hr />
      {show && <Welcome />}
    </>
  );
}
