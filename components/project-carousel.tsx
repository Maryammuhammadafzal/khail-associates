import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"

export function ProjectCarousel() {

    const projects_data = [
        {
            image : '/images/Project-image-1-min.jpeg',
            title : 'Architect By Yousuf',
            nickname : 'Architecture'
        },
        {
            image : '/images/Project-image-2-min.jpeg',
            title : 'Architect By Yousuf',
            nickname : 'Architecture'
        },
        {
            image : '/images/Project-image-3-min.jpeg',
            title : 'Architect By Yousuf',
            nickname : 'Architecture'
        },
        {
            image : '/images/Project-image-4-min.jpeg',
            title : 'Architect By Yousuf',
            nickname : 'Architecture'
        },
        {
            image : '/images/Project-image-5-min.jpeg',
            title : 'Architect By Yousuf',
            nickname : 'Architecture'
        },
        {
            image : '/images/Project-image-6-min.jpeg',
            title : 'Architect By Yousuf',
            nickname : 'Architecture'
        },
        {
            image : '/images/Project-image-7-min.jpeg',
            title : 'Architect By Yousuf',
            nickname : 'Architecture'
        },
    ]

    return (
        <Carousel
            opts={{
                align: "start",
            }}
            className="w-full"
        >
            <CarouselContent>
                {projects_data.map((project, index) => (
                    <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                        <div className="p-1">
                            <Card className="p-3 border-none shadow-none bg-transparent">
                                <CardContent className="flex flex-col gap-6 p-2">
                                    <div className="w-full h-[500px]">
                                    <Image src={project.image} alt="image" width={400} height={500} className="w-full h-full object-cover object-center" />
                                    </div>
                                    <div className="flex flex-col gap-2 text-white">
                                        <h2 className="text-2xl font-medium">{project.title}</h2>
                                        <p className="font-semibold">{project.nickname}</p>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <div className="w-fit h-40 flex justify-center items-center absolute gap-10 -top-10 -right-20">
                <CarouselPrevious />
                <CarouselNext />
            </div>
        </Carousel>
    )
}
