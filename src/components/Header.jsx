import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <header>
        <nav className="pb-1 mt-5">
          <div className="container mx-auto flex justify-between items-center">
            <div className="flex items-center gap-2">
              <img
                src="./img/Logo.png"
                className="relative w-[129px] h-[45px] top-[1rem] left-[2rem]"
                alt="Logo"/>
            </div>

            <div className="relative flex gap-[4rem] items-center px-2">
              <Link to="/PodcastPg" className="relative z-40 text-2xl text-black-500">
                Podcast
              </Link>
              <Link to="/Books" className="relative z-40 text-2xl">
                Books
              </Link>
              <Link to="/Blogs" className="relative z-40 text-2xl pr-16">
                Blogs
              </Link>
              <Link to="/AboutUs" className="relative z-40 text-2xl pr-5">
                About Us
              </Link>
              <Link to="/SignUp" className="inline-block">
                <button
                  type="button"
                  className="bg-[#ffb825] underline px-1 py-2 rounded-xl text-black text-2xl mr-3">
                  Sign Up
                </button>
              </Link>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;