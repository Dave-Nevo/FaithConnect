import React from "react";

const RghtDsh = () => {
  return (
    <div>
      {/* <!-- Weekly Stats Chart --> */}
      <div class="flex flex-col gap-2">
      <section class="bg-white rounded-lg shadow-md p-4 h-137 w-80">
        <div class="p-4 h-29 w-full">
          <div class="flex justify-between items-start mb-2">
            <div class="text-2xl font-bold text-black">
              Today's Activities
            </div>
            <i class="fas fa-ellipsis-v text-black cursor-pointer text-xl"></i>
          </div>
          <div class="flex justify-between items-center mb-5">
            <div class="flex items-center space-x-3">
              <div class="text-center">
                <div class="bg-yellow-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-2xl">
                  22
                </div>
                <div class="text-xs text-gray-600 mt-1">Offline</div>
              </div>
              <div class="text-center">
                <div class="bg-yellow-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-2xl">
                  78
                </div>
                <div class="text-xs text-gray-600 mt-1">Online</div>
              </div>
            </div>
            <div class="text-right">
              <div class="flex items-center">
                <span class="text-lg font-bold text-gray-800">5,750</span>
                <i class="fas fa-plus-circle text-yellow-500 ml-1 text-sm"></i>
              </div>
              <div class="text-xs text-gray-600">Total</div>
            </div>
          </div>
        </div>
        <h3 class="text-lg font-bold text-gray-800 mt-5">Weekly Stats</h3>
        <div class="relative h-60 top-[7rem]">
          {/* <!-- Y-axis labels --> */}
          <div class="absolute left-1 top-[-80px] h-82 flex flex-col justify-between text-xs text-gray-500 w-8">
            <span>1k</span>
            <span>800</span>
            <span>600</span>
            <span>400</span>
            <span>200</span>
            <span>0</span>
          </div>
          {/* <!-- Bars Container --> */}
          <div class="h-full flex items-end justify-between space-x-1 ml-10 pb-6">
            <div
              class="bg-yellow-500 flex-1 max-w-4"
              style={{ height: "95%" }}
            ></div>
            <div
              class="bg-yellow-500 flex-1 max-w-4"
              style={{height: "20%"}}
            ></div>
            <div
              class="bg-yellow-500 flex-1 max-w-4"
              style={{height: "55%"}}
            ></div>
            <div
              class="bg-yellow-500 flex-1 max-w-4"
              style={{height: "130%"}}
            ></div>
            <div
              class="bg-yellow-500 flex-1 max-w-4"
              style={{height: "105%"}}
            ></div>
            <div
              class="bg-yellow-500 flex-1 max-w-4"
              style={{height: "75%"}}
            ></div>
            <div
              class="bg-yellow-500 flex-1 max-w-4"
              style={{height: "50%"}}
            ></div>
            <div
              class="bg-yellow-500 flex-1 max-w-4"
              style={{height: "25%"}}
            ></div>
            <div
              class="bg-yellow-500 flex-1 max-w-4"
              style={{height: "90%"}}
            ></div>
            <div
              class="bg-yellow-500 flex-1 max-w-4"
              style={{height: "70%"}}
            ></div>
          </div>
          {/* <!-- X-axis labels --> */}
          <div class="absolute bottom-[-13px] left-10 right-0 flex justify-between text-xs text-gray-500 h-6 items-center">
            <span>10</span>
            <span>20</span>
            <span>30</span>
            <span>40</span>
            <span>50</span>
            <span>60</span>
            <span>70</span>
            <span>80</span>
            <span>90</span>
            <span>100</span>
          </div>
        </div>
      </section>
      </div>
    </div>
  );
};

export default RghtDsh;
