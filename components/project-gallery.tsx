// import Image from "next/image";

// interface ProjectGalleryProps {
//     images: string[];
//     title: string;
// }

// const ProjectGallery = ({
//     images,
//     title,
// }: ProjectGalleryProps) => {
//     if (!images?.length) return null;

//     const featuredImage = images[0];
//     const secondaryImages = images.slice(1);

//     return (
//         <section className="w-full px-5 sm:px-8 lg:px-12 xl:px-16 py-16 md:py-24">
//             <div className="mx-auto max-w-7xl">

//                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 md:gap-5">

//                     {/* =========================
//                         FEATURED IMAGE
//                     ========================== */}
//                     <div className="group relative overflow-hidden">
//                         <div className="relative aspect-[2/3] lg:h-full lg:min-h-[650px]">

//                             <Image
//                                 src={featuredImage}
//                                 alt={`${title} - Featured Project Image`}
//                                 fill
//                                 priority
//                                 sizes="(max-width: 1024px) 100vw, 50vw"
//                                 className="
//                                     object-cover
//                                     transition-transform
//                                     duration-700
//                                     ease-out
//                                     group-hover:scale-105
//                                 "
//                             />

//                         </div>
//                     </div>


//                     {/* =========================
//                         SECONDARY IMAGES
//                     ========================== */}
//                     <div className="grid grid-cols-2 gap-3 md:gap-5">

//                         {secondaryImages.map((image, index) => (
//                             <div
//                                 key={`${image}-${index}`}
//                                 className="group relative overflow-hidden"
//                             >
//                                 <div className="relative aspect-[2/3] lg:aspect-auto  lg:h-[calc((100%_-_10px))]">

//                                     <Image
//                                         src={image}
//                                         alt={`${title} - Project Image ${index + 2}`}
//                                         fill
//                                         sizes="(max-width: 1024px) 50vw, 25vw"
//                                         className="
//                                             object-cover
//                                             transition-transform
//                                             duration-700
//                                             ease-out
//                                             group-hover:scale-105
//                                         "
//                                     />

//                                 </div>
//                             </div>
//                         ))}

//                     </div>

//                 </div>

//             </div>
//         </section>
//     );
// };

// export default ProjectGallery;

"use client";

import * as React from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface ProjectGalleryProps {
    images: string[];
    title: string;
}

export default function ProjectGallery({
    images,
    title,
}: ProjectGalleryProps) {
    const [selectedIndex, setSelectedIndex] = React.useState<number | null>(
        null
    );

    const closeImage = () => {
        setSelectedIndex(null);
    };

    const previousImage = () => {
        if (selectedIndex === null) return;

        setSelectedIndex(
            selectedIndex === 0
                ? images.length - 1
                : selectedIndex - 1
        );
    };

    const nextImage = () => {
        if (selectedIndex === null) return;

        setSelectedIndex(
            selectedIndex === images.length - 1
                ? 0
                : selectedIndex + 1
        );
    };

    // Keyboard navigation
    React.useEffect(() => {
        if (selectedIndex === null) return;

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                closeImage();
            }

            if (event.key === "ArrowLeft") {
                previousImage();
            }

            if (event.key === "ArrowRight") {
                nextImage();
            }
        };

        document.addEventListener("keydown", handleKeyDown);

        // Stop background scrolling
        document.body.style.overflow = "hidden";

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
            document.body.style.overflow = "";
        };
    }, [selectedIndex]);

    return (
        <>
            {/* =========================
                YOUR EXISTING GALLERY
            ========================== */}

            <div className="columns-1 gap-3 sm:columns-2 sm:gap-4 lg:columns-3 lg:gap-5 my-10 sm:my-14 lg:my-20 space-y-3 sm:space-y-4 lg:space-y-5 px-4 sm:px-6 lg:px-8">

                {images.map((img, index) => (
                    <button
                        key={index}
                        type="button"
                        onClick={() => setSelectedIndex(index)}
                        className="
                            group
                            relative
                            block
                            w-full
                            overflow-hidden
                            shadow-lg
                            break-inside-avoid
                            cursor-pointer
                            text-left
                            p-0
                            border-0
                            bg-transparent
                        "
                    >
                        <Image
                            src={img}
                            alt={`${title} ${index + 1}`}
                            width={800}
                            height={600}
                            className="
                                w-full
                                h-auto
                                transition-transform
                                duration-500
                                group-hover:scale-105
                            "
                        />

                        {/* Hover overlay */}
                        <div
                            className="
                                absolute
                                inset-0
                                bg-black/0
                                group-hover:bg-black/20
                                transition-all
                                duration-300
                            "
                        />

                        {/* View indicator */}
                        <div
                            className="
                                absolute
                                inset-0
                                flex
                                items-center
                                justify-center
                                opacity-0
                                group-hover:opacity-100
                                transition-opacity
                                duration-300
                            "
                        >
                            <span
                                className="
                                    bg-white/90
                                    px-5
                                    py-3
                                    text-sm
                                    uppercase
                                    tracking-wider
                                    text-black
                                    backdrop-blur-sm
                                "
                            >
                                View Image
                            </span>
                        </div>
                    </button>
                ))}

            </div>

            {/* =========================
                PINTEREST STYLE LIGHTBOX
            ========================== */}

            {selectedIndex !== null && (
                <div
                    className="
                        fixed
                        inset-0
                        z-[9999]
                        flex
                        items-center
                        justify-center
                        bg-black/75
                        backdrop-blur-xl
                        p-4
                        sm:p-8
                    "
                    onClick={closeImage}
                >
                    {/* Close */}
                    <button
                        type="button"
                        onClick={(event) => {
                            event.stopPropagation();
                            closeImage();
                        }}
                        aria-label="Close image"
                        className="
                            absolute
                            right-5
                            top-5
                            sm:right-8
                            sm:top-8
                            z-50
                            flex
                            h-11
                            w-11
                            items-center
                            justify-center
                            rounded-full
                            bg-white/10
                            text-white
                            backdrop-blur-md
                            transition
                            hover:bg-white
                            hover:text-black
                        "
                    >
                        <X size={22} />
                    </button>

                    {/* Previous */}
                    {images.length > 1 && (
                        <button
                            type="button"
                            onClick={(event) => {
                                event.stopPropagation();
                                previousImage();
                            }}
                            aria-label="Previous image"
                            className="
                                absolute
                                left-3
                                sm:left-8
                                z-50
                                flex
                                h-11
                                w-11
                                sm:h-14
                                sm:w-14
                                items-center
                                justify-center
                                rounded-full
                                bg-white/10
                                text-white
                                backdrop-blur-md
                                transition
                                hover:bg-white
                                hover:text-black
                            "
                        >
                            <ChevronLeft size={28} />
                        </button>
                    )}

                    {/* Large image */}
                    <div
                        className="
                            relative
                            w-full
                            max-w-6xl
                            h-[75vh]
                            sm:h-[85vh]
                        "
                        onClick={(event) => event.stopPropagation()}
                    >
                        <Image
                            src={images[selectedIndex]}
                            alt={`${title} ${selectedIndex + 1}`}
                            fill
                            priority
                            sizes="100vw"
                            className="
                                object-contain
                                select-none
                            "
                        />
                    </div>

                    {/* Next */}
                    {images.length > 1 && (
                        <button
                            type="button"
                            onClick={(event) => {
                                event.stopPropagation();
                                nextImage();
                            }}
                            aria-label="Next image"
                            className="
                                absolute
                                right-3
                                sm:right-8
                                z-50
                                flex
                                h-11
                                w-11
                                sm:h-14
                                sm:w-14
                                items-center
                                justify-center
                                rounded-full
                                bg-white/10
                                text-white
                                backdrop-blur-md
                                transition
                                hover:bg-white
                                hover:text-black
                            "
                        >
                            <ChevronRight size={28} />
                        </button>
                    )}

                    {/* Counter */}
                    <div
                        className="
                            absolute
                            bottom-5
                            left-1/2
                            -translate-x-1/2
                            rounded-full
                            bg-black/50
                            px-4
                            py-2
                            text-sm
                            text-white
                            backdrop-blur-md
                        "
                    >
                        {selectedIndex + 1} / {images.length}
                    </div>
                </div>
            )}
        </>
    );
}