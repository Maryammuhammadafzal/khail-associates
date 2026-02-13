import React from 'react'
import { Button } from './ui/button'
import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'

const Service = ({subheading, heading, paragraph, image , index, icon}: any) => {
    return (
        <section className="process-section dark:bg-neutral-900 relative  w-full h-auto min-h-screen flex  justify-center items-center">
           

            <div className={`${index % 2 == 0 ? "order-2" : "order-1"} relative w-[40%] h-screen px-12 flex flex-col py-6 dark:border-neutral-300/30 border-neutral-400/50 justify-between `}>

                <div className="w-auto h-screen flex flex-col gap-8">
                    <Image src={icon} alt='feature-icon' width={80} height={80} />
                    <div data-aos="fade-up" className="sub-heading flex gap-2 items-center">
                        {/* <div className="w-1 h-1 dark:bg-white bg-neutral-800 rounded-full"></div> */}
                        <h4 className="text-base letter-spacing dark:text-white text-neutral-800/70 uppercase">
                            {subheading ? subheading : ''}
                        </h4>

                    </div>
                    <h1 data-aos="fade-up" className="dark:text-white text-neutral-800 font-medium text-5xl leading-14 max-w-4xl">
                       {heading ? heading : ''}
                        
                    </h1>
                    <p data-aos="fade-up" className="dark:text-white text-neutral-800 text-lg max-w-3xl">
                        {paragraph ? paragraph : ''}
                         </p>
                </div>
                {/* <Button data-aos="fade-up" className="bg-neutral-800 text-white w-44 px-10 text-base py-6 rounded-none mt-3 font-semibold flex gap-3 hover:text-neutral-700 hover:bg-white hover:border hover:border-neutral-800 transition delay-150 duration-300 ease-in-out">Whatsapp <ArrowUpRight size={16} /></Button> */}
            </div>
            <div className={`${index % 2 == 0 ? "order-1" : "order-2"} relative w-[60%] h-screen flex justify-center items-center`}>
                <Image data-aos="zoom-in-up" src={image} alt='Architectural process illustration' width={800} height={1800} className='' />
            </div>
        </section>
    )
}

export default Service
