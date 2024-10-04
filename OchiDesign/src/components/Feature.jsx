import { motion } from "framer-motion";
import React from "react";

function Feature() {
  return (
    <div className="w-full py-[6vw]">
      <div className="w-full px-[3vw] border-b-[1px] border-zinc-600 pb-[4vw]">
        <h1 className="text-[3.7vw] font-['Neue_Montreal'] tracking-wide">
          Featured projects
        </h1>
      </div>
      <div className="cards flex flex-wrap items-center justify-between gap-[30px] w-full px-[3.5vw] py-[8vw]">
        <div className="card w-full md:w-[48%] h-[80vh] overflow-hidden relative">
          <h1 className="absolute overflow-hidden top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-extrabold text-center text-[#CDEA68] leading-[4rem] tracking-tighter font-['Neue_Montreal'] uppercase text-[9vw] md:text-[4vw]">
            {"Cardboard Spaceship".split("").map((item) => (
              <span style={{textShadow:'0.5px 0.5px 2px black'}} className="" >{item}</span >
            ))}
          </h1>
          <div className="w-full h-full rounded-lg overflow-hidden">
            <img
              className="w-full h-full bg-cover"
              src="https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-663x551.png"
              alt=""
            />
          </div>
        </div>
        <div className="card w-full md:w-[48%] h-[80vh] overflow-hidden relative">
          <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-extrabold text-center text-[#CDEA68] leading-[4rem] tracking-tighter font-['Neue_Montreal'] uppercase text-[9vw] md:text-[4vw]">
          {"Ah2 & Matt horn".split("").map((item) => (
              <span style={{textShadow:'0.5px 0.5px 2px black'
              }}>{item}</span>
            ))}
          </h1>
          <div className="w-full h-full rounded-lg overflow-hidden">
            <img
              className="w-full h-full bg-cover"
              src="https://ochi.design/wp-content/uploads/2024/08/Frame-481692-1-663x551.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feature;
