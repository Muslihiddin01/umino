import React from 'react'

const Category = ({img,text}) => {
  return (
    <>
    <div className='flex flex-col items-center gap-2'>
    <img src={img} className='rounded-full w-[120px] h-[120px] lg:w-[150px] lg:h-[150px]' alt="" />
    <p className='text-lg'>{text}</p>
    </div>
    </>
  )
}

export default Category