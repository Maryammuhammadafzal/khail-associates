
// import Image from "next/image";
// import Footer from "@/components/footer";
// import { notFound } from "next/navigation";
// import { projects } from "@/data/projects";
// import HeroSection from "@/components/hero-section";
// import Link from "next/link";

// export async function generateStaticParams() {
//     return projects.map((project) => ({
//         slug: project.slug,
//     }));
// }

// export default async function SingleProject({
//     params,
// }: {
//     params: Promise<{ slug: string }>;
// }) {
//     const { slug } = await params;

//     const project = projects.find(
//         (p) => p.slug === slug
//     );
    
//     const projectDetails = project?.projectDetails?.find(
//         (detail) => detail.detailSlug 
//     )

//     const projectsDetailsSlug = projectDetails?.detailSlug;

//     if (!project) {
//         notFound();
//     }

//     return (
//         <div className="flex min-h-screen w-full items-center justify-center bg-zinc-50 font-sans dark:bg-black">
//             <main className="flex min-h-screen w-full flex-col items-stretch justify-between bg-white dark:bg-black">
//                 {/* Hero Section */}
//                 <HeroSection subheading="Latest Projects" heading={project.nickname} paragraph={project.description} image={project.image} />

//                 {/* projects Section */}
//                 <div className="columns-1 gap-3 sm:columns-2 sm:gap-4 lg:columns-3 lg:gap-5 my-10 sm:my-14 lg:my-20 space-y-3 sm:space-y-4 lg:space-y-5 px-4 sm:px-6 lg:px-8">
//                     {project.images.map((img, index) => (
//                         <div
//                             key={index}
//                             className="overflow-hidden shadow-lg break-inside-avoid"
//                         >
//                             <Link href={`/projects/${project.slug}/${projectsDetailsSlug}`}>
//                             <Image
//                                 src={img}
//                                 alt={`${project.title} ${index + 1}`}
//                                 width={800}
//                                 height={600}
//                                 className="w-full h-auto transition duration-500 hover:scale-105"
//                             />
//                             </Link>
//                         </div>
//                     ))}
//                 </div>
//                 <Footer gallery={'no'} />
//             </main>
//         </div>
//     );
// }
import Footer from "@/components/footer";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import HeroSection from "@/components/hero-section";
import ProjectGallery from "@/components/project-gallery";

export async function generateStaticParams() {
    return projects.map((project) => ({
        slug: project.slug,
    }));
}

export default async function SingleProject({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;

    const project = projects.find(
        (p) => p.slug === slug
    );

    if (!project) {
        notFound();
    }

    return (
        <div className="flex min-h-screen w-full items-center justify-center bg-zinc-50 font-sans dark:bg-black">

            <main className="flex min-h-screen w-full flex-col items-stretch justify-between bg-white dark:bg-black">

                {/* Hero Section */}
                <HeroSection
                    subheading="Latest Projects"
                    heading={project.nickname}
                    paragraph={project.description}
                    image={project.image}
                />

                {/* Project Gallery */}
                <ProjectGallery
                    images={project.images}
                    title={project.title}
                />

                <Footer gallery="no" />

            </main>

        </div>
    );
}