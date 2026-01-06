"use client"

import { Calendar } from "@/components/ui/calendar"
import type { DateRange } from "react-day-picker"
import { useState } from "react"

export default function Page() {
  const [date, setDate] = useState<Date | undefined>(new Date())
  const [datesRange, setDatesRange] = useState<DateRange | undefined>()

  const smallDate = date?.toLocaleDateString("es-ES", {
    weekday: "short",
    month: "short",
    day: "numeric",
  })

  return (
    <div className='flex flex-col gap-4 sm:flex-wrap sm:flex-row'>
      <Calendar
        mode='single'
        selected={date}
        onSelect={setDate}
        className='border rounded-md shadow-sm'
        disabled={date => date.getDay() === 0 || date.getDay() === 6}
      />
      <Calendar
        mode='single'
        selected={date}
        onSelect={setDate}
        className='border rounded-md shadow-sm'
        disabled={date => date > new Date()}
      />
      <Calendar mode='range' selected={datesRange} onSelect={setDatesRange} className='border rounded-md shadow-sm' />

      <div>
        <h1 className='text-3xl'>Información</h1>
        <div className='border-b'></div>
        <p>{smallDate}</p>
      </div>
    </div>
  )
}
