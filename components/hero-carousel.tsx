// import * as React from "react"

// import { Card, CardContent } from "@/components/ui/card"
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel"
// import Image from "next/image"

// export function HeroCarousel() {

//   const images = [
//     "/images/image-1.jpeg",
//     "/images/image-2.jpeg",
//     "/images/image-3.jpeg",
//     "/images/image-4.jpeg",
//     "/images/image-5.jpeg",
//     "/images/image-6.jpeg",
//   ]
//   return (
//     <Carousel className="w-full h-full max-h-[800px]">
//       <CarouselContent>
//         {images.map((src, index) => (
//           <CarouselItem key={index} className="w-full h-full max-h-[800px]">
//             <div className="">
//               <Card className="p-0 rounded-none">
//                 <CardContent className="flex aspect-square rounded-none items-center p-0 justify-center ">
//                   {/* <span className="text-4xl font-semibold">{index + 1}</span> */}
//                   <Image src={src} alt={`image-${index + 1}`} width={1200} height={800} className="h-full w-full " />
//                   {/* <Image src={`/images/hero-carousel-${index + 1}.webp`} alt={`carousel-image-${index + 1}`} width={1200} height={800} className="h-full w-full object-cover" /> */}
//                 </CardContent>
//               </Card>
//             </div>
//           </CarouselItem>
//         ))}
//       </CarouselContent>
//       <CarouselPrevious />
//       <CarouselNext />
//     </Carousel>
//   )
// }


"use client"

import * as React from "react"
import Autoplay from "embla-carousel-autoplay"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"

export function HeroCarousel() {

  const images = [
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
  ]
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )

  return (
   <Carousel className="w-full" plugins={[plugin.current]}
   onMouseEnter={plugin.current.stop} onMouseLeave={plugin.current.reset}
    >
  <CarouselContent>
    {images.map((src, index) => (
      <CarouselItem key={index}>
       
       
        {/* <div className="relative h-[1500px] min-h-[500px] w-full">
          <Image
            src={src}
            alt={`image-${index + 1}`}
            fill
            priority={index === 0}
            className="object-cover object-center"
          />
         </div> */}

    <div className="relative w-full h-full">
  <Image
  src={src}
  alt={`image-${index + 1}`}
  width={100}
  height={1480}
  priority={index === 0}
  className="w-full h-[1000px] object-cover object-top"
/>
</div>

      </CarouselItem>
    ))}
  </CarouselContent>
</Carousel>
  )
}
