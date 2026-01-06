import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

export default function Page() {
  return (
    <div className='flex justify-center w-full'>
      <Carousel
        className='w-full max-w-xs'
        opts={{
          // dragFree: true,
          loop: true,
        }}
      >
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index} className='xl:basis-12/12 md:basis-9/12 lg:basis-5/9'>
              <div className='p-1'>
                <Card>
                  <CardContent className='flex items-center justify-center p-6 aspect-square'>
                    <span className='text-4xl font-semibold'>{index + 1}</span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className='hidden sm:flex' />
        <CarouselNext className='hidden sm:flex' />
      </Carousel>
    </div>
  )
}
