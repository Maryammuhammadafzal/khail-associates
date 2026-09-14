import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { Quote } from "lucide-react"
import Image from "next/image"
import Autoplay from "embla-carousel-autoplay"
import { useRef } from "react"

export function TestimonialCarousel() {

    const plugin = useRef(
  Autoplay({
    delay: 2000,
    stopOnInteraction: false,
    stopOnMouseEnter: true,
  })
)

    return (
       <Carousel
  plugins={[plugin.current]}
  opts={{
    align: "start",
    loop: true,
  }}
  className="relative w-full max-w-3xl"
>
  <CarouselContent>
    {Array.from({ length: 5 }).map((_, index) => (
      <CarouselItem key={index}>
        <div className="p-3 sm:p-4 lg:p-6 border-l dark:border-neutral-300/30 border-neutral-400/50">
          <Card className="border-none shadow-none bg-transparent">
            <CardContent className="flex flex-col gap-6 sm:gap-8 lg:gap-12 p-0">

              <Quote size={40} className="text-[#D4AF37] rotate-180 sm:size-[50px] lg:size-[60px]" />

              <p className="text-xl leading-relaxed sm:text-2xl lg:text-3xl">
                “Khail Associates transformed our vision into a refined architectural
                statement. Their attention to detail and spatial intelligence elevated
                the entire project beyond expectations.”
              </p>

              <div className="flex items-center gap-4">
                <Image
                  src="/images/testimonials-user-1.webp"
                  alt="Client portrait"
                  width={60}
                  height={60}
                  className="rounded-full object-cover h-12 w-12 sm:h-[60px] sm:w-[60px]"
                />

                <div>
                  <h4 className="text-base uppercase tracking-wide sm:text-lg">
                    Sarah Mitchell
                  </h4>
                  <p className="text-neutral-500 text-xs sm:text-sm">
                    Interior Consultant
                  </p>
                </div>
              </div>

            </CardContent>
          </Card>
        </div>
      </CarouselItem>
    ))}
  </CarouselContent>

  {/* Global Controls */}
  <div className="absolute bottom-3 right-3 flex w-[72px] gap-2 sm:bottom-6 sm:right-6 sm:gap-6">
    <CarouselPrevious className="h-9 w-9 sm:h-10 sm:w-10" />
    <CarouselNext className="h-9 w-9 sm:h-10 sm:w-10" />
  </div>
</Carousel>
    )
}
