import React from "react";
import Hearng from "../../img/pod1.png";
import Ken from "../../img/kwPod.png";
import BIble from "../../img/pod3.png";
import Daily from "../../img/dailyPod.png";
import Hearg from "../../img/hearngPod.png";
import Life from "../../img/llPod.png";
import Holy from "../../img/holyPod.png";
import Pst from "../../img/eaPod.png";
import Emma from "../../img/eiPod.png";
import Joyce from "../../img/jmPod.png";
import Emmanuel from "../../img/eiDp.png";
import Pastor from "../../img/eaDp.png";
import Mayer from "../../img/jmDp.png";
import Podcstr from "../../img/Mask podcst.png";

const MainPod = () => {
  return (
    <div>
      <main className="flex-1 overflow-hidden">
        <section className="relative ">
          <div className="relative flex items-center h-full">
            <img
              className="h-26 shadow-lg w-full rounded-2xl mx-5 object-cover"
              src="/img/pod-bg.png"
              alt="Podcast background"
            />
            <h1 className="absolute flex leading-tight justify-center font-mono font-outfit items-center text-white left-[20%] text-5xl font-semibold top-[19%]">
              Join our 24hr podcast
            </h1>
          </div>
        </section>

        <section className="flex overflow-hidden mx-auto p-4 h-full">
          <div className="flex-1 w-[42.79vw]">
            <div className="my-[1rem] justify-between w-[45.46vw]">
              {/* <!-- Search Bar --> */}
              <div class="h-12 w-5">
                <div class="flex gap-55 h-full">
                  <div class="flex-1 relative">
                    <i class="fas fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm"></i>
                    <input
                      type="text"
                      placeholder="Search Podcasts"
                      className="w-[24vw] h-12 pl-10 pr-3 bg-white rounded-3xl border border-gray-400 focus:outline-none focus:ring-2 focus:ring-faith-yellow text-sm"
                    />
                  </div>
                </div>
              </div>

              <span className="font-bold font-mono text-[2.12vh]">
                RECENTLY PLAYED
              </span>

              <div className="flex max-w-4xl justify-around items-center">
                <i className="fa fa-caret-left text-3xl"></i>
                {[
                  { img: Holy, text: "Holy Post Podcast" },
                  { img: Daily, text: "Your Daily Prayer" },
                  { img: Hearng, text: "Stepping in Faith" },
                  { img: Hearg, text: "Hearing Jesus" },
                  { img: Ken, text: "My Everyday Worship" },
                  { img: Life, text: "Real Life Loading" },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex flex-col justify-center items-center"
                  >
                    <img
                      className="object-contain rounded-xl w-[4.9vw] h-[9vh] bg-gray-200 hover:w-[9.72vh] transition-all"
                      src={item.img}
                      alt={item.text}
                    />
                    <p className="text-[0.8vw] font-bold mt-1">{item.text}</p>
                  </div>
                ))}
                <i className="fa fa-caret-right text-3xl"></i>
              </div>
            </div>

            <div className="my-5">
              <span className="flex my-5 font-bold text-[2.12vh]">
                MOST POPULAR
              </span>

              <div className="flex gap-8">
                <div className="flex flex-col gap-[1.57vh]">
                  {[
                    {
                      img: Hearng,
                      title: "What God joined tag...",
                      author: "Stepping in faith",
                    },
                    {
                      img: BIble,
                      title: "How did the new test...",
                      author: "Bible project",
                    },
                    {
                      img: Pst,
                      title: "Praise As a Weapon....",
                      author: "E.A Adeboye",
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex pr-[10px] gap-2 bg-white h-[7.87vh] w-[20.17vw] rounded-2xl items-center justify-between shadow-2xl"
                    >
                      <img
                        className="h-full w-[5.34vw] rounded-tl-2xl rounded-bl-2xl object-contain"
                        src={item.img}
                        alt={item.author}
                      />
                      <div className="flex-1">
                        <span className="text-xs font-bold block">
                          {item.title}
                        </span>
                        <p className="text-xs text-gray-600">{item.author}</p>
                      </div>
                      <i className="fa fa-circle-play"></i>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col gap-[1.57vh]">
                  {[
                    {
                      img: Ken,
                      title: "What God joined tag...",
                      author: "Stepping in faith",
                    },
                    {
                      img: Joyce,
                      title: "Enjoying Everyday Life",
                      author: "Joyce Meyer",
                    },
                    {
                      img: Emma,
                      title: "The wind, The Earth...",
                      author: "Emmanuel iren",
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex pr-[10px] gap-2 bg-white h-[7.87vh] w-[20.17vw] rounded-2xl items-center justify-between shadow-2xl"
                    >
                      <img
                        className="h-full w-[5.34vw] rounded-tl-2xl rounded-bl-2xl object-contain"
                        src={item.img}
                        alt={item.author}
                      />
                      <div className="flex-1">
                        <span className="text-xs font-bold block">
                          {item.title}
                        </span>
                        <p className="text-xs text-gray-600">{item.author}</p>
                      </div>
                      <i className="fa fa-circle-play"></i>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="w-[23.17vw] border border-transparent shadow-2xl rounded-2xl h-110 mb-10 py-4 px-6">
            <h1 className="font-bold">TOP PODCASTS</h1>

            {[
              {
                img: Mayer,
                name: "Joyce Meyer",
                followers: "2,045 followers",
                following: false,
              },
              {
                img: Pastor,
                name: "P. Adeboye",
                followers: "2,045 followers",
                following: true,
              },
              {
                img: Emmanuel,
                name: "Joyce Meyer",
                followers: "2,045 followers",
                following: false,
              },
            ].map((podcaster, index) => (
              <div
                key={index}
                className="flex items-center justify-between py-2 px-1"
              >
                <div className="flex items-center justify-between gap-3 ">
                  <img
                    className="object-contain w-16 h-16 border border-black border-full rounded-full object-cover"
                    src={podcaster.img}
                    alt={`Image of ${podcaster.name}`}
                  />
                  <div className="flex flex-col items-center justify-start">
                    <h2 className="underline text-[1.53vh]">
                      {podcaster.name}
                    </h2>
                    <p className="text-[1.15vh]">{podcaster.followers}</p>
                  </div>
                </div>
                <div
                  className={`px-3 py-1 rounded-2xl ${
                    podcaster.following ? "bg-blue-700" : "bg-blue-400"
                  }`}
                >
                  <p className="text-[1.27vh]">
                    {podcaster.following ? "Following" : "Follow"}
                  </p>
                </div>
              </div>
            ))}

            <img
              className="object-contain h-[26.57vh] mx-auto mt-4"
              src="./image/dashpodcastimage.png"
              alt="Podcast dashboard"
            />
          </div>
        </section>
      </main>
    </div>
  );
};

export default MainPod;
