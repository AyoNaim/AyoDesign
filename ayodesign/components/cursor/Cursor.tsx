import CursorSVG from '@/public/assets/CursorSVG'
import React from 'react'

type props = {
  color: string,
  x: number,
  y: number,
  message: string
}

const Cursor = ({color,x, y, message}: props) => {
  return (
    <div className='pointer-events-none absolute left-0 top-0' style={{ transform: `translateX(${x}px) translateY(${y}px)`}}>
      <CursorSVG color={color}/>
    </div>
  )
}

export default Cursor