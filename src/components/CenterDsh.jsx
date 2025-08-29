import React from "react";
import Gldn from "../../img/gldn.png";
import Ajibola from "../../img/ajibola.jpg";
import David from "../../img/halo.jpg";
import Sponge from "../../img/spong.png";
import Saves from "../../img/jesus.png";

const CenterDsh = () => {
  return (
    <div>
      {/* Stats Cards Row */}
      <div className="flex flex-cols-3 gap-12 mb-5 mt-5">
        {/* Podcasts Card */}
        <div className="bg-white rounded-lg shadow-md p-3 h-[132px] w-[170px]">
          <div className="absolute top-[13.6rem] left-[25.61rem] h-11 w-2 bg-yellow-500 rounded-l-lg"></div>
          <div className="flex items-center space-x-2 mb-1 ml-2">
            <i className="fas fa-podcast text-black text-2xl"></i>
            <div>
              <div className="text-2xl font-semibold text-gray-800">
                Podcasts
              </div>
              <div className="text-l ml-2 text-black"> This Week</div>
            </div>
          </div>
          <div className="text-3xl ml-23 mt-2 font-semibold text-gray">54</div>
        </div>

        {/* Books Card */}
        <div className="bg-white rounded-lg shadow-md p-4 h-[132px] w-[170px]">
          <div className="absolute top-[13.6rem] left-[39.24rem] h-11 w-2 bg-yellow-500 rounded-l-lg"></div>

          <div className="flex items-center space-x-2 mb-1 ml-2">
            <i className="fas fa-book text-black text-2xl"></i>
            <div>
              <div className="text-2xl font-semibold text-gray-800">Books</div>
              <div className="text-x ml-1 text-black">This Week</div>
            </div>
          </div>
          <div className="text-3xl ml-23 font-semibold text-gray-800">20</div>
        </div>

        {/* Events Card */}
        <div className="relative h-[132px] w-[170px] rounded-lg shadow-md overflow-hidden">
          <img
            src={Gldn}
            alt="Background"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 z-10 p-3 text-white flex flex-col justify-between">
            <div className="text-3xl font-bold">15</div>
            <div>
              <div className="text-x font-semibold">Upcoming</div>
              <div className="text-x font-bold">Events</div>
            </div>
          </div>
          {/* Calendar Icon */}
          <div className="absolute top-2 right-2 opacity-20 z-20">
            <i className="fas fa-calendar text-lg text-black"></i>
          </div>
        </div>

      </div>

      {/* <!-- Search Bar --> */}
      <div class="h-12 w-5 mb-5 mt-6">
        <div class="flex gap-55 h-full">
          <div class="flex-1 relative">
            <i class="fas fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm"></i>
            <input
              type="text"
              placeholder="Search Home"
              className="w-[24vw] h-12 pl-10 pr-3 bg-white rounded-3xl border border-gray-400 focus:outline-none focus:ring-2 focus:ring-faith-yellow text-sm"
            />
          </div>
          <button class="bg-yellow-500 bg-faith-yellow text-white px-3 h-12 rounded-lg font-semibold hover:bg-yellow-600 transition-colors flex items-center text-sm min-w-20">
            <i class="fas fa-plus mr-5 text-xs"></i>Add
          </button>
        </div>
      </div>

      <div>
        <h3 class="text-lg font-bold text-gray-800 mb-2 ">Top Users</h3>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-5 ">
        {/* <!-- Top Users --> */}
        <div class="bg-white rounded-lg shadow-md p-4 h-68 w-78">
          <div class="space-y-3">
            <div class="flex items-center space-x-3 h-12 w-full pl-1 bg-gray-200 rounded-xl">
              <img
                src={Sponge}
                alt="User Avatar"
                class="w-10 h-10 rounded-full object-cover"
              />
              <div class="flex-1 min-w-0">
                <div class="font-semibold text-gray-800 text-sm truncate">
                  Sharon Blue
                </div>
                <div class="text-xs text-yellow-500 truncate">
                  sharonblue@gmail.com
                  <div class="text-sm font-bold text-gray-800">45%</div>
                </div>
              </div>
            </div>
            <div class="flex items-center space-x-3 h-12 w-full pl-1 bg-gray-200 rounded-xl">
              <img
                src={Saves}
                alt="User Avatar"
                class="w-10 h-10 rounded-full object-cover"
              />
              <div class="flex-1 min-w-0">
                <div class="font-semibold text-gray-800 text-sm truncate">
                  Stephen Wilson
                </div>
                <div class="text-xs text-yellow-500 truncate">
                  stephenwilson@gmail.com
                  <div class="text-sm font-bold text-gray-800">34%</div>
                </div>
              </div>
            </div>
            <div class="flex items-center space-x-3 w-full pl-1 h-13 bg-gray-200 rounded-xl">
              <img
                src={Ajibola}
                alt=""
                class="w-10 h-10 rounded-full object-cover"
              />
              <div class="flex-1 w-70 ">
                <div class="font-semibold text-gray-800 text-sm truncate">
                  Ajibola Praise
                </div>
                <div class="text-xs text-yellow-500 truncate">
                  ajibolapraise@gmail.com
                  <div class="text-sm font-semibold text-gray-800">25%</div>
                </div>
              </div>
            </div>

            <div class="flex items-center space-x-3 h-12 w-full pl-1 bg-gray-200 rounded-xl">
              <img
                src={David}
                alt="User Avatar"
                class="w-10 h-10 rounded-full object-cover"
              />
              <div class="flex-1 min-w-0">
                <div class="font-semibold text-gray-800 text-sm truncate">
                  David Wright
                </div>
                <div class="text-xs text-black truncate">
                  davidwright@gmail.com
                  <div class="text-sm font-bold text-gray-800">18%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Middle Column (Weekly Streak & Daily Inspiration) --> */}
        <div class="flex flex-col gap-2">
          {/* <!-- Weekly Streak --> */}
          <div class="bg-white rounded-lg shadow-md p-4 h-34 w-69">
            <div class="flex justify-between items-center mb-1 border-b border-gray-300">
              <h3 class="text-lg font-bold text-gray-800 mb-1">
                Weekly Streak
              </h3>
              <div class="flex items-center space-x-2">
                <i class="fas fa-info-circle text-gray-400 text-xs"></i>
                <div class="flex items-center space-x-1 text-xs text-black">
                  <span>June 2024</span>
                  <i class="fas fa-chevron-down text-xs"></i>
                </div>
              </div>
            </div>
            <div class="text-sm font-semibold text-gray-800 mb-2">
              4/4 Weeks
            </div>
            <div class="flex items-center justify-between">
              <div class="flex space-x-4">
                <div class="bg-yellow-500 ml-3 rounded shadow-xl p-1 text-center text-white  w-8 h-12 flex flex-col items-center justify-center">
                  <div className="text-xs">May</div>
                  <div class="text-xs font-bold">29</div>
                  <div class="text-xs">Thu</div>
                </div>
                <div class="bg-yellow-500 rounded shadow-xl p-1 text-center text-white  w-8 h-12 flex flex-col items-center justify-center">
                  <div className="text-xs">May</div>
                  <div class="text-xs font-bold">30</div>
                  <div class="text-xs">Fri</div>
                </div>
                <div class="bg-yellow-500 rounded shadow-xl p-1 text-center text-white  w-8 h-12 flex flex-col items-center justify-center">
                  <div className="text-xs">May</div>
                  <div class="text-xs font-bold">31</div>
                  <div class="text-xs">Sat</div>
                </div>
                <div class="bg-white rounded shadow-xl p-1 text-center text-black  w-8 h-12 flex flex-col items-center justify-center">
                  <div className="text-xs">June</div>
                  <div class="text-xs font-bold">1</div>
                  <div class="text-xs">Sun</div>
                </div>
                <div class="bg-white rounded shadow-xl p-1 text-center text-black  w-8 h-12 flex flex-col items-center justify-center">
                  <div className="text-xs">June</div>
                  <div class="text-xs font-bold">2</div>
                  <div class="text-xs">Mon</div>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Daily Inspiration --> */}
          <div class="bg-white rounded-lg shadow-md p-3 h-32 w-69">
            <div class="flex items-center space-x-2 ">
              <i class="fas fa-book-open text-black text-sm"></i>
              <h4 class="font-bold text-gray-800 text-lg">Daily Inspiration</h4>
            </div>
            <div class="text-sm font-semibold text-black mb-2">
              Psalm 118:24
            </div>
            <div class="text-sm text-black leading-relaxed">
              "This is the day that the Lord has made; Let us rejoice and be
              glad in it"
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CenterDsh;
