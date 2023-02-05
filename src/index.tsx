import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.scss';
import { ThemeProvider } from 'context/theme';
import App from './app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
);
