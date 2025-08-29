import React from "react";

const HeaderDsh = () => {
  return (
    <div className="w-full">
      <div className="justify-center items-center mb-5 mt-5 w-full">
        <div className="flex items-center space-x-4 justify-between items-center">
          <h1 className="text-4xl font-bold text-black-800 font-serif " >
            Welcome!
            </h1>
            <div className="flex gap-5 items-center">
          <i className="fas fa-bell text-gray-600 text-lg cursor-pointer"></i>
          <div className="flex items-center space-x-2 bg-white rounded-l-xl p-2 h-12 min-w-48">
            <img
              src="https://placehold.co/32x32/E5E7EB/gray?text=A"
              alt="User Avatar"
              className="w-8 h-8 rounded-full object-cover"
            />
            <div>
              <div className="text-xs font-semibold text-gray-800">
                Adinoyi Faithful
              </div>
              <div className="text-xs text-gray-600">
                adinoyifaithful@gmail.com
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderDsh;
