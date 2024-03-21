import React from 'react'

const CardGallery = ({imageUrl}) => {
  return (
    <div className="max-w-[700px] rounded-xl overflow-hidden shadow-lg  transition duration-300  transform hover:scale-105">
      
      
    <img className="w-full mix-blend-color-burn" src={imageUrl} alt="Card" />
  
  </div> 
  )
}

export default CardGallery