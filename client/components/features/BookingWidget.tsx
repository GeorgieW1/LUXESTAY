"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { cn } from "@/lib/utils"
import { format, differenceInDays } from "date-fns"
import { CalendarIcon } from "lucide-react"
import { useAuth } from "@/context/AuthContext"
import type { DateRange } from "react-day-picker"

interface BookingWidgetProps {
    pricePerNight: number;
    propertyId: string;
}

export default function BookingWidget({ pricePerNight, propertyId }: BookingWidgetProps) {
    const router = useRouter()
    const { user } = useAuth()
    const [date, setDate] = useState<DateRange | undefined>()
    const [guests, setGuests] = useState(2)

    const nights = date?.from && date?.to ? differenceInDays(date.to, date.from) : 0
    const subtotal = nights * pricePerNight
    const cleaningFee = 150
    const serviceFee = Math.round(subtotal * 0.12)
    const total = subtotal + cleaningFee + serviceFee

    const handleReserve = () => {
        if (user) {
            router.push(`/checkout?propertyId=${propertyId}`)
        } else {
            router.push('/login')
        }
    }

    return (
        <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xl sticky top-24">
            <div className="flex justify-between items-end mb-6">
                <div>
                    <p className="text-slate-500 dark:text-slate-400 text-sm line-through decoration-rose-500 decoration-2">${Math.round(pricePerNight * 1.2)}</p>
                    <p className="text-3xl font-bold text-slate-900 dark:text-white">
                        ${pricePerNight} <span className="text-base font-normal text-slate-500 dark:text-slate-400">/ night</span>
                    </p>
                </div>
            </div>

            <div className="space-y-4 mb-6">
                {/* Date Picker */}
                <div className="grid gap-2">
                    <Popover>
                        <PopoverTrigger asChild>
                            <Button
                                id="date"
                                variant={"outline"}
                                className={cn(
                                    "w-full justify-start text-left font-normal h-12 rounded-xl border-slate-200 dark:border-slate-700",
                                    !date && "text-muted-foreground"
                                )}
                            >
                                <CalendarIcon className="mr-2 h-4 w-4" />
                                {date?.from ? (
                                    date.to ? (
                                        <>
                                            {format(date.from, "LLL dd")} - {format(date.to, "LLL dd")}
                                        </>
                                    ) : (
                                        format(date.from, "LLL dd, y")
                                    )
                                ) : (
                                    <span>Check-in - Check-out</span>
                                )}
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="end">
                            <Calendar
                                initialFocus
                                mode="range"
                                defaultMonth={date?.from}
                                selected={date}
                                onSelect={setDate}
                                numberOfMonths={2}
                                disabled={(date) => date < new Date()}
                            />
                        </PopoverContent>
                    </Popover>
                </div>

                {/* Guests */}
                <div className="relative">
                    <input
                        type="number"
                        min={1}
                        max={10}
                        value={guests}
                        onChange={(e) => setGuests(parseInt(e.target.value))}
                        className="w-full h-12 px-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-transparent focus:ring-2 focus:ring-indigo-600 outline-none transition-all"
                        placeholder="Guests"
                    />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 text-sm">Guests</span>
                </div>
            </div>

            {/* Price Breakdown */}
            {nights > 0 && (
                <div className="space-y-3 mb-6 pb-6 border-b border-slate-100 dark:border-slate-800">
                    <div className="flex justify-between text-slate-600 dark:text-slate-300">
                        <span>${pricePerNight} x {nights} nights</span>
                        <span>${subtotal.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-slate-600 dark:text-slate-300">
                        <span>Cleaning Fee</span>
                        <span>${cleaningFee}</span>
                    </div>
                    <div className="flex justify-between text-slate-600 dark:text-slate-300">
                        <span>Service Fee</span>
                        <span>${serviceFee.toLocaleString()}</span>
                    </div>
                </div>
            )}

            {nights > 0 && (
                <div className="flex justify-between items-center mb-6 text-lg font-bold text-slate-900 dark:text-white">
                    <span>Total</span>
                    <span>${total.toLocaleString()}</span>
                </div>
            )}

            <Button
                size="lg"
                className="w-full h-14 text-lg font-bold bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl shadow-lg shadow-indigo-600/20"
                onClick={handleReserve}
            >
                Reserve
            </Button>

            <p className="text-center text-xs text-slate-400 mt-4">You won't be charged yet</p>
        </div>
    )
}
