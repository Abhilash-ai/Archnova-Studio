"use client"

import { useState } from "react"
import { useStore } from "@/store/useStore"
import { toast } from "sonner"
import { Loader2 } from "lucide-react"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

interface NewProjectModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function NewProjectModal({ open, onOpenChange }: NewProjectModalProps) {
  const addProject = useStore((state) => state.addProject)
  
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    client: "",
    type: "Residential",
    budget: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Basic validation
    if (!formData.name.trim() || !formData.client.trim()) {
      toast.error("Please fill in all required fields.")
      return
    }

    setIsLoading(true)

    // Simulate network request
    setTimeout(() => {
      addProject({
        name: formData.name,
        client: formData.client,
        type: formData.type,
        budget: formData.budget || "TBD",
        location: "TBD",
        plotSize: "TBD",
        startDate: "TBD"
      })
      
      setIsLoading(false)
      toast.success("Project created successfully.")
      onOpenChange(false)
      
      // Reset form
      setFormData({
        name: "",
        client: "",
        type: "Residential",
        budget: "",
      })
    }, 800)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="font-serif text-2xl">New Project</DialogTitle>
          <DialogDescription>
            Enter the details for your new architectural project. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-6 py-4">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-right">
                Project Name <span className="text-destructive">*</span>
              </Label>
              <Input
                id="name"
                placeholder="e.g. Skyline Tower"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="client" className="text-right">
                Client Name <span className="text-destructive">*</span>
              </Label>
              <Input
                id="client"
                placeholder="e.g. Apex Holdings"
                value={formData.client}
                onChange={(e) => setFormData({ ...formData, client: e.target.value })}
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="type" className="text-right">
                Project Type
              </Label>
              <Select 
                value={formData.type} 
                onValueChange={(val) => setFormData({ ...formData, type: val || "Residential" })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select a project type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Residential">Residential</SelectItem>
                  <SelectItem value="Commercial">Commercial</SelectItem>
                  <SelectItem value="Cultural">Cultural</SelectItem>
                  <SelectItem value="Public">Public Infrastructure</SelectItem>
                  <SelectItem value="Mixed-Use">Mixed-Use</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="budget" className="text-right">
                Estimated Budget
              </Label>
              <Input
                id="budget"
                placeholder="e.g. $2.5M"
                value={formData.budget}
                onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
              />
            </div>
          </div>
          
          <DialogFooter>
            <Button 
              type="button" 
              variant="outline" 
              onClick={() => onOpenChange(false)}
              disabled={isLoading}
            >
              Cancel
            </Button>
            <Button type="submit" disabled={isLoading}>
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Creating...
                </>
              ) : (
                "Create Project"
              )}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
