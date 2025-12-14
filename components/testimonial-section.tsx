import React from 'react'
import { Button } from './ui/button'
import { ArrowUpRight } from 'lucide-react'
import { TestimonialCarousel } from './testimonial-carousel'

const TestimonialSection = () => {
  return (
    <section className="philosophy-section dark:bg-black relative px-8 w-full h-auto min-h-screen flex justify-center items-center">


            <div className="relative w-[35%] h-screen px-12 flex flex-col py-14 justify-center ">

                <div className="w-auto h-screen flex flex-col gap-12">
                    <div data-aos="fade-up" className="sub-heading flex gap-2 items-center">
                        <div className="w-1 h-1 dark:bg-white bg-neutral-800 rounded-full"></div>
                        <h4 className="text-base letter-spacing dark:text-white text-neutral-800 uppercase">
                            Testimonial
                        </h4>

                    </div>
                    <h1 data-aos="fade-up" className="dark:text-white text-neutral-800 font-medium text-5xl leading-14 max-w-4xl">
                        Your happiness with the outcome is our priority. 
                    </h1>
                </div>
                <Button data-aos="fade-up" className="bg-neutral-800 text-white w-44 px-10 text-base py-6 rounded-none mt-3 font-semibold flex gap-3 hover:text-neutral-700 hover:bg-white transition delay-150 duration-300 ease-in-out ">Discover More<ArrowUpRight size={16} /></Button>
            </div>
            <div className='relative w-[65%]  py-24 h-auto flex justify-center items-center'>
                <TestimonialCarousel />
            </div>
        </section>
  )
}

export default TestimonialSection
