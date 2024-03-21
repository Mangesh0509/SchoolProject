import React from "react";
import CardGallery from "./CardGallery";

const cardGalleryData = [
  {
    imageUrl: "/images/03.webp",
  },
  {
    imageUrl: "/images/04.webp",
  },
  {
    imageUrl: "/images/11.webp",
  },
  {
    imageUrl: "/images/12.webp",
  },
  {
    imageUrl: "/images/15.webp",
  },
  {
    imageUrl: "/images/16.webp",
  },
  {
    imageUrl: "/images/17.webp",
  },
  {
    imageUrl: "/images/18.webp",
  },
  {
    imageUrl: "/images/19.webp",
  },
  {
    imageUrl: "/images/20.webp",
  },
  {
    imageUrl: "/images/01.webp",
  },
  {
    imageUrl: "/images/02.webp",
  },
  {
    imageUrl: "/images/03.webp",
  },
  {
    imageUrl: "/images/04.webp",
  },
  {
    imageUrl: "/images/05.webp",
  },
  {
    imageUrl: "/images/06.webp",
  },
  {
    imageUrl: "/images/07.webp",
  },
  {
    imageUrl: "/images/08.webp",
  },
  {
    imageUrl: "/images/09.webp",
  },
  {
    imageUrl: "/images/10.webp",
  },
  {
    imageUrl: "/images/21.webp",
  },
  {
    imageUrl: "/images/22.webp",
  },
  {
    imageUrl: "/images/23.webp",
  },
  {
    imageUrl: "/images/24.webp",
  },
  {
    imageUrl: "/images/25.webp",
  },
  {
    imageUrl: "/images/26.webp",
  },
  {
    imageUrl: "/images/27.webp",
  },
  {
    imageUrl: "/images/32.webp",
  },
  {
    imageUrl: "/images/13.webp",
  },
  {
    imageUrl: "/images/14.webp",
  },
];

const CardGalleryMain = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4  py-6 px-2 hover:font-serif text-red-900 gap-6">
      {cardGalleryData.map((card1, index) => (
        <CardGallery key={index} {...card1} />
      ))}
    </div>
  );
};

export default CardGalleryMain;
