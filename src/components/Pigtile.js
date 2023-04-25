import React, { useState } from "react";

function Pigtile({ name, image, specialty, weight, greased, medal }) {

  const [showDetails, setShowDetails] = useState(false)

  function handleClick() {
    setShowDetails(!showDetails);
  }

  return (
    <div onClick={handleClick}>
      <p>Name: {name}</p>
      <img alt={name} src={image} />
      {showDetails ? <p>Specialty: {specialty}</p> : null}
      {showDetails ? <p>Weight: {weight}lbs</p> : null}
      {showDetails ? <p>Are they greased? {greased ? "Yes" : "No"}</p>: null}
      {showDetails ? <p>Highest Medal Achieved: {medal}</p> : null}
    </div>
  )
}

export default Pigtile;