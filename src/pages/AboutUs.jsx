import React from "react";
import { Link } from "react-router-dom";
import Hands2gethr from "../../img/ABOUT US IMAGE.png"
const AboutUs = () => {
  return (
    <div>
      {/* <!-- Header Section --> */}
      <header class="bg-white border-b border-gray-200">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex justify-between items-center py-4">
            {/* <!-- Logo --> */}
            <Link to="/" class="flex items-center w-[10rem] h-[5rem]">
              <img src="/img/Logo.png" alt="Faith Logo" />
            </Link>

            {/* <!-- Navigation Links --> */}
            <div className="relative flex gap-[4rem] items-center px-2">
              <Link
                to="/PodcastPg"
                className="relative z-40 text-2xl text-black-500"
              >
                Podcast
              </Link>
              <Link to="/Books" className="relative z-40 text-2xl">
                Books
              </Link>
              <Link to="/Blog" className="relative z-40 text-2xl pr-16">
                Blog
              </Link>
              <Link to="/AboutUs" className="relative z-40 text-2xl pr-5">
                About Us
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* <!-- Page Title Hero Section --> */}
      <section class="bg-gray-100 py-15 md:py-24">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 class="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900">
            About Us
          </h1>
        </div>
      </section>

      {/* <!-- Main Content Section (About Us Text and Image) --> */}
      <section class="py-12 md:py-20">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 lg:gap-20 items-center">
            {/* <!-- Text Content Column --> */}
            <div class=" prose prose-lg lg:prose-xl max-w-none text-gray-700">
              <p class="text-[28px]">
                At Faith Connect, our heart's desire is to weave a tapestry of
                love, support, and spiritual growth, uniting believers from all
                walks of life in a vibrant community.
              </p>
              <p class="text-[28px]">
                We envision a platform where Christians can come together,
                deepen their faith, and uplift one another on their journey with
                God.
              </p>
              <p class="text-[28px]">
                Through meaningful connections, inspiring resources, and
                heartfelt community, we strive to strengthen the body of Christ,
                one relationship at a time.
              </p>
            </div>

            {/* <!-- Image with Yellow Background Column --> */}
            <div className="relative mt-8 md:mt-0">
              {/* <!-- The yellow decorative block. --> */}
              <div>
                <img
                  src={Hands2gethr}
                  alt="Hands together in community"
                  className="w-[600px] max-w-full block"
                />
              </div>
            </div>
            <div className="bg-yellow-400 text-transparent absolute left-[86rem] z-[-1] w-[12rem] py-[30rem]">
              efvrefd
            </div>
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

export default AboutUs;
