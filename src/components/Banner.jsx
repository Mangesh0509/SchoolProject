import React from 'react'

const Banner = ({title}) => {
  return (
    <>
    <div className="bg-[url('./images/subheaderbg.jpg')] p-16">
        <h1 className='text-neutral-950 text-center font-bold text-3xl'>{title}</h1>   
    </div>
    </>
  )
}

export default Banner