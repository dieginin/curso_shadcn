"use client"

import { ChevronRight, LoaderCircle, User } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function Page() {
  return (
    <div className='grid grid-cols-4 gap-2'>
      <Button>default</Button>
      <Button variant='destructive'>destructive</Button>
      <Button variant='ghost'>ghost</Button>
      <Button variant='link'>link</Button>

      <Button variant='outline'>outline</Button>
      <Button variant='secondary'>secondary</Button>
      <Button disabled>disabled</Button>
      <Button onClick={() => console.log("Clicked")}>Click Me</Button>

      <Button variant='success'>success</Button>
      <Button variant='outline' size='icon'>
        <ChevronRight />
      </Button>
      <Button variant='outline' size='sm'>
        <User />
        User
      </Button>
      <Button disabled>
        <LoaderCircle className='w-4 h-4 mr-2 animate-spin' />
        Please wait
      </Button>
    </div>
  )
}
