import React from 'react'

const Follow = ({img}) => {
  return (
    <article className='relative'>
        <img src={img} className='h-[180px]' alt="" />
        <i class="fa-solid fa-bag-shopping absolute top-3 right-3 bg-black p-2 rounded-full text-white"></i>
    </article>
  )
}

export default Follow