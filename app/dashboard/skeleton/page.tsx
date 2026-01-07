import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

import { Button } from "@/components/ui/button"
import Image from "next/image"

const getData = async () => {
  await new Promise(resolve => setTimeout(resolve, 3000))
  return "123456789".split("")
}

export default async function Page() {
  const data = await getData()

  return (
    <div className='grid grid-cols-1 gap-2 sm:grid-cols-3'>
      {data.map(item => (
        <Card key={item}>
          <CardHeader className='flex flex-row items-center'>
            <Image
              src='https://github.com/shadcn.png'
              alt='shadcn'
              width={40}
              height={40}
              className='w-10 h-10 mr-2 rounded-full'
            />
            <div>
              <CardTitle>Card {item}</CardTitle>
              <CardDescription>Card Description</CardDescription>
            </div>
          </CardHeader>

          <CardFooter className='flex justify-end'>
            <Button>Mas</Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
