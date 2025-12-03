import React from 'react'
import ProjectCard from '../components/projects/ProjectCard';
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/all';

const Projects = () => {

  gsap.registerPlugin(ScrollTrigger)

  useGSAP(() => {
    gsap.from(".hero", {
      height: '50px',
      stagger:{
        amount:0.4
      },
      scrollTrigger: {
        trigger: '.lol',
        markers: true,
        start: 'top 100%',
        end: 'top -300%',
        scrub: true,
      },
    });
  });


  const project = [
    {
      image1: "public/Project Card/BEST_site_menu_Thumbnail.jpg",
      image2: "public/Project Card/CF_thumbnail.jpg",
    },
    {
      image1: "public/Project Card/chalaxeur-thumbnail_img.jpg",
      image2: "public/Project Card/OKA_thumbnail.jpg",
    },
    {
      image1: "public/Project Card/opto_thumbnail2.jpg",
      image2: "public/Project Card/PJC_SiteK72_Thumbnail_640x290 (1).jpg",
    },
    {
      image1: "public/Project Card/thumbnailimage_atable2.jpg",
      image2: "public/Project Card/thumbnailimage_shelton.jpg",
    },
    {
      image1: "public/Project Card/thumbnailimage_SollioAg.jpg",
      image2: "public/Project Card/WS---K72.ca---MenuThumbnail.jpg",
    },
  ];

  return (
    <div className="p-4 ">
      <div className=" pt-[45vh]">
        <h2 className="font-[font2] text-[9.5vw] uppercase">Projets</h2>
      </div>
      <div className="lol -mt-20">
        {project.map((elem, idx) => {
          return <div key={ idx} className="hero w-full h-[850px] mb-4 flex gap-5">
            <ProjectCard img1={elem.image1} img2={elem.image2} />;
            </div>
        })}
      </div>
    </div>
  );
}

export default Projects