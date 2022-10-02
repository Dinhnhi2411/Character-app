import React from 'react'

function Part({path, index, zIndex}) {
    console.log("rerender");
  return (
   <img 
   src={`character/${path}/${index + 1}.png`} 
   alt=""
   width={300}
   style={{ zIndex, position:'absolute',  top:0, left:0}}
   />
  )
}

export default Part
