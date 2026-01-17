export default function ExperiencesPage() {
    return (
        <main className="min-h-screen bg-slate-50 dark:bg-slate-950 pt-24 pb-12 px-6 flex items-center justify-center">
            <div className="text-center max-w-2xl mx-auto">
                <h1 className="text-5xl font-bold text-slate-900 dark:text-white mb-6">Unforgettable Experiences</h1>
                <p className="text-xl text-slate-600 dark:text-slate-400 mb-8">
                    From private yacht tours to culinary masterclasses, we curate moments that last a lifetime.
                </p>
                <div className="p-8 bg-white dark:bg-slate-900 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-800">
                    <p className="text-indigo-600 font-bold">Coming Soon</p>
                    <p className="text-sm text-slate-500 mt-2">We are currently onboarding exclusive partners.</p>
                </div>
            </div>
        </main>
    )
}
