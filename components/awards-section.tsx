import React from 'react'

const AwardsSection = () => {
    return (
        <section className='awards-section w-full h-screen flex justify-center items-center'>
            <div className='awards-bg relative w-full h-screen flex justify-center items-center'>
                <div className="w-full bg-black/30 absolute top-0 left-0 h-screen flex flex-col justify-center ">
                    <div className='px-8 py-24 w-full h-screen flex flex-col gap-12'>
                        <div className="w-auto h-fit flex flex-col gap-12 ">
                            <h2 data-aos="zoom-in-right" className="text-white font-medium text-9xl uppercase letter-spacing max-w-6xl">
                                Awards
                            </h2>
                        </div>
                        <div className='w-full h-auto flex justify-end items-start'>
                            <div className='awards-list flex flex-col gap-8'>
                                <h3 className='uppercase text-xl font-medium px-6 text-white'>Awards</h3>
                                <ul className='flex w-auto h-auto flex-col gap-6 pr-10'>
                                    <li className='border-b border-neutral-300 text-2xl text-white'> Interior Design Magazine Awards
                                        <span className='pl-1 text-lg text-white'>winner</span></li>
                                    <li className='border-b border-neutral-300 text-2xl text-white'> Interior Design Magazine Awards
                                        <span className='pl-1 text-lg text-white'>winner</span></li>
                                    <li className='border-b border-neutral-300 text-2xl text-white'> Interior Design Magazine Awards
                                        <span className='pl-1 text-lg text-white'>winner</span></li>
                                    <li className='border-b border-neutral-300 text-2xl text-white'> Interior Design Magazine Awards
                                        <span className='pl-1 text-lg text-white'>winner</span></li>
                                    <li className='border-b border-neutral-300 text-2xl text-white'> Interior Design Magazine Awards
                                        <span className='pl-1 text-lg text-white'>winner</span></li>
                                </ul>
                            </div>
                            <div className='position-list flex flex-col gap-8'>
                                <h3 className='uppercase text-xl font-medium px-6 text-white'>Awards</h3>
                                <ul className='flex w-auto h-auto flex-col gap-6 pr-10'>
                                    <li className='border-b border-neutral-300 text-2xl text-white'> Interior Design Magazine Awards
                                        <span className='pl-1 text-lg text-white'>winner</span></li>
                                    <li className='border-b border-neutral-300 text-2xl text-white'> Interior Design Magazine Awards
                                        <span className='pl-1 text-lg text-white'>winner</span></li>
                                    <li className='border-b border-neutral-300 text-2xl text-white'> Interior Design Magazine Awards
                                        <span className='pl-1 text-lg text-white'>winner</span></li>
                                    <li className='border-b border-neutral-300 text-2xl text-white'> Interior Design Magazine Awards
                                        <span className='pl-1 text-lg text-white'>winner</span></li>
                                    <li className='border-b border-neutral-300 text-2xl text-white'> Interior Design Magazine Awards
                                        <span className='pl-1 text-lg text-white'>winner</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AwardsSection
