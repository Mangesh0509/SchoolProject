import React from "react";
import emailjs from "emailjs-com";

const Form1 = () => {
  const handleSubmit = (event) => {
    event.preventDefault();

    // Get form data
    const formData = new FormData(event.target);

    // Prepare data for sending via EmailJS
    const templateParams = {
      studentName: formData.get("studentName"),
      gradeRequired: formData.get("gradeRequired"),
      parentName: formData.get("parentName"),
      contactNumber: formData.get("contactNumber"),
      email: formData.get("email"),
      residentialAddress: formData.get("residentialAddress")
    };

    // Send email using EmailJS
    emailjs.send('service_kq0s07a', 'template_wt0nsjf', templateParams, 'vWFEr7hlKZ8nOiErS')
      .then((response) => {
        console.log('Email sent successfully!', response.status, response.text);
      })
      .catch((error) => {
        console.error('Email sending failed:', error);
      });

    // Clear form fields after submission (if needed)
    event.target.reset();
  };

  return (
    <>
      <div className="sm:p-10 m-2 mb-8 sm:ml-96 sm:mr-96 ">
        <div className="bg-blue-900 sm:py-20 rounded-md text-[#e5e7eb] text-sm sm:text-base font-semibold">
          <div className="sm:w-11/12 flex justify-center text-center mx-auto w-full px-3 sm:px-0">
            <form onSubmit={handleSubmit}>
              <h1 className="font-bold sm:text-start text-center text-3xl">
                Please fill the Form below to Place Admission Enquiry
              </h1>

              <div className="w-80 my-4 ">
                <input
                  name="studentName"
                  className="sm:w-[600px] text-start h-12  bg-primary border-b-2  font-bold text-xl"
                  type="text"
                  placeholder="Name Of Student"
                />
              </div>

              <div className="w-80 my-4">
                <input
                  name="gradeRequired"
                  className="sm:w-[600px] text-start h-12  bg-primary border-b-2  font-bold text-xl"
                  type="text"
                  placeholder="Admission Required For Which Grade?"
                />
              </div>

              <div className="w-80  my-4">
                <input
                  name="parentName"
                  className="sm:w-[600px] text-start h-12  bg-primary border-b-2  font-bold text-xl"
                  type="text"
                  placeholder="Parent Name"
                />
              </div>

              <div className="w-80 my-4">
                <input
                  name="contactNumber"
                  className="sm:w-[600px] text-start h-12  bg-primary  border-b-2 font-bold text-xl"
                  type="text"
                  placeholder="Contact Number"
                />
              </div>

              <div className="w-80 my-4">
                <input
                  name="email"
                  className="sm:w-[600px] text-start h-12  bg-primary border-b-2 font-bold text-xl"
                  type="email"
                  placeholder="Email ID"
                />
              </div>

              <div className="w-80 my-4">
                <input
                  name="residentialAddress"
                  className="sm:w-[600px] text-start h-12  bg-primary border-b-2 font-bold text-xl"
                  type="text"
                  placeholder="Residential Address"
                />
              </div>

              <div className=" p-4 my-2 text-center">
                <button
                  type="submit"
                  className="px-6 py-1 border-2 rounded-full text-white hover:bg-white hover:text-black bg-red-600"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Form1;
