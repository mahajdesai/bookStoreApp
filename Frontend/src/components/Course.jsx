import React from "react";
import list from "../../public/list.json";
import Cards from "./Cards";
import { Link } from "react-router-dom";

function Course() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 dark:bg-slate-900 dark:text-white">
        <div className="mt-28 items-center justify-center text-center dark:bg-slate-900 dark:text-white">
          <h1 className="text-2xl md:text-4xl">
            We're delighted to have you{" "}
            <span className="text-pink-500">Here! :)</span>
          </h1>
          <p className="mt-12">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            fuga molestiae necessitatibus corrupti enim temporibus suscipit
            ratione odio tempore voluptatem dolor sint dicta reprehenderit,
            nesciunt ipsum! Assumenda, aliquid. Necessitatibus cumque nesciunt
            vel recusandae ex provident sint esse culpa quasi, perspiciatis quis
            nam repellat? In qui, vero saepe repellat veniam labore?
          </p>
          <Link to="/">
            <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300 cursor-pointer">
              Back
            </button>
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
          {list.map((item) => (
            <Cards item={item} key={item.id} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Course;
