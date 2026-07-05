import { ArrowUpRight, MoveUpRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { BsArrowUpRight } from "react-icons/bs";


const FeaturesSection = () => {
    const features_data = [
        {
            icon: '/images/feature-icon-1.png',
            title: 'Designing Spaces That Inspire',
            description: "We create thoughtful architectural solutions that blend creativity, functionality, and sustainability. Whether it's a dream home, commercial development, or renovation project, our designs are tailored to reflect your vision while maximizing comfort and value.",
            link: '/services'
        },
        {
            icon: '/images/feature-icon-2.png',
            title: 'Interiors Crafted for Modern Living',
            description: 'From luxurious residences to contemporary workplaces, we create refined interiors that elevate everyday experiences through thoughtful design and attention to detail.',
            link: '/services'
        },
        {
            icon: '/images/feature-icon-3.png',
            title: 'From Vision to Reality',
            description: 'Our end-to-end project delivery service ensures a smooth and hassle-free experience. From planning and approvals to construction supervision and final execution, we handle every detail so you can focus on the bigger picture.',
            link: '/services'
        },
    ];
    return (
        <section className="about-section dark:bg-neutral-900 relative w-full  h-auto py-24 flex flex-col justify-center items-center">
            <div className='grid lg:grid-cols-3  max-w-[1400px] grid-cols-1'>
                {features_data.map((feature, index) => (
                    <div key={feature.title} data-aos='fade-up' className={` h-auto w-auto pr-16 pl-10 flex flex-col gap-6 ${index == 0 ? "border-0" : "border-l"}  dark:border-neutral-300/30 border-neutral-400/50`}>
                        {/* <Image src={feature.icon} alt='feature-icon' width={80} height={80} /> */}
                        <h2 className='text-3xl uppercase font-medium dark:text-white text-neutral-800'>{feature.title}</h2>
                        <p className='py-6 dark:text-white text-lg text-neutral-800 font-mono'>{feature.description}</p>
                        <Link href={feature.link} className='w-fit cursor-pointer dark:border-white border border-neutral-800 hover:border-neutral-400 p-3 rounded-full'>
                            <BsArrowUpRight size={30} />
                        </Link>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default FeaturesSection
