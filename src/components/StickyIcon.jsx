import React from "react";

const StickyIcon = () => {
  return (
    //     <div claassNameName="flex flex-col top-30px right-0 z-10 w-11/12 font-bold">

    //      <div claassNameName="">
    //         <a href="https://www.facebook.com">
    //         <i claassNameName="fa-brands fa-facebook"></i>
    //         {/* <span claassNameName="text">Facebook</span> */}
    //     </a>

    //         <a href="https://www.instagram.com">
    //         <i claassNameName="fa-brands fa-instagram"></i>
    //         {/* <span claassNameName="text">Instagram</span> */}
    //     </a>

    //         <a href="https://www.twitter.com">
    //         <i claassNameName="fa-brands fa-square-x-twitter"></i>
    //         {/* <span claassNameName="text">Twitter</span> */}
    //     </a>
    //     <a href="https://www.youtube.com">
    //         <i claassNameName="fa-brands fa-youtube"></i>
    //         {/* <span claassNameName="text">YouTube</span> */}
    //         </a>
    //     <div/>
    //    </div>
    //  </div>
    <div claassName="fixed right-0 top-30">
      <div claassName="flex flex-col  w-40 	background-color:rgb(127 29 29) justify-center ">
        <a
          className="p-12 font-20px w-[110px] transition-all-0.9-ease-in-out  translate-x-40px"
          href="https://www.facebook.com"
        >
          <i className=" fa-f fa-brands fa-facebook "></i>
          <span claassName="font-14px display-none mb-10px curser-pointer  ">
            Facebook
          </span>
        </a>

        <a
          className="p-12 font-20 w-[110px] transition-all-0.9-ease-in-out  translate-x-40px"
          href="https://www.instagram.com"
        >
          <i className="fa-in fa-brands fa-instagram"></i>
          <span claassName="font-14px display-none mb-10px curser-pointer  ">
            Instagram
          </span>
        </a>

        <a
          className="p-12 font-20 w-[110px] transition-all-0.9-ease-in-out  translate-x-40px"
          href="https://www.twitter.com"
        >
          <i className="fa-tw fa-brands fa-square-x-twitter"></i>
          <span claassName="font-14px display-none mb-10px curser-pointer  ">
            Twitter
          </span>
        </a>
        <a
          className="p-12 font-20 w-[110px] transition-all-0.9-ease-in-out  translate-x-40px"
          href="https://www.youtube.com"
        >
          <i className="fa-yo fa-brands fa-youtube"></i>
          <span claassName="font-55px display-none mb-10px curser-pointer  ">
            YouTube
          </span>
        </a>

        <div />
      </div>
    </div>
  );
};

export default StickyIcon;
