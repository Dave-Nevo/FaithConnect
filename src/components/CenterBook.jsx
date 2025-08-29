import React from "react";
import Bookbg from "../../img/booksDsh.png";
import BookStack from "../../img/bookstacks.png";
import Td from "../../img/TD-jakes.png";
import Progrss from "../../img/the-progress.png";
import River from "../../img/Riverser.png";
import Anatom from "../../img/pst-EA.png";
import Rick from "../../img/non-fiction.png";
import Spirit from "../../img/kenneth.H.png";
import Pastor from "../../img/eaDp.png";
import Mayer from "../../img/jmDp.png";
import Emmanuel from "../../img/eiDp.png";
const CenterBook = () => {
  return (
    <div>
      <div class="flex justify-between items-center mb-5 h-1">
        <div class="flex items-center space-x-4">
          <h1 class="text-3xl font-bold text-gray-800 font-serif">Books</h1>
        </div>
        <div class="flex items-center space-x-2">
          <i class="fas fa-bell text-gray-600 text-lg cursor-pointer"></i>
          <div class="flex items-center space-x-2 bg-white rounded-lg p-2 shadow-md h-12 min-w-48">
            <img
              src="https://placehold.co/32x32/E5E7EB/gray?text=A"
              alt="User Avatar"
              class="w-8 h-8 rounded-full object-cover"
            />
            <div>
              <div class="text-xs font-semibold text-gray-800">
                Adinoyi Faithful
              </div>
              <div class="text-xs text-gray-600">adinoyifaithful@gmail.com</div>
            </div>
          </div>
        </div>
      </div>
      <div class="relative object-container mt-6 flex ">
        <div class="relative w-full max-w-2xl rounded-md overflow-visible">
          <div class="absolute inset-0 rounded-md overflow-hidden right-1">
            <img src={Bookbg} alt="Book pattern" class="w-full h-99" />
          </div>
          <div class="relative flex items-center justify-between px-3 py-3 sm:px-4 z-10">
            <div class="flex-1">
              <h1 class="text-sm sm:text-base md:text-lg font-semibold leading-snug text-black">
                A Book Is A Gift You Can Open
                <br />
                Again and Again.
              </h1>
            </div>
            <div class="absolute right-[-50px] top-1/2 transform -translate-y-1/2 z-20">
              <img
                src={BookStack}
                alt="Stack of books"
                class="w-16 h-14 sm:w-20 sm:h-16 md:w-32 md:h-[220px] object-contain"
              />
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Search Bar --> */}
      <div class="h-8 w-5 mt-3 mb-4">
        <div class="flex gap-5 h-full">
          <div class="flex-1 relative">
            <i class="fas fa-search absolute left-3 top-[24px] transform -translate-y-1/2 text-gray-400 text-sm"></i>
            <input
              type="text"
              placeholder="Search Books"
              class="w-[34vw] h-12 pl-10 pr-3 bg-white rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-faith-yellow text-sm"
            />
          </div>
        </div>
      </div>


      <div>
        <h3 class="text-xl font-semibold text-gray-800 ">Book Categories</h3>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-9 p-6 mt-[-10px]">
          {/* <!-- Card 1 --> */}
          <div class="bg-white w-35 h-43 rounded-lg shadow-md overflow-hidden">
            <div class=" overflow-hidden">
              <img
                src={Td}
                alt="Sample"
                class="absolute w-20 h-29 object-cover top-75 z-20 rounded-bl-lg"
              />
            </div>
            <div className="overflow-hidden ">
              <img
                src={Spirit}
                alt=""
                className="absolute w-20 h-29 z-10 left-75 mt-5"
              />
            </div>
            <div>
              <img
                src={River}
                alt=""
                className="absolute w-20 h-29 z-0 left-85"
              />
            </div>
          </div>
          {/* card 2 */}
          <div class="bg-[#e8c270] w-39 h-43 rounded-lg shadow-md overflow-hidden">
            <div class=" overflow-hidden">
              <img
                src={Rick}
                alt="Sample"
                class="absolute w-20 h-29 object-cover top-79 z-20 rounded-bl-lg"
              />
            </div>
            <div className="overflow-hidden ">
              <img
                src={Spirit}
                alt=""
                className="absolute w-20 h-29 object-cover z-10 left-135 mt-5"
              />
            </div>
            <div>
              <img
                src={River}
                alt=""
                className="absolute w-20 h-29 z-0 left-142"
              />
            </div>
            {/* card 3 */}
          </div>
          <div class="bg-white w-35 h-43 rounded-lg shadow-md overflow-hidden">
            <div class=" overflow-hidden">
              <img
                src={Td}
                alt="Sample"
                class="absolute w-18 h-26 object-cover top-79 z-20 rounded-bl-lg"
              />
            </div>
            <div className="overflow-hidden ">
              <img
                src={Progrss}
                alt=""
                className="absolute w-18 h-26 z-10 left-199 mt-5"
              />
            </div>
            <div>
              <img
                src={River}
                alt=""
                className="absolute w-18 h-26 z-0 left-210"
              />
            </div>
          </div>
          {/* Card 4 */}
          <div class="bg-white w-39 h-43 rounded-lg shadow-md overflow-hidden">
            <div class=" overflow-hidden">
              <img
                src={Td}
                alt="Sample"
                class="absolute w-20 h-29 object-cover top-79 z-20 rounded-bl-lg"
              />
            </div>
            <div className="overflow-hidden ">
              <img
                src={Spirit}
                alt=""
                className="absolute w-20 h-29 z-10 left-257 mt-5"
              />
            </div>
            <div>
              <img
                src={River}
                alt=""
                className="absolute w-20 h-29 z-0 left-85"
              />
            </div>
            <div className="absolute top-109">
              <h4 class="font-medium">Children Stories</h4>
            </div>
          </div>
        </div>
        <div className="grid grid-col-4 bg-white rounded-xl w-63 h-55  mt-4">
          <p className="absolute p-1 border-b w-63 text-2xl">
            Trending Authors
          </p>
          <div className="absolute bg-white shadow-xl rounded-xl w-56 h-12 bottom-38 ml-3">
            <img
              src={Emmanuel}
              alt=""
              className="absolute w-10 h-10 object-cover top-1 border border-black rounded-full"
            />
            <p className="absolute left-14 top-1 text-black">Emmanuel Iren</p>
            <p className="absolute left-14 top-6 text-black">70 Books</p>
          </div>
          <div className="absolute bg-white shadow-xl rounded-xl w-56 h-12 bottom-24 ml-3">
            <img
              src={Pastor}
              alt=""
              className="absolute w-10 h-10 object-cover top-1 border border-black rounded-full"
            />
            <p className="absolute left-14 top-1 text-black">EA Adeboye</p>
            <p className="absolute left-14 top-6 text-black">130 Books</p>{" "}
          </div>
          <div className="absolute bg-white shadow-xl rounded-xl w-56 h-12 bottom-10 ml-3">
            <img
              src={Mayer}
              alt=""
              className="absolute w-10 h-10 object-cover top-1 border border-black rounded-full"
            />
            <p className="absolute left-14 top-1 text-black">Joyce Mayer</p>
            <p className="absolute left-14 top-6 text-black">100 Books</p>
          </div>
        </div>
        <div className="flex flex-cols-1 gap-6 p-6 mt-4 bg-white rounded-lg shadow-xl">
          <div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default CenterBook;
