"use client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Search, Plus, Mail, Phone, MapPin, Briefcase } from "lucide-react"

export default function TeamPage() {
  const team = [
    { id: 1, name: "Alexander Wright", role: "Principal Architect", location: "New York HQ", projects: 4, email: "a.wright@archnova.com", phone: "+1 (555) 101-2000", initials: "AW" },
    { id: 2, name: "Sophia Chen", role: "Lead Interior Designer", location: "London Office", projects: 3, email: "s.chen@archnova.com", phone: "+44 20 7123 4567", initials: "SC" },
    { id: 3, name: "Marcus Johnson", role: "Structural Engineer", location: "New York HQ", projects: 6, email: "m.johnson@archnova.com", phone: "+1 (555) 101-2005", initials: "MJ" },
    { id: 4, name: "Elena Rostova", role: "3D Visualization Artist", location: "Remote", projects: 2, email: "e.rostova@archnova.com", phone: "+1 (555) 101-2012", initials: "ER" },
    { id: 5, name: "David Kim", role: "Sustainability Consultant", location: "San Francisco", projects: 5, email: "d.kim@archnova.com", phone: "+1 (555) 303-4000", initials: "DK" },
    { id: 6, name: "Sarah Jenkins", role: "Project Manager", location: "New York HQ", projects: 8, email: "s.jenkins@archnova.com", phone: "+1 (555) 101-2040", initials: "SJ" },
  ]

  return (
    <div className="flex flex-col space-y-8 pb-12">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-foreground">Team Roster</h1>
          <p className="text-muted-foreground mt-1">Manage your internal studio team and external contractors.</p>
        </div>
        <div className="flex gap-2 shrink-0">
          <Button variant="outline">Org Chart</Button>
          <Button><Plus className="mr-2 h-4 w-4" /> Add Member</Button>
        </div>
      </div>

      <div className="flex items-center gap-4 max-w-md">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search team members..."
            className="pl-8 bg-card border-border"
          />
        </div>
        <div className="flex items-center space-x-2 text-sm text-muted-foreground border border-border bg-card px-3 py-2 rounded-md">
          <span className="font-medium text-foreground">{team.length}</span> Members
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {team.map((member) => (
          <Card key={member.id} className="border-border bg-card shadow-sm hover:border-primary/50 transition-colors group">
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-4">
                  <Avatar className="h-12 w-12 border border-border">
                    <AvatarFallback className="bg-muted text-muted-foreground font-medium">{member.initials}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-bold text-foreground group-hover:text-primary transition-colors">{member.name}</h3>
                    <p className="text-sm text-muted-foreground">{member.role}</p>
                  </div>
                </div>
                <Badge variant="secondary" className="font-normal border-border flex items-center gap-1">
                  <Briefcase className="h-3 w-3" />
                  {member.projects}
                </Badge>
              </div>

              <div className="mt-6 space-y-3">
                <div className="flex items-center text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4 mr-3" />
                  {member.location}
                </div>
                <div className="flex items-center text-sm text-muted-foreground hover:text-foreground cursor-pointer transition-colors">
                  <Mail className="h-4 w-4 mr-3" />
                  {member.email}
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Phone className="h-4 w-4 mr-3" />
                  {member.phone}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-border flex gap-2">
                <Button variant="outline" className="w-full text-xs h-8">View Profile</Button>
                <Button variant="secondary" className="w-full text-xs h-8">Message</Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
