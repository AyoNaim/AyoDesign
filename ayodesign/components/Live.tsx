'use client'

import React, { useCallback, useState } from 'react'
import LiveCursors from './cursor/LiveCursors'
import { useMyPresence, useOthers, useUpdateMyPresence } from '@liveblocks/react'
import { CursorMode } from '@/types/type'
import CursorChat from './cursor/CursorChat'

const Live = () => {
    const others = useOthers();
    const [ { cursor }, updatePresence ] = useMyPresence() as any;
    const [cursorState, setCursorState] = useState({
      mode: CursorMode.Hidden
    })
    const handlePointerMove = useCallback((event: React.PointerEvent) => {
      event.preventDefault();
      const x = event.clientX - event.currentTarget.getBoundingClientRect().x;
      const y = event.clientY - event.currentTarget.getBoundingClientRect().y;
      updatePresence({ cursor: {x, y} } )
    }, []);
    const handlePointerDown = useCallback((event: React.PointerEvent) => {
      const x = event.clientX - event.currentTarget.getBoundingClientRect().x;
      const y = event.clientY - event.currentTarget.getBoundingClientRect().y;
      updatePresence({ cursor: {x, y} } )
    }, []);
    const handlePointerLeave = () => {
      setCursorState({
        mode: CursorMode.Hidden
      })
      updatePresence({ cursor: null, message: null})
    }
  return (
    <div
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      onPointerDown={handlePointerDown}
      className='border-2 border-green-800 w-screen h-screen flex justify-center items-center text-center'
    >
        i am here
        {
          cursor && <CursorChat
            cursor={cursor}
            cursorState={cursorState}
            setCursorState={setCursorState}
            // updateMyPresence={updateMyPresence}
          />
        }
        <LiveCursors others={others} />
    </div>
  )
}

export default Live