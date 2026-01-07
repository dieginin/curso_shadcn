import { Tab1, Tab2 } from "./ui"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Page() {
  return (
    <div>
      <Tabs defaultValue='account'>
        <TabsList className='w-full'>
          <TabsTrigger value='account'>Account</TabsTrigger>
          <TabsTrigger value='password'>Password</TabsTrigger>
          <TabsTrigger value='user'>User</TabsTrigger>
        </TabsList>
        <TabsContent value='account'>
          <Tab1 />
        </TabsContent>
        <TabsContent value='password'>
          <Tab2 />
        </TabsContent>
        <TabsContent value='user'>
          <div>User</div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
