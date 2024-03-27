import Banner from "../components/Banner";
import Form1 from "../components/Form1";


const Admission = () => {
  return  <div>
           <Banner title={"Admission"}/>
           {/* <div className="mt-4 h-60 translate-x-60 bg-[url('./images/subheaderbg.jpg')]">
        <h1 className=' text-neutral-950 text-center bg-slate-50 py-4 font-bold text-3xl'>Adimission</h1>
    </div> */}
           <div className="sm:py-3 px-2 flex justify-center my-6 ">
          <iframe 
            width="950"
            height='500'
            src="https://www.youtube.com/embed/cuIFuOVG9eA?si=bqe3AIxWz81NqsR8"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>


        <Form1/>
          </div>;
};

export default Admission;
