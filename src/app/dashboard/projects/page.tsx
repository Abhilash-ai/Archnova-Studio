"use client"
import Link from 'next/link'
import { useStore } from '@/store/useStore'
import { Button, buttonVariants } from '@/components/ui/button'
import { Plus, MoreHorizontal } from 'lucide-react'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

import { useState } from 'react'
import { NewProjectModal } from '@/components/new-project-modal'

export default function ProjectsPage() {
  const projects = useStore((state) => state.projects)
  const [isNewProjectModalOpen, setIsNewProjectModalOpen] = useState(false)

  return (
    <>
    <div className="flex flex-col space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Projects</h1>
          <p className="text-muted-foreground text-sm mt-1">Manage your architectural projects and client briefs.</p>
        </div>
        <Button onClick={() => setIsNewProjectModalOpen(true)}>
          <Plus className="mr-2 h-4 w-4" />
          New Project
        </Button>
      </div>

      {projects.length === 0 ? (
        <div className="flex flex-col items-center justify-center p-16 text-center bg-card border border-border rounded-md">
          <div className="h-16 w-16 rounded-full bg-muted flex items-center justify-center mb-4">
            <Plus className="h-8 w-8 text-muted-foreground" />
          </div>
          <h3 className="text-xl font-medium text-foreground">No projects found</h3>
          <p className="text-muted-foreground mt-2 mb-6 max-w-sm">
            You don't have any active projects right now. Get started by creating a new architectural workspace.
          </p>
          <Button onClick={() => setIsNewProjectModalOpen(true)}>
            <Plus className="mr-2 h-4 w-4" />
            Create Project
          </Button>
        </div>
      ) : (
        <div className="border border-border rounded-md bg-card overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Project Name</TableHead>
                <TableHead>Client</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Last Updated</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {projects.map((project) => (
                <TableRow key={project.id}>
                  <TableCell className="font-medium">
                    <Link href={`/dashboard/projects/${project.id}`} className="hover:underline">
                      {project.name}
                    </Link>
                  </TableCell>
                  <TableCell>{project.client}</TableCell>
                  <TableCell>{project.type}</TableCell>
                  <TableCell>
                    <Badge variant="secondary" className="font-normal">{project.status}</Badge>
                  </TableCell>
                  <TableCell className="text-muted-foreground">{project.date}</TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="icon">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      )}
    </div>
    <NewProjectModal open={isNewProjectModalOpen} onOpenChange={setIsNewProjectModalOpen} />
    </>
  )
}
