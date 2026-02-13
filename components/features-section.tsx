import { ArrowUpRight, MoveUpRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { BsArrowUpRight } from "react-icons/bs";


const FeaturesSection = () => {
    const features_data = [
        {
            icon: '/images/feature-icon-1.png',
            title: 'Architectural Design & Planning',
            description: "Full architectural design services in Karachi, from concept sketches and construction drawings to KMC and SBCA NOC approvals, ensuring safety, aesthetics, and regulatory compliance.",
            link: 'https://khail-associates.com/services'
        },
        {
            icon: '/images/feature-icon-2.png',
            title: 'Interior Design & Styling',
            description: 'Create stunning interiors that reflect your personality and lifestyle with our full-service interior design solutions. From elegant drawing rooms and modern kitchens to professional office spaces and retail showrooms, we craft interiors that are both beautiful and functional.',
            link: 'https://khail-associates.com/services'
        },
        {
            icon: '/images/feature-icon-3.png',
            title: 'Turnkey Solutions & Project Management',
            description: 'Leave the stress of construction and coordination to us. Our turnkey services provide end-to-end project management, from design approval to final handover. We coordinate with contractors, suppliers, and craftsmen, ensuring quality control at every stage.',
            link: 'https://khail-associates.com/services'
        },
    ];
    return (
        <section className="about-section dark:bg-neutral-900 relative w-full h-auto min-h-screen flex flex-col justify-center items-center">
            <div className='grid lg:grid-cols-3 grid-cols-1'>
                {features_data.map((feature) => (
                    <div key={feature.title} data-aos='fade-up' className=' h-auto w-auto pr-16 pl-10 flex flex-col gap-6 border-l dark:border-neutral-300/30 border-neutral-400/50'>
                        <Image src={feature.icon} alt='feature-icon' width={80} height={80} />
                        <h2 className='text-3xl uppercase font-medium dark:text-white text-neutral-800'>{feature.title}</h2>
                        <p className='py-6 dark:text-white text-lg text-neutral-800'>{feature.description}</p>
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
