"use client"

import * as ProgressPrimitive from "@radix-ui/react-progress"
import * as React from "react"

import { cn } from "@/lib/utils"

interface Props extends React.ComponentProps<typeof ProgressPrimitive.Root> {
  indicatorColor?: string
}

function Progress({ className, indicatorColor = "bg-primary", value, ...props }: Props) {
  return (
    <ProgressPrimitive.Root
      data-slot='progress'
      className={cn("relative h-2 w-full overflow-hidden rounded-full", `${indicatorColor}/20`, className)}
      {...props}
    >
      <ProgressPrimitive.Indicator
        data-slot='progress-indicator'
        className={cn("flex-1 w-full h-full transition-all", indicatorColor)}
        style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
      />
    </ProgressPrimitive.Root>
  )
}

export { Progress }
