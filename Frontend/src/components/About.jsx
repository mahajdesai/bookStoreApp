import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col justify-center items-center">
      {/* About Heading */}
      <div className="mt-28 text-center">
        <h1 className="font-bold mb-4 text-2xl md:text-4xl">About Books</h1>
        <p>
          Books are physical or digital collections of written or illustrated
          pages, bound together, and typically containing stories, information,
          or both. They serve as a powerful medium for preserving and
          transmitting knowledge, fostering imagination, and providing
          entertainment. Throughout history, books have evolved from scrolls and
          tablets to the bound codex format we recognize today, and continue to
          be a vital part of human culture.
        </p>
        <br />
        <mark className="md:px-2">
          Books play a crucial role in individual development and societal
          advancement, contributing to learning, cultural enrichment, and the
          preservation of human knowledge.{" "}
        </mark>
      </div>
      {/* Slider of Image */}
      <div>
        <div className="carousel w-full h-100 mt-10">
          <div id="slide1" className="carousel-item relative w-full">
            <img src="../../public/Banner.jpg" className="w-full book-img" />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide4" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide2" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full">
            <img
              src="../../public/book_store.jpg"
              className="w-full book-img"
            />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide1" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide3" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full">
            <img src="../../public/books.jpg" className="w-full book-img" />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide2" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide4" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide4" className="carousel-item relative w-full">
            <img
              src="../../public/banner_book.png"
              className="w-full book-img"
            />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide3" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide1" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        </div>
        {/* Content */}
        <div className="mt-5 p-5">
          <ul>
            <li className="text-2xl mb-5">Key Aspects of books: </li>
            <ul>
              <li className="mb-5">
                <h1 className="font-bold">Content:</h1>
                <p>
                  Books can be works of fiction, non-fiction, poetry, or a
                  combination thereof. They can contain narratives, factual
                  information, or artistic expressions.{" "}
                </p>
              </li>
              <li className="mb-5">
                <h1 className="font-bold">Format:</h1>
                <p>
                  Books can be physical objects with printed pages and covers,
                  or digital files accessible on various devices.{" "}
                </p>
              </li>
              <li className="mb-5">
                <h1 className="font-bold">Purpose:</h1>
                <p>
                  Books serve various purposes, including entertainment,
                  education, historical documentation, and cultural
                  preservation.{" "}
                </p>
              </li>
              <li className="mb-5">
                <h1 className="font-bold">Impact:</h1>
                <p>
                  Reading books can enhance vocabulary, improve comprehension,
                  broaden knowledge, and stimulate creativity and imagination.{" "}
                </p>
              </li>
              <li className="mb-5">
                <h1 className="font-bold">History:</h1>
                <p>
                  Books have a rich history, evolving from ancient forms like
                  clay tablets and scrolls to the modern codex format.{" "}
                </p>
              </li>
            </ul>
          </ul>
        </div>
      </div>
      <Link
        to="/"
        className="px-3 py-1 mb-10 cursor-pointer dark:text-black bg-amber-500 hover:bg-amber-700 hover:text-white rounded-md"
      >
        Back Home
      </Link>
    </div>
  );
}

export default About;
