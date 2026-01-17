"use client"

import { createContext, useContext, useState, useEffect, ReactNode } from "react"
import { useRouter } from "next/navigation"

interface User {
    id: string;
    name: string;
    email: string;
    avatar?: string;
}

interface AuthContextType {
    user: User | null;
    login: () => void;
    logout: () => void;
    isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
    const [user, setUser] = useState<User | null>(null)
    const [isLoading, setIsLoading] = useState(true)
    const router = useRouter()

    useEffect(() => {
        // Check for "logged in" state from localStorage on mount
        const storedUser = localStorage.getItem("luxestay_user")
        if (storedUser) {
            setUser(JSON.parse(storedUser))
        }
        setIsLoading(false)
    }, [])

    const login = () => {
        // Mock Login
        const mockUser: User = {
            id: "u123",
            name: "Alex Johnson",
            email: "alex@example.com",
            avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d"
        }
        setUser(mockUser)
        localStorage.setItem("luxestay_user", JSON.stringify(mockUser))
        router.back() // Close modal or go back
        router.refresh() // Refresh to update server components if needed
    }

    const logout = () => {
        setUser(null)
        localStorage.removeItem("luxestay_user")
        router.push("/")
        router.refresh()
    }

    return (
        <AuthContext.Provider value={{ user, login, logout, isLoading }}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth() {
    const context = useContext(AuthContext)
    if (context === undefined) {
        throw new Error("useAuth must be used within an AuthProvider")
    }
    return context
}
