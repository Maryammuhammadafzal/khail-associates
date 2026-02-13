"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

const images = [
  '/images/image-1.jpeg',
  '/images/image-2.jpeg',
  '/images/image-3.jpeg',
  '/images/image-4.jpeg',
  '/images/image-5.jpeg',
  '/images/image-6.jpeg',
]

export default function FadeGrid() {
  // Each cell starts with different random image
  const [activeIndexes, setActiveIndexes] = useState(
    Array.from({ length: 6 }, () =>
      Math.floor(Math.random() * images.length)
    )
  )

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndexes(prev =>
        prev.map(index => {
          let next
          do {
            next = Math.floor(Math.random() * images.length)
          } while (next === index)
          return next
        })
      )
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="grid lg:grid-cols-6 md:grid-cols-3 grid-cols-2 gap-3">
      {activeIndexes.map((imgIndex, i) => (
        <div
          key={i}
          className="relative h-[230px] w-full overflow-hidden"
        >
          {images.map((src, index) => (
            <Image
              key={index}
              src={src}
              alt="Architecture"
              fill
              className={`object-cover transition-opacity duration-1000 ease-in-out ${
                index === imgIndex
                  ? "opacity-100"
                  : "opacity-0"
              }`}
            />
          ))}
        </div>
      ))}
    </div>
  )
}
