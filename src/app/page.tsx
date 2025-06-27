'use client'

import { useState } from "react"

export default function Home() {
  const [eventType, setEventType] = useState<string>('')
  
  const handlePointerUp = () => {
    setEventType('pointer up')
  }

  const handlePointerDown = () => {
    setEventType('pointer down')
  }

  const handleTouchStart = () => {
    setEventType('touch start')
  }

  const handleTouchEnd = () => {
    setEventType('touch end')
  }

  const handleClick = () => {
    setEventType('click')
  }

  return (
    <div className="flex flex-col gap-10 items-center justify-center h-screen">
      <h1 className="text-2xl font-bold md:text-4xl">電話番号長押しイベント調査用</h1>
      <div className="flex gap-8 items-center justify-center">
        <div className="flex flex-col items-center gap-2 justify-center">
          <h2 className="text-lg font-bold md:text-2xl">Pointer Event</h2>
          <a
            href="tel:0312345678"
            className="text-xl font-bold px-4 py-2 bg-blue-500 text-white rounded-md"
            onPointerUp={handlePointerUp}
            onPointerDown={handlePointerDown}
          >
            電話
          </a>
        </div>
        <div className="flex flex-col items-center gap-2 justify-center">
          <h2 className="text-lg font-bold md:text-2xl">Touch Event</h2>
          <a
            href="tel:0312345678"
            className="text-xl font-bold px-4 py-2 bg-blue-500 text-white rounded-md"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            電話
          </a>
        </div>
        <div className="flex flex-col items-center gap-2 justify-center">
          <h2 className="text-lg font-bold md:text-2xl">Click Event</h2>
          <a
            href="tel:0312345678"
            className="text-xl font-bold px-4 py-2 bg-blue-500 text-white rounded-md"
            onClick={handleClick}
          >
            電話
          </a>
        </div>
      </div>
      {
        eventType && (
          <div className="text-xl font-bold h-8 flex items-center justify-center">
            {eventType}
          </div>
        )
      }
    </div>
  );
}
