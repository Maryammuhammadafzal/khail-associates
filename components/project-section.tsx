import React from "react"
import { ProjectCarousel } from "./project-carousel"

const ProjectSection = () => {
    return (
        <section className="
            relative
            w-full
            bg-neutral-800
            overflow-hidden
        ">

            {/* Architectural grid lines */}
            <div className="
                pointer-events-none
                absolute inset-0
                w-full
                max-w-[1500px]
                mx-auto
                flex
                justify-between
                px-6 sm:px-12 lg:px-32
            ">
                <div className="h-full w-px bg-white/10" />
                <div className="h-full w-px bg-white/10" />
                <div className="h-full w-px bg-white/10" />
                <div className="h-full w-px bg-white/10" />
            </div>


            <div className="
                relative
                z-10
                w-full
                max-w-[1400px]
                mx-auto
                px-4
                sm:px-8
                lg:px-10
                py-20
                sm:py-24
                lg:py-32
            ">

                {/* Section Heading */}
                <div className="
                    mb-12
                    sm:mb-16
                    lg:mb-20
                    flex
                    flex-col
                    gap-5
                ">

                    {/* <div className="flex items-center gap-3">
                        <span className="
                            h-1.5
                            w-1.5
                            rounded-full
                            bg-white"
                        />

                        <span className="text-white/60text-xs uppercase tracking-[0.3em]">
                            Our People
                        </span>
                    </div> */}

                    <h2
                        data-aos="zoom-in-right"
                        className="
                            text-white
                            text-4xl
                            sm:text-5xl
                            lg:text-6xl
                            font-medium
                            uppercase
                            tracking-tight
                        "
                    >
                        Our Team
                    </h2>

                    <p className="
                        max-w-2xl
                        text-white/60
                        text-sm
                        sm:text-base
                        leading-relaxed
                    ">
                        Meet the architects, engineers, designers and
                        professionals behind Khail Associates.
                    </p>

                </div>


                {/* Team Gallery */}
                <ProjectCarousel />

            </div>

        </section>
    )
}

export default ProjectSection