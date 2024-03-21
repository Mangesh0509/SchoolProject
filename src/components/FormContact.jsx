import React, { useState } from 'react'


const FormContact = () => {
    const[Form, setForm]=useState({Fname:" ", Lname:" ", Email:" ", Phone:" "});
const changeForm=()=>{
    changeForm({...Form,[e.target.name]:e.target.value})
}

const formsubmit =(e)=>{
    e.preventDefault;
  
} 
  return (
    <div className='border-2 rounded-lg '>
    <form onSubmit={formsubmit}>
    <h1 className="font-bold sm:w-[480px] text-center  sm:text-3xl text-xl h-12 bg-primary text-white">
    Send Us a Message</h1>

        <input className="sm:w-[480px] w-full text-start h-12  bg-primary border-b-2  font-bold sm:text-xl " type='text' placeholder=' Name' name='Fname' onChange={changeForm} value={Form.F}/><br></br>
        
        <input className="sm:w-[480px] w-full text-start h-12  bg-primary border-b-2  font-bold sm:text-xl " type='text' placeholder=' Mobail Number' name='Lname' onChange={changeForm} value={Form.l}/><br></br>
        
        <input className="sm:w-[480px] w-full text-start h-12  bg-primary border-b-2  font-bold sm:text-xl " type='email' placeholder=' Email' name='Email' onChange={changeForm} value={Form.E}/><br></br>
        
        <input className="sm:w-[480px] w-full text-start h-12  bg-primary border-b-2  font-bold sm:text-xl " type='text' placeholder=' Enter Phone' name='Phone' onChange={changeForm} value={Form.P}/><br></br>

            <div className=" p-2  bg-primary text-center">
                <button
                  type="submit"
                  className="px-6 py-1 border-2 rounded-full text-white hover:bg-white hover:text-black bg-red-600"
                >
                  Submit
                </button>
            </div>
    </form>
    </div>
  )
}

export default FormContact