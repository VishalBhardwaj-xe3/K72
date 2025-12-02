import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useRef } from 'react'
import { ScrollTrigger } from 'gsap/all';

const Agence = () => {

  gsap.registerPlugin(ScrollTrigger)

  const imageDivRef = useRef(null)
  const imageRef = useRef(null)

  const imageArray = [
    "public/Carl_480x640.jpg",
    "public/HugoJoseph_480x640.jpg",
    "public/Lawrence_480x640.jpg",
    "public/Olivier_480x640.jpg",
    "public/Lawrence_480x640.jpg",
    "public/HugoJoseph_480x640.jpg",
    "public/ChantalG_480x640.jpg",
    "public/SophieA_480x640.jpg",
    "public/Michele_480X640.jpg",
    "public/MEL_480X640.jpg",
    "public/CAMILLE_480X640_2.jpg",
    "public/joel_480X640_3.jpg",
    "public/joel_480X640_3.jpg"
  ];

  useGSAP(() => {
    gsap.to(imageDivRef.current, {
      scrollTrigger: {
        trigger: imageDivRef.current,
        // markers: true,
        start: 'top 34%',
        end: 'top -118%',
        pin: true,
        pinSpacing: true,
        pinReparent: true,
        pinType: 'transform',
        scrub: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onUpdate: (elem) => {
          let imageIndex
          if (elem.progress < 1) {
            imageIndex = Math.floor(elem.progress * imageArray.length);
          } else {
            imageIndex = imageArray.length-1
          }
          imageRef.current.src = imageArray[imageIndex]
        }
      }
    })
  })
  
  return (
    <div>
      <div className="section1 py-1 overflow-hidden">
        <div ref={imageDivRef} className="h-[20vw] w-[15vw] rounded-3xl top-96 absolute left-[30vw] overflow-hidden">
          <img ref={imageRef}
            className="h-full w-full object-cover"
            src="https://k72.ca/images/teamMembers/Carl_480x640.jpg?w=480&h=640&fit=crop&s=f0a84706bc91a6f505e8ad35f520f0b7"
            alt=""
          />
        </div>
        <div className="font-[font2] relative px-5">
          <h1 className="text-[20vw] uppercase leading-[18vw] text-center mt-[55vh]">
            Soixan7e
            <br />
            Douze
          </h1>
        </div>
        <div className="pl-[40%] mt-2 relative">
          <p className="text-6xl">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            Notre curiosité nourrit notre créativité. On reste humbles et on dit
            non aux gros egos, même le vôtre. Une marque est vivante. Elle a des
            valeurs, une personnalité, une histoire. Si on oublie ça, on peut
            faire de bons chiffres à court terme, mais on la tue à long terme.
            C’est pour ça qu’on s’engage à donner de la perspective, pour bâtir
            des marques influentes.
          </p>
        </div>
      </div>
      <div className="section2 h-screen"></div>
    </div>
  );
}

export default Agence