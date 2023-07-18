import * as React from 'react';

export default function ChatIndicator() {
  const isOnline = React.useSyncExternalStore(subscribe, getSnaptshot);
  return <h1>{isOnline ? '✅ Online' : '❌ Disconnected'}</h1>;
}

function getSnaptshot() {
  return navigator.onLine;
}

function subscribe(callback: () => void) {
  const handler = (e: Event) => {
    console.log(e);
    callback();
  };
  window.addEventListener('online', handler);
  window.addEventListener('offline', handler);
  return () => {
    window.removeEventListener('online', handler);
    window.removeEventListener('offline', handler);
  };
}
