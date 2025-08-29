import React, { useState } from "react";
import { Link } from "react-router-dom";
import PodBg from "../../img/pod-bg.png";
import Synchwave from "../../img/synchwave.png";
import Greyrec from "../../img/grey-rec.png";
import PnP from "../../img/pause&play.png";
import Pod from "../../img/pod-sqr.png";
import Star from "../../img/star.png";
import Podcstr from "../../img/Mask podcst.png";
import Vinyl from "../../img/pod-disk.png";
import Pod1 from "../../img/pod1.png";
import Pod2 from "../../img/pod2.png";
import Pod3 from "../../img/pod3.png";
import getPodcasts from "../../src/api/podcast";
import { useEffect } from "react";

const MainPodcst = () => {
  useEffect(() => {
    const fetchPodcasts = async () => {
      try {
        const podcasts = await getPodcasts();
        console.log(podcasts);
        setPodcast(Array.isArray(podcasts.results) ? podcasts.results : []);
      } catch (error) {
        console.error("Error fetching podcasts:", error);
      }
    };
    fetchPodcasts();
  }, []);
  const [podcast, setPodcast] = useState([]);
  return (
    <div className="bg-[#ededed] text-black">
      <div className="mx-[4%] items-center" id="aboutNav">
        <div className="flex justify-between items-center" id="aboutNavContent">
          <div className="flex justify-between items-center">
            <Link to="/">
              <img src="/img/Logo.png" alt="" className="w-32 pt-10" />
            </Link>
          </div>
          <div className="text-center pt-10">
            <div className="text-2xl flex justify-between gap-22 items-center">
              <Link to="/PodcastPg" className="underline">
                Podcast
              </Link>
              <Link to="/Books" className="hover:underine">
                Books
              </Link>
              <Link to="/Blogs" className="hover:undeline">
                Blogs
              </Link>
              <Link to="/AboutUs" className="hover:undrline">
                About us
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden md:block mt-9 absolute top-[-5.7rem] left-[39.4rem]">
        <div className="w-31 h-18 bg-[#ddb850] rounded-full"></div>
      </div>

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
            className="absolute top-167 right-30 w-270 object-cover z-[-1] "
          />
        </div>
      </section>

      <div className="relative">
        {/* Image container */}
        <img
          className="w-[88%] mx-auto py-[8%]"
          src={PodBg}
          alt="Podcast background"
        />

        {/* Text overlay (centered) */}
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-5xl font-bold text-white px-4 py-2 rounded-lg">
            Join our podcast
          </p>
        </div>
      </div>

      <div className="relative max-w-md m-10 my-6 shadow-lg rounded-full">
        <input
          type="text"
          placeholder="Search..."
          className="w-full h-14 py-3 pl-10 pr-1 rounded-full border-2 border-gray-300 font-medium text-gray-700 "
        />
        <button
          type="submit"
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400"
          aria-label="Search"
        >
          <i className="fas fa-search text-lg"></i>
        </button>
      </div>
      <section className="flex flex-col justify-around items-start w-fit gap-10 mx-auto">
        {podcast.map((item) => (
          <a href={item.file_url}>
          
          <div key={item.id} className="flex items-center mb-6 gap-10">
            <img src={item.cover_image_url} alt="" className="object-contain h-40 rounded-lg" />
            <div>
              <h1 className="text-2xl font-bold">{item.title}</h1>
              <p className="text-md font-semibold mb-3">{item.speaker}</p>
              <p>{item.description}</p>
            </div>
          </div>
          </a>
        ))}
      </section>
      <section className="py-16 mx-[6%]">
        <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-24">
          {/* <!-- Quick Links --> */}
          <div className="w-full lg:w-1/3">
            <h3 className="text-3xl  font-bold mb-4 text-black-800">
              QUICK LINKS
            </h3>
            <ul className="space-y-3 text-black-700">
              <li>
                <Link
                  to="/PodcastPg"
                  className="hover:underline text-xl font-semibold"
                >
                  Podcast
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:underline text-xl font-semibold">
                  Books
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:underline text-xl font-semibold">
                  Quotes
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:underline text-xl font-semibold">
                  Events
                </Link>
              </li>
            </ul>
          </div>

          {/* Logo & Contact Section */}
          <div className="lg:w-2/3 flex flex-col items-center lg:items-end text-black-700 mx-auto">
            {" "}
            {/* Changed mx-15 to mx-auto */}
            {/* Logo with Link */}
            <div className="flex items-center gap-2 mb-6">
              <Link to="/" className="hover:opacity-80 transition-opacity">
                <img
                  src="/img/Logo.png"
                  className="w-[179px] h-[70px] object-contain"
                  alt="Faith Connect Logo"
                />
              </Link>
            </div>
            {/* Contact Information */}
            <div className="flex flex-col items-center lg:items-end gap-4">
              {/* Phone */}
              <div className="flex items-center text-black-700 text-lg font-medium">
                <i className="fas fa-phone text-black-500 mr-2"></i>
                <a
                  href="tel:+2340000011119"
                  className="hover:text-black-600 transition-colors"
                >
                  +234 0000 11119
                </a>
              </div>

              {/* Location */}
              <div className="flex items-center text-black-700 text-lg font-medium">
                <i className="fas fa-map-marker-alt text-black-500 mr-2"></i>
                <span>Redemption City</span>
              </div>
            </div>
            {/* Copyright Notice - Centered */}
            <div className="w-full mt-13 mx-50 pt-10 text-center font-bold text-3xl">
              {" "}
              <p className="text-black-600  text-sm md:text-base">
                <i className="far fa-copyright mr-1"></i> 2025 Faith Connect.
              </p>
            </div>
          </div>
        </div>{" "}
      </section>
    </div>
  );
};

export default MainPodcst;
