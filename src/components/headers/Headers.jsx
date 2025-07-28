import React from 'react'
import img from "../../assets/result.png"

function Headers() {
  return (
    <div className='container '>
    <div className="navbar flex items-center">
        <div className="image w-[80px] mr-12">
            <img className='w-[100%]' src={img} alt="" />
        </div>
        <div className="collection flex-1">
            <ul className='flex gap-8 '>
                <li>
                    <a className='uppercase' href="#">about</a>
                </li>
                <li>
                    <a className='uppercase' href="#">product</a>
                </li>
                <li>
                    <a className='uppercase' href="#">category</a>
                </li>
                <li>
                    <a className='uppercase' href="#">users</a>
                </li>
                <li>
                    <a className='uppercase' href="#">posts</a>
                </li>
            </ul>
        </div>
        <div className="botton flex gap-5">
            <button className='px-[40px] font-bold text-white py-[6px] rounded-[9px] bg-emerald-500'>Sign in</button>
            <button className='px-[40px] font-bold text-white py-[6px] rounded-[9px] bg-emerald-500'>Sign Up</button>
        </div>
    </div>
</div>
  )
}

export default Headers
