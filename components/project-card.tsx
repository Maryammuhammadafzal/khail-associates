import React from 'react'
import { Card, CardContent } from './ui/card'
import Image from 'next/image'
import Link from 'next/link'

const ProjectCard = ({ link, index, image, title, nickname }: any) => {
    return (
        <Link href={link} className="w-auto h-auto">
            <Card key={index} className="p-3 border-none shadow-none bg-transparent">
                <CardContent className="flex flex-col gap-6 p-2">
                    <div className="w-[400px] h-[500px]">
                        <Image src={image} alt="image" width={400} height={500} className="w-full h-full object-cover object-center" />
                    </div>
                    <div className="flex flex-col gap-2 text-neutral-800 dark:text-white">
                        <h2 className="text-2xl font-medium">{title}</h2>
                        <p className="font-semibold text-neutral-800/50 dark:text-white">{nickname}</p>
                    </div>
                </CardContent>
            </Card>
        </Link>
    )
}

export default ProjectCard
