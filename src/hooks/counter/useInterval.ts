import * as React from 'react';

export function useInterval(callback, delay) {
  const onTick = React.experimental_useEffectEvent(callback);

  React.useEffect(() => {
    const id = setInterval(onTick, delay);
    return () => {
      clearInterval(id);
    };
  }, [delay]);
}
