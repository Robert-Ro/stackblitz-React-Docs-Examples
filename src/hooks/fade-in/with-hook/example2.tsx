import * as React from 'react';
import { useFadeIn } from './useFadeIn';
import './welcome.css';

const Welcome = () => {
  const ref = React.useRef<HTMLDivElement | null>(null);
  useFadeIn(ref, 1000);
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
