import React from "react";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col justify-center items-center">
        <div className="mt-28 shadow-accent md:h-[450px] p-5 ">
          <h1 className="text-2xl md:text-4xl font-bold">Contact Us</h1>
          <form action="#">
            {/* Name */}
            <div className="space-y-2 mt-5">
              <span>Name</span>
              <br />
              <input
                type="text"
                className="w-80 md:w-120 mt-2 dark:border-[1px] shadow-md rounded-md outline-none px-4 py-2"
                placeholder="Enter your name"
              />
            </div>
            {/* Email */}
            <div className="space-y-2 mt-5">
              <span>Email</span>
              <br />
              <input
                type="text"
                col={14}
                row={14}
                className="w-80 md:w-120 mt-2 dark:border-[1px] shadow-md rounded-md outline-none px-4 py-2"
                placeholder="Enter your Email"
              />
            </div>
            {/* Address */}
            <div className="space-y-2 mt-5">
              <span>Message</span>
              <br />
              <textarea
                type="text"
                cols={10}
                rows={5}
                className="w-80 md:w-120 mt-2 dark:border-[1px] shadow-md rounded-md outline-none px-4 py-2"
                placeholder="Type your message"
              />
            </div>
          </form>
          {/* Buttons */}
          <div className="flex justify-between p-2 mt-4">
            <button className="bg-blue-500 cursor-pointer hover:bg-blue-900 mt-4 text-white px-3 py-1 rounded-md">
              Submit
            </button>
            <Link
              to="/"
              className="bg-gray-500 cursor-pointer hover:bg-gray-700 mt-4 text-white px-3 py-1 rounded-md"
            >
              Cancel
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
