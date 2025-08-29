import React from "react";
import Greyrec from "../../img/grey-rec.png";
import PnP from "../../img/pause&play.png";
import Synchwave from "../../img/synchwave.png";
import Pod from "../../img/pod-sqr.png";
import Star from "../../img/star.png";
import PodBg from "../../img/pod-bg.png";
import Vinyl from "../../img/pod-disk.png";
import Podcstr from "../../img/Mask podcst.png";

const Podcast = () => {
  return (
    <div>
      <section class="py-10 pt-29" id="verse">
        <div class="flex items-center justify-center space-x-4">
          <div class="w-12 h-0.5 bg-gray-300"></div>

          <h3
            class="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-purple-600 to-blue-800 
               tracking-[0.6em] uppercase text-xl md:text-4xl whitespace-nowrap"
          >
            Verse of the Day
          </h3>
        </div>

        <p class="text-center text-lg md:text-2xl pt-8 font-semibold max-w-3xl mx-auto px-4 leading-relaxed">
          John 3:16 — "For God so loved the world, that He gave His only <br />
          begotten Son, that whoever believes in Him should not perish <br />
          but have everlasting life."
        </p>
      </section>

      <section
        className="relative flex items-center justify-between px-24 pt-1"
        id="podcastSection"
      >
        {/* LEFT SIDE CONTENT */}
        <div className="max-w-xl z-10">
          <div className="flex items-center gap-2">
            <img
              src={Star}
              alt="star icon"
              className="w-15 rotate-60 top-[-39px] left-[-44px] relative"
            />
            <h5 className="text-xl relative left-[-20px]">
              Stay <span className="font-bold">connected</span> to
            </h5>
          </div>

          <h1 className="text-5xl lg:text-6xl font-semibold leading-tight mt-[-4px]">
            Podcasts <br />
            that inspire <br />
            you to grow
          </h1>

          <p className="text-lg mt-6 leading-relaxed ">
            we have the best podcast about spiritual talks and daily devotionals
            that you can always listen to on the go
          </p>
        </div>

        {/* Soundwave Illustration */}
        <img
          src={Synchwave}
          alt=""
          className="absolute top-[17%] right-[28%] w-32 z-0 rounded-3xl"
        />
        {/* Rec Image */}
        <img
          src={Greyrec}
          alt="podcaster"
          className="absolute top-[59%] right-[27%] w-48 h-22 rounded-[2rem] z-0"
        />
        <img
          src={Greyrec}
          alt="podcaster"
          className="absolute top-[59%] right-[27%] w-48 h-22 rounded-[2rem] z-0"
        />

        {/* Main Rec Image */}
        <img
          src={Greyrec}
          alt="podcaster"
          className="absolute top-[30%] right-[4%] w-48 h-42 rounded-[2rem] z-0"
        />

        <img
          src={Greyrec}
          alt="podcaster"
          className="absolute top-[30%] right-[4%] w-48 h-42 rounded-[2rem] z-0"
        />

        <img
          src={Greyrec}
          alt="podcaster"
          className="absolute top-[30%] right-[4%] w-48 h-42 rounded-[2rem] z-0"
        />

        {/* PnP */}
        <img
          src={PnP}
          alt=""
          className="absolute top-[54.9%] right-[29.3%] w-36 z-0"
        />

        {/* RIGHT SIDE GRAPHICS */}
        <div className="relative w-[14rem] h-[40rem]">
          {/* Grey Rounded Rectangle (Background) */}
          <img
            src={Podcstr}
            alt=""
            className="absolute top-[10rem] right-[-29%] w-65 h-61"
          />

          {/* Yellow Circle & Star Overlay */}
          <div className="absolute bottom-[5rem] left-[-10rem]">
            <div className="relative w-20 h-20 bg-[#ddb850] rounded-full">
              <img
                src={Star}
                alt="star inside"
                className="absolute w-16 top-[10px] left-[8px]"
              />
            </div>
          </div>

          {/* Vinyl / Music Disk Image */}
          <img
            src={Vinyl}
            alt="vinyl record"
            className="absolute bottom-0 right-[-41%] top-[55%] w-30 z-10"
          />
        </div>
        <div>
          <img
            src={PodBg}
            alt="podcast background"
            className="absolute top-167 right-28 w-260 object-cover z-[-1] "
          />
           <div className="absolute inset-0 flex items-center justify-center top-[117%]">
          <p className="text-5xl font-bold text-white py-2 rounded-lg">
            Join our podcast
          </p>
        </div>
        </div>
      </section>
    </div>
  );
};

export default Podcast;