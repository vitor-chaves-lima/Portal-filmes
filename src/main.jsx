import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";

import Home from "./pages/Home";
import MoviesListPage from "./pages/MovieListPage";
import MovieDetailPage from "./pages/MovieDetailPage";
import GenreListPage from "./pages/GenreListPage";
import MoviesPerGenrePage from "./pages/MoviesByGenrePage";

import App from "./App";
import PageNotFound from "./pages/PageNotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "*",
        element: <PageNotFound />,
      },
      {
        path: "/movies",
        children: [
          {
            index: true,
            element: <MoviesListPage />,
          },
          {
            path: ":id/details",
            element: <MovieDetailPage />,
          },
        ],
      },
      {
        path: "/genres",
        children: [
          {
            index: true,
            element: <GenreListPage />,
          },
          {
            path: "genres",
            element: <GenreListPage />,
          },
          {
            path: "genres/:id",
            element: <MoviesPerGenrePage />,
          },
        ],
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
