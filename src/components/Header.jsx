import { Link } from "react-router-dom";
import { IoCloseSharp, IoMenu } from "react-icons/io5";
import { useState } from "react";
import AdmissionNotification from "./AdmissionNotification";
import LimitedOffer from "./LimitedOffer";
import LimitedSeats from "./LimitedSeats";

const navData = [
  { title: "Home", linkTo: "" },
  { title: "About Us", linkTo: "about" },
  { title: "Admission", linkTo: "admission" },
  {
    title: "Mandatory Public Disclosure",
    linkTo: "mandatory-public-disclosure",
  },
  { title: "Academic", linkTo: "academic" },
  // { title: "Achievement", linkTo: "achievement" },
  { title: "Infrastructure", linkTo: "infrastructure" },
  { title: "Gallery", linkTo: "gallery" },
  { title: "Contact Us", linkTo: "contact" },
];

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <div className="bg-secondary text-[#fff] py-1 text-sm">
        <div className="sm:w-11/12 mx-auto w-full px-3 sm:px-0 flex justify-between ">
          <p>bhondawepatilschool@gmail.com</p>
          <Link to="https://gurumishrihmc.edu.in/">
            <p>facebook</p>
          </Link>
        </div>
      </div>

      <div className="">
      {/* <div className="  w-11/12 m-auto flex-col gap-x-3 text-xs sm:grid sm:grid-cols-3  "> */}
        {/* <AdmissionNotification/> */}
        {/* <LimitedOffer/> */}
        <LimitedSeats/>
        </div>

      <div className="py-2 sm:w-11/12 mx-auto w-full px-3 sm:px-0  flex justify-between items-center">
        <img src="./images/logo.jpg" alt="logo" className="sm:h-auto h-8" />
        <div
          className="text-primary sm:hidden text-lg"
          onClick={() => setOpen(!open)}>
          {open ? <IoCloseSharp /> : <IoMenu />}
        </div>
      </div>
      <div className="bg-primary text-gray-50 text-sm sm:text-base font-semibold">
        <div className="sm:w-11/12 mx-auto w-full px-3 sm:px-0">
          <ul
            className={` flex flex-col sm:flex-row  sm:gap-x-10  sm:divide-y-0 divide-y-2 divide-gray-50  py-3 ${
              open ? "block" : "hidden sm:flex"}`}>
            {navData.map((item, i) => (
              <Link key={i} to={item.linkTo}>
                <li onClick={() => setOpen(!open)} className="sm:py-0 py-3">
                  {item.title}
                </li>
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
