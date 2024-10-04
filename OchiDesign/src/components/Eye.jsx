import React, { useEffect, useState } from "react";

function Eye() {
  const [pupilStyle1, setPupilStyle1] = useState({});
  const [pupilStyle2, setPupilStyle2] = useState({});

  const handleMouseMove = (event) => {
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    const eye1 = document.querySelectorAll(".eye")[0].getBoundingClientRect();
    const eyeCenterX1 = eye1.left + eye1.width / 2;
    const eyeCenterY1 = eye1.top + eye1.height / 2;

    const angle1 = Math.atan2(mouseY - eyeCenterY1, mouseX - eyeCenterX1);
    const pupilDistance1 = eye1.width / 4;
    const pupilX1 = Math.cos(angle1) * pupilDistance1;
    const pupilY1 = Math.sin(angle1) * pupilDistance1;

    setPupilStyle1({
      transform: `translate(${pupilX1}px, ${pupilY1}px)`,
    });

    const eye2 = document.querySelectorAll(".eye")[1].getBoundingClientRect();
    const eyeCenterX2 = eye2.left + eye2.width / 2;
    const eyeCenterY2 = eye2.top + eye2.height / 2;

    const angle2 = Math.atan2(mouseY - eyeCenterY2, mouseX - eyeCenterX2);
    const pupilDistance2 = eye2.width / 4;
    const pupilX2 = Math.cos(angle2) * pupilDistance2;
    const pupilY2 = Math.sin(angle2) * pupilDistance2;

    setPupilStyle2({
      transform: `translate(${pupilX2}px, ${pupilY2}px)`,
    });
  };

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="w-full h-screen  flex flex-col items-center justify-center gap-[50px] bg-[#CDEA68] cursor-pointer">
        <div>
            <h1 className="uppercase text-black font-['Neue_Montreal'] text-[8vw] leading-[7vw]
            tracking-tighter font-black text-center">Ready</h1>
            <h1 className="uppercase text-black font-['Neue_Montreal'] text-[8vw] leading-[7vw]
            tracking-tighter font-black text-center">to start</h1>
            <h1 className="uppercase text-black font-['Neue_Montreal'] text-[8vw] leading-[7vw]
            tracking-tighter font-black text-center">the project?</h1>
        </div>
      <div className="flex gap-[20px] ">
      <div className="eye relative w-[200px] h-[200px] bg-white rounded-full flex items-center justify-center">
        <div className="pupil absolute w-[100px] h-[100px] bg-black rounded-full flex justify-center items-center" style={pupilStyle1}>
          <div className="highlight w-[20px] h-[20px] bg-white rounded-full top-[8px] left-[8px] absolute"></div>
        </div>
      </div>
      <div className="eye relative w-[200px] h-[200px] bg-white rounded-full flex items-center justify-center">
        <div className="pupil absolute w-[100px] h-[100px] bg-black rounded-full flex justify-center items-center" style={pupilStyle2}>
          <div className="highlight w-[20px] h-[20px] bg-white rounded-full top-[8px] left-[8px] absolute"></div>
        </div>
      </div>
      </div>
      <div>
        <button className="text-white bg-black rounded-full text-[1rem] uppercase font-['Neue_Montreal'] tracking-tighter border-[1px] border-black px-[1.6rem] py-[0.8rem]">start the project</button>
      </div>
    </div>
  );
}

export default Eye;
