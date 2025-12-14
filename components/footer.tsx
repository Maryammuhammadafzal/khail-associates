import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaFacebookF, FaInstagram, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
    return (
        <footer className='flex flex-col gap-10 w-full p-6 h-auto justify-center mb-10'>
            <div className="images grid lg:grid-cols-6 md:grid-cols-3 grid-cols-2 gap-3">
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
            </div>

            <div className="footer grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8">
                <div className='h-auto w-auto flex flex-col gap-4'>
                    <Image src='/images/Khail-Associates-Logo.jpeg' alt='Image' className='' width={100} height={100} />
              <h2 className="dark:text-white text-neutral-800 font-bold text-3xl uppercase">Khail Associates</h2>
           
                </div>

                <div className='w-auto h-auto'>
                    <ul className="menu-item letter-spacing w-auto h-auto gap-2 flex flex-col ">
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


                <div className="w-auto h-auto flex flex-col gap-1">
                    <p className="font-medium text-lg">
                        +92 332 333333
                    </p>
                    <p className="font-medium text-lg">
                        khailasociates@gmail.com
                    </p>
                    <div className="flex gap-4 text-xl">

                        <FaFacebookF />
                        <FaInstagram />
                        <FaLinkedin />
                    </div>
                </div>

                <div className="w-auto h-auto flex flex-col gap-1">
                    <p className='text-sm'>Copyright © 2025. All Rights Reserved.</p>
                    <p className='uppercase text-sm'>Khail Assoaciates</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
