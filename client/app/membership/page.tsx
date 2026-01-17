import { Button } from "@/components/ui/button"

export default function MembershipPage() {
    return (
        <main className="min-h-screen bg-slate-50 dark:bg-slate-950 pt-24 pb-12 px-6">
            <div className="max-w-7xl mx-auto text-center">
                <h1 className="text-5xl font-bold text-slate-900 dark:text-white mb-6">Elite Membership</h1>
                <p className="text-xl text-slate-600 dark:text-slate-400 mb-16 max-w-2xl mx-auto">
                    Unlock a world of privileges, including priority booking, complimentary upgrades, and exclusive concierge service.
                </p>

                <div className="grid md:grid-cols-3 gap-8">
                    {/* Silver Tier */}
                    <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-lg border border-slate-100 dark:border-slate-800 flex flex-col">
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Silver</h3>
                        <p className="text-4xl font-bold text-indigo-600 mb-6">$0 <span className="text-sm text-slate-500 font-normal">/ month</span></p>
                        <ul className="space-y-4 text-left mb-8 flex-1">
                            <li className="flex gap-2">✓ Access to booking platform</li>
                            <li className="flex gap-2">✓ 24/7 Support</li>
                        </ul>
                        <Button variant="outline" className="w-full">Current Plan</Button>
                    </div>

                    {/* Gold Tier */}
                    <div className="bg-indigo-600 p-8 rounded-3xl shadow-xl shadow-indigo-600/20 text-white flex flex-col transform scale-105">
                        <div className="text-xs font-bold uppercase tracking-wider bg-white/20 self-start px-3 py-1 rounded-full mb-4">Most Popular</div>
                        <h3 className="text-2xl font-bold mb-2">Gold</h3>
                        <p className="text-4xl font-bold mb-6">$199 <span className="text-sm text-indigo-200 font-normal">/ month</span></p>
                        <ul className="space-y-4 text-left mb-8 flex-1">
                            <li className="flex gap-2">✓ Priority Booking</li>
                            <li className="flex gap-2">✓ Room Upgrades (when available)</li>
                            <li className="flex gap-2">✓ Early Check-in</li>
                        </ul>
                        <Button className="w-full bg-white text-indigo-600 hover:bg-slate-100">Join Gold</Button>
                    </div>

                    {/* Platinum Tier */}
                    <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-lg border border-slate-100 dark:border-slate-800 flex flex-col">
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Platinum</h3>
                        <p className="text-4xl font-bold text-slate-900 dark:text-white mb-6">$499 <span className="text-sm text-slate-500 font-normal">/ month</span></p>
                        <ul className="space-y-4 text-left mb-8 flex-1">
                            <li className="flex gap-2">✓ Dedicated Concierge</li>
                            <li className="flex gap-2">✓ Free Airport Transfers</li>
                            <li className="flex gap-2">✓ Exclusive Event Access</li>
                            <li className="flex gap-2">✓ All Gold Perks</li>
                        </ul>
                        <Button variant="outline" className="w-full">Contact Sales</Button>
                    </div>
                </div>
            </div>
        </main>
    )
}
