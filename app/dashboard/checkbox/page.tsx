"use client"

import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { useState } from "react"

export default function Page() {
  const [term, setTerm] = useState(false)

  return (
    <div className='flex items-start space-x-2'>
      <Checkbox id='terms1' checked={term} onCheckedChange={() => setTerm(!term)} />
      <div className='grid gap-1.5 leading-none'>
        <Label htmlFor='terms1' className='text-sm'>
          Accept terms and conditions
        </Label>
        <p className='text-sm text-muted-foreground'>
          By clicking this checkbox, you agree to the terms and conditions.
        </p>
        {term ? <Badge variant='success'>Great</Badge> : <Badge variant='destructive'>Waring</Badge>}
      </div>
    </div>
  )
}
