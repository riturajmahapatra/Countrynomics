import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import Header from './components/Header.jsx';
import World from './components/World.jsx';
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/country',
    element: <World />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />{' '}
    {/* This is the header component which we will use in all our Pages */}
    <RouterProvider router={router} />
  </React.StrictMode>
);
