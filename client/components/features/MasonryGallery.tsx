"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { useProperties } from "@/hooks/useProperties"
import { Skeleton } from "@/components/ui/skeleton"
import { useSearchParams } from "next/navigation"

export default function MasonryGallery() {
    const searchParams = useSearchParams()
    const location = searchParams.get('location') || undefined
    const guests = searchParams.get('guests') || undefined

    // Pass params to hook
    const { data: properties, isLoading, error } = useProperties({ location, guests })

    if (isLoading) {
        return (
            <div className="grid grid-cols-1 sm:grid-cols-2 grid-rows-3 gap-4 h-[500px] w-full lg:w-[480px]">
                {/* Skeleton Layout matching the grid */}
                <Skeleton className="row-span-2 col-span-2 h-full rounded-2xl" />
                <Skeleton className="col-span-1 h-full rounded-2xl" />
                <Skeleton className="col-span-1 h-full rounded-2xl" />
            </div>
        )
    }

    if (error || !properties || properties.length < 3) {
        // Fallback or empty state if fetch fails or not enough data
        return (
            <div className="grid grid-cols-1 sm:grid-cols-2 grid-rows-3 gap-4 h-[500px] w-full lg:w-[480px]">
                <div className="row-span-2 col-span-2 h-full bg-slate-200 dark:bg-slate-800 rounded-2xl flex items-center justify-center text-slate-400">
                    Failed to load gallery
                </div>
            </div>
        )
    }

    // specific classes for the first 3 items to maintain the layout
    const gridClasses = [
        "row-span-2 col-span-2 h-full",
        "col-span-1 h-full",
        "col-span-1 h-full"
    ]

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 grid-rows-3 gap-4 h-[500px] w-full lg:w-[480px]">
            {properties.slice(0, 3).map((property, idx) => (
                <motion.div
                    key={property._id}
                    className={`relative overflow-hidden rounded-2xl ${gridClasses[idx]}`}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 + (idx * 0.1) }}
                >
                    <Link href={`/properties/${property._id}`} className="block h-full w-full relative">
                        <Image
                            src={property.images[0]}
                            alt={property.name}
                            fill
                            className="object-cover hover:scale-105 transition-transform duration-700"
                            sizes="(max-width: 768px) 100vw, 33vw"
                        />
                        {/* Optional: Add a subtle text overlay with the hotel name */}
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4 opacity-0 hover:opacity-100 transition-opacity duration-300">
                            <p className="text-white font-medium text-sm truncate">{property.name}</p>
                            <p className="text-white/80 text-xs truncate">{property.location}</p>
                        </div>
                    </Link>
                </motion.div>
            ))}
        </div>
    )
}
