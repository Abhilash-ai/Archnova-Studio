"use client"
import Link from 'next/link'
import { ArrowLeft, MoreHorizontal, Share } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { use } from 'react'
import { useStore } from '@/store/useStore'

export default function ProjectLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ id: string }>
}) {
  const { id } = use(params);
  const project = useStore((state) => state.projects.find(p => p.id === id))

  if (!project) return null;

  return (
    <div className="flex flex-col h-full min-h-0 space-y-4">
      {/* Project Header */}
      <div className="flex flex-col space-y-4 pb-4 border-b border-border shrink-0">
        <div className="flex items-center text-sm text-muted-foreground">
          <Link href="/dashboard/projects" className="flex items-center hover:text-foreground">
            <ArrowLeft className="mr-1 h-4 w-4" />
            Back to Projects
          </Link>
        </div>
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-foreground">{project.name}</h1>
            <p className="text-muted-foreground mt-1">{project.type} • {project.client} • {project.date}</p>
          </div>
          <div className="flex items-center space-x-2">
            <Button variant="outline">
              <Share className="mr-2 h-4 w-4" />
              Share
            </Button>
            <Button variant="outline" size="icon">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Project Navigation */}
        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="bg-transparent border-b border-border w-full justify-start rounded-none p-0 h-auto">
            <TabsTrigger value="overview" className="data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none px-4 py-2 bg-transparent shadow-none text-muted-foreground data-[state=active]:text-foreground">
              Overview
            </TabsTrigger>
            <TabsTrigger value="brief" className="data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none px-4 py-2 bg-transparent shadow-none text-muted-foreground data-[state=active]:text-foreground">
              Client Brief
            </TabsTrigger>
            <TabsTrigger value="meetings" className="data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none px-4 py-2 bg-transparent shadow-none text-muted-foreground data-[state=active]:text-foreground">
              Meetings
            </TabsTrigger>
            <TabsTrigger value="site" className="data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none px-4 py-2 bg-transparent shadow-none text-muted-foreground data-[state=active]:text-foreground">
              Site Analysis
            </TabsTrigger>
            <TabsTrigger value="documents" className="data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none px-4 py-2 bg-transparent shadow-none text-muted-foreground data-[state=active]:text-foreground">
              Documents
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      {/* Project Content */}
      <div className="flex-1 overflow-auto min-h-0 relative">
        {children}
      </div>
    </div>
  )
}
