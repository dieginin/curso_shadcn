"use client"

import { Slider } from "@/components/ui/slider"
import { useState } from "react"

export default function Page() {
  const [sliderValue, setSliderValue] = useState(10)
  const [rangeValue, setRangeValue] = useState([10, 20])

  return (
    <div className='grid grid-cols-1 gap-3'>
      <span>Slider Value: {sliderValue}</span>
      <Slider value={[sliderValue]} max={100} step={1} onValueChange={value => setSliderValue(value[0])} />

      <span>Range Value: {rangeValue.join(" to ")}</span>
      <Slider value={rangeValue} max={100} step={1} onValueChange={setRangeValue} />
    </div>
  )
}
