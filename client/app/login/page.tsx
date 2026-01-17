export default function LoginPage() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-950 p-4">
            <div className="bg-white dark:bg-slate-900 w-full max-w-md rounded-2xl p-8 shadow-xl">
                <div className="text-center mb-8">
                    <h1 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Welcome Back</h1>
                    <p className="text-slate-500 dark:text-slate-400">Sign in to access your trips.</p>
                </div>

                <div className="space-y-4">
                    <input
                        type="email"
                        placeholder="Email address"
                        className="w-full h-12 px-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-transparent focus:ring-2 focus:ring-indigo-600 outline-none"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        className="w-full h-12 px-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-transparent focus:ring-2 focus:ring-indigo-600 outline-none"
                    />
                    "use client"
                    import {useAuth} from "@/context/AuthContext"

                    export default function LoginPage() {
    const {login} = useAuth()

                    return (
                    // ... structure
                    <button
                        className="w-full h-12 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl transition-all"
                        onClick={login}
                    >
                        Sign In
                    </button>
                </div>
            </div>
        </div>
    )
}
