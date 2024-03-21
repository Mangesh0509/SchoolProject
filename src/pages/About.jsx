import { useState } from "react";
import Mission from "../components/Mission";
import Philosophy from "../components/Philosophy";
import Principal from "../components/Principal";
import Aim from "../components/Aim";
import Distinctions from "../components/Distinctions";

function About() {
  const [next, setNext] = useState("mision");
  return (
    <div>
      <div>
        <img src="./images/about-bg.webp" alt="" />
      </div>

      <div className="sm:flex  sm:my-16 my-6 bg-slate-200">
        <div className="sm:grid sm:grid-rows-5 grid grid-rows w-auto border-2 sm:w-11/12 mx-12  sm:h-72 sm:ml-8 rounded-lg sm:my-10">
          <button
            className={`border-2 border-primary text-center sm:py-2 p-2 text-lg font-bold ml-2 mr-2 my-1 ${
              next === "mision" ? " bg-primary text-white " : "text-primary"
            }`}
            onClick={() => setNext("mision")}
          >
            Mission & vision
          </button>
          <button
            className={`border-2 border-primary text-center sm:py-2 p-2 text-lg font-bold ml-2 mr-2 my-1 ${
              next === "pilosophy" ? " bg-primary text-white " : "text-primary"
            }`}
            onClick={() => setNext("pilosophy")}
          >
            Philosophy
          </button>
          <button
            className={`border-2 border-primary text-center sm:py-2 p-2 text-lg font-bold ml-2 mr-2 my-1 ${
              next === "principal" ? " bg-primary text-white " : "text-primary"
            }`}
            onClick={() => setNext("principal")}
          >
            Principal Desk
          </button>
          <button
            className={`border-2 border-primary text-center sm:py-2 p-2 text-lg font-bold ml-2 mr-2 my-1 ${
              next === "aim" ? " bg-primary text-white " : "text-primary"
            }`}
            onClick={() => setNext("aim")}
          >
            Our Aim
          </button>
          <button
            className={`border-2 border-primary text-center sm:py-2 p-2 text-lg font-bold ml-2 mr-2 my-1 ${
              next === "distinctions" ? " bg-primary text-white " : "text-primary"
            }`}
            onClick={() => setNext("distinctions")}
          >
            Our Distinctions
          </button>
        </div>
        <div className="sm:py-6 ">
          {next === "mision" && <Mission />}
          {next === "pilosophy" && <Philosophy />}
          {next === "principal" && <Principal />}
          {next === "aim" && <Aim/>}
          {next === "distinctions" && <Distinctions/>}
        </div>
      </div>
    </div>
  );
}

export default About;
