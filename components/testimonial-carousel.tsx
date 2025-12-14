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

export function TestimonialCarousel() {
    return (
        <Carousel className="w-full h-fit max-w-3xl">
            <CarouselContent>
                {Array.from({ length: 5 }).map((_, index) => (
                    <CarouselItem key={index}>
                        <div className="p-1  border-l dark:border-neutral-300/30 border-neutral-400/50">
                            <Card className="border-none shadow-none ">
                                <CardContent className="flex flex-col  gap-20 ">
                                    <Quote size={60} className="text-[#D4AF37] rotate-180" />
                                    <span className="text-4xl">“I can recommend Archdeco highly enough. They took my ideas and made them even better, and had all sorts of suggestions for details I would never have thought of, which made all the difference to the end result. The team totally got what I wanted and always managed to find just the right piece or the right style.”</span>

                                    <div className="flex justify-between w-full h-auto gap-6">
                                        <div className=" flex h-auto w-auto gap-4 ">
                                            <Image src={'/images/testimonials-user-1.webp'} alt="user-image" width={60} height={50} className="rounded-full" />
                                            <div className="flex flex-col gap-1">
                                                <h4 className="text-lg uppercase">Bobby Brown</h4>
                                                <p className="text-neutral-500">Artist</p>
                                            </div>
                                        </div>

                                        <div className=" absolute right-10 bottom-6 w-20 h-20 flex gap-3">
                                            <CarouselPrevious className="" />
                                            <CarouselNext />
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>

        </Carousel>
    )
}
