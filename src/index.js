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
import Cursos from './cursos';
import Cert from './cert';
import Opo from './opo';
import Login from './login';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Inicio/>,
  },
  {
    path: "/cursos",
    element: <Cursos/>,
  },
  {
    path: "/cert",
    element: <Cert/>,
  },
  {
    path: "/opo",
    element: <Opo/>,
  },
  {
    path: "/login",
    element: <Login/>,
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
