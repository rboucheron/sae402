import React from "react";
import ReactDOM from "react-dom/client";

import Header from "./header.jsx";

import Objet from "./buggy/object.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./home.jsx";

import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: < Home />,
  },
  {
    path: "/object",
    element: <div className="mt-2"><Objet /></div>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Header />
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </React.StrictMode>
);
