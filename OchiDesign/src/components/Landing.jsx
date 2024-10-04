import { motion } from "framer-motion";
import React from "react";
import { FaArrowUpLong } from "react-icons/fa6";

function Landing() {
  return (
    <div  data-scroll data-scroll-section data-scroll-speed="-0.2" className="w-full h-screen bg-zinc-900 pt-1">
      <div className="textstructure mt-[25vh] md:mt-40  px-8 md:px-16">
        {["We Create", "Eye-Opening", "Presentations"].map((item, index) => (
          <div className="masker">
            <div className="w-fit flex items-end overflow-hidden">
              {index === 1 && (
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "9vw" }}
                  transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
                  className="w-[9vw] h-[5vw] mr-[1vw] relative -top-[0.3vw] bg-[url('https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg')] bg-cover rounded-md"
                ></motion.div>
              )}
              <h1 className="text-[7vw] font-semibold leading-[6.5vw] tracking-tighter uppercase font-['Founders Grotesk X-Cond']">
                {item}
              </h1>
            </div>
          </div>
        ))}
      </div>
      <div className="border-t-[1px] border-zinc-800 mt-40 md:mt-24 flex justify-between items-center py-[1vw] px-[10vw]">
        {[
          "For public and private companies",
          "From the first pitch to IPO",
        ].map((item) => (
          <p className=" text-md font-light tracking-light leading-none">
            {item}
          </p>
        ))}
        <div className="start flex items-center gap-5">
          <div className="px-5 py-2 border-[2px] border-zinc-500 rounded-full text-md uppercase">
            Start the project
          </div>
          <div className="w-10 h-10 border-[2px] border-zinc-500 flex items-center justify-center rounded-full">
            <span className="rotate-[45deg]">
              <FaArrowUpLong />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
