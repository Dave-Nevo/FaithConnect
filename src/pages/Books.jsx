import React from "react";
import BookSlide from "../../img/Book slide.png";
import { Link } from "react-router-dom";
import ArrwTst from "../../img/twistng-arrw.png";
import Dp from "../../img/rounded-dp.png";
import Logo from "../../img/Logo.png";

const Books = () => {
  return (
    <div>
      {/* Navigation Bar */}
      <div className="relative mx-[9%] pt-8 items-center" id="aboutNav">
        <div
          className="flex justify-between left-[22%] items-center"
          id="aboutNavContent"
        >
          <div className="flex justify-between items-center">
            <Link to="/">
              <img
                src={Logo}
                alt="Faith Connect Logo"
                className="w-32 left-[12%]"
              />
            </Link>
          </div>
          <div className="text-center">
            <div className="text-2xl flex justify-between gap-12 items-center">
              <Link to="/PodcastPg" className="hover:underline">
                Podcast
              </Link>
              <Link to="/Books" className="underline">
                Books
              </Link>
              <Link to="/Blogs" className="hover:underline mr-40">
                Blogs
              </Link>

              <Link to="/AboutUs" className="hover:underline mr-20">
                About us
              </Link>
            </div>
          </div>
        </div>
      </div>
       <div className="hidden md:block mt-9 absolute top-[-4.3rem] left-[36.5rem]">
          <div className="w-25 h-12 bg-yellow-500 rounded-full"></div>
        </div>
      {/* Background Images */}
      <div>
        <img
          src="/img/nav-bg.png"
          alt=""
          className="w-full h-[39rem] absolute top-0 left-0 z-[-10] mb-20"
        />
      </div>
      <div>
        <img
          className="right-0 absolute top-[13.2%] w-[74%] left-[21%] mb-20"
          src={BookSlide}
          alt=""
        />
      </div>
      {/* Curved Line Decoration */}
      <div>
        <img
          className="top-[63%] w-[19%] absolute right-[61%] rotate-180 transform scale-y-[-1]"
          src={ArrwTst}
          alt=""
        />
      </div>
      {/* Ebooks Section */}
      <section className="relative pt-[50%]">
        <div className="flex justify-around ml-auto">
          <div id="leftchild">
            <h3 className="text-3xl font-bold">Ebooks</h3>
            <Link to="#">Book Recommendation</Link>
          </div>
          <div
            className="flex justify-center pt-[4rem] gap-6 items-center"
            id="rightchild"
          >
            <img
              className="rounded-full w-24"
              src={Dp}
              alt="Kenneth E. Hagin"
            />
            <div>
              <h3>Kenneth E. Hagin</h3>
              <p>Author</p>
            </div>
          </div>
        </div>
      </section>
      {/* Book Description and Authors */}
      <div className="mx-[17rem] mb-20">
        <p className="py-5 pt-5 text-2xl">
          "How to Be Led by the Spirit of God" tells the story of divine
          guidance, revealing how believers can hear God's voice, make
          Spirit-filled decisions, and live a purposeful, victorious Christian
          life daily.
        </p>
      </div>

      <section>
        <div className="flex m-[3rem] justify-center gap-12">
          <div className="w-42 text-center">
            <h5 className="font-bold">
              <img src="/img/kenneth.H.png" alt="Kenneth E. Hagin" />
              Kenneth E. Hagin
            </h5>
          </div>
          <div className="w-42 mx-[2rem] text-center">
            <h5 className="font-bold">
              <img src="/img/pst-EA.png" alt="Pastor E. A. Adeboye" />
              Pastor E. A. <br />
              Adeboye
            </h5>
          </div>
          <div className="w-42 mx-[2rem] text-center">
            <h5 className="font-bold">
              <img src="/img/Riverser.png" alt="Francine Riversres" />
              Francine <br />
              Riversres
            </h5>
          </div>
        </div>
      </section>

      {/* Repeated Authors Section (Consider removing if not needed) */}
      <section>
        <div className="flex m-[3rem] justify-center gap-12">
          <div className="w-42 text-center">
            <h5 className="font-bold">
              <img src="/img/kenneth.H.png" alt="Kenneth E. Hagin" />
              Kenneth E. Hagin
            </h5>
          </div>
          <div className="w-42 mx-[2rem] text-center">
            <h5 className="font-bold">
              <img src="/img/pst-EA.png" alt="Pastor E. A. Adeboye" />
              Pastor E. A. <br />
              Adeboye
            </h5>
          </div>
          <div className="w-42 mx-[2rem] text-center">
            <h5 className="font-bold">
              <img src="/img/Riverser.png" alt="Francine Riversres" />
              Francine <br />
              Riversres
            </h5>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="pt-20 mx-[17rem]">
        <div className="flex justify-between">
          <div className="flex flex-col">
            <ul className="flex flex-col gap-4">
              <li>
                <Link className="text-2xl font-bold" to="#">
                  QUICK LINKS
                </Link>
              </li>
              <li>
                <Link className="font-bold" to="/podcast.html">
                  Podcast
                </Link>
              </li>
              <li>
                <Link className="font-bold" to="/faithBooks.html">
                  Books
                </Link>
              </li>
              <li>
                <Link className="font-bold" to="#">
                  Blogs
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <Link to="/" className="flex items-center gap-2">
            <img
              className="w-36"
              src={Logo}
              alt="Faith Connect Logo"
            />
            </Link>
            <span> Redemption City</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Books;
