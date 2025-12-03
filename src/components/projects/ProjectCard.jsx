
import React from 'react'

const ProjectCard = (props) => {

    


  return (
    <>
      <div className="w-1/2 group relative transition-all rounded-2xl h-full hover:rounded-[70px] overflow-hidden">
        <img className="h-full w-full object-cover" src={props.img1} alt="" />
        <div className="opacity-0 transition-all group-hover:opacity-100 absolute top-0 left-0 h-full w-full bg-black/20 flex items-center justify-center">
          <h2 className="uppercase text-6xl font-[font2] border-2 rounded-full pt-2 font-bold px-8 text-white border-white">
            VOIR LE PROJET
          </h2>
        </div>
      </div>
      <div className="w-1/2 group relative transition-all rounded-2xl h-full hover:rounded-[70px] overflow-hidden">
        <img className="h-full w-full object-cover" src={props.img2} alt="" />
        <div className="opacity-0 transition-all group-hover:opacity-100 absolute top-0 left-0 h-full w-full bg-black/20 flex items-center justify-center">
          <h2 className="uppercase text-6xl font-[font2] border-2 rounded-full pt-2 font-bold px-8 text-white border-white">
            VOIR LE PROJET
          </h2>
        </div>
      </div>
    </>
  );
}

export default ProjectCard