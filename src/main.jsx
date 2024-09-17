import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Home from "./Home.jsx";
import Projects from "./Projects.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DeliveredApp from "./DeliveredApp.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    exact: true,
  },
  {
    path: "/projects",
    element: <Projects />,
  },
  {
    path: "/delivered",
    element: <DeliveredApp />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
