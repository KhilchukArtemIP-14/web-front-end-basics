import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router } from 'react-router-dom';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router basename="/web-front-end-basics/Lab7/"> 
      <App />
    </Router>
  </React.StrictMode>,
)
