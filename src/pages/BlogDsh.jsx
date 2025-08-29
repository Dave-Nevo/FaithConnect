import React from "react";
import LeftBlog from "../components/LeftBlog";
import RghtBlog from "../components/RghtBlog";
import HeaderBlog from "../components/HeaderBlog";
import Blogbg from "../../img/papers.png";
import Wmn from "../../img/afrcnBook.png";
import Alarm from "../../img/alarm.png";
const BlogDsh = () => {
  return (
    <div>
      <div class="h-screen bg-white p-2 sm:p-3">
        <div class="h-full bg-gray-100 rounded-lg sm:rounded-2xl shadow-2xl overflow-hidden flex">
          <div class="flex flex-1 min-h-0"></div>
          <LeftBlog />
          <div class=" p-6 w-full sm:p-5 overflow-y-hidden hide-scrollbar">
            <HeaderBlog />
            <div className="flex justify-between items-center mb-4">
              <div>
                <div className="flex flex-cols-3 gap-10 mb-2 top-10">
                  {/* Podcasts Card */}
                  <div className="relative bg-gradient-to-r from-yellow-300 to-yellow-200 rounded-lg shadow-md h-[170px] w-[600px] p-2 ">
                    <img
                      src={Wmn}
                      alt=""
                      className="absolute top-[-75px] w-41 right-[-25px]"
                    />

                    <div className="flex items-center space-x-2 mb-1 ml-2">
                      <div>
                        <div className="text-2xl font-semibold text-black ml-10 mt-3">
                          A digital alter where stories,
                          <br /> lesson, and reflections
                          <br /> are laid downnot for <br /> likes, but for the
                          legacy.
                        </div>
                      </div>
                    </div>
                    <img
                      src={Blogbg}
                      alt=""
                      className="w-50 absolute object-contain top-1"
                    />
                    <img
                      src={Blogbg}
                      alt=""
                      className="w-50 top-1 absolute left-45"
                    />
                  </div>
                </div>
                <div class="h-12 w-5">
                  <div class="flex gap-55 h-full">
                    <div class="flex-1 relative">
                      <i class="fas fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm"></i>
                      <input
                        type="text"
                        placeholder="Search Blogs"
                        className="w-[24vw] h-12 pl-10 pr-3 bg-white rounded-3xl border border-gray-400 focus:outline-none focus:ring-2 focus:ring-faith-yellow text-sm"
                      />
                    </div>
                  </div>
                </div>
                <img
                  src={Alarm}
                  alt=""
                  className="absolute w-14 left-200 top-74"
                />
                <div className="bg-white w-150 h-80 rounded-lg shadow-md p-4 mt-3">
                  <div className="text-2xl text-black">
                    Top Articles
                    <div className="flex items-center gap-6 space-x-2">
                      <i className="fas fa-calendar text-black cursor-pointer text-xl"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2 mt-10">
                <RghtBlog />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDsh;
