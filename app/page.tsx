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
// import TestimonialSection from "@/components/testimonial-section";
import Footer from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { MdEmail } from "react-icons/md";
import { BsArrowUpRight } from "react-icons/bs";
import { HeroCarousel } from "@/components/hero-carousel";
import WorkSection from "@/components/work-section";
import WorkCategories from "@/components/work-categories";

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
    <div className="flex min-h-screen w-full overflow-x-hidden bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full flex-col items-center justify-between bg-white dark:bg-black">

        {/* Hero Section */}
        <section className="hero-section relative w-full h-auto min-h-[500px] md:h-[800px] md:min-h-[800px] lg:h-[1000px] lg:min-h-[800px] flex justify-center items-start overflow-hidden">
          <div className="absolute inset-0 z-0">
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
          <div className="relative z-50 w-full max-w-[1500px] mx-auto absolute top-0 px-4 sm:px-6 lg:px-8 xl:px-10">
            <div className="flex items-start justify-between gap-3 pt-4 sm:pt-6 lg:pt-8">
              <div className="flex items-center gap-3 sm:gap-5">
                <div className="menu-icon text-white">
                  <TbMenu3 size={28} onClick={() => setOpenMenu(true)} className="cursor-pointer" />
                </div>
                <div data-aos="fade-left" onClick={() => toggleTheme()} className="theme flex items-center gap-2 text-white">
                  {theme === true ? (<span className="hidden sm:flex text-sm font-semibold uppercase"><MoonIcon size={18} /></span>) : (<span className="hidden sm:flex text-sm font-semibold uppercase"><SunDimIcon size={18} /></span>)}
                </div>
              </div>

              <Link href={"/"} className="hidden md:flex flex-1 items-center justify-center">
                <h2 data-aos="fade-down" className="text-center text-white text-lg font-bold uppercase sm:text-2xl lg:text-3xl">Khail Associates</h2>
              </Link>

              <Link href={"/"} className="relative z-10 shrink-0">
                <Image src="/images/logo-1.png" alt="logo" width={240} height={240} className="h-auto w-[90px] sm:w-[110px] lg:w-[150px]" />
              </Link>
            </div>
          </div>

          <nav className="menu hidden lg:flex w-full max-w-[700px] absolute top-14 mx-auto z-50 py-8">
            <ul className="menu-item letter-spacing w-auto h-auto gap-6 xl:gap-12 flex justify-center text-white">
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
                          src="/images/front page/yusuf new.jpg"
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
                          src="/images/about-image.jpeg"
                          alt="Featured Project"
                          width={400}
                          height={500}
                          className="w-full h-full object-cover object-top transition-transform duration-700 ease-out hover:scale-105"
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
                      { title: "Architectural Design", link: "/services/#architecture" },
                      { title: "Master Planning", link: "/services/#planning" },
                      { title: "Interior Design", link: "/services/#interiors" },
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
                        image: "/images/residential-projects/residential-project-1.jpeg",
                        title: "Modern Residence",
                        category: "Residential",
                        link: "/projects/residential-projects",
                      },
                      {
                        image: "/images/commercial-projects/commercial-project-1.jpeg",
                        title: "Corporate Office",
                        category: "Commercial",
                        link: "/projects/commercial-projects",
                      },
                      {
                        image: "/images/mosque-projects/mosque-project-1.jpg",
                        title: "Mosque Projects",
                        category: "Mosque",
                        link: "/projects/mosque-projects",
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
                          <Link href="tel:+923158833638" className="flex items-center gap-3">
                            <FaPhone className="rotate-90" />
                            +92 3158833638
                          </Link>
                        </p>
                        <p className="font-medium text-lg flex items-center gap-3">
                          <Link href="mailto:Khailassociates1992@gmail.com" className="flex items-center gap-3">
                            <MdEmail />
                            Khailassociates1992@gmail.com
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
          <div className={`fixed top-0 left-0 h-screen w-[85%] sm:w-[75%] lg:hidden bg-neutral-900 text-white z-50 
        transform transition-transform duration-500 
        ${openMenu ? "translate-x-0" : "-translate-x-full"}`}
          >
            {/* Close Icon */}
            <div className="w-full p-8 h-fit flex justify-end">
              <button
                className="text-white text-2xl sm:text-3xl md:text-4xl font-bold"
                onClick={() => setOpenMenu(false)}
              >
                ✕
              </button>
            </div>

            <div className="flex sm:flex-row flex-col gap-6 w-auto h-screen  justify-between">
              <div className="w-auto h-auto">
                {/* Menu Items */}
                <ul className="px-6 md:px-18 py-2 space-y-12">
                  <Link
                    href="/">
                    <li className="md:py-2 py-2 text-3xl md:text-[40px] uppercase font-semibold">Home</li>
                  </Link>
                  <Link
                    href="/about">
                    <li className="md:py-2 py-2 text-3xl md:text-[40px] uppercase font-semibold">About Us</li>
                  </Link>
                  <Link
                    href="/services">
                    <li className="md:py-2 py-2 text-3xl md:text-[40px] uppercase font-semibold">Our Services</li>
                  </Link>
                  <Link
                    href="/projects">
                    <li className="md:py-2 py-2 text-3xl md:text-[40px] uppercase font-semibold">Projects</li>
                  </Link>
                  <Link
                    href="/contact">
                    <li className="md:py-2 py-2 text-3xl md:text-[40px] uppercase font-semibold">Contact Us</li>
                  </Link>
                </ul>
              </div>

              <div className="w-auto h-auto flex flex-col gap-1 items-end justify-end sm:pb-40 pb-32 pr-14">
                <Link href="tel:+923158833638" className="font-medium text-xl">
                 +92 315 8833638
                </Link>
                <Link href="mailto:khailassociates1992@gmail.com" className="font-medium text-xl">
                  Khailassociates1992@gmail.com
                </Link>
                <div className="flex gap-4 py-4 text-2xl">
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
            </div>
          </div>

          {/* hero content */}
          <div className="hero-content absolute bottom-10 left-4 right-4 sm:left-8 sm:right-8 md:bottom-14 md:left-12 lg:bottom-20 lg:left-20 z-40 w-auto max-w-[90%] md:max-w-[70%] lg:max-w-[700px]">
            <div className="flex flex-col gap-4">
              <div data-aos="fade-right" className="sub-heading flex gap-2 items-center">
                <div className="w-1 h-1 bg-white rounded-full"></div>
                <h4 className="text-xs sm:text-sm md:text-base letter-spacing text-white uppercase">
                  Pakistan's Trusted Architecture
                </h4>
              </div>
              <h1 data-aos="fade-right" className="text-white font-medium text-left text-3xl sm:text-4xl  max-w-xl lg:max-w-2xl leading-tight">
                Pakistan's Premier Architecture & Interior Design Firm
              </h1>

              <Link href={"/contact"}>
                <Button data-aos="fade-right" className="bg-white text-neutral-800 w-full max-w-[180px] px-6 text-sm sm:text-base py-5 sm:py-6 rounded-none mt-3 font-semibold flex items-center justify-center gap-3 hover:text-white hover:bg-neutral-800 transition duration-300 ease-in-out">Contact Us <ArrowUpRight size={16} /></Button>
              </Link>
            </div>
          </div>

        </section>

        <AboutSection />
        <WorkSection />
        <WorkCategories />
        <FeaturesSection />
        <ProjectSection />
        <ProcessSection subheading="Our Process" heading="Great Design Starts with Understanding People, Not Just Buildings" paragraph="The main areas of work are architectural design, interior design, project completion, industrial design, ceramic production of decorative items and furniture. Our highly collaborative, award-winning team will help you achieve your goals for a distinctive design, inspired by what you find most important and beautiful." image="/images/process-bg.webp" />
        <AwardsSection />
        <PhilosophySection />
        {/* <TestimonialSection /> */}
        <Footer />
      </main>
    </div>
  );
}
