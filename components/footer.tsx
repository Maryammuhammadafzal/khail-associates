import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <footer className='flex flex-col gap-10 w-full p-6 h-auto justify-center'>
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
                <div className='h-auto w-auto'>
                    <Image src='/images/Khail-Associates-Logo.jpeg' alt='Image' className='object-fill w-full h-full' width={200} height={200} />
                </div>

                <div className='w-auto h-auto'>
                    <ul className="menu-item letter-spacing pr-24 w-auto h-auto gap-2 flex flex-col text-white">
                        <li data-aos="fade-right" className="text-base text-white hover:text-white/50 uppercase">
                            <Link href="/">Home</Link>
                        </li>
                        <li data-aos="fade-right" className="text-base text-white hover:text-white/50 uppercase">
                            <Link href="/about">About</Link>
                        </li>
                        <li data-aos="fade-right" className="text-base text-white hover:text-white/50 uppercase">
                            <Link href="/services">Services</Link>
                        </li>
                        <li data-aos="fade-right" className="text-base text-white hover:text-white/50 uppercase">
                            <Link href="/projects">Projects</Link>
                        </li>
                        <li data-aos="fade-right" className="text-base text-white hover:text-white/50 uppercase">
                            <Link href="/contact">Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer
