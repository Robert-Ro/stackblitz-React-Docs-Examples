import * as React from 'react';
const localStorageKey = 'myKey';

// 获取当前状态的函数
function getLocalStorageState() {
  return localStorage.getItem(localStorageKey);
}

// 订阅器
function subscribeLocalStorageState(callback) {
  const onStorageChange = (event) => {
    if (event.key === localStorageKey) {
      callback();
    }
  };

  window.addEventListener('storage', onStorageChange);

  // 返回取消订阅的函数
  return () => {
    window.removeEventListener('storage', onStorageChange);
  };
}

export default function App() {
  const subscribeLocalStorageState = React.useCallback((callback) => {
    const onStorageChange = (event) => {
      console.log(event.key, 'event key');
      if (event.key === localStorageKey) {
        callback();
      }
    };

    window.addEventListener('storage', onStorageChange);

    // 返回取消订阅的函数
    return () => {
      window.removeEventListener('storage', onStorageChange);
    };
  }, []);

  const localStorageState = React.useSyncExternalStore(
    subscribeLocalStorageState,
    getLocalStorageState
  );

  return <div>{localStorageState}</div>;
}
