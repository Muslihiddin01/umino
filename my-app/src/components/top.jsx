import React from 'react'

const Top = ({img,text,discount,preorder,price, newPrice}) => {
    
  return (
    <>
    <article className='article flex flex-col gap-3 relative'>
        <img className='lg:h-[350px]' src={img} alt="" />
        <h3>{text}</h3>
        <div className='flex gap-1 text-sm'>
            <i className='fa-solid fa-star'></i>
            <i className='fa-solid fa-star'></i>
            <i className='fa-solid fa-star'></i>
            <i className='fa-solid fa-star'></i>
            <i className='fa-solid fa-star'></i>
        </div>
        <div>
        <h2 className='document font-semibold'>{price}</h2>
        </div>
    </article>
    </>
  )
}

export default Top