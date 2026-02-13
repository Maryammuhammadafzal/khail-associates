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
        <div className="p-6 border-l dark:border-neutral-300/30 border-neutral-400/50">
          <Card className="border-none shadow-none bg-transparent">
            <CardContent className="flex flex-col gap-12">

              <Quote size={60} className="text-[#D4AF37] rotate-180" />

              <p className="text-3xl leading-relaxed">
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
                  className="rounded-full object-cover"
                />

                <div>
                  <h4 className="text-lg uppercase tracking-wide">
                    Sarah Mitchell
                  </h4>
                  <p className="text-neutral-500 text-sm">
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
  <div className="absolute bottom-6 right-6 flex w-[80px] gap-6">
    <CarouselPrevious className="" />
    <CarouselNext />
  </div>
</Carousel>
    )
}
