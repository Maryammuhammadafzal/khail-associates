import { ArrowUpRight, MoveUpRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { BsArrowUpRight } from "react-icons/bs";


const FeaturesSection = () => {
    const features_data = [
        {
            icon: '/images/feature-icon-1.png',
            title: 'ARCHITECTURE ',
            description: "We create inspiring architectural spaces that tell stories. By understanding our clients' vision and users' needs, we deliver innovative, functional, and timeless design solutions.",
            link: '/services/#architecture'
        },
        {
            icon: '/images/feature-icon-2.png',
            title: 'PLANNING',
            description: 'Our master planning and urban design solutions create sustainable, functional, and vibrant communities while respecting the cultural heritage and natural environment of every project.',
            link: '/services/#planning'
        },
        {
            icon: '/images/feature-icon-3.png',
            title: 'INTERIORS',
            description: 'Our interior design services create elegant, functional, and inspiring spaces that seamlessly integrate with the architectural vision, enhancing the overall experience of every project.',
            link: '/services/#interiors'
        },
    ];
    return (
        <section className="about-section dark:bg-neutral-900 relative w-full h-auto py-10 sm:py-14 lg:py-24 flex flex-col justify-center items-center">
            <div className='grid max-w-[1500px] grid-cols-1 gap-6 sm:gap-8 px-4 sm:px-6 lg:grid-cols-3 lg:gap-0 lg:px-10'>
                {features_data.map((feature, index) => (
                    <div key={feature.title} data-aos='fade-up' className={`h-auto w-full flex flex-col gap-4 sm:gap-5 px-0 lg:pr-16 lg:pl-10 ${index == 0 ? "border-0" : "lg:border-l"} dark:border-neutral-300/30 border-neutral-400/50 pb-4 sm:pb-6 lg:pb-0 ${index !== features_data.length - 1 ? "lg:pb-0" : ""}`}>
                        <h2 className='text-xl sm:text-2xl lg:text-3xl uppercase font-medium dark:text-white text-neutral-800'>{feature.title}</h2>
                        <p className='dark:text-white text-sm sm:text-base lg:text-lg text-neutral-800 font-mono leading-relaxed'>{feature.description}</p>
                        <Link href={feature.link} className='w-fit cursor-pointer dark:border-white border border-neutral-800 hover:border-neutral-400 p-3 rounded-full'>
                            <BsArrowUpRight size={24} className="sm:size-[30px]" />
                        </Link>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default FeaturesSection
