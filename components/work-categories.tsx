
'use client'
import Aos from 'aos';
import React, { useEffect, useState } from 'react'
import 'aos/dist/aos.css'
import Image from 'next/image';
import Link from 'next/link';
import { Button } from './ui/button';
import { ArrowUpRight } from 'lucide-react';


const WorkCategories = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        Aos.init({
            duration: 1000,
            once: true,
        })

        if (typeof window !== 'undefined') {
            setIsMobile(window.innerWidth < 768)
        }
    }, []);
    const choose_data = [
        {
            image: "/images/residential-projects/residential-project-3.jpg",
            link: "/projects/residential-projects",
            title: "Residential Projects",
            description:
                "Discover modern home designs created to match your lifestyle. From planning to completion, every home is designed with comfort, functionality, and timeless style in mind."
        },
        {
            image: "/images/commercial-projects/commercial-project-3.jpeg",
            link: "/projects/commercial-projects",
            title: "Commercial Projects",
            description:
                "Professional commercial designs for offices, retail spaces, and business buildings that combine functionality with a modern architectural approach."
        },
        {
            image: "/images/mosque-projects/mosque-project-4.jpg",
            link: "/projects/mosque-projects",
            title: "Mosque Projects",
            description:
                "Architectural designs for mosques that blend traditional values with modern construction, creating peaceful and welcoming places for worship."
        },
        // {
        //     image: "/images/front page/school.jpg",
        //     link: "https://www.architectbyyousuf.com/",
        //     title: "School Projects",
        //     description:
        //         "Educational spaces designed to provide safe, inspiring, and practical environments that support learning and future growth."
        // },
        {
            image: "/images/factory-projects/factory-project-1.jpg",
            link: "https://www.architectbyyousuf.com/",
            title: "Factory Projects",
            description:
                "Industrial facilities planned for smooth operations, efficient layouts, and long-lasting construction to meet modern business needs."
        },
        {
            image: "/images/interior-projects/interior-project-3.jpg",
            link: "/projects/interior-projects",
            title: "Interior Projects",
            description:
                "Beautiful interior spaces that balance comfort, elegance, and functionality, tailored to each client's vision and lifestyle."
        },
        {
            image: "/images/community-park/community-park-1.jpg",
            link: "/projects/community-park",
            title: "Community Park",
            description:
                "Outdoor spaces thoughtfully designed to encourage relaxation, recreation, and community interaction through sustainable landscape planning."
        }
    ];
    
    return (
        <div className='w-full h-auto lg:mt-10 flex md:py-20 py-10 flex-col md:gap-10 sm:gap-8 xs:gap-5 gap-2 sm:px-8 px-4'>
            <div className='flex flex-col gap-6 w-full h-auto'>
                {choose_data.map(({ image, title, description, link }, index) => (
                    <div key={index} className='lg:w-[70%] md:w-[85%] w-[97%] relative h-auto md:py-10 py-16  group sm:px-4 px-2 flex flex-col border-b border-secondary  gap-4 '>

                        <h3 className='gradient-title w-fit font-semibold xl:text-[40px] lg:text-4xl sm:text-3xl text-2xl max-md:max-w-sm max-sm:max-w-[300px]'>
                            {title}
                        </h3>
                        <p className='sm:text-base text-sm lg:max-w-2xl md:max-w-xl sm:max-w-sm max-w-[300px] '>
                            {`${description}`}
                        </p>
                        <Link
                            href={link}
                        >
                            <Button
                                data-aos="fade-right"
                                className="text-white bg-neutral-800 w-44 px-10 text-base py-6 rounded-none mt-3 font-semibold flex gap-3 hover:bg-neutral-800 hover:text-white transition delay-150 duration-300 ease-in-out cursor-pointer"
                            >
                                View Project
                                <ArrowUpRight size={16} />
                            </Button>
                        </Link>
                        <div data-aos={isMobile ? 'fade-down' : undefined} className='md:absolute max-md:m-5 md:top-0 top-3 md:-left-40 right-0 md:w-[500px] md:h-[400px] sm:w-[200px] sm:h-[200px] w-[170px] h-[170px] gradient md:-translate-x-100 transition-transform duration-900 rotate-6 md:group-hover:translate-x-[900px]'>
                            <Image src={image} alt={title} width={800} height={800} className='w-full h-full object-cover' />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default WorkCategories