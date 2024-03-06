import React from "react";
import ReactDOM from "react-dom/client";

import Header from "./header.jsx";
import Maps from "./maps.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Header />
    <h1 className="w-full text-center text-3xl text-blue mt-40">
      {" "}
      Devine dans quelles pays se trouve la plus part des communautés amish ?{" "}
    </h1>
    <div className="mt-10 w-5/6 m-auto">
      <Maps />
    </div>
  </React.StrictMode>
);
