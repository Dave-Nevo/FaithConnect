import React from "react";

const Podcst2 = () => {
  return (
    <div className="relative mx-5">
      <section className="pt-[5rem]">
        <div className="flex pb-[2rem] gap-4">
          <div className="font-bold" id="leftchild">
                <i class="fas fa-arrow-left relative top-[-40px] text-2xl"></i>
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
                Stepping in Faith <i class="fas fa-star text-xl"></i>
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
        <p class="relative left-7 text-white">  <i class="fas fa-plus pr-2"></i>Follow</p>
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
      <section className="relative top-[10rem] mx-[1%]">
        <div className="flex justify-between">
          <div className="flex flex-col">
            <ul className="flex flex-col gap-4">
              <li>
                <span className="text-2xl font-bold">QUICK LINKS</span>
              </li>
              <li>
                <a className="font-bold" href="/podcast.html">
                  Podcast
                </a>
              </li>
              <li>
                <a className="font-bold" href="/">
                  Books
                </a>
              </li>
              <li>
                <a className="font-bold" href="">
                  Quotes
                </a>
              </li>
              <li>
                <a className="font-bold" href="">
                  Events
                </a>
              </li>
            </ul>
          </div>
          <div>
            <img className="w-36" src="/img/Logo.png" alt="" />
            
            <p>Redemption City</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Podcst2;
