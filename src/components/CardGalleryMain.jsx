import React from "react";
import CardGallery from "./CardGallery";

const cardGalleryData = [
  {
    imageUrl: "public/images/03.webp",
  },
  {
    imageUrl: "public/images/04.webp",
  },
  {
    imageUrl: "public/images/11.webp",
  },
  {
    imageUrl: "public/images/12.webp",
  },
  {
    imageUrl: "public/images/15.webp",
  },
  {
    imageUrl: "public/images/16.webp",
  },
  {
    imageUrl: "public/images/17.webp",
  },
  {
    imageUrl: "public/images/18.webp",
  },
  {
    imageUrl: "public/images/19.webp",
  },
  {
    imageUrl: "public/images/20.webp",
  },
  {
    imageUrl: "public/images/01.webp",
  },
  {
    imageUrl: "public/images/02.webp",
  },
  {
    imageUrl: "public/images/03.webp",
  },
  {
    imageUrl: "public/images/04.webp",
  },
  {
    imageUrl: "public/images/05.webp",
  },
  {
    imageUrl: "public/images/06.webp",
  },
  {
    imageUrl: "public/images/07.webp",
  },
  {
    imageUrl: "public/images/08.webp",
  },
  {
    imageUrl: "public/images/09.webp",
  },
  {
    imageUrl: "public/images/10.webp",
  },
  {
    imageUrl: "public/images/21.webp",
  },
  {
    imageUrl: "public/images/22.webp",
  },
  {
    imageUrl: "public/images/23.webp",
  },
  {
    imageUrl: "public/images/24.webp",
  },
  {
    imageUrl: "public/images/25.webp",
  },
  {
    imageUrl: "public/images/26.webp",
  },
  {
    imageUrl: "public/images/27.webp",
  },
  {
    imageUrl: "public/images/32.webp",
  },
  {
    imageUrl: "public/images/13.webp",
  },
  {
    imageUrl: "public/images/14.webp",
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
