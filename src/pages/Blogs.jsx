import React from "react";
import { Link } from "react-router-dom";
import African from "../../img/afrcn-wmn.png";
import Cardi from "../../img/three-wmn.png";
import Wrkng from "../../img/wrkng-man.png";
import Blck from "../../img/blck-boy.png";

const Blogs = () => {
  return (
    <div>
      <div>
        <img
          src={African}
          alt=""
          className="w-[77rem] h-[50rem] absolute top-7 left-4 z-[-10] mb-20"
        />
      </div>
      <div className="hidden md:block mt-9 absolute top-[18.5rem] left-[17rem]">
        <div className="absolute w-32 h-12 bg-yellow-500 rounded-full top-[-23rem] left-[35rem]"></div>
      </div>
      <div>
        <div className="relative mx-[9%] pt-8 items-center" id="aboutNav">
          <div
            className="flex justify-between left-[22%] items-center"
            id="aboutNavContent"
          >
            <div className="flex justify-between items-center">
              <Link to="/">
                <img
                  src="/img/Logo.png"
                  alt="Faith Connect Logo"
                  className="absolute w-32 left-[-3%] top-[4rem]"
                />
              </Link>
            </div>
            <div className="absolute text-center text-white left-[22rem] top-[3rem]">
              <div className="text-2xl flex justify-between gap-12 items-center">
                <Link to="/PodcastPg" className="hover:underline px-8">
                  Podcast
                </Link>
                <Link to="/Books" className="hover:underline px-8">
                  Books
                </Link>
                <Link to="/Blogs" className="underline px-8">
                  Blogs
                </Link>
                <Link to="/AboutUs" className="hover:underline px-8">
                  About
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="abolute left-9 flex mt-70 mx-19">
        <p className="text-left text-white text-xl md:text-6xl mb-10">
          Transforming lives <br />
          through faith and <br />
          hope
        </p>
      </div>
      <div className="absolute left-9 mx-12 mt-[-29px]">
        <p className="text-left text-white text">
          Welcome to our Christain blogs, where we share powerful <br />
          transforming stories that inspire and uplift. Join us on a journey of
          faith, <br />
          hope, and faith as we celebrate the redemptive power of God's love
        </p>
      </div>
      <section className="mt-89">
        <h2 className="playfair text-4xl font-bold text-black-500 ml-23 text-left">
          Blog{" "}
        </h2>
        <p className="text-left text-black-500 text-6xl ml-23">
          Inspiring Transformation <br /> stories
        </p>
        <p className="text-black-500 text-semibold text-left text-2xl ml-23">
          Discover the power of redemption through real life stories.
        </p>
        <div className="mt-5 mb-29 max-w-6xl mx-auto px-4">
          {/* <!-- Grid container for the cards --> */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="border border-black/80 rounded-2xl overflow-hidden flex flex-col shadow-sm">
              <div className="h-57">
                <img
                  src={Cardi}
                  alt="Three women collaborating around a laptop in a bright office."
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-center mb-4">
                  <span className="border border-gray-400 rounded px-3 py-1 text-sm font-medium text-gray-700">
                    faith
                  </span>
                  <span className="text-sm font-medium text-gray-800">
                    5 min read
                  </span>
                </div>
                <h2 className="text-2xl font-bold mb-2 text-black/90">
                  From Darkness to light
                </h2>
                <p className="text-gray-600 mb-6 flex-grow">
                  A powerful journey faith in Christ
                </p>
                <a
                  href="#"
                  className="flex items-center font-semibold text-blacl-400 mt-9 hover:text-black"
                >
                  Read more
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2.5"
                    stroke="currentColor"
                    className="w-5 h-5 ml-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m8.25 4.5 7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </a>
              </div>
            </div>

            {/* <!-- Card 2 --> */}
            <div className="border border-black/80 rounded-2xl overflow-hidden flex flex-col shadow-sm">
              <div className="h-57">
                <img
                  src={Wrkng}
                  alt="A person working on a laptop at a white desk, seen from above."
                  className="w-full object-cover"
                />
              </div>
              <div className="p-5 flex flex-col flex-grow">
                <div className="flex justify-between items-center mb-4">
                  <span className="border border-gray-400 rounded px-3 py-1 text-sm font-medium text-gray-700">
                    Hope
                  </span>
                  <span className="text-sm font-medium text-gray-800">
                    5 min read
                  </span>
                </div>
                <h2 className="text-2xl font-bold mb-2 text-black/90">
                  A New Beginning
                </h2>
                <p className="text-gray-600 mb-6 flex-grow">
                  Witness how faith can transform lives
                </p>
                <a
                  href="#"
                  className="flex items-center font-semibold text-black-300 mt-auto hover:text-black"
                >
                  Read more
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2.5"
                    stroke="currentColor"
                    className="w-5 h-5 ml-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m8.25 4.5 7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </a>
              </div>
            </div>
            {/* <!-- Card 3 --> */}
            <div className="border border-black/80 rounded-2xl overflow-hidden flex flex-col shadow-sm">
              <div className="h-57">
                <img
                  src={Blck}
                  alt="A young boy smiling with hope."
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-center mb-4">
                  <span className="border border-gray-400 rounded px-3 py-1 text-sm font-medium text-gray-700">
                    Inspiration
                  </span>
                  <span className="text-sm font-medium text-gray-800">
                    4 min read
                  </span>
                </div>
                <h2 className="text-2xl font-bold mb-2 text-black/90">
                  Finding Joy Again
                </h2>
                <p className="text-gray-600 mb-6 flex-grow">
                  Discover how hope restored a lost spirit.
                </p>
                <a
                  href="#"
                  className="flex items-center font-semibold text-black-300 mt-auto hover:text-black"
                >
                  Read more
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2.5"
                    stroke="currentColor"
                    className="w-5 h-5 ml-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m8.25 4.5 7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="mt-12 flex justify-end">
          <a
            href="#"
            class="border border-black-100 mx-18 mb-13 px-8 py-3 bg-white text-black font-semibold text-base hover:bg-gray-100 transition-colors"
          >
            View all
          </a>
        </div>
      </section>
      <section>
        <div className="bg-[#f2f2f2] py-15">
          <div className="max-w-6xl mx-full px-4">
            <div className="absolute top-9">
              <i class="fas fa-arrow-left text-2xl px-10"></i>
            </div>
            <h2 className="text-2xl text-black-500 ml-23 text-center">
              "These stories have changed my perspective on faith. <br />They remind me that redemption is possible for everyone."
            </h2>
          </div>
        </div>
      </section>
<footer className="py-16 mx-16">
        <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-24">
          {/* <!-- Quick Links --> */}
          <div className="w-full lg:w-1/3">
            <h3 className="text-3xl  font-bold mb-4 text-black-800">
              QUICK LINKS
            </h3>
            <ul className="space-y-3 text-black-700">
              <li>
                <Link
                  to="/PodcastPg"
                  className="hover:underline text-xl font-semibold"
                >
                  Podcast
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:underline text-xl font-semibold">
                  Books
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:underline text-xl font-semibold">
                  Blogs
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:underline text-xl font-semibold">
                  Events
                </Link>
              </li>
            </ul>
          </div>

          {/* Logo & Contact Section */}
          <div className="lg:w-2/3 flex flex-col items-center lg:items-end text-black-700 mx-auto">
            {" "}
            {/* Changed mx-15 to mx-auto */}
            {/* Logo with Link */}
            <div className="flex items-center gap-2 mb-6">
              <Link to="/" className="hover:opacity-80 transition-opacity">
                <img
                  src="/img/Logo.png"
                  className="w-[179px] h-[70px] object-contain"
                  alt="Faith Connect Logo"
                />
              </Link>
            </div>
            {/* Contact Information */}
            <div className="flex flex-col items-center lg:items-end gap-4">
              {/* Phone */}
              <div className="flex items-center text-black-700 text-lg font-medium">
                <i className="fas fa-phone text-black-500 mr-2"></i>
                <a
                  href="tel:+2340000011119"
                  className="hover:text-black-600 transition-colors"
                >
                  +234 0000 11119
                </a>
              </div>

              {/* Location */}
              <div className="flex items-center text-black-700 text-lg font-medium">
                <i className="fas fa-map-marker-alt text-black-500 mr-2"></i>
                <span>Redemption City</span>
              </div>
            </div>
            {/* Copyright Notice - Centered */}
            <div className="w-full mt-13 mx-50 pt-10 text-center font-bold text-3xl">
              {" "}
              <p className="text-black-600  text-sm md:text-base">
                <i className="far fa-copyright mr-1"></i> 2025 Faith Connect.
              </p>
            </div>
          </div>
        </div>{" "}
      </footer>
    </div>
  );
};

export default Blogs;
