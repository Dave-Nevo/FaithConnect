import React from "react";
import { Link } from "react-router-dom";

const LeftPod = () => {
  return (
    <div className="h-full">
      <div class="w-54 h-full bg-white shadow-lg hidden md:flex flex-col justify-between flex-shrink-0">
        <div>
          {/* <!-- Logo --> */}
          <div class="flex items-center justify-between p-5 h-20">
            <img src="/img/Logo.png" class="w-29 h-10" alt="Company Logo" />
            <button class="" aria-label="Menu">
              <i class="fas fa-bars text-2xl text-gray-600"></i>
            </button>
          </div>

          {/* <!-- Navigation --> */}
          <nav class="mt-6">
            <div class="px-2">
              <Link
                to="/LandngDsh"
                class="bg-faith-yellow  text-black rounded-r-3xl px-4 py-3 mb-2 flex items-center space-x-3 hover:bg-gray-100  cursor-pointer  h-12"
              >
                <i class="fas fa-th-large"></i>
                <span class="font-medium">Dashboard</span>
              </Link>
              <Link
                to="/PodDsh"
                class="px-4 py-3 mb-2 flex bg-yellow-500 items-center space-x-3 text-white h-12 rounded-r-3xl"
              >
                <i class="fas fa-podcast"></i>
                <span>Podcasts</span>
              </Link>
              <Link
                to="/BooksDsh"
                class="px-4 py-3 mb-2 flex items-center space-x-3 text-black-600 hover:bg-gray-100 rounded-r-3xl cursor-pointer h-12"
              >
                <i class="fas fa-book"></i>
                <span>Books</span>
              </Link>
              <Link
                to="/BlogDsh"
                class="px-4 py-3 mb-2 flex items-center space-x-3 text-black-600 hover:bg-gray-100 rounded-r-3xl cursor-pointer h-12"
              >
                <i class="fas fa-blog"></i>
                <span>Blogs</span>
              </Link>
            </div>
          </nav>
        </div>

        {/* <!-- About Link --> */}
        <div class="px-4 mb-4">
          <i class="fas fa-info-circle mr-2"></i>
          <span>About</span>
        </div>
      </div>
    </div>
  );
};

export default LeftPod;
