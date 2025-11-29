import React from "react";
import Video from "./Video.jsx";
const HomeHeroText = () => {
  return (
    <div className="font-[font1] pt-5 text-center text-white">
      <div className="text-[9.5vw] justify-center flex items-center uppercase leading-[8vw]">
        The spark for
      </div>
      <div className="text-[9.5vw] justify-center flex uppercase items-start leading-[8vw]">
        all
        <div className='h-[7vw] rounded-full overflow-hidden mr-1 ml-1 '>
          <Video />
        </div>
        things
      </div>
      <div className="text-[9.5vw] justify-center flex items-center uppercase leading-[8vw]">
        creative
      </div>
    </div>
  );
};

export default HomeHeroText;
