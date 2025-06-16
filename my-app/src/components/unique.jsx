import React from 'react'

const Unique = ({img, h2, h4}) => {
  return (
    <>
    <article className='flex flex-col gap-5 items-center'>
    <div className='flex flex-col gap-2 items-center'>
      <img src={img} alt="" /> 
      <h2 className='font-semibold'>{h2}</h2>
    </div>
        <h4>{h4}</h4>
    </article>
    </>
  )
}

export default Unique