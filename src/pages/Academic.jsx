import { useState } from "react";
import Banner from "../components/Banner";
import Earlydata from "../components/Earlydata";
import Foundation from '../components/Foundation'
import Growing from "../components/Growing";
function Academic() {
  const [change , setChange]=useState("early")

  return (
  <div>
      <Banner title={"Academic"}/>
      <div className="py-6 bg-gray-100 ">
        <div className="sm:grid sm:grid-cols-3 flex flex-col gap-2 sm:gap-0 px-2">
          <buttom onClick={()=>setChange("early")} className={`border-2 border-primary text-center py-3 text-lg font-bold ${change === "early"?" bg-primary text-white " : "text-primary"}`} >EARLY YEARS PROGRAMME </buttom>

          <buttom onClick={()=>setChange("foundation")} className={`border-2 border-primary text-center py-3 text-lg font-bold ${change === "foundation"?" bg-primary text-white " : "text-primary"}`}  >THE FOUNDATION YEARS PROGRAMME</buttom>

          <buttom onClick={()=>setChange("growing")} className={`border-2 border-primary text-center py-3 text-lg font-bold ${change === "growing"?" bg-primary text-white " : "text-primary"}`}  >GROWING YEARS PROGRAMME</buttom>

        </div>

        <div className="">
          {change ==="early" && <Earlydata/>}
          {change ==="foundation" && <Foundation/>}
          {change ==="growing" && <Growing/>}
        </div>

      </div>
  </div>
  )
}

export default Academic
