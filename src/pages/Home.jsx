import React from "react";
import Slider from "../components/Slider";
import StickyIcon1 from "../components/StickyIcon1";
import WhatsApp from "../components/WhatsApp";

const Home = () => {
  return (
    <div>
      <Slider />
      <div className="sm:py-3 sm:px-3 sm:w-11/12 sm:justify-around ">
        <div className="sm:flex sm:flex-col-3 sm:p-10 sm:gap-12 m-2  ">
          <img
            className="sm:w-[300px] w-full sm:ml-20 h-[400px]  "
            src="./images/home-welcome-1.webp"
            alt=""
          />
          <img
            className="sm:w-[300px] w-full mt-2 h-[400px]"
            src="./images/home-welcome-2.webp"
            alt=""
          />
          <div className="sm:flex sm:flex-col sm:justify-center text-center">
            <h1 className="text-3xl font-bold">
              <span>Welcome to</span>
              <br />
              Bhondwe patil  School
            </h1>
            <p className="text-center p-4">
              Welcome to the abode of intellect where the purpose of education
              is to equip the child with the most excellent technological
              proficiency; to empower him with the skills in order to realize
              his God gifted potential; to creole the light climate so that the
              child may develop fully as a complete human being at BHONDAWE
              PATIL  SCHOOL, one's intellect is I transformed into an
              illuminated reflection of knowledge and broad outlook towards
              life.
            </p>
          </div>
        </div>
        <div className="sm:py-3 flex justify-center sm:mb-8">
          <iframe
            width="800"
            height="450"
            src="https://www.youtube.com/embed/cuIFuOVG9eA?si=bqe3AIxWz81NqsR8"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>

        <div className="sm:w-[1500px] sm:h-auto w-full m-2 ">
          <img className="" src="/images/bg-1.jpg" alt="" />
        </div>
      </div>
      {/* <StickyIcon /> */}
      <StickyIcon1/>
      <WhatsApp />

    </div>
  );
};

export default Home;
