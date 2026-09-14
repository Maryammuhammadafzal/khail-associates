"use client"

import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import { projects } from "@/data/projects";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import { Button } from "./ui/button"
import Link from "next/link"


export function WorkCarousel() {

    // const projects_data = [
    //     {
    //         id: "commercial-project",
    //         image: "/images/commercial-project.jpeg",
    //         images: [
    //             "/images/commercial-project/commercial-project-1.jpeg",
    //             "/images/commercial-project/commercial-project-2.jpeg",
    //             "/images/commercial-project/commercial-project-3.jpeg",
    //             "/images/commercial-project/commercial-project-4.jpeg",
    //         ],
    //         title: "Fatima Residency",
    //         nickname: "Commercial Project",
    //         location: "Karachi",
    //         link: "/projects/commercial-projects",
    //         description:
    //             "A modern commercial building designed for productivity, comfort, and long-term value. The project combines smart planning, quality materials, and contemporary architecture."
    //     },
    //     {
    //         id: "residential-project",
    //         image: "/images/residential-project.jpg",
    //         images: [
    //             "/images/residential-project/residential-project-1.jpeg",
    //             "/images/residential-project/residential-project-2.jpeg",
    //             "/images/residential-project/residential-project-3.jpeg",
    //             "/images/residential-project/residential-project-4.jpeg",
    //         ],
    //         title: "Luxury Family Residence",
    //         nickname: "Residential Project",
    //         location: "Karachi",
    //         link: "/projects/residential-projects",
    //         description:
    //             "A thoughtfully designed home that offers spacious living areas, natural light, and modern architecture while meeting the family's everyday needs."
    //     },
    //     {
    //         id: "interior-project",
    //         image: "/images/interior-project.jpeg",
    //         images: [
    //             "/images/interior-project/interior-project-1.jpeg",
    //             "/images/interior-project/interior-project-2.jpeg",
    //             "/images/interior-project/interior-project-3.jpeg",
    //             "/images/interior-project/interior-project-4.jpeg",
    //         ],
    //         title: "Elegant Interior Design",
    //         nickname: "Interior Project",
    //         location: "Karachi",
    //         link: "/projects/interior-projects",
    //         description:
    //             "A stylish interior project featuring practical layouts, premium finishes, and carefully selected design elements for a comfortable living experience."
    //     },
    //     {
    //         id: "mosque-project",
    //         image: "/images/mosque-project.jpeg",
    //         images: [
    //             "/images/mosque-project/mosque-project-1.jpeg",
    //             "/images/mosque-project/mosque-project-2.jpeg",
    //             "/images/mosque-project/mosque-project-3.jpeg",
    //             "/images/mosque-project/mosque-project-4.jpeg",
    //         ],
    //         title: "Community Mosque",
    //         nickname: "Mosque Project",
    //         location: "Karachi",
    //         link: "/projects/mosque-projects",
    //         description:
    //             "A mosque designed to create a peaceful and welcoming environment, combining traditional architectural values with modern construction techniques."
    //     },
    //     {
    //         id: "university-project",
    //         image: "/images/university-project.jpeg",
    //         images: [
    //             "/images/university-project/university-project-1.jpeg",
    //             "/images/university-project/university-project-2.jpeg",
    //             "/images/university-project/university-project-3.jpeg",
    //             "/images/university-project/university-project-4.jpeg",
    //         ],
    //         title: "Educational Campus",
    //         nickname: "School Project",
    //         location: "Karachi",
    //         link: "/projects/university-projects",
    //         description:
    //             "A well-planned educational facility designed to provide safe, functional, and inspiring spaces that support learning and future growth."
    //     }
    // ];

    // const [selectedProject, setSelectedProject] = React.useState(projects_data[0]);
    const plugin = React.useRef(
        Autoplay({ delay: 2000, stopOnInteraction: true })
    )

    return (
        <Carousel className="w-full overflow-x-hidden" plugins={[plugin.current]}
            onMouseEnter={plugin.current.stop} onMouseLeave={plugin.current.reset}
        >
            <CarouselContent>
                {projects.map((project, index) => (
                    <CarouselItem key={project.slug}>
                        <div className="w-full h-full flex flex-col gap-6 lg:flex-row lg:gap-10">
                            <div className="w-full lg:w-[70%]">
                                <Image
                                    src={project.image}
                                    alt={`image-${index + 1}`}
                                    width={600}
                                    height={400}
                                    priority={index === 0}
                                    className="w-full h-auto object-cover object-top"
                                />
                            </div>

                            <div className="w-full lg:w-[30%] h-auto flex flex-col justify-between gap-6 lg:gap-10">
                                <div className="w-full h-full flex flex-col gap-6 lg:gap-10">
                                    <div className="w-auto h-auto flex flex-col gap-4">
                                        <div className="w-auto h-auto flex gap-2 items-center">
                                            <div className="w-[4px] h-[4px] rounded-full bg-white"></div>
                                            <p className="text-white text-sm sm:text-md font-normal">{project.nickname}</p>
                                        </div>
                                        <h2 className="text-white text-2xl sm:text-3xl font-sans">{project.title}</h2>
                                    </div>
                                    <p className="text-white text-sm sm:text-base font-normal">{project.description}</p>
                                    <Link
                                        href={`/projects/${project.slug}`}
                                    >
                                        <Button
                                            data-aos="fade-right"
                                            className="bg-white text-neutral-800 w-40 sm:w-44 px-6 sm:px-10 text-sm sm:text-base py-5 sm:py-6 rounded-none mt-3 font-semibold flex gap-3 hover:text-neutral-800 hover:bg-white transition delay-150 duration-300 ease-in-out cursor-pointer"
                                        >
                                            View More
                                            <ArrowUpRight size={16} />
                                        </Button>
                                    </Link>

                                </div>
                            </div>
                        </div>
                    </CarouselItem>
                ))
                }
            </CarouselContent >
                                <div className="absolute bottom-8 right-8 flex gap-3 z-20">
                                    <CarouselPrevious className="static h-12 w-12 rounded-full border bg-white text-black hover:bg-neutral-100" />
                                    <CarouselNext className="static h-12 w-12 rounded-full border bg-white text-black hover:bg-neutral-100" />
                                </div>
        </Carousel >
    )
}
