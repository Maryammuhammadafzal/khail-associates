'use client'

import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import ProcessSection from "@/components/process-section";
import AwardsSection from "@/components/awards-section";
// import TestimonialSection from "@/components/testimonial-section";
import Footer from "@/components/footer";
import HeroSection from "@/components/hero-section";

export default function ContactPage() {

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
                <HeroSection subheading="Contact us" heading="Get in Touch with Karachi's Trusted Architects" paragraph="Ready to start your dream project? Whether you have a clear vision or need guidance on where to begin, we're here to help. Schedule a free consultation with our team to discuss your architectural and interior design needs." image="/images/residential-project.jpg" />
                {/* Contact Section */}
                <ProcessSection image="/images/university-project.jpeg" subheading="Contact us" heading="Get in Touch with Karachi's Trusted Architects" paragraph="Ready to start your dream project? Whether you have a clear vision or need guidance on where to begin, we're here to help. Schedule a free consultation with our team to discuss your architectural and interior design needs." />
                {/* Awards Section */}
                <AwardsSection />
                {/* Testimonial Section */}
                {/* <TestimonialSection /> */}
                <Footer />
            </main>
        </div>
    );
}
