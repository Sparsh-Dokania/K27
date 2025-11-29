import React from 'react'
import { Link } from 'react-router-dom'

const HomeBottomText = () => {
  return (
    <div className='font-[font2] flex text-white items-center justify-center gap-2'>
      <Link className='text-[6.5vw] border-3 border-white uppercase rounded-full px-10 pt-5 leading-[6.5vw]'>Projects</Link>
      <Link className='text-[6.5vw] border-3 border-white uppercase rounded-full px-10 pt-5 leading-[6.5vw]'>Agence</Link>
    </div>
  )
}

export default HomeBottomText
