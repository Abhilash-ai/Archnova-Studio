"use client"
import { Button, buttonVariants } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useStore } from "@/store/useStore"

export default function NewProjectPage() {
  const router = useRouter()
  const addProject = useStore((state) => state.addProject)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    
    const newId = addProject({
      name: formData.get('name') as string,
      client: formData.get('client') as string,
      type: formData.get('type') as string,
      budget: formData.get('budget') as string,
      location: formData.get('location') as string,
      plotSize: formData.get('plotSize') as string,
      startDate: formData.get('startDate') as string,
    })

    router.push(`/dashboard/projects/${newId}`)
  }

  return (
    <div className="max-w-3xl mx-auto flex flex-col space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Create Project</h1>
        <p className="text-muted-foreground text-sm mt-1">Set up a new architectural workspace.</p>
      </div>

      <form onSubmit={handleSubmit}>
        <Card className="border-border bg-card">
          <CardHeader>
            <CardTitle>Project Details</CardTitle>
            <CardDescription>Enter the foundational information for this project.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name">Project Name</Label>
                <Input id="name" name="name" placeholder="e.g. Lake House Renovation" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="client">Client Name</Label>
                <Input id="client" name="client" placeholder="e.g. Sarah Jenkins" required />
              </div>
            </div>
            
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="type">Project Type</Label>
                <Select name="type" required defaultValue="residential">
                  <SelectTrigger id="type">
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Residential">Residential</SelectItem>
                    <SelectItem value="Commercial">Commercial</SelectItem>
                    <SelectItem value="Hospitality">Hospitality</SelectItem>
                    <SelectItem value="Institutional">Institutional</SelectItem>
                    <SelectItem value="Industrial">Industrial</SelectItem>
                    <SelectItem value="Landscape">Landscape</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="budget">Target Budget</Label>
                <Input id="budget" name="budget" placeholder="e.g. $1,500,000" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="location">Site Location</Label>
              <Input id="location" name="location" placeholder="Address or coordinates" />
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="start">Start Date</Label>
                <Input id="start" name="startDate" type="date" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="plot">Plot Size (sqft/sqm)</Label>
                <Input id="plot" name="plotSize" placeholder="e.g. 5000 sqft" />
              </div>
            </div>
            
            <div className="flex justify-end space-x-4 pt-4 border-t border-border">
              <Link href="/dashboard/projects" className={buttonVariants({ variant: "outline" })}>Cancel</Link>
              <Button type="submit">Create Workspace</Button>
            </div>
          </CardContent>
        </Card>
      </form>
    </div>
  )
}
