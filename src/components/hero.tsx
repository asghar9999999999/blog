'use client'

import { Button } from '@/components/ui/button'
import { useRef } from 'react'

export function Hero() {
    const videoRef = useRef<HTMLVideoElement>(null)

    return (
        <div className="relative h-[300px] md:h-[500px]">
            <div className="absolute inset-0">
                <video
                    ref={videoRef}
                    className="w-full h-full object-cover"
                    loop
                    muted
                    autoPlay
                    poster="/ban.mp4?height=500&width=1920"
                >
                    <source src="/ban.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="absolute inset-0 bg-black/50" />
            </div>
            <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-center text-center text-white">
                <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold max-w-3xl mb-4 md:mb-6">
                    Effective Office Culture: Building a Strong Corporate Foundation
                </h1>
                <div className="flex space-x-4">
                    <Button size="lg" className="bg-white text-black hover:bg-gray-100">
                        Learn More
                    </Button>
                </div>
            </div>
        </div>
    )
}

