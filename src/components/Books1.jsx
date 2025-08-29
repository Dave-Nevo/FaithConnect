import React from "react";
import NavBg from "../../img/nav-bg.png";
import BookSlide from "../../img/Book slide.png";

const Books1 = () => {
  return (
    <div>
      <section className="relative h-[-50px] " id="sectionAbout">
        {/* <div className="max-w-full" id="left-child">
          <h3 className="text-5xl leading-tight">
            A Book can change <br />
            your <span className="text-gray-600">life</span>
          </h3>
        </div> */}

        {/* <!-- BACKGROUND BOOK IMAGE --> */}
        <div className=" relative top-[27.2rem] right-[-21%] w-230 z-10">
          <img className="" src={BookSlide} alt="" />
        </div>

        <img className="relative h-150 w-390 top-[-165px]" src={NavBg} alt="" />
      </section>

      {/* <!-- CURVESLINE --> */}
      <div>
        <img
          className="top-[42%] w-[25rem] absolute right-[70%]"
          src="./public/bookcurvesline.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Books1;
