import React from 'react'
import { Button } from './ui/button'
import ImageComparison from './image-comparison'
import { ArrowUpRight } from 'lucide-react'

const PhilosophySection = () => {
    return ( <section className="philosophy-section bg-[#d4af375b] relative px-8 py-24 w-full h-auto flex  justify-center items-center">

<div className='w-full h-auto flex  justify-center mx-auto max-w-[1500px]  items-center'>

            <div className="relative w-[40%] h-auto px-12 flex  flex-col gap-30 border-l dark:border-neutral-300/30 border-neutral-400/50 justify-between ">

                <div className="w-auto h-auto flex flex-col gap-12">
                    <div data-aos="fade-up" className="sub-heading flex gap-2 items-center">
                        <div className="w-1 h-1 dark:bg-white bg-neutral-800 rounded-full"></div>
                        <h4 className="text-base letter-spacing dark:text-white text-neutral-800 uppercase">
                            Our Philosophy
                        </h4>

                    </div>
                    <h1 data-aos="fade-up" className="dark:text-white text-neutral-800 font-medium text-4xl leading-14 max-w-4xl">
                       Building with Purpose, Designing with Heart, Creating Spaces That Feel Like Home.
                    </h1>
                </div>
                <Button data-aos="fade-up" className="bg-neutral-800 text-white w-44 px-10 text-base py-6 rounded-none mt-3 font-semibold flex gap-3 hover:text-neutral-700 hover:bg-white transition delay-150 duration-300 ease-in-out ">Contact Us<ArrowUpRight size={16} /></Button>
            </div>
            <div className='relative w-[60%] h-auto flex justify-center items-center'>
                <ImageComparison />
            </div>
</div>
        </section>
       
    )
}

export default PhilosophySection
