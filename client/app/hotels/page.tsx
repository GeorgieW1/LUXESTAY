import MasonryGallery from "@/components/features/MasonryGallery"

export default function HotelsPage() {
    return (
        <main className="min-h-screen bg-slate-50 dark:bg-slate-950 pt-24 pb-12 px-6">
            <div className="max-w-7xl mx-auto space-y-8">
                <div className="text-center max-w-2xl mx-auto">
                    <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Our Curated Hotels</h1>
                    <p className="text-slate-600 dark:text-slate-400">
                        Explore our hand-picked collection of the world's most exclusive properties.
                    </p>
                </div>

                {/* Reusing the gallery with a different wrapper styling if needed, 
                    or ideally we would have a 'list' view component. 
                    For now, reusing MasonryGallery to show connectivity. */}
                <div className="flex justify-center">
                    <MasonryGallery />
                </div>
            </div>
        </main>
    )
}
