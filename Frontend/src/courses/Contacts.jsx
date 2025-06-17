import React from "react";
import Navbar from "../components/Navbar";
import Contact from "../components/Contact";

function Contacts() {
  return (
    <>
      <div>
        <Navbar />
        <div className="min-h-screen">
          <Contact />
        </div>
      </div>
      ;
    </>
  );
}

export default Contacts;
