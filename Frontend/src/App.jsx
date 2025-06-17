import React from "react";
import Home from "./home/Home";
import { Route, Routes } from "react-router-dom";
import Courses from "./courses/Courses";
import Signup from "./components/Signup";
import Contact from "./components/Contact";
import Contacts from "./courses/Contacts";
import Abouts from "./courses/Abouts";

function App() {
  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/course" element={<Courses />}></Route>
          <Route path="/contact" element={<Contacts />}></Route>
          <Route path="/about" element={<Abouts />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
