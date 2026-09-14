import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaFacebookF, FaInstagram, FaLinkedin, FaPhone } from 'react-icons/fa'
import { MdEmail, MdLocationOn, MdLocationPin } from 'react-icons/md'
import FadeGrid from './fadegrid'

const Footer = ({ gallery }: any) => {
    return (
        <footer className='flex flex-col max-w-[1500px] mx-auto gap-6 sm:gap-8 lg:gap-10 w-full px-4 py-6 sm:px-6 lg:px-8 h-auto justify-center mb-8 sm:mb-10'>
            {gallery === 'no' ? <hr /> : <FadeGrid />}
            {/* <div className="images grid lg:grid-cols-6 md:grid-cols-3 grid-cols-2 gap-3">
                <div className='h-[230px] w-[230px] object-cover '>
                    <Image src='/images/image-1.jpeg' alt='Image' className='object-fill w-full h-full' width={200} height={200} />
                </div>
                <div className='h-[230px] w-[230px] object-cover '>
                    <Image src='/images/image-2.jpeg' alt='Image' className='object-fill w-full h-full' width={200} height={200} />
                </div>
                <div className='h-[230px] w-[230px] object-cover '>
                    <Image src='/images/image-3.jpeg' alt='Image' className='object-fill w-full h-full' width={200} height={200} />
                </div>
                <div className='h-[230px] w-[230px] object-cover '>
                    <Image src='/images/image-4.jpeg' alt='Image' className='object-fill w-full h-full' width={200} height={200} />
                </div>
                <div className='h-[230px] w-[230px] object-cover '>
                    <Image src='/images/image-5.jpeg' alt='Image' className='object-fill w-full h-full' width={200} height={200} />
                </div>
                <div className='h-[230px] w-[230px] object-cover '>
                    <Image src='/images/image-6.jpeg' alt='Image' className='object-fill w-full h-full' width={200} height={200} />
                </div>
            </div> */}

            <div className="footer grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
                <div className='h-auto w-full flex flex-col gap-3 sm:gap-4'>
                    <Image src='/images/Khail-Associates-Logo.jpeg' alt='Image' className='w-[90px] sm:w-[100px] h-auto' width={100} height={100} />
                    <h2 className="dark:text-white text-neutral-800 font-bold text-2xl sm:text-3xl uppercase">Khail Associates</h2>

                </div>

                <div className='w-full h-auto'>
                    <ul className="menu-item letter-spacing w-auto h-auto gap-2 flex flex-col">
                        <li className="text-base dark:text-white text-neutral-800 hover:text-neutral-500 uppercase">
                            <Link href="/">Home</Link>
                        </li>
                        <li className="text-base dark:text-white text-neutral-800 hover:text-neutral-500 uppercase">
                            <Link href="/about">About</Link>
                        </li>
                        <li className="text-base dark:text-white text-neutral-800 hover:text-neutral-500 uppercase">
                            <Link href="/services">Services</Link>
                        </li>
                        <li className="text-base dark:text-white text-neutral-800 hover:text-neutral-500 uppercase">
                            <Link href="/projects">Projects</Link>
                        </li>
                        <li className="text-base dark:text-white text-neutral-800 hover:text-neutral-500 uppercase">
                            <Link href="/contact">Contact</Link>
                        </li>
                    </ul>
                </div>


                <div className="w-full h-auto flex flex-col gap-2 sm:gap-3">
                    <p className="font-medium text-sm sm:text-base break-words">
                        <Link href="tel:+923158833638" className="flex items-center gap-3">
                            <FaPhone className="rotate-90 shrink-0" />
                            +92 315 8833638
                        </Link>
                    </p>
                    <p className="font-medium text-sm sm:text-base break-words">
                        <Link href="mailto:Khailassociates1992@gmail.com" className="flex items-center gap-3">
                            <MdEmail className="shrink-0" />
                            Khailassociates1992@gmail.com
                        </Link>
                    </p>
                    {/* <p className="font-medium text-lg flex items-center gap-3">
                        <span className="flex items-center gap-3">
                            <MdLocationPin size={28} />
                            Office 86,87 4th floor Habib chamber
                            Main university road Gulshan-e-Iqbal
                            block 14 . KARACHI – PAKISTAN
                        </span>
                    </p> */}
                    <div className="flex gap-4 mt-3 sm:mt-5 text-xl">
                        <Link href="https://www.facebook.com/khailassociates" target="_blank" aria-label="Facebook">
                            <FaFacebookF />
                        </Link>
                        <Link href="https://www.instagram.com/khailassociates/" target="_blank" aria-label="Instagram">
                            <FaInstagram />
                        </Link>
                        <Link href="https://www.linkedin.com/company/khail-associates/" target="_blank" aria-label="LinkedIn">
                            <FaLinkedin />
                        </Link>
                    </div>
                </div>

                <div className="w-full h-auto flex flex-col gap-1">
                    <p className='text-xs sm:text-sm'>Copyright © 2026. All Rights Reserved.</p>
                    <p className='uppercase text-xs sm:text-sm'>Khail Associates</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
