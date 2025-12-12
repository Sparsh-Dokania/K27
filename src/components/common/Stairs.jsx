import React from 'react'
import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const Stairs = () => {
    const stairParentRef = useRef(null)

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from('.stair', {
      height: 0,
      stagger:{
        amount: -0.25
      }
  })
  tl.to('.stair', {
    y: '100%',
    stagger:{
      amount: 0.25
    }
  })


  })

  return (
    <div ref={stairParentRef} className='h-screen w-full flex fixed z-20 top-0'>
        <div className="h-full w-full flex">
        <div className='stair h-full w-1/5 bg-black'></div>
        <div className='stair h-full w-1/5 bg-black'></div>
        <div className='stair h-full w-1/5 bg-black'></div>
        <div className='stair h-full w-1/5 bg-black'></div>
        <div className='stair h-full w-1/5 bg-black'></div>
      </div>
      </div>
  )
}

export default Stairs
