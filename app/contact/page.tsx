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

export default function ContactPage() {
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
                 <HeroSection subheading="Contact us" heading="Get in Touch with Karachi's Trusted Architects" paragraph="Ready to start your dream project? Whether you have a clear vision or need guidance on where to begin, we're here to help. Schedule a free consultation with our team to discuss your architectural and interior design needs." image="/images/image-5.jpeg" />

                {/* <AboutSection />
                <FeaturesSection />
                <ProjectSection /> */}
                <ProcessSection subheading="Contact us" heading="Get in Touch with Karachi's Trusted Architects" paragraph="Ready to start your dream project? Whether you have a clear vision or need guidance on where to begin, we're here to help. Schedule a free consultation with our team to discuss your architectural and interior design needs." />
                <AwardsSection />
                {/* <PhilosophySection /> */}
                <TestimonialSection />
                <Footer />
            </main>
        </div>
    );
}
