import React from 'react'
import hero from "../../assets/Hero-Shot.jpg"

function Hero() {
  return (
    <div className='container mt-[40px]'>
      <div className='border-2'>
        <img className='w-[100%]' src={hero} alt="" />
      </div>
    </div>
  )
}

export default Hero
