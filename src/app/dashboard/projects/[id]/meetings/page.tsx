import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, Video, FileText, Plus } from "lucide-react"

export default function MeetingsPage() {
  return (
    <div className="flex flex-col space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Meeting Intelligence</h2>
          <p className="text-muted-foreground text-sm mt-1">Transcripts, AI summaries, and action items from client syncs.</p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Log Meeting
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="border-border bg-card">
          <CardHeader>
            <div className="flex items-start justify-between">
              <div>
                <CardTitle>Initial Schematic Review</CardTitle>
                <CardDescription className="flex items-center gap-2 mt-1">
                  <Calendar className="h-3 w-3" /> Oct 24, 2026
                  <Clock className="h-3 w-3 ml-2" /> 10:00 AM
                  <Video className="h-3 w-3 ml-2" /> Zoom
                </CardDescription>
              </div>
              <Badge>Completed</Badge>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <h4 className="text-sm font-semibold">AI Summary</h4>
              <p className="text-sm text-muted-foreground">
                Client approved the general floor plan but requested moving the kitchen island 2 feet east to allow more clearance for the dining table. Also discussed exterior material options, leaning towards charred cedar over stucco due to maintenance concerns.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="text-sm font-semibold">Action Items</h4>
              <ul className="text-sm text-muted-foreground list-disc list-inside space-y-1">
                <li>Revise floor plan to shift kitchen island</li>
                <li>Pull material samples for Shou Sugi Ban</li>
                <li>Update cost estimate based on new exterior cladding</li>
              </ul>
            </div>
            <div className="flex space-x-2 pt-2 border-t border-border mt-4">
              <Button variant="outline" size="sm" className="w-full">
                <FileText className="mr-2 h-4 w-4" /> Read Transcript
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
