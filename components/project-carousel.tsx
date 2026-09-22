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
import Autoplay from "embla-carousel-autoplay"
import { useRef } from "react"


export function ProjectCarousel() {

    const plugin = useRef(
        Autoplay({
            delay: 1000,
            stopOnInteraction: false,
            stopOnMouseEnter: true,
        })
    )
    const projects_data = [
        {
            image: '/images/Team/ceo-image.jpeg',
            title: 'Architect Yousuf',
            nickname: 'Architect CEO Khail Associates'
        },
        {
            image: '/images/Team/team-image-1.jpeg',
            title: 'Muhammad Anwar ul Haque',
            nickname: 'Engineer'
        },
        {
            image: '/images/Team/team-image-2.jpeg',
            title: 'Quanit khursheed siddiqui',
            nickname: 'Architect'
        },
        {
            image: '/images/Team/team-image-3.jpeg',
            title: 'Zoheb Hussain',
            nickname: 'Architect'
        },
        {
            image: '/images/Team/team-image-4.jpeg',
            title: 'Ismail khan',
            nickname: 'Project Manager'
        },
        {
            image: '/images/Team/team-image-5.jpeg',
            title: 'Waris Khan',
            nickname: 'Site supervisor'
        },
        {
            image: '/images/Team/team-image-6.jpeg',
            title: 'Asad Siddiqui',
            nickname: 'Senior Draftsman'
        },
        {
            image: '/images/Team/team-image-7.jpeg',
            title: 'Basit Khan',
            nickname: 'Senior Draftsman'
        },
    ]

    return (
        <Carousel
            plugins={[plugin.current]}
            opts={{
                align: "start",
                loop: true,
                containScroll: "trimSnaps",
            }}
            className="w-full"
        >
            <CarouselContent>
                {projects_data.map((project, index) => (
                    <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/5 sm:p-0 px-6 m-0">
                        <div className="">
                            <Card className="sm:p-1 p-14 border-none shadow-none bg-transparent">
                                <CardContent className="flex flex-col gap-6 p-2">
                                    <div className="w-full h-[500px]">
                                        <Image src={project.image} alt="image" width={400} height={500} className="w-full grayscale-75 hover:grayscale-0 h-full object-cover object-center" />
                                    </div>
                                    <div className="flex flex-col gap-2 text-white">
                                        <h2 className="text-[20px] font-medium">{project.title}</h2>
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
