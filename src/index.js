
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'



createRoot(document.getElementById('root')).render(
<React.StrictMode>
<BrowserRouter>
<App />
</BrowserRouter>
</React.StrictMode>
)
reportWebVitals();

if (!('theme' in localStorage)) {
  localStorage.theme = 'light' 
}

if (localStorage.theme === 'dark') {
  document.documentElement.classList.add('dark')
} else {
  document.documentElement.classList.remove('dark')
}
