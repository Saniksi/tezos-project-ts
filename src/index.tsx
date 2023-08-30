import React from 'react';
import ReactDOM from 'react-dom/client';

import { App } from './components/App';
import { ThemeProvider } from './context/ThemeContext';
import { BlocksProvider } from './context/BlocksContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <BlocksProvider>
        <App />
      </BlocksProvider>
    </ThemeProvider>
  </React.StrictMode>
);
