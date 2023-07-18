import * as React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

// import App from './storage';
// import App from './network';
// fadeIn examples
// import App from './hooks/fade-in/without-hook/app';
// import App from './hooks/fade-in/with-hook/example1';
import App from './hooks/fade-in/with-hook/example2';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);