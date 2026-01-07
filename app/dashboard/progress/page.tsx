"use client"

import { useEffect, useState } from "react"

import { Progress } from "@/components/ui/progress"
import { cn } from "@/lib/utils"

export default function Page() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      if (progress >= 101) return
      setProgress(progress + 1)
    }, 100)

    return () => {
      clearInterval(interval)
    }
  }, [progress])

  return (
    <div>
      <Progress
        value={progress}
        indicatorColor={cn({
          "bg-red-500": progress < 20,
          "bg-orange-500": progress >= 20 && progress < 40,
          "bg-amber-500": progress >= 40 && progress < 60,
          "bg-yellow-500": progress >= 60 && progress < 80,
          "bg-lime-500": progress >= 80 && progress < 90,
          "bg-green-500": progress >= 90 && progress < 99,
          "bg-emerald-500": progress >= 99,
        })}
      />
    </div>
  )
}
