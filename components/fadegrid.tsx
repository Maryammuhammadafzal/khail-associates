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
  "/images/front page/BED ROOM FINAL.jpg",
  "/images/front page/IMG-20231111-WA0147.jpg",
  "/images/front page/SAVE_20221102_165204.jpg",
  "/images/front page/TYPE A.jpg.jpeg",
  "/images/front page/TYPICAL F.jpg.jpeg",
  "/images/front page/Umair Gulistan-1.jpeg",
  // "/images/front page/WhatsApp Image 2025-09-10 at 19.28.56_c45b73d4.jpg",
  "/images/front page/WhatsApp Image 2025-09-10 at 19.29.19_b02e38e7.jpg",
  "/images/front page/WhatsApp Image 2025-09-10 at 19.29.30_f13725be.jpg",
  "/images/front page/WhatsApp Image 2025-09-10 at 19.29.31_1ab41a56.jpg",
  "/images/front page/WhatsApp Image 2025-09-10 at 19.29.38_59d53694.jpg",
  "/images/front page/WhatsApp Image 2026-02-06 at 9.20.04 PM.jpeg",
  "/images/front page/aab_3 - Photo.jpg",
  "/images/front page/yusuf new.jpg",
  
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
    <div className="grid grid-cols-2 gap-2 sm:gap-3 md:grid-cols-3 lg:grid-cols-3">
      {[0, 1, 2].map((offset) => {
        const imgIndex = (startIndex + offset) % images.length;

        return (
          <div
            key={offset}
            className="relative h-[180px] w-full overflow-hidden sm:h-[220px] md:h-[280px] lg:h-[360px]"
          >
            <Image
              src={images[imgIndex]}
              alt={`Architecture ${imgIndex}`}
              fill
              className="object-cover transition-opacity duration-1000 hover:scale-105"
            />
          </div>
        );
      })}
    </div>
  );
}