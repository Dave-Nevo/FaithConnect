import React from "react";
import LeftPod from "../components/LeftPod";
import MainPod from "../components/MainPod";
import HeaderPod from "../components/HeaderPod";
const PodDsh = () => {
  return (
    <div className="">
      <div className="h-screen bg-white p-2 sm:p-3">
        <div className="flex h-full bg-gray-100 rounded-lg sm:rounded-2xl shadow-2xl overflow-hidden ">
          <div className=" min-h-0 "></div>
          <LeftPod />
          <div className="flex-1 p-6 sm:p-8 overflow-y-hidden hide-scrollbar">
            <HeaderPod />
            <MainPod />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PodDsh;
