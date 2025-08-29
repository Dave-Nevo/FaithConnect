import React from "react";
import LeftDsh from "../components/LeftDsh.jsx";
import CenterDsh from "../components/CenterDsh.jsx";
import RghtDsh from "../components/RghtDsh.jsx";
import HeaderDsh from "../components/HeaderDsh.jsx";
const LandngDsh = () => {
  return (
    <div>
      <div class="h-screen bg-white p-2 rounded-xl sm:p-3">
        <div class="h-full bg-gray-100 rounded-2xl shadow-2xl flex">
          <div class="flex flex-1 min-h-0">
            <LeftDsh />
            <div class=" p-6 w-full sm:p-5 overflow-y-hidden hide-scrollbar">
              <HeaderDsh />
              <div className="flex flex-col-5">
                <CenterDsh />
                <RghtDsh />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandngDsh;
