import React from 'react';
import { hydrateRoot } from 'react-dom/client';
import { App } from '../app';

window.addEventListener('load', () => {
  hydrateRoot(document.getElementById('react_root'), <App />);
});
