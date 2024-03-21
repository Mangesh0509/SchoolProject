// Card.js

import React from 'react';

const Card = ({ title, description, subdescription, imageUrl }) => {
  return (
    <div className="max-w-[700px] my-2 ml-5 py-4 rounded overflow-hidden shadow-lg  transition duration-300  transform hover:scale-105">
      <img className="w-full" src={imageUrl} alt="Card" />
      <div className="px-6 py-4 group">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base ">{description}</p>
        <p className="text-gray-700 text-base hidden group-hover:block">{subdescription}</p>
      </div>
    </div> 
  );
};

export default Card;
