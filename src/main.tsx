import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter,RouterProvider,} from "react-router-dom";
import Home from './routers/Home';
import Contact from './routers/Contact';

const router = createBrowserRouter([
  {
    path: "/", element: <Home/>
  },
  {
    path: "Contact", element: <Contact/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
  <RouterProvider router={router} />
  </React.StrictMode>,
)
