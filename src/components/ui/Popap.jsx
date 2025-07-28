/* eslint-disable no-unused-vars */

import React from 'react'

function Popap({children="", onClose=""}) {
  return (
    <>
    <div onClick={onClose} className='fixed w-full h-screen bg-black/50 top-0 left-0 z-30'>
    </div>
    <div className='fixed z-30 top-1/2 left-1/2 -translate-1/2'>
    <div onClick={onClose} className="fixed z-40 top-2 right-4 text-[35px] border-2 rounded-2xl w-[60px] h-[60px] text-center hover:bg-red-600 hover:text-white">X</div>
    {children}
    </div>
    </>
  )
}

export default Popap
