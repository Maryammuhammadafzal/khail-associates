'use client'

import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import TestimonialSection from "@/components/testimonial-section";
import Footer from "@/components/footer";
import HeroSection from "@/components/hero-section";
import Service from "@/components/service";

export default function AnoutPage() {

    useEffect(() => {
        AOS.init({
            once: true,
            duration: 800,
            // easing: 'ease-in-out',
        });
    }, []);

    const features_data = [
        {
            index: 0,
            id: "designing-spaces",
            image: '/images/image-1.jpeg',
            icon: '/images/feature-icon-1.png',
            title: 'Designing Spaces That Inspire',
            description: "We create thoughtful architectural solutions that blend creativity, functionality, and sustainability. Whether it's a dream home, commercial development, or renovation project, our designs are tailored to reflect your vision while maximizing comfort and value.",
            link: '/services'
        },
        {
            index: 1,
            image: '/images/image-2.jpeg',
            id: "interior-design",
            icon: '/images/feature-icon-2.png',
            title: 'Interiors Crafted for Modern Living',
            description: 'From luxurious residences to contemporary workplaces, we create refined interiors that elevate everyday experiences through thoughtful design and attention to detail.',
            link: '/services'
        },
        {
            index: 2,
            image: '/images/image-3.jpeg',
            id: "vision-to-reality",
            icon: '/images/feature-icon-3.png',
            title: 'From Vision to Reality',
            description: 'Our end-to-end project delivery service ensures a smooth and hassle-free experience. From planning and approvals to construction supervision and final execution, we handle every detail so you can focus on the bigger picture.',
            link: '/services'
        },
    ];
    // const features_data = [
    //     {
    //         index: 0,
    //         id: "architectural-design",
    //         icon: '/images/feature-icon-1.png',
    //         title: 'Architectural Design & Planning',
    //         description: "Full architectural design services in Karachi, from concept sketches and construction drawings to KMC and SBCA NOC approvals, ensuring safety, aesthetics, and regulatory compliance.",
    //         link: 'https://khail-associates.com/services'
    //     },
    //     {
    //         index: 1,
    //         id: "interior-design",
    //         icon: '/images/feature-icon-2.png',
    //         title: 'Interior Design & Styling',
    //         description: 'Create stunning interiors that reflect your personality and lifestyle with our full-service interior design solutions. From elegant drawing rooms and modern kitchens to professional office spaces and retail showrooms, we craft interiors that are both beautiful and functional.',
    //         link: 'https://khail-associates.com/services'
    //     },
    //     {
    //         index: 2,
    //         icon: '/images/feature-icon-3.png',
    //         title: 'Turnkey Solutions & Project Management',
    //         description: 'Leave the stress of construction and coordination to us. Our turnkey services provide end-to-end project management, from design approval to final handover. We coordinate with contractors, suppliers, and craftsmen, ensuring quality control at every stage.',
    //         link: 'https://khail-associates.com/services'
    //     },
    // ];

    return (
        <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
            <main className="flex min-h-screen w-full flex-col items-center justify-between bg-white dark:bg-black sm:items-start">

                {/* Hero Section */}
                <HeroSection subheading="Our Services" heading="Architectural & Interior Design Services in Karachi, Pakistan" paragraph="Khail Associates offers comprehensive architectural and interior design services tailored for Pakistani clients. Whether you're a homeowner planning to build in Karachi's residential areas, a business owner looking to establish a commercial space, or a developer managing large-scale projects, we provide end-to-end solutions that combine aesthetic excellence with practical functionality." image="/images/image-3.jpeg" />
                {/* Services Section */}
                <div className="flex flex-col px-8 py-24 gap-10">

                    {features_data.map((feature) => (
                        <Service key={feature.title} index={feature.index} icon={feature.icon} subheading={feature.title} heading={feature.title} paragraph={feature.description} image={feature.image} />
                    ))}
                </div>
                {/* Testimonial Section */}
                <TestimonialSection />
                <Footer />
            </main>
        </div>
    );
}
