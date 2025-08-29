import React from "react";
import homebg from "../../img/home-bg.png";
import Hero1 from "../../img/hero-1_1.png";
import Hero2 from "../../img/hero-1_2.png";
import Hero3 from "../../img/hero-1_3.png";
import Hero4 from "../../img/hero-2_1.png";
import Hero5 from "../../img/hero-2_2.png";
import Hero6 from "../../img/hero-2_3.png";

const Hero = () => {
  return (
    <div>
      <main>
        <div>
          <img
            className="top-[-1rem] left-[-1rem] absolute w-[70rem] opacity-9"
            src={homebg}
            alt="Background Image"
          />
        </div>

        <div className="hidden md:block mt-9 absolute top-[15rem] left-[21rem]">
          <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
        </div>
        <div className="hidden md:block mx-3 mt-4 absolute top-[3rem] left-[19rem]">
          <div className="w-6 h-6 bg-orange-500 rounded-full"></div>
        </div>
        <div className="hidden md:block mt-9 absolute top-[1rem] left-[57rem]">
          <div className="w-7 h-7 bg-yellow-300 rounded-full"></div>
        </div>
        <div className="hidden md:block mt-9 absolute top-[35rem] left-[12rem]">
          <div className="w-5 h-5 bg-blue-300 rounded-full"></div>
        </div>
        <div className="hidden md:block mt-9 absolute top-[4rem] left-[4rem]">
          <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
        </div>
        <div className="hidden md:block mt-9 absolute top-[32rem] left-[49rem]">
          <div className="w-6 h-6 bg-red-500 rounded-full"></div>
        </div>
        <div className="hidden md:block mt-9 absolute top-[19rem] left-[1rem]">
          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
        </div>
        {/* border line  */}
        <div>
          <div className="absolute left-284 top-5 h-12 w-0.5 bg-black "></div>
        </div>

        <section className="flex min-h-screen ">
          <div className="relative text-4x1 text-xl  text-left top-[8rem] left-[10rem]">
            <h1 className="relative text-black-500 md:text-6xl top-[-3rem] right-[1rem]">
              Connecting
              <br />
              Believers
              <br />
              Strengthening
              <br />
              Faith
            </h1>
          </div>

          <div class="hidden md:flex justify-center absolute z-[-50] left-[55%] top-[-24%]">
            <div class="h-[61rem] w-[8rem] flex flex-col pt-[10rem] gap-1">
              <img
                class="rounded-[4rem] absolute w-[8rem] left-[8.3rem] top-[14rem]"
                src={Hero1}
                alt="Hero 1"
              />
              <img
                class="rounded-b-[4rem] absolute w-[8rem] left-[17.5rem] top-[9rem]"
                src={Hero2}
                alt="Hero 2"
              />
            </div>

            <div class="h-[61rem] w-[8rem] flex-col">
              <img
                class="rounded-[4rem] absolute w-[8rem] left-[26.5rem] top-[17rem]"
                src={Hero3}
                alt="Hero 3"
              />
              <img
                class="rounded-t-[4rem] absolute w-[8rem]  left-[8.3rem] top-[40.6rem]"
                src={Hero4}
                alt="Hero 4"
              />
            </div>

            <div class="h-[61rem] w-[8rem] flex flex-col pt-[10rem] gap-2">
              <img
                class=" absolute w-[8rem] left-[17.5rem] top-[31.1rem]"
                src={Hero5}
                alt="Hero 5"
              />
              <img
                class="rounded-t-[4rem] absolute w-[8rem] left-[26.5rem] top-[40rem]"
                src={Hero6}
                alt="Hero 6"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Hero;
