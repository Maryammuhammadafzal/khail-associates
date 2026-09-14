import { ArrowUpRight } from 'lucide-react'
import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'

const AwardsSection = () => {
    return (
        <section className='awards-section overflow-hidden w-full h-auto flex justify-center items-center'>
            <div className='awards-bg relative w-full h-auto flex justify-center items-center'>
                <div className="w-full bg-black/30 px-4 py-12 sm:px-6 lg:px-10 absolute inset-0 h-full flex flex-col justify-center">
                    <div className='w-full max-w-[1500px] mx-auto h-auto justify-center flex flex-col gap-8 sm:gap-10 lg:gap-12'>
                        <div className="w-auto h-fit flex flex-col gap-8 sm:gap-12">
                            <h2 data-aos="zoom-in-right" className="text-white font-medium text-2xl sm:text-3xl lg:text-4xl uppercase letter-spacing max-w-6xl">
                                Awards
                            </h2>
                        </div>
                        <div className='w-full h-auto flex flex-col gap-8 lg:flex-row lg:justify-end lg:items-start lg:gap-10'>

                            <div className='awards-list flex flex-col gap-6 sm:gap-8 w-full lg:w-auto'>
                                <h3 className='uppercase text-sm sm:text-base letter-spacing font-medium px-1 sm:px-2 text-white'>Awards & Recognition</h3>
                                <ul className='flex w-full h-auto flex-col gap-4 sm:gap-6'>
                                    {/* Balaji Commodities */}
                            <li className="border-b border-neutral-300/50 text-base sm:text-lg lg:text-xl text-white pb-4 sm:pb-6 pr-0 sm:pr-4 lg:pr-24">
                                <Link
                                    href="/awards/balaji-comapny-award.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:opacity-70 transition-opacity block"
                                >
                                    Balaji Commodities
                                </Link>

                                <span className="block pt-1 text-sm sm:text-base lg:text-lg text-white/60">
                                    Professional Recommendation · 2025
                                </span>
                            </li>

                            {/* DGN Enterprises */}
                            <li className="border-b border-neutral-300/50 text-base sm:text-lg lg:text-xl text-white pb-4 sm:pb-6 pr-0 sm:pr-4 lg:pr-24">
                                <Link
                                    href="/awards/dgn-enterprises-pvt-ltd-award.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:opacity-70 transition-opacity block"
                                >
                                    DGN Enterprises (Pvt. Ltd.)
                                </Link>

                                <span className="block pt-1 text-sm sm:text-base lg:text-lg text-white/60">
                                    Professional Recognition
                                </span>
                            </li>

                            {/* SAKHI Data Industries */}
                            <li className="border-b border-neutral-300/50 text-base sm:text-lg lg:text-xl text-white pb-4 sm:pb-6 pr-0 sm:pr-4 lg:pr-24">
                                <Link
                                    href="/awards/sakhi-company-award.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:opacity-70 transition-opacity block"
                                >
                                    SAKHI Data Industries
                                </Link>

                                <span className="block pt-1 text-sm sm:text-base lg:text-lg text-white/60">
                                    Professional Recognition
                                </span>
                            </li>

                            {/* Suria Engineering */}
                            <li className="border-b border-neutral-300/50 text-base sm:text-lg lg:text-xl text-white pb-4 sm:pb-6 pr-0 sm:pr-4 lg:pr-24">
                                <Link
                                    href="/awards/suria-company-award.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:opacity-70 transition-opacity block"
                                >
                                    Suria Engineering
                                </Link>

                                <span className="block pt-1 text-sm sm:text-base lg:text-lg text-white/60">
                                    Professional Recognition · 2026
                                </span>
                            </li>

                            {/* Synergy Packaging */}
                            <li className="border-b border-neutral-300/50 text-base sm:text-lg lg:text-xl text-white pb-4 sm:pb-6 pr-0 sm:pr-4 lg:pr-24">
                                <Link
                                    href="/awards/synergy-company-award.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:opacity-70 transition-opacity block"
                                >
                                    Synergy Packaging (Pvt.) Ltd.
                                </Link>

                                <span className="block pt-1 text-sm sm:text-base lg:text-lg text-white/60">
                                    Professional Recognition
                                </span>
                            </li>

                            {/* IMGS Pakistan */}
                            <li className="border-b border-neutral-300/50 text-base sm:text-lg lg:text-xl text-white pb-4 sm:pb-6 pr-0 sm:pr-4 lg:pr-24">
                                <Link
                                    href="/awards/imgs-award.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:opacity-70 transition-opacity block"
                                >
                                    IMGS Pakistan (Pvt.) Ltd.
                                </Link>

                                <span className="block pt-1 text-sm sm:text-base lg:text-lg text-white/60">
                                    Architectural Consultancy · 2026
                                </span>
                            </li>

                            {/* Silver Master Batch Industries */}
                            <li className="border-b border-neutral-300/50 text-base sm:text-lg lg:text-xl text-white pb-4 sm:pb-6 pr-0 sm:pr-4 lg:pr-24">
                                <Link
                                    href="/awards/silver-award.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:opacity-70 transition-opacity block"
                                >
                                    Silver Master Batch Industries
                                </Link>

                                <span className="block pt-1 text-sm sm:text-base lg:text-lg text-white/60">
                                    Professional Recognition
                                </span>
                            </li>
                                </ul>
                            </div>
                            <div className='position-list flex flex-col gap-6 sm:gap-8 w-full lg:w-auto'>
                                <h3 className='uppercase text-sm sm:text-base letter-spacing font-medium px-1 sm:px-2 text-white'>Expertise & Services</h3>
                                <ul className='flex w-full h-auto flex-col gap-4 sm:gap-6'>
                                   <li className="border-b border-neutral-300/50 text-base sm:text-lg lg:text-xl text-white pb-4 sm:pb-6 pr-0 sm:pr-4 lg:pr-24">
                                Architectural Design
                                <span className="block pt-1 text-sm sm:text-base lg:text-lg text-white/60">
                                    expertise
                                </span>
                            </li>

                            <li className="border-b border-neutral-300/50 text-base sm:text-lg lg:text-xl text-white pb-4 sm:pb-6 pr-0 sm:pr-4 lg:pr-24">
                                Construction Management
                                <span className="block pt-1 text-sm sm:text-base lg:text-lg text-white/60">
                                    expertise
                                </span>
                            </li>

                            <li className="border-b border-neutral-300/50 text-base sm:text-lg lg:text-xl text-white pb-4 sm:pb-6 pr-0 sm:pr-4 lg:pr-24">
                                Project Planning & Coordination
                                <span className="block pt-1 text-sm sm:text-base lg:text-lg text-white/60">
                                    expertise
                                </span>
                            </li>

                            <li className="border-b border-neutral-300/50 text-base sm:text-lg lg:text-xl text-white pb-4 sm:pb-6 pr-0 sm:pr-4 lg:pr-24">
                                Site Supervision
                                <span className="block pt-1 text-sm sm:text-base lg:text-lg text-white/60">
                                    expertise
                                </span>
                            </li>


                            <li className="border-b border-neutral-300/50 text-base sm:text-lg lg:text-xl text-white pb-4 sm:pb-6 pr-0 sm:pr-4 lg:pr-24">
                                Material Planning & Management
                                <span className="block pt-1 text-sm sm:text-base lg:text-lg text-white/60">
                                    expertise
                                </span>
                            </li>

                            <li className="border-b border-neutral-300/50 text-base sm:text-lg lg:text-xl text-white pb-4 sm:pb-6 pr-0 sm:pr-4 lg:pr-24">
                                Architectural Consultancy
                                <span className="block pt-1 text-sm sm:text-base lg:text-lg text-white/60">
                                    expertise
                                </span>
                            </li>

                            <li className="border-b border-neutral-300/50 text-base sm:text-lg lg:text-xl text-white pb-4 sm:pb-6 pr-0 sm:pr-4 lg:pr-24">
                                Project Management
                                <span className="block pt-1 text-sm sm:text-base lg:text-lg text-white/60">
                                    expertise
                                </span>
                            </li>
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
