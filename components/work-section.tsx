import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'
import { ArrowUpRight } from 'lucide-react'
import { ProjectCarousel } from './project-carousel'
import { WorkAccordian } from './work-accordian'

const WorkSection = () => {
    return (
        <section className="work-section bg-neutral-800  relative w-full h-auto flex flex-col justify-center items-center ">
           {/* grid line */}
            <div className="relative w-full max-w-[1400px] mx-auto h-auto flex p-8 my-24 flex-col justify-center gap-16">

                <div className="w-auto h-fit flex flex-col gap-12 justify-center ">
                    <h2 data-aos="zoom-in-right" className="text-white font-medium text-4xl uppercase letter-spacing max-w-6xl">
                        Our Work
                    </h2>
                </div>
                <div className='relative w-full h-auto flex justify-center items-center p-3 overflow-x-hidden'>
                  <WorkAccordian />
                </div>
                {/* <Button data-aos="fade-up" className="bg-neutral-800 text-white w-44 px-10 text-base py-6 rounded-none mt-3 font-semibold flex gap-3 hover:text-neutral-800 hover:bg-white transition delay-150 duration-300 ease-in-out ">Discover More <ArrowUpRight size={16} /></Button> */}
            </div>
        </section>
    )
}

export default WorkSection
