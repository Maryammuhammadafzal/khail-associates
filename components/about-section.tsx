import React from 'react'
import { Button } from './ui/button'
import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'

const AboutSection = () => {
    return (
        <section className="about-section bg-neutral-900 relative w-full h-auto min-h-screen flex flex-col justify-center items-center">
            <div className="about-bg relative w-full h-screen flex justify-center items-center">

                <div className="w-auto h-screen flex flex-col gap-12 text-center justify-center items-center">
                    <div data-aos="fade-up" className="sub-heading flex gap-2 items-center">
                        <div className="w-1 h-1 bg-white rounded-full"></div>
                        <h4 className="text-base letter-spacing text-white uppercase">
                            Khail Associates Studio
                        </h4>

                    </div>
                    <h1 data-aos="fade-up" className="text-white font-medium text-8xl uppercase letter-spacing max-w-6xl">
                       We Explore Environments That Integrate Beauty & Function.
                    </h1>
                    <p data-aos="fade-up" className="text-white text-lg max-w-3xl">We understand every detail that goes into crafting a beautiful space. We use our experience and specialist skills to keep things running smoothly, on budget and on time.</p>
                    <Button data-aos="fade-up" className="bg-neutral-700 text-white w-44 px-10 text-base py-6 rounded-none mt-3 font-semibold flex gap-3 hover:text-neutral-700 hover:bg-white transition delay-150 duration-300 ease-in-out ">Discover More <ArrowUpRight size={16} /></Button>
                </div>
            </div>
            <div className='about-bg rotate-180 relative w-full h-screen flex justify-center items-center'>
                <Image data-aos="zoom-in-up" src={'/images/about-picture.webp'} alt='house-image' width={1100} height={1100} className='rotate-180 p-6' />
            </div>
        </section>
    )
}

export default AboutSection
