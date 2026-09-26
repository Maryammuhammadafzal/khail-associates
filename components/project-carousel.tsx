import Image from "next/image"
import React from "react"

const teamMembers = [
    {
        image: "/images/Team/ceo-image.jpeg",
        title: "Architect Yousuf",
        nickname: "Architect CEO Khail Associates",
        featured: true,
    },
    {
        image: "/images/Team/team-image-1.jpeg",
        title: "Muhammad Anwar ul Haque",
        nickname: "Engineer",
    },
    {
        image: "/images/Team/team-image-2.jpeg",
        title: "Quanit Khursheed Siddiqui",
        nickname: "Architect",
    },
    {
        image: "/images/Team/team-image-3.jpeg",
        title: "Zoheb Hussain",
        nickname: "Architect",
    },
    {
        image: "/images/Team/team-image-4.jpeg",
        title: "Ismail Khan",
        nickname: "Project Manager",
    },
    {
        image: "/images/Team/team-image-5.jpeg",
        title: "Waris Khan",
        nickname: "Site Supervisor",
    },
    {
        image: "/images/Team/team-image-6.jpeg",
        title: "Asad Siddiqui",
        nickname: "Senior Draftsman",
    },
    {
        image: "/images/Team/team-image-7.jpeg",
        title: "Basit Khan",
        nickname: "Senior Draftsman",
    },
]

export function ProjectCarousel() {
    const ceo = teamMembers[0]

    return (
        <div className="w-full">

            {/* =====================================================
                CEO FEATURED SECTION
            ===================================================== */}

            <div className="
                grid
                grid-cols-1
                lg:grid-cols-2
                w-full
                border
                border-white/10
                bg-[#1d1d1d]
            ">

                {/* ================= CEO IMAGE ================= */}

                <div className="
                    group
                    relative
                    min-h-[480px]
                    sm:min-h-[580px]
                    lg:min-h-[620px]
                    overflow-hidden
                    border-b
                    lg:border-b-0
                    lg:border-r
                    border-white/10
                ">

                    <Image
                        src={ceo.image}
                        alt={ceo.title}
                        fill
                        priority
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="
                            object-cover
                            object-[center_top]
                            grayscale
                            transition-all
                            duration-700
                            ease-out
                            group-hover:scale-[1.03]
                            group-hover:grayscale-0
                        "
                    />

                    {/* Image Overlay */}

                    <div className="
                        absolute
                        inset-0
                        bg-gradient-to-t
                        from-black/60
                        via-transparent
                        to-black/10
                    " />

                    {/* Number */}

                    {/* <span className="
                        absolute
                        top-6
                        left-6
                        sm:top-8
                        sm:left-8
                        text-white/80
                        text-xs
                        sm:text-sm
                        tracking-[0.3em]
                        font-light
                    ">
                        01
                    </span> */}

                </div>


                {/* ================= CEO CONTENT ================= */}

                <div className="
                    relative
                    flex
                    min-h-[480px]
                    sm:min-h-[580px]
                    lg:min-h-[620px]
                    flex-col
                    justify-center
                    bg-[#1d1d1d]
                    px-7
                    py-12
                    sm:px-10
                    sm:py-16
                    lg:px-16
                    lg:py-20
                ">

                    {/* Top small label */}

                    <div className="
                        mb-6
                        flex
                        items-center
                        gap-3
                    ">

                        {/* <span className="
                            h-px
                            w-8
                            bg-white/50
                        "/> */}

                        <p className="
                            text-white/60
                            text-[10px]
                            sm:text-xs
                            uppercase
                            tracking-[0.28em]
                        ">
                            {ceo.nickname}
                        </p>

                    </div>


                    {/* CEO Name */}

                    <h2 className="
                        max-w-xl
                        text-white
                        text-3xl
                        sm:text-3xl
                        lg:text-4xl
                        xl:text-5xl
                        font-light
                        tracking-tight
                        leading-[1.05]
                    ">
                        {ceo.title}
                    </h2>


                    {/* Decorative line */}

                    <div className="
                        mt-7
                        mb-7
                        h-px
                        w-10
                        bg-white/70
                    " />


                    {/* Description */}

                    <p className="
                        max-w-lg
                        text-white/55
                        text-sm
                        sm:text-base
                        leading-7
                    ">
                        Leading Khail Associates with a commitment to
                        architectural excellence, thoughtful design and
                        professional project execution.
                    </p>


                    {/* Bottom metadata */}

                    <div className="
                        mt-10
                        flex
                        items-center
                        gap-8
                        border-t
                        border-white/10
                        pt-6
                    ">

                        <div>
                            <p className="
                                text-white/30
                                text-[9px]
                                uppercase
                                tracking-[0.25em]
                                mb-2
                            ">
                                Position
                            </p>

                            <p className="
                                text-white/75
                                text-xs
                                sm:text-sm
                                uppercase
                                tracking-[0.12em]
                            ">
                                CEO & Architect
                            </p>
                        </div>

                        <div>
                            <p className="
                                text-white/30
                                text-[9px]
                                uppercase
                                tracking-[0.25em]
                                mb-2
                            ">
                                Company
                            </p>

                            <p className="
                                text-white/75
                                text-xs
                                sm:text-sm
                                uppercase
                                tracking-[0.12em]
                            ">
                                Khail Associates
                            </p>
                        </div>

                    </div>


                    {/* Vertical Counter */}

                    <div className="
                        absolute
                        right-6
                        bottom-8
                        hidden
                        sm:flex
                        flex-col
                        items-center
                        gap-3
                    ">

                        {/* <span className="
                            text-white/30
                            text-xs
                            tracking-[0.2em]
                        ">
                            01
                        </span>

                        <span className="
                            h-px
                            w-7
                            bg-white/20
                        "/>

                        <span className="
                            text-white/20
                            text-xs
                            tracking-[0.2em]
                        ">
                            08
                        </span> */}

                    </div>

                </div>

            </div>


            {/* =====================================================
                3 MEMBERS
            ===================================================== */}

            <div className="
                grid
                grid-cols-1
                sm:grid-cols-3
                gap-3
                sm:gap-4
                mt-3
                sm:mt-4
            ">

                {teamMembers.slice(1, 4).map((member, index) => (
                    <TeamCard
                        key={member.title}
                        member={member}
                        number={`0${index + 2}`}
                    />
                ))}

            </div>


            {/* =====================================================
                4 MEMBERS
            ===================================================== */}

            <div className="
                grid
                grid-cols-1
                sm:grid-cols-2
                lg:grid-cols-4
                gap-3
                sm:gap-4
                mt-3
                sm:mt-4
            ">

                {teamMembers.slice(4).map((member, index) => (
                    <TeamCard
                        key={member.title}
                        member={member}
                        number={`0${index + 5}`}
                    />
                ))}

            </div>

        </div>
    )
}


/* ============================================================
   TEAM CARD
============================================================ */

function TeamCard({
    member,
    number,
}: {
    member: {
        image: string
        title: string
        nickname: string
    }
    number: string
}) {
    return (
        <div className="
            group
            relative
            overflow-hidden
            border
            border-white/10
            bg-[#1d1d1d]
        ">

            <div className="
                relative
                h-[400px]
                sm:h-[430px]
                lg:h-[450px]
                w-full
                overflow-hidden
            ">

                {/* Image */}

                <Image
                    src={member.image}
                    alt={member.title}
                    fill
                    sizes="
                        (max-width: 640px) 100vw,
                        (max-width: 1024px) 33vw,
                        25vw
                    "
                    className="
                        object-cover
                        object-top
                        grayscale
                        transition-all
                        duration-700
                        ease-out
                        group-hover:scale-[1.04]
                        group-hover:grayscale-0
                    "
                />


                {/* Overlay */}

                <div className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-black/90
                    via-black/20
                    to-transparent
                " />


                {/* Number */}

                {/* <span className="
                    absolute
                    top-5
                    left-5
                    text-white/70
                    text-xs
                    tracking-[0.25em]
                ">
                    {number}
                </span> */}


                {/* Member Content */}

                <div className="
                    absolute
                    bottom-0
                    left-0
                    w-full
                    p-5
                    sm:p-6
                ">

                    <p className="
                        text-white/65
                        uppercase
                        tracking-[0.22em]
                        text-[9px]
                        sm:text-[10px]
                        mb-2
                    ">
                        {member.nickname}
                    </p>

                    <h3 className="
                        text-white
                        text-lg
                        sm:text-xl
                        font-medium
                        leading-tight
                    ">
                        {member.title}
                    </h3>


                    {/* Animated line */}

                    <div className="
                        mt-4
                        h-px
                        w-8
                        bg-white/70
                        transition-all
                        duration-500
                        group-hover:w-14
                    " />

                </div>

            </div>

        </div>
    )
}