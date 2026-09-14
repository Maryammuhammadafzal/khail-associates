
"use client";
import { Button } from "@/components/ui/button";
import { ArrowRightCircle, ArrowUpRight, ArrowUpRightFromCircle, Facebook, FacebookIcon, MenuIcon, MoonIcon, SunDimIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaFacebookF, FaInstagram, FaInstagramSquare, FaLinkedin, FaPhone } from "react-icons/fa";
import { TbMenu3 } from "react-icons/tb";
import AOS from "aos";
import "aos/dist/aos.css";
import { Card, CardContent } from "@/components/ui/card";
import { MdEmail } from "react-icons/md";

export default function Header() {
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
        <section className="hero-section-other w-full h-auto flex flex-col justify-center items-center">
            {/* grid line */}
            {/* <div className="bg-black/10 w-full h-screen flex pl-52 justify-between ">
            <div className="column-1 border-l-[1px] border-white/30 w-[25%] h-screen"></div>
            <div className="column-1 border-l-[1px] border-white/30 w-[25%] h-screen"></div>
            <div className="column-1 border-l-[1px] border-white/30 w-[25%] h-screen"></div>
            <div className="column-1 border-l-[1px] border-white/30 w-[25%] h-screen"></div>
          </div> */}

            {/* header */}
            <div className="w-full h-auto flex items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">
                <Link href={"/"} className="menu shrink-0">
                    <Image src="/images/logo-1.png" alt="logo" width={240} height={240} className="h-auto w-[90px] sm:w-[110px] lg:w-[150px]" />
                </Link>

                <nav className="menu hidden lg:flex w-full">
                    <ul className="menu-item letter-spacing w-auto h-auto gap-6 xl:gap-12 flex justify-center text-black dark:text-white">
                        <li className="relative group">
                            <Link
                                href="/"
                                className="text-base text-black dark:text-white font-semibold uppercase hover:text-neutral-300 transition-colors duration-300"
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
                                <Link
                                    href="/">
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
                                </Link>
                            </div>
                        </li>

                        <li className="relative group">
                            <Link
                                href="/about"
                                className="text-base text-black dark:text-white font-semibold uppercase hover:text-neutral-300 transition-colors duration-300"
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
                                <Link href={"/about"}>

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
                                                    className="w-full h-full object-cover transition-transform duration-700 ease-out hover:scale-105"
                                                />
                                            </div>

                                        </CardContent>
                                    </Card>
                                </Link>
                            </div>
                        </li>
                        <li className="relative group">
                            <Link
                                href="/services"
                                className="text-base text-black dark:text-white font-semibold uppercase hover:text-neutral-300 transition-colors duration-300"
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
                                        { title: "Interior Design", link: "/services/#interior" },
                                        { title: "Build A Reality", link: "/services/#building" },
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
                                className="text-base text-black dark:text-white font-semibold uppercase hover:text-neutral-300 transition-colors duration-300"
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
                                className="text-base text-black dark:text-white font-semibold uppercase hover:text-neutral-300 transition-colors duration-300"
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

                {/* <div className="logo w-auto h- px-20 text-center h-screen border-l py-8 border-r border-white/30 flex justify-center ">
                    <h2 data-aos="fade-down" className="text-white  text-center font-bold text-4xl uppercase">Khail Associates</h2>
                </div> */}

                <div className="w-auto h-auto">
                    <div data-aos="fade-left" onClick={() => toggleTheme()} className="theme dark:text-white text-black items-center w-auto h-auto flex gap-3 sm:gap-6">
                        {theme === true ? (<span className="hidden sm:flex text-sm font-semibold cursor-pointer uppercase text-black dark:text-white gap-2"><MoonIcon size={20} /></span>) : (<span className="hidden sm:flex text-sm font-semibold cursor-pointer uppercase text-black dark:text-white gap-2"><SunDimIcon size={20} /></span>)}
                        <div className="menu-icon text-black dark:text-white ">
                            <TbMenu3 size={34} onClick={() => setOpenMenu(true)} className="cursor-pointer" />
                        </div>
                    </div>
                </div>
            </div>



            {/* Sidebar */}
            <div className={`fixed top-0 left-0 h-screen w-[85%] sm:w-[75%] lg:hidden bg-neutral-900 text-white z-50 
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
                            <li className="text-[40px] uppercase font-semibold">Our Services</li>
                            <li className="text-[40px] uppercase font-semibold">Projects</li>
                            <li className="text-[40px] uppercase font-semibold">Contact Us</li>
                        </ul>
                    </div>

                    <div className="w-auto h-auto flex flex-col gap-1 items-end justify-end pr-14">
                        <p className="font-medium text-lg">
                            +92 332 333333
                        </p>
                        <p className="font-medium text-lg">
                            Khailassociates1992@gmail.com
                        </p>
                        <div className="flex gap-4 py-4 text-xl">
                            <FaFacebookF />
                            <FaInstagram />
                            <FaLinkedin />
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}