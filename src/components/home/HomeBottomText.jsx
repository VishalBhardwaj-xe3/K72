import React from 'react'
import { Link } from 'react-router-dom'

const HomeBottomText = () => {
  return (
    <div className="font-[font2] flex items-center justify-center gap-2">
      <div className=" uppercase border-3 h-30 flex items-center border-white rounded-full px-10 hover:border-[#D3FD50] hover:text-[#D3FD50] ">
        <Link className="text-[6vw] mt-6" to="/projects">
          Projects
        </Link>
      </div>

      <div className=" uppercase border-3 h-30 flex items-center border-white rounded-full px-10 hover:border-[#D3FD50] hover:text-[#D3FD50]">
        <Link className="text-[6vw] mt-6" to="/agence">
          Agence
        </Link>
      </div>
    </div>
  );
}

export default HomeBottomText