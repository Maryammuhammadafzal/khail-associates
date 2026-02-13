'use client'

import { useEffect, useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import TestimonialSection from "@/components/testimonial-section";
import Footer from "@/components/footer";
import HeroSection from "@/components/hero-section";
import Service from "@/components/service";

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

    const features_data = [
        {
            index: 0,
            icon: '/images/feature-icon-1.png',
            title: 'Architectural Design & Planning',
            description: "Full architectural design services in Karachi, from concept sketches and construction drawings to KMC and SBCA NOC approvals, ensuring safety, aesthetics, and regulatory compliance.",
            link: 'https://khail-associates.com/services'
        },
        {
            index: 1,
            icon: '/images/feature-icon-2.png',
            title: 'Interior Design & Styling',
            description: 'Create stunning interiors that reflect your personality and lifestyle with our full-service interior design solutions. From elegant drawing rooms and modern kitchens to professional office spaces and retail showrooms, we craft interiors that are both beautiful and functional.',
            link: 'https://khail-associates.com/services'
        },
        {
            index: 2,
            icon: '/images/feature-icon-3.png',
            title: 'Turnkey Solutions & Project Management',
            description: 'Leave the stress of construction and coordination to us. Our turnkey services provide end-to-end project management, from design approval to final handover. We coordinate with contractors, suppliers, and craftsmen, ensuring quality control at every stage.',
            link: 'https://khail-associates.com/services'
        },
    ];

    return (
        <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
            <main className="flex min-h-screen w-full flex-col items-center justify-between bg-white dark:bg-black sm:items-start">

                {/* Hero Section */}

                <HeroSection subheading="Our Services" heading="Architectural & Interior Design Services in Karachi, Pakistan" paragraph="Khail Associates offers comprehensive architectural and interior design services tailored for Pakistani clients. Whether you're a homeowner planning to build in Karachi's residential areas, a business owner looking to establish a commercial space, or a developer managing large-scale projects, we provide end-to-end solutions that combine aesthetic excellence with practical functionality." image="/images/image-3.jpeg" />
                {/* <AboutSection /> */}



                {/* <FeaturesSection /> */}
                {/* <ProjectSection /> */}
                <div className="flex flex-col px-8 py-24 gap-10">

                    {features_data.map((feature) => (
                        <Service key={feature.title} index={feature.index} icon={feature.icon} subheading={feature.title} heading={feature.title} paragraph={feature.description} image="/images/project-image-1-min.jpeg" />
                    ))}
                </div>
                {/* <Service index={index} icon="/images/feature-icon-1.png" subheading="Our Process" heading="Great Design Starts with Understanding People, Not Just Buildings" paragraph="The main areas of work are architectural design, interior design, project completion, industrial design, ceramic production of decorative items and furniture. Our highly collaborative, award-winning team will help you achieve your goals for a distinctive design, inspired by what you find most important and beautiful." image="/images/project-image-1-min.jpeg" /> */}
                {/* <AwardsSection /> */}
                {/* <PhilosophySection /> */}
                <TestimonialSection />
                <Footer />
            </main>
        </div>
    );
}
