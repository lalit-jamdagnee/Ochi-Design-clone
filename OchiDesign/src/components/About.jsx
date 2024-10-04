import React from "react";

function About() {
  return (
    <div className="w-full p-[4vw] bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black">
      <h1 className="font-['Neue_Montreal'] text-[3.6vw] tracking-tighter leading-[3.8vw] pr-[3vw]">
        Ochi is a strategic presentation agency for forward-thinking businesses
        that need to raise funds, sell products, explain complex ideas, and hire
        great people.
      </h1>
      <div className="w-full border-t-[1px] mt-[4vw] border-[#a1b562]   font-['Neue_Montreal'] flex justify-normal">
        <div className="w-1/2">
          <h1 className="text-[3.5vw]">Our approach:</h1>
          <button className="px-[2vw] py-[1vw] mt-[2vw] uppercase bg-zinc-900 rounded-full text-white flex items-center gap-[1.5vw] text-[1.2vw]">
            Read More
            <div className="w-[1vw] h-[1vw] bg-zinc-100 rounded-full"></div>
          </button>
        </div>
        <div className="w-1/2 h-[30vh] md:h-[70vh] rounded-3xl bg-[url('https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg')] bg-cover mt-[3vw] p-[2vw]"></div>
      </div>
    </div>
  );
}

export default About;
