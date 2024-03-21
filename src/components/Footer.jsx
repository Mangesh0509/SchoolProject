import React from "react";
import { Link } from "react-router-dom";
import { IoCloseSharp, IoMenu } from "react-icons/io5";
import { useState } from "react";

const navData = [
  { title: "Home", linkTo: "" },
  { title: "About Us", linkTo: "about" },
  { title: "Admission", linkTo: "admission" },
  {
    title: "Mandatory Public Disclosure",
    linkTo: "mandatory-public-disclosure",
  },
  { title: "Academic", linkTo: "academic" },
  { title: "Achievement", linkTo: "achievement" },
  { title: "Infrastructure", linkTo: "infrastructure" },
  { title: "Gallery", linkTo: "gallery" },
  { title: "Contact Us", linkTo: "contact" },
];

const Footer = () => {
  return (
    <div className="bg-slate-300">
      <div className="py-3 px-3 flex flex-col gap-4 w-11/12 m-auto sm:grid grid-cols-3">
        <div>
          <h2 className=" py-1 text-secondary font-bold">School Address</h2>
          <h3 className="text-2xl text-primary py-3">
            Bhodawe Patil Public School
          </h3>
          <p className="text-primary leading-7">
            Gut No. 49, Bajaj Nagar,MIDC,Waluj, Aurangabad – 431136.
            (MH).Contact: 6232616161/ 6232717171 Email:
            bhondawepatilschool@gmail.com
          </p>
        </div>

        <div>
          <h2 className=" py-1 text-secondary font-bold text-x">Quick Links</h2>
          <ul
            // className={` flex flex-col sm:flex-row  sm:gap-x-10  sm:divide-y-0 divide-y-2 divide-gray-50  py-3 ${
            //   open ? "block" : "hidden sm:flex"
            // }`}
            className="flex gap-y-2 flex-col gap"
          >
            {navData.map((item, i) => (
              <Link key={i} to={item.linkTo}>
                <li className='className="hover:text-red-500s'>{item.title}</li>
              </Link>
            ))}
          </ul>
        </div>

        <div>
          <h2 className=" py-1 text-secondary font-bold text-x1">
            Follow Us on Social Media
          </h2>
          <div className="flex gap-4 mt-3 ">
            <img
              className="w-12 h-12 hover:translate-x-3 transition-transform"
              src="\public\images\facebook.webp"
              alt=""
            />
            <img
              className="w-12 h-12 hover:translate-x-3 transition-transform"
              src="\public\images\instagram.webp"
              alt=""
            />
            <img
              className="w-12 h-12 hover:translate-x-3 transition-transform"
              src="\public\images\youtube.webp"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
