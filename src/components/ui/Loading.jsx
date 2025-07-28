import React from 'react'

function Loading({count=8}) {
  return (
    <div className='container mx-auto  flex flex-wrap justify-between gap-[30px]'>
      {
        Array(count).fill()?.map((_, index)=> {
            <div key={index}>
                 <div className='h-[400px bg-gray-300 rounded-lg'></div>   
                 <div className='p-5'>
                    <div className='w-[80%] bg-gray-300 rounded-lg h-6'></div>
                    <div className='w-[60%] bg-gray-300 rounded-lg h-6'></div>
                    </div>    
            </div>
        })
      }
    </div>
  )
}

export default Loading
