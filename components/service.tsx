import React from 'react'
import { Button } from './ui/button'
import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'

const Service = ({ subheading, heading, paragraph, image, index, icon , id}: any) => {
    return (
        <section id={id} className="process-section dark:bg-neutral-900 relative w-full h-auto py-10 sm:py-14 lg:py-20 flex flex-col justify-center items-center gap-6 lg:flex-row lg:gap-0">

            <div className={`${index % 2 == 0 ? "lg:order-2" : "lg:order-1"} relative w-full lg:w-[40%] h-auto lg:h-screen px-4 sm:px-6 lg:px-8 flex flex-col py-0 lg:py-6 dark:border-neutral-300/30 border-neutral-400/50 justify-between`}>

                <div className="w-full h-auto lg:h-screen flex flex-col gap-4 sm:gap-6 lg:gap-8">
                    {/* <Image src={icon} alt='feature-icon' width={80} height={80} /> */}
                    <div data-aos="fade-up" className="sub-heading flex gap-2 items-center">
                        {/* <div className="w-1 h-1 dark:bg-white bg-neutral-800 rounded-full"></div> */}
                        <h4 className="text-xs sm:text-sm lg:text-base letter-spacing dark:text-white text-neutral-800/70 uppercase">
                            {subheading ? subheading : ''}
                        </h4>

                    </div>
                    <h1 data-aos="fade-up" className="dark:text-white text-neutral-800 font-medium text-2xl sm:text-3xl lg:text-5xl leading-tight lg:leading-14 max-w-4xl">
                        {heading ? heading : ''}

                    </h1>
                    <p data-aos="fade-up" className="dark:text-white text-neutral-800 text-sm sm:text-base lg:text-lg max-w-3xl leading-relaxed">
                        {paragraph ? paragraph : ''}
                    </p>

                    <ul>
                        <li></li>
                    </ul>
                </div>
                {/* <Button data-aos="fade-up" className="bg-neutral-800 text-white w-44 px-10 text-base py-6 rounded-none mt-3 font-semibold flex gap-3 hover:text-neutral-700 hover:bg-white hover:border hover:border-neutral-800 transition delay-150 duration-300 ease-in-out">Whatsapp <ArrowUpRight size={16} /></Button> */}
            </div>
            <div className={`${index % 2 == 0 ? "lg:order-1" : "lg:order-2"} relative w-full lg:w-[60%] h-auto lg:h-screen px-4 sm:px-6 lg:px-8 flex justify-start items-start`}>
                <Image data-aos="zoom-in-up" src={image} alt='Architectural process illustration' width={800} height={400} className='h-[260px] sm:h-[360px] lg:h-full w-full object-cover' />
            </div>
        </section>
    )
}

export default Service
