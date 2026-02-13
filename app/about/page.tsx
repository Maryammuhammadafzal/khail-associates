'use client'

import AboutSection from "@/components/about-section";
import { Button } from "@/components/ui/button";
import { ArrowRightCircle, ArrowUpRight, ArrowUpRightFromCircle, Facebook, FacebookIcon, MenuIcon, MoonIcon, SunDimIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaFacebookF, FaInstagram, FaInstagramSquare, FaLinkedin, FaPhone } from "react-icons/fa";
import { TbMenu3 } from "react-icons/tb";
import AOS from 'aos';
import 'aos/dist/aos.css';
import FeaturesSection from "@/components/features-section";
import ProjectSection from "@/components/project-section";
import ProcessSection from "@/components/process-section";
import AwardsSection from "@/components/awards-section";
import PhilosophySection from "@/components/philosophy-section";
import TestimonialSection from "@/components/testimonial-section";
import Footer from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { MdEmail } from "react-icons/md";
import { BsArrowUpRight } from "react-icons/bs";
import HeroSection from "@/components/hero-section";

export default function AnoutPage() {
    const [theme, setTheme] = useState(true);
    const [openMenu, setOpenMenu] = useState(false);

    const toggleTheme = () => {
        const element = document.getElementsByTagName('html')[0];
        if (theme === true) {
            setTheme(false);
            element.classList.add('dark');
        } else {
            setTheme(true);
            element.classList.remove('dark');
        }
    }

    useEffect(() => {
        AOS.init({
            once: true,
            duration: 800,
            // easing: 'ease-in-out',
        });
    }, []);

    const projects_data = [
        {
            image: '/images/Project-image-1-min.jpeg',
            title: 'Leading Architecture & Interior Design Firm in Karachi',
            nickname: 'Architecture'
        },
        {
            image: '/images/Project-image-2-min.jpeg',
            title: 'Architect By Yousuf',
            nickname: 'Architecture'
        },
        {
            image: '/images/Project-image-3-min.jpeg',
            title: 'Architect By Yousuf',
            nickname: 'Architecture'
        },
        {
            image: '/images/Project-image-4-min.jpeg',
            title: 'Architect By Yousuf',
            nickname: 'Architecture'
        },
        {
            image: '/images/Project-image-5-min.jpeg',
            title: 'Architect By Yousuf',
            nickname: 'Architecture'
        },
        {
            image: '/images/Project-image-6-min.jpeg',
            title: 'Architect By Yousuf',
            nickname: 'Architecture'
        },
        {
            image: '/images/Project-image-7-min.jpeg',
            title: 'Architect By Yousuf',
            nickname: 'Architecture'
        },
    ]

    return (
        <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
            <main className="flex min-h-screen w-full flex-col items-center justify-between bg-white dark:bg-black sm:items-start">

                {/* Hero Section */}

                <HeroSection subheading="About us" heading="About Khail Associates - Building Dreams Across Pakistan" paragraph="Established in Karachi, Khail Associates has grown to become one of Pakistan's most respected architecture and interior design firms. Our journey began with a simple mission: to provide Pakistanis with world-class architectural services that respect our cultural heritage while embracing modern innovation." image="/images/image-3.jpeg" />
                {/* <AboutSection /> */}

                {/* our Work section */}
                <section className="process-section dark:bg-neutral-900 relative px-8 py-24  w-full h-auto min-h-screen flex  justify-center items-center">

                    <div className='relative w-[60%] h-screen gap-6 flex justify-center items-center'>
                        <Image data-aos="zoom-in-up" src={'/images/project-image-2-min.jpeg'} alt='Architectural process illustration' width={800} height={1200} className='w-[500px] h-[650px] object-cover' />
                        <div className="flex flex-col gap-6">
                            <Image data-aos="zoom-in-up" src={'/images/image-1.jpeg'} alt='Architectural process illustration' width={600} height={600} className='w-[300px] h-[315px] object-cover' />
                            <Image data-aos="zoom-in-up" src={'/images/image-2.jpeg'} alt='Architectural process illustration' width={600} height={600} className='w-[300px] h-[315px] object-cover' />
                        </div>

                    </div>

                    <div className="relative w-[40%] h-screen px-12 flex flex-col py-14 dark:border-neutral-300/30 border-neutral-400/50 justify-between ">

                        <div className="w-auto h-screen flex flex-col gap-12">

                            <h1 data-aos="fade-up" className="dark:text-white text-neutral-800 font-medium text-5xl leading-14 max-w-4xl">
                                About Our Work

                            </h1>
                            <p data-aos="fade-up" className="dark:text-white text-neutral-800 text-lg max-w-3xl">
                                The main areas of work are architectural design, interior design, project completion, industrial design, ceramic production of decorative items and furniture.
                                <br /><br />
                                We create beautiful interiors that reflect our client’s unique personalities. Spaces designed to be lived in, not just looked at. Forever homes, not show homes. We understand every detail that goes into crafting a beautiful space. We use our experience and specialist skills to keep things running smoothly, on budget and on time. We plan ahead. Measure twice, cut once.
                            </p>
                        </div>
                        {/* <Button data-aos="fade-up" className="bg-neutral-800 text-white w-44 px-10 text-base py-6 rounded-none mt-3 font-semibold flex gap-3 hover:text-neutral-700 hover:bg-white transition delay-150 duration-300 ease-in-out ">Discover More <ArrowUpRight size={16} /></Button> */}
                    </div>
                </section>

                {/* <FeaturesSection /> */}
                <ProjectSection />
                {/* <ProcessSection subheading="Our Process" heading="Great Design Starts with Understanding People, Not Just Buildings" paragraph="The main areas of work are architectural design, interior design, project completion, industrial design, ceramic production of decorative items and furniture. Our highly collaborative, award-winning team will help you achieve your goals for a distinctive design, inspired by what you find most important and beautiful." image="/images/process-bg.webp" /> */}
                <AwardsSection />
                {/* <PhilosophySection /> */}
                <TestimonialSection />
                <Footer />
            </main>
        </div>
    );
}
