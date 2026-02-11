'use client'

import AboutSection from "@/components/about-section";
import { Button } from "@/components/ui/button";
import { ArrowRightCircle, ArrowUpRight, ArrowUpRightFromCircle, Facebook, FacebookIcon, MenuIcon, MoonIcon, SunDimIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaFacebookF, FaInstagram, FaInstagramSquare, FaLinkedin } from "react-icons/fa";
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

export default function Home() {
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
        <section className="hero-section relative w-full h-screen flex justify-center items-center">
          {/* grid line */}
          {/* <div className="bg-black/10 w-full h-screen flex pl-52 justify-between ">
            <div className="column-1 border-l-[1px] border-white/30 w-[25%] h-screen"></div>
            <div className="column-1 border-l-[1px] border-white/30 w-[25%] h-screen"></div>
            <div className="column-1 border-l-[1px] border-white/30 w-[25%] h-screen"></div>
            <div className="column-1 border-l-[1px] border-white/30 w-[25%] h-screen"></div>
          </div> */}

          {/* header */}
          <div className="w-full bg-black/10 absolute top-0 left-0 h-auto flex justify-between ">
            <div className="menu w-auto  py-0 pl-8 pr-8 border-r border-white/30">
              <Image src="/images/logo.png" alt="logo" width={100} height={100} className="w-auto h-auto" />
            </div>


            <div className="logo w-auto h- px-20 text-center h-screen border-l py-8 border-r border-white/30 flex justify-center ">
              <h2 data-aos="fade-down" className="text-white  text-center font-bold text-4xl uppercase">Khail Associates</h2>
            </div>

            <div className="w-auto h-auto border-l border-white/50  py-8 pr-8 ">
              <div data-aos="fade-left" onClick={() => toggleTheme()} className="theme items-center pl-20 w-auto h-auto  flex gap-6">
                {theme === true ? (<span className="text-sm font-semibold cursor-pointer uppercase text-white flex gap-2"><MoonIcon size={20} /> Dark Mode</span>) : (<span className="text-sm font-semibold cursor-pointer uppercase text-white flex gap-2"><SunDimIcon size={20} /> Light Mode</span>)}
                <div className="menu-icon text-white ">
                  <TbMenu3 size={34} onClick={() => setOpenMenu(true)} />
                </div>
              </div>
            </div>
          </div>

          <nav className="menu w-full absolute top-20 left-0  py-8 pl-8 ">
            <ul className="menu-item letter-spacing pr-24 w-auto h-auto gap-24 flex justify-center  text-white">
              <li className="relative group">
                <Link
                  href="/"
                  className="text-base text-white font-semibold uppercase hover:text-black/80 transition-colors duration-300"
                >
                  Home
                </Link>

                <div
                  className="
      absolute left-0 top-full mt-6 z-50 w-[420px]
      bg-neutral-900 shadow-2xl overflow-hidden
      opacity-0 invisible translate-y-4 scale-95
      transition-all duration-300 ease-out
      group-hover:opacity-100 
      group-hover:visible 
      group-hover:translate-y-0 
      group-hover:scale-100
    "
                >
                  <Card className="border-none shadow-none bg-transparent rounded-none">
                    <CardContent className="p-5">
                      <div className="h-[250px] overflow-hidden">
                        <Image
                          src="/images/hero-image.webp"
                          alt="Featured Project"
                          width={400}
                          height={500}
                          className="w-full h-full object-cover transition-transform duration-700 ease-out hover:scale-105"
                        />
                      </div>

                      <div className="mt-4 text-white">
                        <h2 className="text-lg font-semibold tracking-wide">
                          {projects_data[0].title}
                        </h2>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </li>

              <li className="relative group">
                <Link
                  href="/about"
                  className="text-base text-white font-semibold uppercase hover:text-black/80 transition-colors duration-300"
                >
                  About
                </Link>

                <div
                  className="
      absolute left-0 top-full mt-6 z-50 w-[420px]
      bg-neutral-900 shadow-2xl overflow-hidden
      opacity-0 invisible translate-y-4 scale-95
      transition-all duration-300 ease-out
      group-hover:opacity-100 
      group-hover:visible 
      group-hover:translate-y-0 
      group-hover:scale-100
    "
                >
                  <Card className="border-none shadow-none bg-transparent rounded-none">
                    <CardContent className="p-5">
                      <div className="h-[250px] overflow-hidden">
                        <Image
                          src="/images/hero-image.webp"
                          alt="Featured Project"
                          width={400}
                          height={500}
                          className="w-full h-full object-cover transition-transform duration-700 ease-out hover:scale-105"
                        />
                      </div>

                      <div className="mt-4 text-white">
                        <h2 className="text-lg font-semibold tracking-wide">
                          {projects_data[0].title}
                        </h2>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </li>

              <li className="relative group">
                <Link
                  href="/services"
                  className="text-base text-white font-semibold uppercase hover:text-black/80 transition-colors duration-300"
                >
                  Services
                </Link>

                <div
                  className="
      absolute left-0 top-full mt-6 z-50 w-[420px]
      bg-neutral-900 shadow-2xl overflow-hidden
      opacity-0 invisible translate-y-4 scale-95
      transition-all duration-300 ease-out
      group-hover:opacity-100 
      group-hover:visible 
      group-hover:translate-y-0 
      group-hover:scale-100
    "
                >
                  <Card className="border-none shadow-none bg-transparent rounded-none">
                    <CardContent className="p-5">
                      <div className="h-[250px] overflow-hidden">
                        <Image
                          src="/images/hero-image.webp"
                          alt="Featured Project"
                          width={400}
                          height={500}
                          className="w-full h-full object-cover transition-transform duration-700 ease-out hover:scale-105"
                        />
                      </div>

                      <div className="mt-4 text-white">
                        <h2 className="text-lg font-semibold tracking-wide">
                          {projects_data[0].title}
                        </h2>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </li>

              <li className="relative group">
                <Link
                  href="/projects"
                  className="text-base text-white font-semibold uppercase hover:text-black/80 transition-colors duration-300"
                >
                  Projects
                </Link>

                <div
                  className="
      absolute left-0 top-full mt-6 z-50 w-[420px]
      bg-neutral-900 shadow-2xl overflow-hidden
      opacity-0 invisible translate-y-4 scale-95
      transition-all duration-300 ease-out
      group-hover:opacity-100 
      group-hover:visible 
      group-hover:translate-y-0 
      group-hover:scale-100
    "
                >
                  <Card className="border-none shadow-none bg-transparent rounded-none">
                    <CardContent className="p-5">
                      <div className="h-[250px] overflow-hidden">
                        <Image
                          src="/images/hero-image.webp"
                          alt="Featured Project"
                          width={400}
                          height={500}
                          className="w-full h-full object-cover transition-transform duration-700 ease-out hover:scale-105"
                        />
                      </div>

                      <div className="mt-4 text-white">
                        <h2 className="text-lg font-semibold tracking-wide">
                          {projects_data[0].title}
                        </h2>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </li>

              <li className="relative group">
                <Link
                  href="/contact"
                  className="text-base text-white font-semibold uppercase hover:text-black/80 transition-colors duration-300"
                >
                  Contact
                </Link>

                <div
                  className="
      absolute left-0 top-full mt-6 z-50 w-[420px]
      bg-neutral-900 shadow-2xl overflow-hidden
      opacity-0 invisible translate-y-4 scale-95
      transition-all duration-300 ease-out
      group-hover:opacity-100 
      group-hover:visible 
      group-hover:translate-y-0 
      group-hover:scale-100
    "
                >
                  <Card className="border-none shadow-none bg-transparent rounded-none">
                    <CardContent className="p-5">
                      <div className="h-[250px] overflow-hidden">
                        <Image
                          src="/images/hero-image.webp"
                          alt="Featured Project"
                          width={400}
                          height={500}
                          className="w-full h-full object-cover transition-transform duration-700 ease-out hover:scale-105"
                        />
                      </div>

                      <div className="mt-4 text-white">
                        <h2 className="text-lg font-semibold tracking-wide">
                          {projects_data[0].title}
                        </h2>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </li>

            </ul>
          </nav>

          {/* Sidebar */}
          <div className={`fixed top-0 left-0 h-screen w-[60%] bg-neutral-900 text-white z-50 
        transform transition-transform duration-500 
        ${openMenu ? "translate-x-0" : "-translate-x-full"}`}
          >
            {/* Close Icon */}
            <div className="w-full p-8 h-fit flex justify-end">
              <button
                className="text-white text-4xl font-bold"
                onClick={() => setOpenMenu(false)}
              >
                ✕
              </button>
            </div>

            <div className="flex gap-6 w-auto h-auto justify-between">
              <div className="w-auto h-auto">
                {/* Menu Items */}
                <ul className="px-18 py-2 space-y-12">
                  <li className="text-[40px] uppercase font-semibold">Home</li>
                  <li className="text-[40px] uppercase font-semibold">About Us</li>
                  <li className="text-[40px] uppercase font-semibold">Services</li>
                  <li className="text-[40px] uppercase font-semibold">Projects</li>
                  <li className="text-[40px] uppercase font-semibold">Contact</li>
                </ul>
              </div>

              <div className="w-auto h-auto flex flex-col gap-1 items-end justify-end pr-14">
                <p className="font-medium text-lg">
                  +92 332 333333
                </p>
                <p className="font-medium text-lg">
                  khailasociates@gmail.com
                </p>
                <div className="flex gap-4 py-4 text-xl">

                  <FaFacebookF />
                  <FaInstagram />
                  <FaLinkedin />
                </div>
              </div>

            </div>
          </div>

          {/* hero content */}
          <div className="hero-content absolute top-70   w-auto min-w-[50%] min-h-[50%] h-fit flex justify-center items-center">
            <div className="w-auto h-auto flex flex-col gap-4 justify-center text-center">
              <div data-aos="fade-right" className="sub-heading flex gap-2 items-center justify-center">
                <div className="w-1 h-1 bg-white rounded-full"></div>
                <h4 className="text-base letter-spacing text-white uppercase">
                  We are a multidisciplinary
                </h4>

              </div>
              <h1 data-aos="fade-right" className="text-white font-medium text-7xl max-w-2xl m-auto">
                Full-service Architecture Studio
              </h1>
              <p data-aos="fade-right" className="text-white text-xl max-w-xl m-auto">Archdeco Studio has implemented more than 600 projects in 25 countries.</p>
              <Button data-aos="fade-right" className="bg-neutral-800 m-auto text-white w-44 px-10 text-base py-6 rounded-none mt-3 font-semibold flex gap-3 hover:text-neutral-800 hover:bg-white transition delay-150 duration-300 ease-in-out ">Contact Us <ArrowUpRight size={16} /></Button>
            </div>
          </div>

        </section>

        <AboutSection />
        <FeaturesSection />
        <ProjectSection />
        <ProcessSection />
        <AwardsSection />
        <PhilosophySection />
        <TestimonialSection />
        <Footer />
      </main>
    </div>
  );
}
