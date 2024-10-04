import React from "react";

function Cards() {
  return (
    <div className="w-full min-h-screen bg-zinc-100 py-[8vw] px-[3vw] flex flex-wrap gap-4">
      <div className="w-full lg:w-[49%]">
        <div className="card w-full h-[90vw] md:h-[25rem] rounded-lg bg-[#004D43] flex items-center justify-center relative">
        <img
            className="h-[5rem]"
            src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
            alt=""
          />
        <div className="absolute bottom-5 left-5 py-[0.4rem] px-[1rem] text-[1rem] border-[1px] rounded-full text-[#CDEA68]">&copy;2019-2022</div>
        </div>
      </div>
      <div className="w-full lg:w-[49%] flex flex-wrap gap-[1rem]">
        <div className="w-full md:w-[48%] h-[90vw] md:h-[25rem] rounded-lg bg-[#212121] flex items-center justify-center relative">
          <img
            className="h-[6rem]"
            src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg"
            alt=""
          />
          <div className="absolute bottom-5 left-5 py-[0.4rem] px-[1rem] text-[1rem] border-[1px] uppercase rounded-full">rating 5.0 on clutch</div>
        </div>
        <div className="w-full md:w-[48%] h-[90vw] md:h-[25rem] rounded-lg bg-[#212121] flex items-center justify-center relative">
          <img
            className="h-[6rem]"
            src="https://ochi.design/wp-content/uploads/2022/04/logo003.png"
            alt=""
          />
          <div className="absolute bottom-5 left-5 py-[0.4rem] px-[1rem] text-[1rem] border-[1px] uppercase rounded-full">business bootcamp alumni</div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
