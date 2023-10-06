import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import About from './pages/About'
import reportWebVitals from './reportWebVitals';
import Contacts from './pages/Contacts';
import Portfolio from './pages/Portfolio';
import PortfolioCard from './pages/PortfolioCard'
import Calc from './pages/portfolio/Calc/Calc'
import Weather from './pages/portfolio/Weather/WeatherApp'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element:  <App />,
  },
  {
    path: 'about',
    element: <About />
  },
  {
    path: 'contacts',
    element: <Contacts />
  },
  {
    path: 'portfolio',
    element: <Portfolio />
  },
  {
    path: 'portfolio/:id',
    element: <PortfolioCard /> 
  },
  {
    path: 'calc',
    element: <Calc />
  },
  {
    path: 'weather',
    element: <Weather />
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
