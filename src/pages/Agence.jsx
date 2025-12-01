import React from 'react'

const Agence = () => {
  return (
    <div>
      <div className="section1">
        <div className="h-[20vw] w-[15vw] rounded-4xl top-72 absolute left-[30vw] overflow-hidden">
          <img
            className="h-full w-full object-cover"
            src="https://k72.ca/images/teamMembers/Carl_480x640.jpg?w=480&h=640&fit=crop&s=f0a84706bc91a6f505e8ad35f520f0b7"
            alt=""
          />
        </div>
        <div className="font-[font2] relative">
          <h1 className="text-[15vw] uppercase leading-[18vw] text-center mt-[55vh]">
            Soixan7e
            <br />
            Douze
          </h1>
        </div>
        <div className="pl-[40%] mt-10">
          <p className="text-6xl">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
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