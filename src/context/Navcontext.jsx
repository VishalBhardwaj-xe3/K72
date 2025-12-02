import React, { createContext, useState } from 'react'


export const navbarContext = createContext();

const Navcontext = ({ children }) => {
    
    
    const [navOpen, setNavOpen] = useState(false)

  return (
    <div>
      <navbarContext.Provider value={[navOpen, setNavOpen]}>{children}</navbarContext.Provider>
    </div>
  );
}

export default Navcontext