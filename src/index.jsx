import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import Articles from './components/Articles/Articles';
import Reviews from './components/Reviews/Reviews';
import Home from './components/Home/Home';
import Movies from './components/Movies/Movies';
import Menu from './components/Menu/Menu';
import {
  createBrowserRouter,
  RouterProvider,
  Link,
  Outlet,
  useParams
} from "react-router-dom";
import Movie from './components/Movie/Movie';

const App = () => {
  return (
    <div className="container">
      <header>
        <Menu/>
      </header>
      <main>
        <Outlet/>
      </main>
      <footer>
        <p>Czechitas, Digitální akademie: Web</p>
      </footer>
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/reviews",
        element: <Reviews />,
      },
      {
        path: "/articles",
        element: <Articles />,
      },
      {
        path: "/movies",
        element: <Movies/>,
        children: [{
          path: "/movies/:Id",
          element: <Movie/>}
        ]
      }
    ]
    
    
  },
]);


createRoot(document.querySelector("#app")).render(
  <RouterProvider router={router} />
);



/* 
errorElement: <ErrorPage />,
children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/centers",
        element: <CentersPage/>,
      }
    ]*/