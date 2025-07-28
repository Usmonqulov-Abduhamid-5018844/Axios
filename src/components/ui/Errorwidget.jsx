import React from 'react'
import error from "../../assets/error.svg"

function Errorwidget({text="Error"}) {
  return (
    <div className='container flex flex-col items-center' >
      <img className='w-[100%]' src={error} alt="" />
      <p className='text-red-600 text-center mt-[40px] text-[40px]'>{text}</p>
    </div>
  )
}

export default Errorwidget
