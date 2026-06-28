"use client"
import { useStore } from "@/store/useStore"
import { useParams, useRouter } from "next/navigation"
import { use } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Clock, FileText, Upload, MoreHorizontal, CheckCircle2, Circle, MapPin } from "lucide-react"

export default function ProjectDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)
  const router = useRouter()
  const project = useStore((state) => state.projects.find(p => p.id === id))

  if (!project) {
    return (
      <div className="flex flex-col items-center justify-center h-64 space-y-4">
        <h2 className="text-xl font-medium">Project Not Found</h2>
        <Button onClick={() => router.push('/dashboard/projects')} variant="outline">Back to Projects</Button>
      </div>
    )
  }

  return (
    <div className="flex flex-col space-y-8 pb-12">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" onClick={() => router.push('/dashboard/projects')} className="shrink-0">
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-foreground">{project.name}</h1>
            <p className="text-muted-foreground mt-1 flex items-center gap-2 text-sm md:text-base flex-wrap">
              <span>{project.client}</span> • <span>{project.location}</span> • 
              <Badge variant="secondary" className="font-normal">{project.status}</Badge>
            </p>
          </div>
        </div>
        <div className="flex gap-2 shrink-0">
          <Button variant="outline"><Upload className="h-4 w-4 mr-2" /> Upload</Button>
          <Button>Edit Project</Button>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Main Content Column */}
        <div className="lg:col-span-2 space-y-6">
          
          {/* Milestone Tracker */}
          <Card className="border-border bg-card shadow-sm">
            <CardHeader>
              <CardTitle>Project Milestones</CardTitle>
              <CardDescription>Current phase and upcoming deadlines</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="relative border-l-2 border-muted ml-3 space-y-8 py-2">
                <div className="relative pl-6">
                  <CheckCircle2 className="absolute -left-[13px] top-0.5 h-6 w-6 text-primary bg-background rounded-full" />
                  <h4 className="font-medium text-foreground">Initial Consultation & Briefing</h4>
                  <p className="text-sm text-muted-foreground mt-1">Completed {project.date}</p>
                </div>
                <div className="relative pl-6">
                  <div className="absolute -left-[9px] top-1.5 h-4 w-4 bg-primary rounded-full ring-4 ring-primary/20" />
                  <h4 className="font-medium text-primary">Schematic Design (Current)</h4>
                  <p className="text-sm text-muted-foreground mt-1">Due {project.startDate}</p>
                  <div className="mt-3 bg-muted/50 p-4 rounded-md border border-border text-sm text-muted-foreground leading-relaxed">
                    Waiting on structural engineer's preliminary report before proceeding to 3D rendering phase.
                  </div>
                </div>
                <div className="relative pl-6">
                  <Circle className="absolute -left-[11px] top-1 h-5 w-5 text-muted-foreground/30 bg-background rounded-full" />
                  <h4 className="font-medium text-muted-foreground">Design Development</h4>
                  <p className="text-sm text-muted-foreground mt-1">Pending Schematic Approval</p>
                </div>
                <div className="relative pl-6">
                  <Circle className="absolute -left-[11px] top-1 h-5 w-5 text-muted-foreground/30 bg-background rounded-full" />
                  <h4 className="font-medium text-muted-foreground">Construction Documents</h4>
                  <p className="text-sm text-muted-foreground mt-1">Pending DD Approval</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Blueprint/Asset Viewer */}
          <Card className="border-border bg-card shadow-sm">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <div>
                <CardTitle>Recent Assets</CardTitle>
                <CardDescription>Floor plans, renders, and site photos</CardDescription>
              </div>
              <Button variant="ghost" size="sm" className="hidden sm:inline-flex">View All</Button>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pt-4">
                <div className="group relative aspect-[4/3] bg-muted rounded-md overflow-hidden border border-border cursor-pointer">
                  <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&q=80" alt="Render" className="object-cover w-full h-full opacity-80 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="absolute bottom-2 left-2 bg-background/90 backdrop-blur-sm px-2 py-1 text-xs rounded border border-border shadow-sm font-medium">Concept_01.jpg</div>
                </div>
                <div className="group relative aspect-[4/3] bg-muted rounded-md overflow-hidden border border-border cursor-pointer">
                  <img src="https://images.unsplash.com/photo-1600607686527-6fb886090705?w=400&q=80" alt="Material Board" className="object-cover w-full h-full opacity-80 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="absolute bottom-2 left-2 bg-background/90 backdrop-blur-sm px-2 py-1 text-xs rounded border border-border shadow-sm font-medium">Materials.jpg</div>
                </div>
                <div className="group relative aspect-[4/3] bg-muted/50 rounded-md border border-border border-dashed flex flex-col items-center justify-center hover:bg-muted/80 hover:border-solid transition-all cursor-pointer">
                  <FileText className="h-8 w-8 mb-3 text-muted-foreground" strokeWidth={1.5} />
                  <span className="text-xs font-medium text-foreground">Site_Survey_V2.pdf</span>
                  <span className="text-[10px] text-muted-foreground mt-1">2.4 MB</span>
                </div>
              </div>
            </CardContent>
          </Card>

        </div>

        {/* Sidebar Column */}
        <div className="space-y-6">
          
          {/* Project Details */}
          <Card className="border-border bg-card shadow-sm">
            <CardHeader>
              <CardTitle>Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-5">
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-wider font-medium mb-1.5">Project Type</p>
                <p className="font-medium text-sm">{project.type}</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-wider font-medium mb-1.5">Budget Target</p>
                <p className="font-medium text-sm">{project.budget}</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-wider font-medium mb-1.5">Plot Size</p>
                <p className="font-medium text-sm">{project.plotSize}</p>
              </div>
              <div className="pt-4 border-t border-border">
                <Button variant="secondary" className="w-full justify-between shadow-none">
                  View Full Brief
                  <MoreHorizontal className="h-4 w-4 text-muted-foreground" />
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Site Location (Google Maps) */}
          <Card className="border-border bg-card shadow-sm overflow-hidden flex flex-col">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary" />
                Site Location
              </CardTitle>
              <CardDescription>{project.location}</CardDescription>
            </CardHeader>
            <div className="flex-1 min-h-[200px] w-full bg-muted relative">
              <iframe 
                width="100%" 
                height="100%" 
                frameBorder="0" 
                style={{ border: 0, position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} 
                src={`https://www.google.com/maps?q=${encodeURIComponent(project.location || 'New York')}&output=embed`} 
                allowFullScreen 
              />
            </div>
            <div className="p-3 bg-muted/30 border-t border-border flex justify-between items-center">
               <span className="text-xs text-muted-foreground">Interactive Map</span>
               <Button size="sm" variant="outline" className="h-7 text-xs" onClick={() => window.open(`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(project.location || 'New York')}`, '_blank')}>
                 Get Directions
               </Button>
            </div>
          </Card>

          {/* Activity Log */}
          <Card className="border-border bg-card shadow-sm">
            <CardHeader>
              <CardTitle>Activity Log</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-5">
                <div className="flex gap-3 items-start">
                  <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 border border-primary/20">
                    <Upload className="h-4 w-4 text-primary" strokeWidth={2} />
                  </div>
                  <div className="pt-1">
                    <p className="text-sm font-medium text-foreground leading-tight">Site_Survey_V2.pdf uploaded</p>
                    <p className="text-xs text-muted-foreground mt-1">Today, 9:41 AM by Sarah</p>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <div className="h-8 w-8 rounded-full bg-muted flex items-center justify-center shrink-0 border border-border">
                    <CheckCircle2 className="h-4 w-4 text-muted-foreground" strokeWidth={2} />
                  </div>
                  <div className="pt-1">
                    <p className="text-sm font-medium text-foreground leading-tight">Contract Signed</p>
                    <p className="text-xs text-muted-foreground mt-1">Yesterday, 4:20 PM by Client</p>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <div className="h-8 w-8 rounded-full bg-accent/10 flex items-center justify-center shrink-0 border border-accent/20">
                    <Clock className="h-4 w-4 text-accent" strokeWidth={2} />
                  </div>
                  <div className="pt-1">
                    <p className="text-sm font-medium text-foreground leading-tight">AI Cost Analysis Generated</p>
                    <p className="text-xs text-muted-foreground mt-1">Oct 24, 2:15 PM by Archnova AI</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

        </div>
      </div>
    </div>
  )
}
