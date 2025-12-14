import Image from 'next/image'
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
                <Image src='/images/image-6.jpeg' alt='Image' className='object-fill w-full h-full' width={200} height={200} />
                </div>
        </footer>
    )
}

export default Footer
