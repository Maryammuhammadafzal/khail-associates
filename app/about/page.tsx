'use client'

import Image from "next/image";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import ProjectSection from "@/components/project-section";
import AwardsSection from "@/components/awards-section";
// import TestimonialSection from "@/components/testimonial-section";
import Footer from "@/components/footer";
import HeroSection from "@/components/hero-section";

export default function AnoutPage() {
    useEffect(() => {
        AOS.init({
            once: true,
            duration: 800,
            // easing: 'ease-in-out',
        });
    }, []);

    return (
        <div className="flex min-h-screen w-full items-center justify-center bg-zinc-50 font-sans dark:bg-black">
            <main className="flex min-h-screen w-full flex-col items-stretch justify-between bg-white dark:bg-black">
                {/* Hero Section */}
                <HeroSection subheading="About us" heading="Building Dreams Across Pakistan" paragraph="Architect Yousuf is a multidisciplinary architectural and design consultancy committed to delivering innovative, sustainable, and client-focused solutions in Architecture, Master Planning, Interior Design, and Project Consultancy. Our team combines creativity, technical expertise, and attention to detail to create functional, aesthetically refined, and enduring built environments." image="/images/about-image.jpeg" />
                {/* our Work section */}
                <section className="work-section dark:bg-neutral-900 relative px-4 py-12 sm:px-6 lg:px-8 lg:py-24 w-full h-auto min-h-screen flex flex-col justify-center items-center gap-8 lg:flex-row lg:gap-10">

                    <div className='relative w-full lg:w-[60%] h-auto gap-4 sm:gap-6 flex flex-col sm:flex-row justify-center items-center'>
                        <Image data-aos="zoom-in-up" src={'/images/project-image-2-min.jpeg'} alt='Architectural process illustration' width={800} height={1200} className='w-full max-w-[500px] h-[320px] sm:h-[420px] lg:h-[520px] object-cover' />
                        <div className="flex flex-col gap-4 sm:gap-6 w-full max-w-[300px]">
                            <Image data-aos="zoom-in-up" src={'/images/image-1.jpeg'} alt='Architectural process illustration' width={600} height={600} className='w-full h-[180px] sm:h-[220px] lg:h-[300px] object-cover' />
                            <Image data-aos="zoom-in-up" src={'/images/image-2.jpeg'} alt='Architectural process illustration' width={600} height={600} className='w-full h-[180px] sm:h-[220px] lg:h-[300px] object-cover' />
                        </div>

                    </div>

                    <div className="relative w-full lg:w-[40%] h-auto px-0 lg:px-12 flex flex-col py-0 lg:py-14 dark:border-neutral-300/30 border-neutral-400/50 justify-between ">

                        <div className="w-auto h-auto flex flex-col gap-8 lg:gap-12">

                            <h1 data-aos="fade-up" className="dark:text-white text-neutral-800 font-medium text-3xl sm:text-5xl leading-tight lg:leading-14 max-w-4xl">
                                About Our Work

                            </h1>
                            <p data-aos="fade-up" className="dark:text-white text-neutral-800 text-base sm:text-lg max-w-3xl">
                                The main areas of work are architectural design, interior design, project completion, industrial design, ceramic production of decorative items and furniture.
                                <br /><br />
                                We create beautiful interiors that reflect our client’s unique personalities. Spaces designed to be lived in, not just looked at. Forever homes, not show homes. We understand every detail that goes into crafting a beautiful space. We use our experience and specialist skills to keep things running smoothly, on budget and on time. We plan ahead. Measure twice, cut once.
                            </p>
                        </div>
                        {/* <Button data-aos="fade-up" className="bg-neutral-800 text-white w-44 px-10 text-base py-6 rounded-none mt-3 font-semibold flex gap-3 hover:text-neutral-700 hover:bg-white transition delay-150 duration-300 ease-in-out ">Discover More <ArrowUpRight size={16} /></Button> */}
                    </div>
                </section>
                {/* projects Section */}
                <ProjectSection />
                {/* Awards Section */}
                <AwardsSection />
                {/* Testimonial Section */}
                {/* <TestimonialSection /> */}
                <Footer />
            </main>
        </div>
    );
}
