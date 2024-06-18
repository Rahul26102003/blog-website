import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Home from './pages/Home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Blogs from './pages/Blogs';
import About from './pages/About';
import Contact from './pages/Contact';
import Services from './pages/Services';
import SingleBlog from './pages/SingleBlog';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/blogs",
        element: <Blogs/>,
      },
      {
        path: "/about",
        element: <About/>,
      },
      {
        path: "/contact",
        element: <Contact/>,
      },
      {
        path: "/services",
        element: <Services/>,
      },
      {
        path: "/blogs/:id",
        element: <SingleBlog/>,
        loader: ({params}) => fetch(`http://localhost:8000/blogs/${params.id}`)
      }
    ]
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);


