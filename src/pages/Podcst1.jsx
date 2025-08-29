import React from "react";
import { Link } from "react-router-dom";

const Podcst1 = () => {
  return (
    <div className="relative mx-5">
      <section className="pt-[5rem]">
        <div className="flex pb-[2rem] gap-4">
          <div className="font-bold" id="leftchild">
           <Link to="/PocastPg"> <i className="fas fa-arrow-left relative top-[-40px] text-2xl"></i></Link>
            <img
              className="w-[21rem] h-[12rem] text-2xl font-bold"
              src="/book1.png"
              alt=""
            />
          </div>
          <div id="rightchild ">
            <div className="flex items-center relative pt-5">
              <a
                className="text-2xl font-bold hover:underline"
                href="steppinginfaith.html"
              >
                Stepping in Faith L <i class="fas fa-star text-xl"></i>
              </a>
            </div>
            <div>
              <p className="font-bold">Description</p>
              <p className="font-bold">
                Join us each week to deepen your walk with Jesus as we dive into
                the heart of faith, love, and relationships from a Christian
                perspective. Whether you're married, single, or navigating the
                challenges of life, our episodes focus on building intimate
                relationships with Jesus Christ, strengthening marriages,
                providing guidance for singles, and fostering healthy,
                God-centered connections
              </p>
            </div>
          </div>
        </div>
      </section>
      <div class="relative w-31 mb-4 left-260 top-[-66px] bg-black rounded-full py-2">
        <p class="relative left-7 text-white">
          {" "}
          <i class="fas fa-plus pr-2"></i>Follow
        </p>
      </div>

      <section className="relative pb-[2%] mb-[1%] bg-gray max-w-full p-8 bg-gray-200 rounded-[12px]">
        <div>
          <p>13H AGO</p>
          <p className="font-bold ">Longer Bound</p>
          <p>
            What does it truly mean to be free from sin? Not just managing it,
            not just struggling against it, but genuinely free? In this deeply
            reflective episode, Walter and Shanea confront a paradox <br />
            many believers face: calling Christ "Lord" while remaining enslaved
            to sinful patterns. Drawing from Romans 7 and 8, they explore how
            many Christians live
          </p>
        </div>
      </section>

      <section className="relative pb-[2%] mb-[1%] p-8 rounded-[12px]">
        <div>
          <p>13H AGO</p>
          <p className="font-bold">Longer Bound</p>
          <p>
            What does it truly mean to be free from sin? Not just managing it,
            not just struggling against it, but genuinely free? In this deeply
            reflective episode, Walter and Shanea confront a paradox <br />
            many believers face: calling Christ "Lord" while remaining enslaved
            to sinful patterns. Drawing from Romans 7 and 8, they explore how
            many Christians live
          </p>
        </div>
      </section>

      <section className="relative pb-[1%] mb-[2%] p-8 rounded-[12px]">
        <div>
          <p>13H AGO</p>
          <p className="font-bold">Longer Bound</p>
          <p>
            What does it truly mean to be free from sin? Not just managing it,
            not just struggling against it, but genuinely free? In this deeply
            reflective episode, Walter and Shanea confront a paradox <br />
            many believers face: calling Christ "Lord" while remaining enslaved
            to sinful patterns. Drawing from Romans 7 and 8, they explore how
            many Christians live
          </p>
        </div>
      </section>

      {/* <!-- COPYRIGHT --> */}
      <footer className="mt-20 px-6 py-12 bg-white text-black">
        {/* Information Section */}
        <div className="relative grid items-center left-55 grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 mb-12 text-sm font-medium text-black">
          <div className="col-span-1 sm:col-span-2 md:col-span-1 ">
            <div>
              <h4>Creator</h4>
              <p className="mb-9">Stepping In Faith</p>
            </div>
            <div>
              <h4>Years Active</h4>
              <p className="mb-9">2024 - 2025</p>
            </div>
          </div>
          <div>
            <div>
              <h4>Episodes</h4>
              <p className="mb-9">3</p>
            </div>

            <div>
              <h4>Rating</h4>
              <p>General</p>
            </div>
          </div>
          <div>
            <div>
              <h4>Copyright</h4>
              <p className="mb-10">© 2025 Stepping In Faith</p>
            </div>
            <div>
                Show website
            </div>
          </div>
        </div>

        {/* Quick Links & Contact */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10 md:gap-20">
          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-4">QUICK LINKS</h4>
            <ul className="space-y-2 text-base">
              <li>
                <Link href="/podcast" className="hover:underline">
                  Podcast
                </Link>
              </li>
              <li>
                <Link href="/books" className="hover:underline">
                  Books
                </Link>
              </li>
              <li>
                <Link href="/quotes" className="hover:underline">
                  Quotes
                </Link>
              </li>
              <li>
                <Link href="/events" className="hover:underline">
                  Events
                </Link>
              </li>
            </ul>
          </div>

          {/* Logo & Contact */}
          <div className="flex flex-col items-start md:items-end">
            <Link to="/" className="mb-6">
            <img
              src="/img/Logo.png"
              alt="Faith Connect Logo"
              className="w-32 h-auto mb-4"
            />
            </Link>
            <div className="flex items-center text-base mb-2">
              <i className="fas fa-phone mr-2"></i>
              <a href="tel:+2340000011119" className="hover:text-gray-700">
                +234 0000011119
              </a>
            </div>
            <div className="flex items-center text-base">
              <i className="fas fa-map-marker-alt mr-2"></i>
              <span>Redemption City</span>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="mt-10 text-center text-sm text-gray-600">
          <p>© 2025 Faith Connect</p>
        </div>
      </footer>
    </div>
  );
};

export default Podcst1;
