import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

if (typeof window !== 'undefined') {
  window.addEventListener(
    'error',
    (e) => {
      if (
        typeof e.message === 'string' &&
        e.message.includes('ResizeObserver loop')
      ) {
        e.stopImmediatePropagation();
        e.preventDefault();
      }
    },
    true
  );

  const NativeResizeObserver = window.ResizeObserver;
  if (NativeResizeObserver) {
    window.ResizeObserver = class extends NativeResizeObserver {
      constructor(callback: ResizeObserverCallback) {
        let rafId = 0;
        super((entries, observer) => {
          if (rafId) cancelAnimationFrame(rafId);
          rafId = requestAnimationFrame(() => {
            rafId = 0;
            callback(entries, observer);
          });
        });
      }
    };
  }
}

createRoot(document.getElementById('root')!).render(<App />);
