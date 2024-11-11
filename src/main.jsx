import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Убедись, что этот файл создан
import './index.css'; // Удали эту строку, если не используешь стили по умолчанию

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
