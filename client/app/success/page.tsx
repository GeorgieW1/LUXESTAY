"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useEffect } from "react"
import confetti from 'canvas-confetti'

export default function SuccessPage() {
    useEffect(() => {
        // Fire confetti on mount
        const duration = 5 * 1000
        const animationEnd = Date.now() + duration
        const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 }

        const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min

        const interval: any = setInterval(function () {
            const timeLeft = animationEnd - Date.now()

            if (timeLeft <= 0) {
                return clearInterval(interval)
            }

            const particleCount = 50 * (timeLeft / duration)
            confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } })
            confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } })
        }, 250)

        return () => clearInterval(interval)
    }, [])

    return (
        <main className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-950 p-6">
            <div className="bg-white dark:bg-slate-900 p-12 rounded-3xl shadow-2xl text-center max-w-lg border border-slate-100 dark:border-slate-800">
                <div className="w-20 h-20 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-10 h-10 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                </div>

                <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Booking Confirmed!</h1>
                <p className="text-slate-600 dark:text-slate-400 mb-8 text-lg">
                    Pack your bags! Your reservation at <span className="font-semibold text-slate-900 dark:text-white">The Grand Villa</span> is confirmed.
                </p>

                <div className="space-y-4">
                    <Button size="lg" className="w-full h-12 text-lg font-bold bg-indigo-600 hover:bg-indigo-700" asChild>
                        <Link href="/">Back to Home</Link>
                    </Button>
                    <Button variant="outline" size="lg" className="w-full h-12 text-lg" asChild>
                        <Link href="#">View My Trips</Link>
                    </Button>
                </div>
            </div>
        </main>
    )
}
