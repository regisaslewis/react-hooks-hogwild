import React from "react";
import Pigtile from "./Pigtile"

function Tiles({ hogs }) {

  const hogList = hogs.map(pig => <Pigtile
      key={pig.name} 
      name={pig.name} 
      image={pig.image} 
      specialty={pig.specialty} 
      weight={pig.weight} 
      greased={pig.greased}
      medal={pig["highest medal achieved"]}
    />)

  return (
    <div>
      {hogList}
    </div>
  )
}

export default Tiles;