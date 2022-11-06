import React from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from './components/navbar';
import Footer from './components/footer';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import './styles/index.css';
import Inicio from './inicio';
import Info from './info';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Inicio/>,
  },
  {
    path: "/info",
    element: <Info/>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar/>
    <RouterProvider router={router} />
    <Footer/>
  </React.StrictMode>
);
