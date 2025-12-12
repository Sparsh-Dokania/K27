import React from "react";
import { Link } from "react-router-dom";

const HomeBottomText = () => {
  return (
    <div className="font-[font2] flex text-white items-center justify-center gap-2">
      <div className="border-3 h-44 flex items-center hover:border-[#D3FD50] hover:text-[#D3FD50] px-14 border-white rounded-full uppercase">
        <Link className="text-[6.5vw]  mt-6" to='/projects'>
          Projects
        </Link>
      </div>
      <div className="border-3 hover:border-[#D3FD50] hover:text-[#D3FD50] h-44 flex items-center px-14 border-white rounded-full uppercase">
      
        <Link className="text-[6.5vw] mt-6" to='/agence'>
          Agence
        </Link>
      </div>
    </div>
  );
};

export default HomeBottomText;
