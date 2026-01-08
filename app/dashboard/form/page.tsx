"use client"

import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

import { Button } from "@/components/ui/button"
import { Calendar as CalIcon } from "lucide-react"
import { Calendar } from "@/components/ui/calendar"
import { Input } from "@/components/ui/input"
import { Switch } from "@/components/ui/switch"
import { cn } from "@/lib/utils"
import { format } from "date-fns"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"

type FormData = z.infer<typeof formSchema>
const formSchema = z
  .object({
    username: z.string().min(2).max(20),
    email: z.email(),
    gender: z.enum(["male", "female"], { error: "Must specify gender" }),
    dateOfBirth: z.date(),
    marketingEmails: z.boolean(),
  })
  .refine(data => data.marketingEmails === true, { error: "Must accept marketing emails", path: ["marketingEmails"] })

export default function Page() {
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      marketingEmails: false,
    },
  })

  function onSubmit(values: FormData) {
    console.log(values)
  }

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='grid grid-cols-1 gap-4 sm:grid-cols-2'>
          <FormField
            control={form.control}
            name='username'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder='shadcn' {...field} />
                </FormControl>
                <FormDescription>This is your public display name.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name='email'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder='shadcn@example.com' {...field} />
                </FormControl>
                <FormDescription>Your contact information.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name='gender'
            render={({ field }) => (
              <FormItem className='space-y-3'>
                <FormLabel>Gender</FormLabel>
                <FormControl>
                  <RadioGroup defaultValue={field.value} onValueChange={field.onChange} className='flex mx-auto gap-15'>
                    <FormItem className='flex items-center space-x-3 space-y-0'>
                      <FormControl>
                        <RadioGroupItem value='male' />
                      </FormControl>
                      <FormLabel>Male</FormLabel>
                    </FormItem>
                    <FormItem className='flex items-center space-x-3 space-y-0'>
                      <FormControl>
                        <RadioGroupItem value='female' />
                      </FormControl>
                      <FormLabel>Female</FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name='dateOfBirth'
            render={({ field }) => (
              <FormItem className='flex flex-col'>
                <FormLabel>Date of birth</FormLabel>
                <FormControl>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant='outline'
                        className={cn("pl-3 font-normal text-left", !field.value && "text-muted-foreground")}
                      >
                        {field.value ? format(field.value, "PPP") : "Select date"}
                        <CalIcon className='w-4 h-4 ml-auto opacity-50' />
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className='w-auto p-0' align='start'>
                      <Calendar
                        mode='single'
                        selected={field.value}
                        captionLayout='dropdown'
                        onSelect={field.onChange}
                        disabled={date => date > new Date() || date < new Date("1900-01-01")}
                      />
                    </PopoverContent>
                  </Popover>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name='marketingEmails'
            render={({ field }) => (
              <FormItem className='col-span-1 sm:col-span-2'>
                <div className='flex flex-row items-center justify-between p-3 border rounded-lg shadow-sm'>
                  <FormLabel>Marketing Emails</FormLabel>
                  <FormControl>
                    <Switch checked={field.value} onCheckedChange={field.onChange} />
                  </FormControl>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type='submit' className='col-span-1 sm:col-span-2'>
            Submit
          </Button>
        </form>
      </Form>
    </div>
  )
}
