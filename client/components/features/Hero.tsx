"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import MasonryGallery from "@/components/features/MasonryGallery"
import SearchBar from "@/components/features/SearchBar"

export default function Hero() {
    return (
        <div className="relative isolate overflow-hidden bg-background">
            {/* Abstract Background Gradients */}
            <div className="absolute inset-0 -z-10 h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] dark:bg-[radial-gradient(#1e293b_1px,transparent_1px)] opacity-30"></div>
            <div
                className="absolute left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                style={{
                    clipPath:
                        "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                }}
            />

            <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40">
                <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:pt-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="mt-24 sm:mt-32 lg:mt-16"
                    >
                        <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium leading-6 text-indigo-600 ring-1 ring-inset ring-indigo-600/10 dark:text-indigo-400 dark:ring-indigo-400/20 bg-indigo-50 dark:bg-indigo-950/30 mb-8">
                            Frontend v0.1
                        </div>

                        <h1 className="mt-2 text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-50 sm:text-6xl text-balance">
                            Experience Luxury, <span className="text-indigo-600 dark:text-indigo-500">Redefined</span>.
                        </h1>

                        <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-300">
                            Discover hand-picked properties for your next getaway. Impeccable service, stunning views, and memories that last a lifetime.
                        </p>

                        <div className="mt-10 w-full z-10 relative">
                            <SearchBar />
                        </div>
                    </motion.div>
                </div>

                <div className="mx-auto mt-16 w-full max-w-2xl sm:mt-24 lg:ml-10 lg:mt-0 lg:mr-0 lg:max-w-none lg:flex-none xl:ml-32">
                    <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
                        <MasonryGallery />
                    </div>
                </div>
            </div>
        </div>
    )
}
