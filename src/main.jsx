import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Home from "./Home.jsx";
import Projects from "./Projects.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DeliveredApp from "./DeliveredApp.jsx";
import EWC from "./EWC.jsx";
import EStoreDatabaseSystem from "./EStoreDatabaseSystem.jsx";
import BuildMyPortfolio from "./BuildMyPortfolio.jsx";
import DinoDetectors from "./DinoDetectors.jsx";

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
  {
    path: "/businessWebsite",
    element: <EWC />,
  },
  {
    path: "/eStoreDB",
    element: <EStoreDatabaseSystem />,
  },
  {
    path: "/buildMyPortfolio",
    element: <BuildMyPortfolio />,
  },
  {
    path: "/dinoDetectors",
    element: <DinoDetectors />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
