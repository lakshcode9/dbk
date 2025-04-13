import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import './styles/animations.css';

const renderApp = () => {
  try {
    const rootElement = document.getElementById('root');
    if (!rootElement) {
      throw new Error('Root element not found');
    }

    createRoot(rootElement).render(
      <StrictMode>
        <App />
      </StrictMode>
    );
  } catch (error) {
    console.error('Application initialization error:', error);
    const rootElement = document.getElementById('root');
    if (rootElement) {
      rootElement.innerHTML = `
        <div style="padding: 20px; text-align: center; font-family: system-ui, -apple-system, sans-serif;">
          <h2 style="color: #e11d48;">Application Error</h2>
          <p style="color: #4b5563;">
            We're experiencing technical difficulties. Please try refreshing the page.
            If the problem persists, check the browser console for more details.
          </p>
        </div>
      `;
    }
  }
};

renderApp();