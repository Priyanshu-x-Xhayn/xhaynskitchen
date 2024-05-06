import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'; // Import createBrowserRouter and RouterProvider from 'react-router-dom'
import App from './App';
import Error from './Components/Error';
import RestaurantMenu from './Components/RestaurantMenu';
import 'tailwindcss/tailwind.css';
import Contact from './Components/Contact';
import About from './Components/About';
import Body from './Components/Body';
import Shimmer from './Components/Shimmer';
import Cart from './Components/Cart';

const BrowserRouter = createBrowserRouter([
  {
    path: '/',
    children: [
      {
        path: '/',
        element: <Body />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/restaurant/:resid',
        element: <RestaurantMenu />,
      },
      {
        path: '/cart',
        element: <Cart />,
      },
    ],
    element: <App />,
    errorElement: <Error />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render( // Use createRoot instead of ReactDOM.render
  <RouterProvider router={BrowserRouter}>
    <App />
  </RouterProvider>
);
