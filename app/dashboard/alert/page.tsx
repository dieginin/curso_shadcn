import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Check, Terminal, X } from "lucide-react"

export default function Page() {
  return (
    <div className='grid gap-3'>
      <Alert>
        <Terminal />
        <AlertTitle>Heads up!</AlertTitle>
        <AlertDescription>You can add components and dependencies to your app using the cli.</AlertDescription>
      </Alert>

      <Alert variant='destructive'>
        <X />
        <AlertTitle>Destructive</AlertTitle>
        <AlertDescription>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, quisquam.</AlertDescription>
      </Alert>

      <Alert variant='success'>
        <Check />
        <AlertTitle>Success</AlertTitle>
        <AlertDescription>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, cumque?</AlertDescription>
      </Alert>
    </div>
  )
}
