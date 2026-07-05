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
import { HeroCarousel } from "@/components/hero-carousel";
import WorkSection from "@/components/work-section";

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
      title: 'Leading Architecture & Interior Design Firm in Pakistan',
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
    <div className="flex min-h-screen items-center w-full justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full flex-col items-center justify-between bg-white dark:bg-black sm:items-start">

        {/* Hero Section */}
        <section className="hero-section relative  w-full h-[1000px] min-h-[800px]  flex justify-center items-center">
        <div className="absolute z-0 w-full h-[1000px] ">
          <HeroCarousel />
        </div>
          {/* grid line */}
          {/* <div className="bg-black/10 w-full h-screen flex pl-52 justify-between ">
            <div className="column-1 border-l-[1px] border-white/30 w-[25%] h-screen"></div>
            <div className="column-1 border-l-[1px] border-white/30 w-[25%] h-screen"></div>
            <div className="column-1 border-l-[1px] border-white/30 w-[25%] h-screen"></div>
            <div className="column-1 border-l-[1px] border-white/30 w-[25%] h-screen"></div>
          </div> */}
          {/* Hero Carousel */}
          {/* header */}
          <div className="w-full max-w-[1500px] mx-auto z-50 absolute top-0 max-h-[800px]  h-auto flex justify-between ">
            <div className="menu w-auto  py-0   ">
              <Image src="/images/logo.png" alt="logo" width={200} height={200} className="w-200px h-200px" />
            </div>


            <div className="logo w-auto h- px-20 text-center h-screen max-h-[800px] pt-8 pb-2  flex justify-center ">
              <h2 data-aos="fade-down" className="text-white  text-center font-bold text-3xl uppercase">Khail Associates</h2>
            </div>

            <div className="w-auto h-auto  py-8 pr-8 ">
              <div data-aos="fade-left" onClick={() => toggleTheme()} className="theme items-center pl-20 w-auto h-auto  flex gap-6">
                {theme === true ? (<span className="text-sm font-semibold cursor-pointer uppercase text-white flex gap-2"><MoonIcon size={20} /> </span>) : (<span className="text-sm font-semibold cursor-pointer uppercase text-white flex gap-2"><SunDimIcon size={20} /></span>)}
                <div className="menu-icon text-white ">
                  <TbMenu3 size={28} onClick={() => setOpenMenu(true)} />
                </div>
              </div>
            </div>
          </div>

          <nav className="menu w-full max-w-[1500px] absolute top-14 mx-auto  z-50 py-8 pl-8 ">
            <ul className="menu-item letter-spacing pr-24 w-auto h-auto gap-24 flex justify-center  text-white">
              <li className="relative group">
                <Link
                  href="/"
                  className="text-base text-white font-semibold uppercase hover:text-neutral-300 transition-colors duration-300"
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
                  className="text-base text-white font-semibold uppercase hover:text-neutral-300 transition-colors duration-300"
                >
                  About Us
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
                      <div className="h-[400px] overflow-hidden">
                        <div className="mb-4 text-white">
                          <h2 className="text-lg font-semibold tracking-wide">
                            We Design Spaces That Inspire. Functional. Timeless. Sustainable.
                          </h2>
                          <p className="mt-2 text-white text-xs" >At Khail Associates, we are passionate about creating spaces that inspire and elevate the human experience. </p>
                        </div>
                        <Image
                          src="/images/about-picture.webp"
                          alt="Featured Project"
                          width={400}
                          height={500}
                          className="w-full h-full object-cover transition-transform duration-700 ease-out hover:scale-105"
                        />
                      </div>

                    </CardContent>
                  </Card>
                </div>
              </li>
              <li className="relative group">
                <Link
                  href="/services"
                  className="text-base text-white font-semibold uppercase hover:text-neutral-300 transition-colors duration-300"
                >
                  Our Services
                </Link>

                <div
                  className="
      absolute left-0 top-full mt-6 z-50 w-[400px]
      bg-neutral-900 border border-white/10
      opacity-0 invisible translate-y-4
      transition-all duration-300 ease-out
      group-hover:opacity-100 
      group-hover:visible 
      group-hover:translate-y-0
    "
                >
                  <div className="flex flex-col py-3">

                    {[
                      { title: "Architectural Design", link: "/services/architecture" },
                      { title: "Interior Design", link: "/services/interior" },
                      { title: "Renovation & Remodeling", link: "/services/renovation" },
                    ].map((item, i) => (
                      <Link
                        key={i}
                        href={item.link}
                        className="
        flex gap-10 items-center justify-between
        px-6 py-3
        text-sm tracking-wider uppercase
        text-white
        hover:bg-white hover:text-neutral-900
        transition-all duration-300 group/item
      "
                      >
                        <span>{item.title}</span>

                        <span
                          className="
          flex items-center justify-center
          w-8 h-8
          border border-white/40
          rounded-full
          transition-all duration-300
          group-hover/item:border-neutral-900
        "
                        >
                          <ArrowUpRight
                            size={14}
                            className="transition-transform duration-300 group-hover/item:translate-x-0.5 group-hover/item:-translate-y-0.5"
                          />
                        </span>
                      </Link>
                    ))}

                  </div>

                </div>
              </li>
              <li className="relative group">
                <Link
                  href="/projects"
                  className="text-base text-white font-semibold uppercase hover:text-neutral-300 transition-colors duration-300"
                >
                  Projects
                </Link>

                <div
                  className="
      absolute left-0 top-full mt-6 z-50 w-[620px]
      bg-neutral-900 border border-white/10
      p-6
      opacity-0 invisible translate-y-4 scale-95
      transition-all duration-300 ease-out
      group-hover:opacity-100
      group-hover:visible
      group-hover:translate-y-0
      group-hover:scale-100
    "
                >
                  <div className="grid grid-cols-3 gap-6">

                    {[
                      {
                        image: "/images/project-image-1-min.jpeg",
                        title: "Modern Residence",
                        category: "Residential",
                        link: "/projects/modern-residence",
                      },
                      {
                        image: "/images/project-image-2-min.jpeg",
                        title: "Corporate Office",
                        category: "Commercial",
                        link: "/projects/corporate-office",
                      },
                      {
                        image: "/images/project-image-3-min.jpeg",
                        title: "Luxury Villa",
                        category: "High-End Living",
                        link: "/projects/luxury-villa",
                      },
                    ].map((project, i) => (
                      <Link
                        key={i}
                        href={project.link}
                        className="group/item relative overflow-hidden"
                      >
                        <div className="h-[170px] overflow-hidden">
                          <Image
                            src={project.image}
                            alt={project.title}
                            width={400}
                            height={500}
                            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover/item:scale-110"
                          />
                        </div>

                        {/* Overlay */}
                        <div className="
              absolute inset-0 bg-black/40
              opacity-0 group-hover/item:opacity-100
              transition-opacity duration-300
            "
                        />

                        {/* Text */}
                        <div className="mt-3">
                          <p className="text-xs tracking-widest text-neutral-400 uppercase">
                            {project.category}
                          </p>
                          <h3 className="text-sm font-medium text-white mt-1 tracking-wide">
                            {project.title}
                          </h3>
                        </div>
                      </Link>
                    ))}

                  </div>
                </div>
              </li>


              <li className="relative group">
                <Link
                  href="/contact"
                  className="text-base text-white font-semibold uppercase hover:text-neutral-300 transition-colors duration-300"
                >
                  Contact Us
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
                  <Card className="border-none shadow-none text-white bg-transparent rounded-none">
                    <CardContent className="p-5">
                      <div className="w-auto h-auto flex flex-col gap-1">
                        <p className="font-medium text-lg">
                          <Link href="tel:+923323333333" className="flex items-center gap-3">
                            <FaPhone className="rotate-90" />
                            +92 332 333333
                          </Link>
                        </p>
                        <p className="font-medium text-lg flex items-center gap-3">
                          <Link href="mailto:khailassociates@gmail.com" className="flex items-center gap-3">
                            <MdEmail />
                            khailassociates@gmail.com
                          </Link>
                        </p>
                        <div className="flex gap-4 mt-5 text-xl">
                          <Link href="https://www.facebook.com/khailassociates" target="_blank">
                            <FaFacebookF />
                          </Link>
                          <Link href="https://www.instagram.com/khailassociates/" target="_blank">
                            <FaInstagram />
                          </Link>
                          <Link href="https://www.linkedin.com/company/khail-associates/" target="_blank">
                            <FaLinkedin />
                          </Link>
                        </div>
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

            <div className="flex gap-6 w-auto h-screen  justify-between">
              <div className="w-auto h-auto">
                {/* Menu Items */}
                <ul className="px-18 py-2 space-y-12">
                  <Link
                    href="/">
                    <li className="text-[40px] uppercase font-semibold">Home</li>
                  </Link>
                  <Link
                    href="/about">
                    <li className="text-[40px] uppercase font-semibold">About Us</li>
                  </Link>
                  <Link
                    href="/services">
                    <li className="text-[40px] uppercase font-semibold">Our Services</li>
                  </Link>
                  <Link
                    href="/projects">
                    <li className="text-[40px] uppercase font-semibold">Projects</li>
                  </Link>
                  <Link
                    href="/contact">
                    <li className="text-[40px] uppercase font-semibold">Contact Us</li>
                  </Link>
                </ul>
              </div>

              <div className="w-auto h-auto flex flex-col gap-1 items-end justify-end pb-40 pr-14">
                <p className="font-medium text-xl">
                  +92 332 333333
                </p>
                <p className="font-medium text-xl">
                  khailassociates@gmail.com
                </p>
                <div className="flex gap-4 py-4 text-2xl">
                  <FaFacebookF />
                  <FaInstagram />
                  <FaLinkedin />
                </div>
              </div>
            </div>
          </div>

          {/* hero content */}
          <div className="hero-content absolute bottom-50 left-20 max-w-[1500px]  z-40 w-auto min-w-[50%]  h-fit flex items-center items-end">
            <div className="w-auto h-auto flex flex-col gap-4">
              <div data-aos="fade-right" className="sub-heading flex gap-2 items-center">
                <div className="w-1 h-1 bg-white rounded-full"></div>
                <h4 className="text-base letter-spacing text-white uppercase">
                  Pakistan's Trusted Architecture
                </h4>
              </div>
              <h1 data-aos="fade-right" className="text-white font-medium text-left text-4xl max-w-2xl ">
                Pakistan's Premier Architecture & Interior Design Firm
              </h1>
              {/* <p data-aos="fade-right" className="text-white text-xl max-w-xl m-auto">Transform your dream home or commercial space into reality with Pakistan's most trusted architectural designers</p> */}
              <Button onClick={() => {}} data-aos="fade-right" className="bg-white  text-neutral-800 w-44 px-10 text-base py-6 rounded-none mt-3 font-semibold flex gap-3 hover:text-white hover:bg-neutral-800 transition delay-150 duration-300 ease-in-out ">Contact Us <ArrowUpRight size={16} /></Button>
            </div>
          </div>

        </section>

        <AboutSection />
        <WorkSection />
        <FeaturesSection />
        <ProjectSection />
        <ProcessSection subheading="Our Process" heading="Great Design Starts with Understanding People, Not Just Buildings" paragraph="The main areas of work are architectural design, interior design, project completion, industrial design, ceramic production of decorative items and furniture. Our highly collaborative, award-winning team will help you achieve your goals for a distinctive design, inspired by what you find most important and beautiful." image="/images/process-bg.webp" />
        <AwardsSection />
        <PhilosophySection />
        <TestimonialSection />
        <Footer />
      </main>
    </div>
  );
}
