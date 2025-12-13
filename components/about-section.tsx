import React from 'react'
import { Button } from './ui/button'
import { ArrowUpRight } from 'lucide-react'

const AboutSection = () => {
    return (
        <section className="about-section bg-black relative w-full h-screen flex justify-center items-center">
            <div className="about-bg bg-black relative w-full h-screen flex justify-center items-center">

                <div className="w-auto h-screen flex flex-col gap-12 text-center justify-center items-center">
                    <div className="sub-heading animate-in slide-in-from-bottom-48 delay-1000 transition-transform flex gap-2 items-center">
                        <div className="w-1 h-1 bg-white rounded-full"></div>
                        <h4 className="text-base letter-spacing text-white uppercase">
                            Khail Associates Studio
                        </h4>

                    </div>
                    <h1 className="text-white animate-in slide-in-from-bottom-48 delay-1000 transition-transform font-medium text-8xl uppercase letter-spacing max-w-6xl">
                       We Explore Environments That Integrate Beauty & Function.
                    </h1>
                    <p className="text-white animate-in slide-in-from-bottom-48 delay-1000 transition-transform text-lg max-w-3xl">We understand every detail that goes into crafting a beautiful space. We use our experience and specialist skills to keep things running smoothly, on budget and on time.</p>
                    <Button className="bg-neutral-800 animate-in slide-in-from-bottom-48 delay-1000 text-white w-44 px-10 text-base py-6 rounded-none mt-3 font-semibold flex gap-3 hover:text-neutral-800 hover:bg-white transition delay-150 duration-300 ease-in-out ">Discover More <ArrowUpRight size={16} /></Button>
                </div>
            </div>
        </section>
    )
}

export default AboutSection
