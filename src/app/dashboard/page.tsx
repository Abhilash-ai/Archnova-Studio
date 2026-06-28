"use client"
import Link from "next/link"
import { motion, Variants } from "framer-motion"
import { useStore } from "@/store/useStore"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Briefcase, Clock, Zap, CheckCircle2 } from "lucide-react"

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
}

export default function DashboardPage() {
  const projects = useStore((state) => state.projects)
  const recentProjects = projects.slice(0, 4)

  return (
    <motion.div 
      className="flex flex-col space-y-8"
      variants={container}
      initial="hidden"
      animate="show"
    >
      <motion.div variants={item}>
        <h1 className="text-3xl font-bold tracking-tight text-foreground">Dashboard</h1>
        <p className="text-muted-foreground mt-2">
          Welcome back to Archnova Studio. Here&apos;s an overview of your active workspace.
        </p>
      </motion.div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="border-border bg-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-foreground">Active Projects</CardTitle>
            <Briefcase className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">{projects.length}</div>
            <p className="text-xs text-muted-foreground mt-1">Active workspaces</p>
          </CardContent>
        </Card>
        <Card className="border-border bg-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-foreground">Pending Meetings</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">4</div>
            <p className="text-xs text-muted-foreground mt-1">For this week</p>
          </CardContent>
        </Card>
        <Card className="border-border bg-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-foreground">AI Briefs Generated</CardTitle>
            <Zap className="h-4 w-4 text-accent" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">8</div>
            <p className="text-xs text-muted-foreground mt-1">Saved ~16 hours</p>
          </CardContent>
        </Card>
        <Card className="border-border bg-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-foreground">Pending Approvals</CardTitle>
            <CheckCircle2 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">3</div>
            <p className="text-xs text-muted-foreground mt-1">Require client sign-off</p>
          </CardContent>
        </Card>
      </div>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7">
        <motion.div variants={item} className="lg:col-span-4 md:col-span-2 col-span-1">
          <Card className="h-full border-border bg-card hover:border-primary/50 transition-colors">
          <CardHeader>
            <CardTitle className="text-foreground">Recent Projects</CardTitle>
            <CardDescription>
              Your most recently active architectural projects.
            </CardDescription>
          </CardHeader>
          <CardContent>
            {recentProjects.length > 0 ? (
              <div className="space-y-6">
                {recentProjects.map((project) => (
                  <Link key={project.id} href={`/dashboard/projects/${project.id}`} className="flex items-center group cursor-pointer">
                    <div className="h-9 w-9 rounded-md bg-muted flex items-center justify-center text-muted-foreground shrink-0 border border-border group-hover:bg-primary/10 group-hover:text-primary transition-colors uppercase font-medium">
                      {project.name.substring(0, 2)}
                    </div>
                    <div className="ml-4 space-y-1">
                      <p className="text-sm font-medium leading-none text-foreground group-hover:text-primary transition-colors">{project.name}</p>
                      <p className="text-sm text-muted-foreground">{project.type} • {project.status}</p>
                    </div>
                    <div className="ml-auto font-medium text-xs text-muted-foreground">{project.date}</div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center text-center bg-muted/30 rounded-md border border-dashed border-border h-48">
                <Briefcase className="h-8 w-8 text-muted-foreground/50 mb-3" />
                <p className="text-sm font-medium text-foreground">No recent projects</p>
                <p className="text-xs text-muted-foreground mt-1">Create a new project to get started.</p>
              </div>
            )}
          </CardContent>
          </Card>
        </motion.div>
        <motion.div variants={item} className="lg:col-span-3 md:col-span-2 col-span-1">
          <Card className="h-full border-border bg-card hover:border-accent/50 transition-colors">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-foreground">
              <Zap className="h-5 w-5 text-accent" />
              AI Insights
            </CardTitle>
            <CardDescription>
              Recommendations from Archnova AI.
            </CardDescription>
          </CardHeader>
          <CardContent>
             <div className="space-y-6">
                <div className="text-sm border-l-2 border-primary pl-4 py-1">
                  <span className="font-semibold text-foreground block mb-1">Cost Alert: Lake House</span>
                  <span className="text-muted-foreground">Consider reviewing the cost estimate. Material prices for structural timber have increased by 4% this month.</span>
                </div>
                <div className="text-sm border-l-2 border-primary pl-4 py-1">
                  <span className="font-semibold text-foreground block mb-1">Missing Data: Commercial Complex</span>
                  <span className="text-muted-foreground">Client brief is missing a designated target budget. Using AI proxy of $15M based on similar regional projects.</span>
                </div>
                <div className="text-sm border-l-2 border-accent pl-4 py-1">
                  <span className="font-semibold text-foreground block mb-1">Sustainability: Museum Pavilion</span>
                  <span className="text-muted-foreground">You can increase daylighting score by 12% by adjusting the south-facing louvers.</span>
                </div>
             </div>
          </CardContent>
          </Card>
        </motion.div>
      </div>
    </motion.div>
  )
}
