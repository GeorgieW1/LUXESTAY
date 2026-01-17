import { notFound } from "next/navigation"
import Image from "next/image"
import Navbar from "@/components/features/Navbar"
import BookingWidget from "@/components/features/BookingWidget"

// Fetch data directly in Server Component
async function getProperty(id: string) {
    // Determine base URL based on environment or just use localhost for this demo
    const res = await fetch(`http://localhost:8000/api/properties/${id}`, { cache: 'no-store' })

    if (!res.ok) return undefined

    const data = await res.json()
    return data.data.property
}

export default async function PropertyPage({ params }: { params: { id: string } }) {
    const { id } = await params
    const property = await getProperty(id)

    if (!property) {
        return notFound()
    }

    return (
        <main className="min-h-screen bg-white dark:bg-slate-950">
            {/* Note: Navbar is in Layout, so we don't need it here unless layout is excluded */}

            <div className="relative h-[60vh] w-full">
                <Image
                    src={property.images[0]}
                    alt={property.name}
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <div className="text-center text-white p-4">
                        <h1 className="text-5xl font-bold mb-4">{property.name}</h1>
                        <p className="text-xl text-white/90">{property.location}</p>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-3 gap-12">
                <div className="lg:col-span-2 space-y-8">
                    <div>
                        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">About the Property</h2>
                        <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                            {property.description}
                        </p>
                    </div>

                    <div>
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Amenities</h3>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                            {property.amenities.map((amenity: string) => (
                                <div key={amenity} className="flex items-center gap-2 text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-900 p-3 rounded-lg">
                                    <div className="h-2 w-2 rounded-full bg-indigo-600"></div>
                                    {amenity}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="lg:col-span-1">
                    <BookingWidget pricePerNight={property.pricePerNight} propertyId={property._id} />
                </div>
            </div>
        </main>
    )
}
