import Banner from "../components/Banner";
import FormContact from "../components/FormContact";

function Contact() {
  return (
    <div>
      <Banner title={"Contact"} />
      <div>
        <div className="w-full  p-2  sm:px-20">
          <div className=" bg-white   font-bold   text-center   sm:p-10  sm:h-[280px]  ">
            <h1 className="font-bold  text-4xl text-primary border-b-2 border-primary border-spacing-5\">
              School Address
            </h1>{" "}
            <br />
            <h2 className=" font-bold text-xl text-gray-500 p-2">
              Address: Gut No. 49, Bajaj Nagar, MIDC, Waluj, Aurangabad –
              431136. (MH). <br />
              <br />
              Contact: 6232616161/ 6232717171 <br />
              <br />
              Email: info@bhondawepatilschool.in
            </h2>
          </div>
        </div>

        <div className="sm:px-20 ">
          <div className=" sm:flex sm:justify-evenly flex-col-1 sm:px-2  p-2 sm:  bg-white">
            <div className=" ">
              <iframe
                className="w-full  p-2 sm:w-[500px] "
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3752.821858170372!2d75.23292387389755!3d19.84748912730309!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdb9b6df9173029%3A0x1d20d2e7adfd03c3!2sBhondawe%20Patil%20%20School!5e0!3m2!1sen!2sin!4v1707153963540!5m2!1sen!2sin"
                width="500"
                height="300"
                allowFullScreen
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="w-full p-2 sm:w-[500px] ">
              <FormContact />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
