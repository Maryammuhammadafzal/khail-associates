import React from 'react'
import { Button } from './ui/button'
import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'

const AboutSection = () => {
    return (
        <section className="about-section dark:bg-neutral-900 bg-white relative w-full h-auto min-h-screen flex flex-col justify-center items-center">
            <div className="about-bg relative w-full h-screen flex justify-center items-center">

                <div className="w-auto h-screen pt-20 flex flex-col gap-12 text-center justify-center items-center">
                    <div data-aos="fade-up" className="sub-heading flex gap-2 items-center">
                        <div className="w-1 h-1 dark:bg-white bg-neutral-800 rounded-full"></div>
                        <h4 className="text-base letter-spacing dark:text-white text-neutral-800 uppercase">
                            Pakistan's most trusted architectural designers
                        </h4>

                    </div>
                    <h1 data-aos="fade-up" className="dark:text-white text-neutral-800 font-medium text-8xl uppercase letter-spacing max-w-6xl">
                       Khail Associates- Where Pakistani Heritage Meets Modern Design
                    </h1>
                    <p data-aos="fade-up" className="dark:text-white text-neutral-800 text-lg max-w-3xl">Since our establishment in Karachi, Khail Associates has been transforming spaces across Pakistan with architectural excellence and innovative interior design solutions. We understand the unique requirements of Pakistani homeowners and businesses, blending contemporary aesthetics with cultural sensibilities and practical functionality.</p>
                    <Button data-aos="fade-up" className="bg-neutral-800 text-white w-44 px-10 text-base py-6 rounded-none mt-3 font-semibold flex gap-3 hover:text-neutral-700 hover:bg-white transition delay-150 duration-300 ease-in-out ">Discover More <ArrowUpRight size={16} /></Button>
                </div>
            </div>
            <div className='about-bg rotate-180 relative w-full h-screen flex justify-center items-center'>
                <Image data-aos="zoom-in-up" src={'/images/about-picture.webp'} alt='house-image' width={1100} height={1100} className='rotate-180 p-6' />
            </div>
        </section>
    )
}

export default AboutSection
