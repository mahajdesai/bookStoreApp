import React from "react";
import banner from "../../public/banner_book.png";

const Banner = () => {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10 dark:bg-slate-900 dark:text-white">
        <div className="w-full order-2 md:order-1 md:w-1/2 mt-12 md:mt-32">
          <div className="space-y-12">
            <h1 className="text-4xl font-bold">
              Hello, welcomes here to learn something
              <span className="text-pink-500"> new everyday!!!</span>
            </h1>
            <p className="text-xl">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Molestiae quo dolorum quas nesciunt! Asperiores ex laborum fugit
              minus sunt modi molestias. Obcaecati, libero facilis.
            </p>

            <label className="input email-input flex items-center gap-2 dark:bg-white dark:text-black">
              <svg
                className="w-4 h-4 opacity-70"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </g>
              </svg>
              <input type="email" placeholder="Email" cl />
            </label>
          </div>
          <button className="btn mt-6 btn-secondary">Get Started</button>
        </div>
        <div className="w-full order-1 md:w-1/2">
          <img src={banner} alt="banner" />
        </div>
      </div>
    </>
  );
};

export default Banner;
