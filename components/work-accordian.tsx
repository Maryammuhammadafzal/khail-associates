import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import Image from "next/image"
import { Button } from "./ui/button"
import { ArrowUpRight } from "lucide-react"

export function WorkAccordian() {
    return (
        <Accordion
            type="single"
            collapsible
            defaultValue="val-1"
            className="w-full"
        >
            <AccordionItem value="val-1" className="w-full flex gap-10 transition-colors data-[state=open]:bg-amber-100/15 p-6">
                <AccordionTrigger className="w-[300px] text-2xl text-white ">Commercial Projects</AccordionTrigger>
                <AccordionContent className="px-0 py-8">
                    <div className="grid lg:grid-cols-2 gap-10 items-start">

                        {/* Image */}
                        <div className="overflow-hidden">
                            <Image
                                src="/images/Commercial new/commercial-new-3.jpeg"
                                alt="Commercial Project"
                                width={700}
                                height={700}
                                className="w-full h-[280px] md:h-[420px] object-cover transition duration-500 hover:scale-105"
                            />
                        </div>

                        {/* Content */}
                        <div className="space-y-6 ">

                            {/* <div>
                                <p className="text-sm uppercase tracking-[4px] text-yellow-600 font-semibold">
                                    Commercial Architecture
                                </p>

                                <h3 className="text-3xl md:text-4xl font-bold text-neutral-900 mt-2 leading-tight">
                                    Building Spaces That Inspire Business Growth
                                </h3>
                            </div> */}

                            <p className="text-white leading-8 text-[17px]">
                                Commercial projects require more than attractive designs—they demand
                                functionality, efficiency, and a strong brand identity. Our architects
                                collaborate closely with clients to create modern office buildings,
                                retail spaces, hospitality venues, and mixed-use developments that
                                enhance productivity while delivering exceptional user experiences.
                            </p>

                            {/* <p className="text-neutral-600 leading-8 text-[17px]">
                                Every project is carefully planned with sustainability, accessibility,
                                and long-term value in mind, ensuring spaces that are visually striking
                                and built to perform for years to come.
                            </p> */}

                            <Button
                                data-aos="fade-up"
                                className="group bg-neutral-900 hover:bg-white text-white hover:text-black rounded-none px-8 py-7 text-base font-semibold transition-all duration-300"
                            >
                                View More
                                <ArrowUpRight
                                    size={18}
                                    className="ml-2 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                                />
                            </Button>

                        </div>

                    </div>
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="val-2" className="w-full flex gap-10 transition-colors data-[state=open]:bg-amber-100/15 p-6">
                <AccordionTrigger className="w-[300px] text-2xl text-white ">Residential Projects</AccordionTrigger>
                <AccordionContent className="px-0 py-8">
                    <div className="grid lg:grid-cols-2 gap-10 items-start">

                        {/* Image */}
                        <div className="overflow-hidden">
                            <Image
                                src="/images/Commercial new/commercial-new-3.jpeg"
                                alt="Commercial Project"
                                width={700}
                                height={700}
                                className="w-full h-[280px] md:h-[420px] object-cover transition duration-500 hover:scale-105"
                            />
                        </div>

                        {/* Content */}
                        <div className="space-y-6 ">


                            <p className="text-white leading-8 text-[17px]">
                                Commercial projects require more than attractive designs—they demand
                                functionality, efficiency, and a strong brand identity. Our architects
                                collaborate closely with clients to create modern office buildings,
                                retail spaces, hospitality venues, and mixed-use developments that
                                enhance productivity while delivering exceptional user experiences.
                            </p>


                            <Button
                                data-aos="fade-up"
                                className="group bg-neutral-900 hover:bg-white text-white hover:text-black rounded-none px-8 py-7 text-base font-semibold transition-all duration-300"
                            >
                                View More
                                <ArrowUpRight
                                    size={18}
                                    className="ml-2 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                                />
                            </Button>

                        </div>

                    </div>
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="val-3" className="w-full flex gap-10 transition-colors data-[state=open]:bg-amber-100/15 p-6">
                <AccordionTrigger className="w-[300px] text-2xl text-white ">Interior Projects</AccordionTrigger>
                <AccordionContent className="px-0 py-8">
                    <div className="grid lg:grid-cols-2 gap-10 items-start">

                        {/* Image */}
                        <div className="overflow-hidden">
                            <Image
                                src="/images/Commercial new/commercial-new-3.jpeg"
                                alt="Commercial Project"
                                width={700}
                                height={700}
                                className="w-full h-[280px] md:h-[420px] object-cover transition duration-500 hover:scale-105"
                            />
                        </div>

                        {/* Content */}
                        <div className="space-y-6 ">

                            {/* <div>
                                <p className="text-sm uppercase tracking-[4px] text-yellow-600 font-semibold">
                                    Commercial Architecture
                                </p>

                                <h3 className="text-3xl md:text-4xl font-bold text-neutral-900 mt-2 leading-tight">
                                    Building Spaces That Inspire Business Growth
                                </h3>
                            </div> */}

                            <p className="text-white leading-8 text-[17px]">
                                Commercial projects require more than attractive designs—they demand
                                functionality, efficiency, and a strong brand identity. Our architects
                                collaborate closely with clients to create modern office buildings,
                                retail spaces, hospitality venues, and mixed-use developments that
                                enhance productivity while delivering exceptional user experiences.
                            </p>

                            {/* <p className="text-neutral-600 leading-8 text-[17px]">
                                Every project is carefully planned with sustainability, accessibility,
                                and long-term value in mind, ensuring spaces that are visually striking
                                and built to perform for years to come.
                            </p> */}

                            <Button
                                data-aos="fade-up"
                                className="group bg-neutral-900 hover:bg-white text-white hover:text-black rounded-none px-8 py-7 text-base font-semibold transition-all duration-300"
                            >
                                View More
                                <ArrowUpRight
                                    size={18}
                                    className="ml-2 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                                />
                            </Button>

                        </div>

                    </div>
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="val-4" className="w-full flex gap-10 transition-colors data-[state=open]:bg-amber-100/15 p-6">
                <AccordionTrigger className="w-[300px] text-2xl text-white ">Community Park</AccordionTrigger>
                <AccordionContent className="px-0 py-8">
                    <div className="grid lg:grid-cols-2 gap-10 items-start">

                        {/* Image */}
                        <div className="overflow-hidden">
                            <Image
                                src="/images/Commercial new/commercial-new-3.jpeg"
                                alt="Commercial Project"
                                width={700}
                                height={700}
                                className="w-full h-[280px] md:h-[420px] object-cover transition duration-500 hover:scale-105"
                            />
                        </div>

                        {/* Content */}
                        <div className="space-y-6 ">

                            {/* <div>
                                <p className="text-sm uppercase tracking-[4px] text-yellow-600 font-semibold">
                                    Commercial Architecture
                                </p>

                                <h3 className="text-3xl md:text-4xl font-bold text-neutral-900 mt-2 leading-tight">
                                    Building Spaces That Inspire Business Growth
                                </h3>
                            </div> */}

                            <p className="text-white leading-8 text-[17px]">
                                Commercial projects require more than attractive designs—they demand
                                functionality, efficiency, and a strong brand identity. Our architects
                                collaborate closely with clients to create modern office buildings,
                                retail spaces, hospitality venues, and mixed-use developments that
                                enhance productivity while delivering exceptional user experiences.
                            </p>

                            {/* <p className="text-neutral-600 leading-8 text-[17px]">
                                Every project is carefully planned with sustainability, accessibility,
                                and long-term value in mind, ensuring spaces that are visually striking
                                and built to perform for years to come.
                            </p> */}

                            <Button
                                data-aos="fade-up"
                                className="group bg-neutral-900 hover:bg-white text-white hover:text-black rounded-none px-8 py-7 text-base font-semibold transition-all duration-300"
                            >
                                View More
                                <ArrowUpRight
                                    size={18}
                                    className="ml-2 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                                />
                            </Button>

                        </div>

                    </div>
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="val-5" className="w-full flex gap-10 transition-colors data-[state=open]:bg-amber-100/15 p-6">
                <AccordionTrigger className="w-[300px] text-2xl text-white ">Factory Projects</AccordionTrigger>
                <AccordionContent className="px-0 py-8">
                    <div className="grid lg:grid-cols-2 gap-10 items-start">

                        {/* Image */}
                        <div className="overflow-hidden">
                            <Image
                                src="/images/Commercial new/commercial-new-3.jpeg"
                                alt="Commercial Project"
                                width={700}
                                height={700}
                                className="w-full h-[280px] md:h-[420px] object-cover transition duration-500 hover:scale-105"
                            />
                        </div>

                        {/* Content */}
                        <div className="space-y-6 ">

                            {/* <div>
                                <p className="text-sm uppercase tracking-[4px] text-yellow-600 font-semibold">
                                    Commercial Architecture
                                </p>

                                <h3 className="text-3xl md:text-4xl font-bold text-neutral-900 mt-2 leading-tight">
                                    Building Spaces That Inspire Business Growth
                                </h3>
                            </div> */}

                            <p className="text-white leading-8 text-[17px]">
                                Commercial projects require more than attractive designs—they demand
                                functionality, efficiency, and a strong brand identity. Our architects
                                collaborate closely with clients to create modern office buildings,
                                retail spaces, hospitality venues, and mixed-use developments that
                                enhance productivity while delivering exceptional user experiences.
                            </p>

                            {/* <p className="text-neutral-600 leading-8 text-[17px]">
                                Every project is carefully planned with sustainability, accessibility,
                                and long-term value in mind, ensuring spaces that are visually striking
                                and built to perform for years to come.
                            </p> */}

                            <Button
                                data-aos="fade-up"
                                className="group bg-neutral-900 hover:bg-white text-white hover:text-black rounded-none px-8 py-7 text-base font-semibold transition-all duration-300"
                            >
                                View More
                                <ArrowUpRight
                                    size={18}
                                    className="ml-2 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                                />
                            </Button>

                        </div>

                    </div>
                </AccordionContent>
            </AccordionItem>

        </Accordion>
    )
}

// Commercial Projects
// Community Park
// Factory Projects
// Interior Projects
// Residential Projects
