import * as React from 'react';
import './welcome.css';

const Welcome = () => {
  return <h1 className="welcome">Welcome</h1>;
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
