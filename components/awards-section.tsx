import { ArrowUpRight } from 'lucide-react'
import React from 'react'
import { Button } from './ui/button'

const AwardsSection = () => {
    return (
        <section className='awards-section w-full min-h-screen h-auto flex justify-center items-center'>
            <div className='awards-bg relative w-full min-h-screen h-auto flex justify-center items-center'>
                <div className="w-full bg-black/30 px-10 absolute top-0 left-0 min-h-screen h-auto flex flex-col justify-center ">
                    <div className='w-full min-h-screen h-auto justify-center flex flex-col gap-12'>
                        <div className=" w-auto h-fit flex flex-col gap-12 ">
                            <h2 data-aos="zoom-in-right" className="text-white font-medium text-9xl uppercase letter-spacing max-w-6xl">
                                Awards
                            </h2>
                        </div>
                        <div className='w-full h-auto flex justify-end  items-start'>
                        
                            <div className='awards-list flex flex-col gap-8'>
                                <h3 className='uppercase text-base letter-spacing font-medium px-2 text-white'>Awards</h3>
                                <ul className='flex w-auto h-auto flex-col gap-6 '>
                                    <li className='border-b border-neutral-300/50 text-xl text-white pb-6 pr-24'> Interior Design Magazine Awards
                                        <span className='pl-1 text-lg text-white'>winner</span></li>
                                    <li className='border-b border-neutral-300/50 text-xl text-white pb-6 pr-24'> Interior Design Magazine Awards
                                        <span className='pl-1 text-lg text-white'>winner</span></li>
                                    <li className='border-b border-neutral-300/50 text-xl text-white pb-6 pr-24'> Interior Design Magazine Awards
                                        <span className='pl-1 text-lg text-white'>winner</span></li>
                                    <li className='border-b border-neutral-300/50 text-xl text-white pb-6 pr-24'> Interior Design Magazine Awards
                                        <span className='pl-1 text-lg text-white'>winner</span></li>
                                    <li className='border-b border-neutral-300/50 text-xl text-white pb-6 pr-24'> Interior Design Magazine Awards
                                        <span className='pl-1 text-lg text-white'>winner</span></li>
                                </ul>
                            </div>
                            <div className='position-list flex flex-col gap-8'>
                                <h3 className='uppercase text-base letter-spacing font-medium px-2 text-white'>Positons</h3>
                                <ul className='flex w-auto h-auto flex-col gap-6 '>
                                    <li className='border-b border-neutral-300/50 text-xl text-white pb-6 pr-24'> Interior Design Magazine Awards
                                        <span className='pl-1 text-lg text-white'>winner</span></li>
                                    <li className='border-b border-neutral-300/50 text-xl text-white pb-6 pr-24'> Interior Design Magazine Awards
                                        <span className='pl-1 text-lg text-white'>winner</span></li>
                                    <li className='border-b border-neutral-300/50 text-xl text-white pb-6 pr-24'> Interior Design Magazine Awards
                                        <span className='pl-1 text-lg text-white'>winner</span></li>
                                    <li className='border-b border-neutral-300/50 text-xl text-white pb-6 pr-24'> Interior Design Magazine Awards
                                        <span className='pl-1 text-lg text-white'>winner</span></li>
                                    <li className='border-b border-neutral-300/50 text-xl text-white pb-6 pr-24'> Interior Design Magazine Awards
                                        <span className='pl-1 text-lg text-white'>winner</span></li>
                                </ul>
                            </div>
                        </div>
                        {/* <div className=''></div>
                        <Button data-aos="fade-up" className="bg-neutral-800  text-white w-44 px-10 text-base py-6 rounded-none mt-3 font-semibold flex gap-3 hover:text-neutral-700 hover:bg-white transition delay-150 duration-300 ease-in-out ">Contact Us <ArrowUpRight size={16} /></Button> */}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AwardsSection
