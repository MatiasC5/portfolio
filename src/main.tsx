import React from "react";
import ReactDOM from "react-dom/client";
import { Home } from "./components/Home/Home";
import { createHashRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import { Work } from "./components/Work/Work";

const router = createHashRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/work",
    element: <Work />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
