"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const images = [
  "/images/image-1.jpeg",
  "/images/image-2.jpeg",
  "/images/image-3.jpeg",
  "/images/image-4.jpeg",
  "/images/image-5.jpeg",
  "/images/Project-image-1-min.jpeg",
  "/images/Project-image-2-min.jpeg",
  "/images/Project-image-3-min.jpeg",
  "/images/Project-image-4-min.jpeg",
  "/images/Project-image-5-min.jpeg",
];

export default function FadeGrid() {
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex((prev) => (prev + 3) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-2 gap-3">
      {[0, 1, 2].map((offset) => {
        const imgIndex = (startIndex + offset) % images.length;

        return (
          <div
            key={offset}
            className="relative h-[400px] w-full overflow-hidden"
          >
            <Image
              src={images[imgIndex]}
              alt={`Architecture ${imgIndex}`}
              fill
              className="object-cover transition-opacity duration-1000"
            />
          </div>
        );
      })}
    </div>
  );
}