import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { Home } from './pages/home'
import './styles/app.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Home />} />
          </Routes>
      </BrowserRouter>
  </React.StrictMode>
)
