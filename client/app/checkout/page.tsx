"use client"

import { useSearchParams, useRouter } from "next/navigation"
import { useEffect, useState, Suspense } from "react"
import { useAuth } from "@/context/AuthContext"
import { Button } from "@/components/ui/button"
import Image from "next/image"

function CheckoutContent() {
    const searchParams = useSearchParams()
    const router = useRouter()
    const { user } = useAuth()
    const propertyId = searchParams.get("propertyId")

    const [property, setProperty] = useState<any>(null)
    const [isLoading, setIsLoading] = useState(true)
    const [isProcessing, setIsProcessing] = useState(false)

    useEffect(() => {
        if (!user) {
            router.push("/login?redirect=/checkout")
            return
        }

        if (propertyId) {
            // Fetch property details
            fetch(`http://localhost:8000/api/properties/${propertyId}`)
                .then(res => res.json())
                .then(data => {
                    setProperty(data.data.property)
                    setIsLoading(false)
                })
                .catch(err => {
                    console.error("Failed to fetch property", err)
                    setIsLoading(false)
                })
        }
    }, [propertyId, user, router])

    const handleConfirmPayment = async () => {
        setIsProcessing(true)

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 2000))

        // Redirect to success
        router.push("/success")
    }

    if (isLoading) {
        return (
            <div className="min-h-screen pt-24 px-6 max-w-7xl mx-auto">
                <div className="animate-pulse space-y-8">
                    <div className="h-8 bg-slate-200 dark:bg-slate-800 rounded w-1/3"></div>
                    <div className="grid lg:grid-cols-2 gap-12">
                        <div className="h-64 bg-slate-200 dark:bg-slate-800 rounded-xl"></div>
                        <div className="h-64 bg-slate-200 dark:bg-slate-800 rounded-xl"></div>
                    </div>
                </div>
            </div>
        )
    }

    if (!property) return <div className="pt-24 text-center">Property not found</div>

    // Mock calculations
    const price = property.pricePerNight
    const nights = 5 // Mock default
    const cleaningFee = 150
    const serviceFee = Math.round((price * nights) * 0.12)
    const total = (price * nights) + cleaningFee + serviceFee

    return (
        <main className="min-h-screen bg-slate-50 dark:bg-slate-950 pt-24 pb-12 px-6">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">Confirm and pay</h1>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Left: Forms */}
                    <div className="space-y-8">
                        {/* Your Trip */}
                        <section>
                            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Your trip</h2>
                            <div className="flex justify-between items-center py-4 border-b border-slate-200 dark:border-slate-800">
                                <div>
                                    <p className="font-bold text-slate-900 dark:text-white">Dates</p>
                                    <p className="text-slate-600 dark:text-slate-400">Oct 14 - 19</p>
                                </div>
                                <button className="font-bold underline text-slate-900 dark:text-white">Edit</button>
                            </div>
                            <div className="flex justify-between items-center py-4 border-b border-slate-200 dark:border-slate-800">
                                <div>
                                    <p className="font-bold text-slate-900 dark:text-white">Guests</p>
                                    <p className="text-slate-600 dark:text-slate-400">2 guests</p>
                                </div>
                                <button className="font-bold underline text-slate-900 dark:text-white">Edit</button>
                            </div>
                        </section>

                        {/* Payment */}
                        <section>
                            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Pay with</h2>
                            <div className="p-4 border border-slate-200 dark:border-slate-800 rounded-xl flex items-center justify-between hover:bg-slate-100 dark:hover:bg-slate-900 cursor-pointer transition-colors">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-5 bg-slate-300 rounded overflow-hidden relative">
                                        <div className="absolute inset-0 bg-gradient-to-tr from-slate-400 to-slate-200"></div>
                                    </div>
                                    <span className="font-medium text-slate-900 dark:text-white">Credit or Debit Card</span>
                                </div>
                                <div className="h-4 w-4 rounded-full border border-slate-400"></div>
                            </div>
                        </section>

                        <Button
                            size="lg"
                            className="w-full h-14 text-lg font-bold bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl shadow-lg shadow-indigo-600/20 mt-8"
                            onClick={handleConfirmPayment}
                            disabled={isProcessing}
                        >
                            {isProcessing ? "Processing..." : "Confirm and pay"}
                        </Button>
                    </div>

                    {/* Right: Summary Card */}
                    <div className="lg:pl-12">
                        <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 sticky top-24">
                            <div className="flex gap-4 mb-6 pb-6 border-b border-slate-100 dark:border-slate-800">
                                <div className="relative w-24 h-24 rounded-xl overflow-hidden flex-shrink-0">
                                    <Image src={property.images[0]} alt={property.name} fill className="object-cover" />
                                </div>
                                <div>
                                    <p className="text-xs text-slate-500 uppercase font-bold mb-1">Entire villa</p>
                                    <h3 className="font-medium text-slate-900 dark:text-white text-sm line-clamp-2">{property.name}</h3>
                                    <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">★ {property.rating} (12 reviews)</p>
                                </div>
                            </div>

                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Price details</h3>
                            <div className="space-y-3">
                                <div className="flex justify-between text-slate-600 dark:text-slate-300">
                                    <span>${price} x {nights} nights</span>
                                    <span>${(price * nights).toLocaleString()}</span>
                                </div>
                                <div className="flex justify-between text-slate-600 dark:text-slate-300">
                                    <span>Cleaning Fee</span>
                                    <span>${cleaningFee}</span>
                                </div>
                                <div className="flex justify-between text-slate-600 dark:text-slate-300">
                                    <span>Service Fee</span>
                                    <span>${serviceFee.toLocaleString()}</span>
                                </div>
                                <div className="flex justify-between items-center pt-4 border-t border-slate-100 dark:border-slate-800 font-bold text-lg text-slate-900 dark:text-white">
                                    <span>Total (USD)</span>
                                    <span>${total.toLocaleString()}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default function CheckoutPage() {
    return (
        <Suspense fallback={<div className="min-h-screen pt-24 px-6 text-center">Loading Checkout...</div>}>
            <CheckoutContent />
        </Suspense>
    )
}
