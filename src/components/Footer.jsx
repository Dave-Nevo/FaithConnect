import React from "react";
import { Link } from "react-router-dom";
import Footimg from "../../img/foot-img.png";
import Calender from "../../img/3-foot.png";
import Book from "../../img/2-foot.png";
import Music from "../../img/1-foot.png"; 

const Footer = () => {
  return (
    <div>
      <div className="max-w-screen-xl mx-auto px-14">
        {/* <!-- About Us Section --> */}
        <div className="flex flex-col md:flex-row items-center md:items-start py-16 gap-8">
          <div className="w-full md:w-1/2">
            <h1 className="text-5xl lg:text-6xl font-bold mb-4">About Us</h1>
            <p className="text-lg text-black-700 mb-6 max-w-md">
              At faith connect you grow and connect with fellow believers.
            </p>
            
            <Link to="/AboutUs" className="text-blue-500 hover:underline">
            <button className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-6 rounded-md text-lg font-semibold transition duration-300">
              Read more
            </button>
            </Link>
          </div>
          <div className="w-full md:w-1/2 mt-8 md:mt-0">
            {/* <!-- Placeholder for image - Replace with actual image URL --> */}
            <img
              src={Footimg}
              alt="Person holding a Bible"
              className="rounded-md object-cover w-[19rem] h-[23rem]"
            />
          </div>
        </div>

        {/* <!-- Features Section --> */}
        <div className="flex flex-wrap justify-center gap-8 py-16">
          <div className="w-full sm:w-1/2 lg:w-1/4 text-center px-4">
            {/* <!-- Icon Placeholder (Music Notes) --> */}
            <img
              src={Music}
              alt="Music Notes Icon"
              className="h-[7rem] w-[9rem] mx-auto mb-4"
            />
            <p className="text-black-700">
              Build meaningful relationships with other believers.
            </p>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/4 text-center px-4">
            {/* <!-- Icon Placeholder (Book) --> */}
            <img
              src={Book}
              alt="Book Icon"
              className="h-[7rem] w-[9rem] mx-auto mb-4"
            />
            <p className="text-black-700">
              Read life-changing books and strengthen your walk with God
            </p>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/4 text-center px-4 ">
            {/* <!-- Icon Placeholder (Calendar) --> */}
            <img
              src={Calender}
              alt="Calendar Icon"
              className="h-[7rem] w-[7rem] mx-auto mb-4 text-yellow-500"
            />
            <p className="text-black-700">
              Attend events focused on prayer and spiritual growth
            </p>
          </div>
        </div>

        {/* <!-- Footer Section --> */}
        <footer className="py-16">
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
                    className="hover:underline text-xl font-semibold">
                    Podcast
                  </Link>
                </li>
                <li>
                  <Link to="/Books" className="hover:underline text-xl font-semibold">
                    Books
                  </Link>
                </li>
                <li>
                  <Link to="/Blogs" className="hover:underline text-xl font-semibold">
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
    </div>
  );
};

export default Footer;
