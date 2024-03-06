// eslint-disable-next-line no-unused-vars
import React from "react";
import IMAGES from "./assets/ressources";

function header() {
  return (
    <header className="m-2 flex fixed top-2 w-full">
      <img src={IMAGES["logo"]} className="w-24" alt="" />
      <div className="bg-purple w-1/3 m-auto rounded-full flex space-x-8 justify-center p-4">
        <a
          href=""
          className="text-blue text-xl transition ease-in-out delay-150   hover:text-sky duration-300"
        >
          Home
        </a>
        <a
          href=""
          className="text-blue text-xl transition ease-in-out delay-150   hover:text-sky duration-300"
        >
          Maps
        </a>
        <a
          href=""
          className="text-blue text-xl transition ease-in-out delay-150   hover:text-sky duration-300"
        >
          Objets
        </a>
        <a
          href=""
          className="text-blue text-xl transition ease-in-out delay-150   hover:text-sky duration-300"
        >
          Histoire
        </a>
      </div>
    </header>
  );
}

export default header;
