// eslint-disable-next-line no-unused-vars
import React from "react";
import IMAGES from "./assets/ressources";

function header() {
  return (
    <header className="m-2 flex fixed top-2 w-full">
      <img src={IMAGES["logo"]} className="w-24" alt="" />


    </header>
  );
}

export default header;
