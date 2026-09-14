import React from 'react'
import { Button } from './ui/button'
import ImageComparison from './image-comparison'
import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'

const PhilosophySection = () => {
    return ( <section className="philosophy-section bg-[#d4af375b] relative px-4 py-12 sm:px-6 lg:px-8 lg:py-24 w-full h-auto flex justify-center items-center">

<div className='w-full h-auto flex flex-col justify-center mx-auto max-w-[1500px] items-center gap-10 lg:flex-row'>

            <div className="relative w-full h-auto px-0 lg:w-[40%] lg:px-12 flex flex-col gap-8 lg:gap-30 border-0 lg:border-l dark:border-neutral-300/30 border-neutral-400/50 justify-between ">

                <div className="w-auto h-auto flex flex-col gap-8 lg:gap-12">
                    <div data-aos="fade-up" className="sub-heading flex gap-2 items-center">
                        <div className="w-1 h-1 dark:bg-white bg-neutral-800 rounded-full"></div>
                        <h4 className="text-sm sm:text-base letter-spacing dark:text-white text-neutral-800 uppercase">
                            Our Philosophy
                        </h4>

                    </div>
                    <h1 data-aos="fade-up" className="dark:text-white text-neutral-800 font-medium text-3xl sm:text-4xl leading-tight lg:text-4xl lg:leading-14 max-w-4xl">
                       Building with Purpose, Designing with Heart, Creating Spaces That Feel Like Home.
                    </h1>
                </div>
                <Link href={"/contact"}>
                <Button data-aos="fade-up" className="cursor-pointer bg-neutral-800 text-white w-44 px-10 text-base py-6 rounded-none mt-3 font-semibold flex gap-3 hover:text-neutral-700 hover:bg-white transition delay-150 duration-300 ease-in-out ">Contact Us<ArrowUpRight size={16} /></Button>
                </Link>
            </div>
            <div className='relative w-full lg:w-[60%] h-auto flex justify-center items-center'>
                <ImageComparison />
            </div>
</div>
        </section>
       
    )
}

export default PhilosophySection
