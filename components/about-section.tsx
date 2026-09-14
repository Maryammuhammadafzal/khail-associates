import React from 'react'
import { Button } from './ui/button'
import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const AboutSection = () => {
    return (
        <section className="about-section px-4 py-12 sm:px-6 lg:px-24 dark:bg-neutral-800 bg-white relative w-full h-auto min-h-screen gap-10 flex flex-col justify-center items-center lg:flex-row">
            <div className="about-bg relative w-full lg:w-[45%] h-auto flex">

                <div className="w-full h-auto flex flex-col gap-6 sm:gap-8 justify-center ">
                    <div data-aos="fade-up" className="sub-heading flex gap-2 items-center">
                        <div className="w-1 h-1 dark:bg-white bg-neutral-800 rounded-full"></div>
                        <h4 className="text-xs sm:text-base letter-spacing dark:text-white text-neutral-800 uppercase">
                            Pakistan's most trusted architectural designers
                        </h4>

                    </div>
                    <h1 data-aos="fade-up" className="dark:text-white font-mono text-neutral-800 text-3xl sm:text-4xl uppercase font-medium letter-spacing max-w-6xl">
                       Khail Associates Where Every Structure Tells a Story
                    </h1>
                    <p data-aos="fade-up" className="dark:text-white text-neutral-800 text-base sm:text-lg max-w-3xl">Architect Yousuf is a multidisciplinary architectural and design consultancy committed to delivering innovative, sustainable, and client-focused solutions in Architecture, Master Planning, Interior Design, and Project Consultancy. Our team combines creativity, technical expertise, and attention to detail to create functional, aesthetically refined, and enduring built environments.</p>
                  <Link href={"/about"}>
                    <Button data-aos="fade-up" className="bg-neutral-800 dark:bg-white dark:text-neutral-800 text-white w-44 px-10 text-base py-6 rounded-none mt-3 font-semibold flex gap-3 transition delay-150 duration-300 ease-in-out ">Discover More <ArrowUpRight size={16} /></Button>
                  </Link>
                </div>
            </div>
            <div className='about-bg rotate-180 relative w-full lg:w-[55%] h-full flex justify-center items-center'>
                <Image data-aos="zoom-in-up" src={'/images/about-image.jpeg'} alt='house-image' width={1100} height={1500} className='rotate-180 h-full w-full object-cover' />
            </div>
        </section>
    )
}

export default AboutSection
