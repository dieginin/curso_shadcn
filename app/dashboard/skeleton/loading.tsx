import { Card, CardFooter, CardHeader } from "@/components/ui/card"

import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  const data = "123456789".split("")

  return (
    <div className='grid grid-cols-1 gap-2 sm:grid-cols-3'>
      {data.map(item => (
        <Card key={item}>
          <CardHeader className='flex flex-row items-center'>
            <Skeleton className='w-10 h-10 mr-2 rounded-full' />

            <div className='grow'>
              <Skeleton className='w-1/2 h-4 mb-2' />
              <Skeleton className='w-full h-3' />
            </div>
          </CardHeader>

          <CardFooter className='flex justify-end'>
            <Skeleton className='w-20 h-8' />
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
