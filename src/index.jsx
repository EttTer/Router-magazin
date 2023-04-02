import React from "react";
import { createRoot } from "react-dom/client";
import "./style.css";
import Articles from "./components/Articles/Articles";
import Reviews from "./components/Reviews/Reviews";
import Home from "./components/Home/Home";
import Movies from "./components/Movies/Movies";
import Menu from "./components/Menu/Menu";
import {
  createBrowserRouter,
  RouterProvider,
  Link,
  Outlet,
  useParams,
} from "react-router-dom";
import Movie from "./components/Movie/Movie";

const App = () => {
  return (
    <div className="container">
      <header>
        <Menu />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <p> Zkušební aplikace</p>
      </footer>
    </div>
  );
};

const ErrorPage = () => {
  return (
    <main>
      <h2>404: Škoda, asi čekáte něco, co tu není </h2>
      <p>Možná jste se spletli, zkuste to jinak</p>
    </main>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
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
        element: <Movies />,
        children: [
          {
            path: "/movies/:Id",
            element: <Movie />,
          },
        ],
      },
    ],
  },
]);

createRoot(document.querySelector("#app")).render(
  <RouterProvider router={router} />
);

