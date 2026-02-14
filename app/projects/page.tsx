'use client'

import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import TestimonialSection from "@/components/testimonial-section";
import Footer from "@/components/footer";
import HeroSection from "@/components/hero-section";
import ProjectCard from "@/components/project-card";

export default function AnoutPage() {

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
            title: 'Architect By Yousuf',
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
                <HeroSection subheading="Latest Projects" heading="Our Portfolio - Transforming Spaces Across Karachi & Pakistan" paragraph="Explore our diverse portfolio of completed projects across Pakistan. From luxury residences in Karachi's premium localities to commercial developments and industrial facilities, each project showcases our commitment to design excellence and client satisfaction. These are real homes and businesses where families live, children grow, and businesses thrive." image="/images/image-4.jpeg" />
                {/* Projects Section */}
                <div className="flex flex-wrap px-8 py-24 gap-10">
                    {projects_data.map((feature, index) => (
                        <ProjectCard key={index} link={'/project/' + feature.title} index={index} title={feature.title} nickname={feature.nickname} image="/images/project-image-1-min.jpeg" />
                    ))}
                </div>
                {/* Testimonial Section */}
                <TestimonialSection />
                <Footer />
            </main>
        </div>
    );
}
