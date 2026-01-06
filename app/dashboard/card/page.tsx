import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

import { Button } from "@/components/ui/button"

export default function Page() {
  return (
    <div className='grid grid-cols-1 gap-3 sm:grid-cols-3'>
      {"123456789".split("").map(item => (
        <Card key={item}>
          <CardHeader>
            <CardTitle>Card {item}</CardTitle>
            <CardDescription>Card Description</CardDescription>
            <CardAction>Card Action</CardAction>
          </CardHeader>
          <CardContent>
            <p>Card Content</p>
          </CardContent>
          <CardFooter className='flex justify-around'>
            <Button variant='ghost'>info</Button>
            <Button>saber mas</Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
