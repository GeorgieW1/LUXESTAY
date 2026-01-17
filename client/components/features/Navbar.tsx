"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"
import { useAuth } from "@/context/AuthContext"

export default function Navbar() {
    const { user, logout } = useAuth()
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                scrolled
                    ? "bg-white/80 backdrop-blur-md shadow-sm dark:bg-slate-900/80 border-b border-gray-200/50 dark:border-slate-800/50 py-4"
                    : "bg-transparent py-6"
            )}
        >
            <div className="mx-auto max-w-7xl px-6 lg:px-8 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    {/* Logo Icon (Simple Abstract Shape) */}
                    <div className="h-8 w-8 bg-indigo-600 rounded-tr-xl rounded-bl-xl"></div>
                    <span className={cn("text-xl font-bold tracking-tight", scrolled ? "text-slate-900 dark:text-white" : "text-slate-900 dark:text-white")}>
                        LuxeStay
                    </span>
                </div>

                <div className="flex items-center gap-6">
                    <div className="hidden md:flex gap-6 text-sm font-medium text-slate-700 dark:text-slate-200">
                        <Link href="/hotels" className="hover:text-indigo-600 transition-colors">Hotels</Link>
                        <Link href="/experiences" className="hover:text-indigo-600 transition-colors">Experiences</Link>
                        <Link href="/membership" className="hover:text-indigo-600 transition-colors">Membership</Link>
                    </div>

                    {user ? (
                        <div className="flex items-center gap-4">
                            <span className="text-sm font-medium hidden md:block">{user.name}</span>
                            <div className="h-10 w-10 rounded-full bg-slate-200 overflow-hidden border-2 border-white shadow-sm dropdown relative group">
                                <img src={user.avatar} alt={user.name} className="h-full w-full object-cover" />

                                {/* Simple Dropdown for Demo */}
                                <div className="absolute right-0 top-full mt-2 w-48 bg-white dark:bg-slate-900 rounded-xl shadow-xl border border-slate-100 dark:border-slate-800 p-2 hidden group-hover:block">
                                    <button onClick={logout} className="w-full text-left px-4 py-2 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg text-sm text-red-500">Sign Out</button>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <Button variant={scrolled ? "default" : "secondary"} className="rounded-full px-6" asChild>
                            <Link href="/login">Sign In</Link>
                        </Button>
                    )}
                </div>
            </div>
        </nav>
    )
}
