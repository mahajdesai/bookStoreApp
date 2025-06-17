import React from "react";
import Navbar from "../components/Navbar";
import About from "../components/About";

function Abouts() {
  return (
    <>
      <div>
        <Navbar />
        <div className="min-h-screen dark:bg-slate-900 dark:text-white">
          <About />
        </div>
      </div>
    </>
  );
}

export default Abouts;
