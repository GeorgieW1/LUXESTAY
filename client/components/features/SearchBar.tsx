"use client"

import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"
import { format } from "date-fns"
import { CalendarIcon, MapPin, Users } from "lucide-react"
import { useState } from "react"
import type { DateRange } from "react-day-picker"

export default function SearchBar() {
    const [date, setDate] = useState<DateRange | undefined>()

    return (
        <div className="mt-8 p-2 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-xl flex flex-col md:flex-row items-center gap-2 max-w-4xl w-full">

            {/* Location Input */}
            <div className="relative flex-1 w-full md:w-auto">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 h-4 w-4" />
                <input
                    type="text"
                    placeholder="Where to?"
                    className="w-full h-12 pl-10 pr-4 rounded-xl bg-white/60 dark:bg-slate-800/60 border-0 focus:ring-2 focus:ring-indigo-500 text-sm font-medium placeholder:text-slate-500"
                />
            </div>

            {/* Date Picker */}
            <Popover>
                <PopoverTrigger asChild>
                    <Button
                        id="date"
                        variant={"outline"}
                        className={cn(
                            "w-full md:w-[300px] h-12 justify-start text-left font-normal border-0 bg-white/60 dark:bg-slate-800/60 hover:bg-white/80 rounded-xl",
                            !date && "text-muted-foreground"
                        )}
                    >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date?.from ? (
                            date.to ? (
                                <>
                                    {format(date.from, "LLL dd, y")} -{" "}
                                    {format(date.to, "LLL dd, y")}
                                </>
                            ) : (
                                format(date.from, "LLL dd, y")
                            )
                        ) : (
                            <span>Check-in - Check-out</span>
                        )}
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                        initialFocus
                        mode="range"
                        defaultMonth={date?.from}
                        selected={date}
                        onSelect={setDate}
                        numberOfMonths={2}
                    />
                </PopoverContent>
            </Popover>

            {/* Guest Count */}
            <div className="relative w-full md:w-[140px]">
                <Users className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 h-4 w-4" />
                <input
                    type="number"
                    placeholder="Guests"
                    min={1}
                    defaultValue={2}
                    className="w-full h-12 pl-10 pr-4 rounded-xl bg-white/60 dark:bg-slate-800/60 border-0 focus:ring-2 focus:ring-indigo-500 text-sm font-medium placeholder:text-slate-500"
                />
            </div>

            {/* Search Button */}
            <Button
                size="lg"
                className="w-full md:w-auto h-12 rounded-xl px-8 bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg shadow-indigo-600/20"
                onClick={() => {
                    const locationInput = document.querySelector('input[placeholder="Where to?"]') as HTMLInputElement;
                    const guestsInput = document.querySelector('input[placeholder="Guests"]') as HTMLInputElement;
                    const location = locationInput?.value || '';
                    const guests = guestsInput?.value || '';

                    const params = new URLSearchParams();
                    if (location) params.append('location', location);
                    if (guests) params.append('guests', guests);

                    if (date?.from) params.append('checkIn', format(date.from, 'yyyy-MM-dd'));
                    if (date?.to) params.append('checkOut', format(date.to, 'yyyy-MM-dd'));

                    window.location.search = params.toString();
                }}
            >
                Search
            </Button>
        </div>
    )
}
