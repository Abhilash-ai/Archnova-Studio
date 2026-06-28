"use client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Search, Plus, MoreHorizontal, Mail, Phone, ExternalLink } from "lucide-react"

export default function ClientsPage() {
  const clients = [
    { id: 1, name: "Sarah Jenkins", company: "Private Client", email: "sarah.j@example.com", phone: "+1 (555) 123-4567", projects: 1, value: "$1.5M", status: "Active" },
    { id: 2, name: "Marcus Reed", company: "Urban Corp", email: "m.reed@urbancorp.com", phone: "+1 (555) 987-6543", projects: 3, value: "$22.5M", status: "Key Client" },
    { id: 3, name: "Elena Rostova", company: "City Arts Trust", email: "erostova@cityarts.org", phone: "+1 (555) 456-7890", projects: 1, value: "$8.0M", status: "Active" },
    { id: 4, name: "David Chen", company: "Chen Holdings", email: "david@chenholdings.com", phone: "+1 (555) 222-3333", projects: 0, value: "$0", status: "Lead" },
    { id: 5, name: "Priya Patel", company: "Patel Hospitality", email: "priya@patelhotels.com", phone: "+1 (555) 444-5555", projects: 2, value: "$14.2M", status: "Active" },
  ]

  return (
    <div className="flex flex-col space-y-6 pb-12">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-foreground">Clients</h1>
          <p className="text-muted-foreground mt-1">Manage your studio's client relationships and contact roster.</p>
        </div>
        <Button><Plus className="mr-2 h-4 w-4" /> Add Client</Button>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card className="border-border bg-card">
          <CardContent className="p-6">
            <p className="text-sm font-medium text-muted-foreground mb-1">Total Clients</p>
            <h2 className="text-3xl font-bold">24</h2>
          </CardContent>
        </Card>
        <Card className="border-border bg-card">
          <CardContent className="p-6">
            <p className="text-sm font-medium text-muted-foreground mb-1">Active Projects</p>
            <h2 className="text-3xl font-bold">12</h2>
          </CardContent>
        </Card>
        <Card className="border-border bg-card">
          <CardContent className="p-6">
            <p className="text-sm font-medium text-muted-foreground mb-1">New Leads (This Month)</p>
            <h2 className="text-3xl font-bold">5</h2>
          </CardContent>
        </Card>
      </div>

      <Card className="border-border bg-card overflow-hidden">
        <div className="p-4 border-b border-border flex items-center justify-between">
          <div className="relative w-full max-w-sm">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search clients..."
              className="pl-8 bg-background border-border"
            />
          </div>
          <Button variant="outline" size="sm">Export CSV</Button>
        </div>
        <Table>
          <TableHeader>
            <TableRow className="hover:bg-transparent">
              <TableHead>Client</TableHead>
              <TableHead>Contact</TableHead>
              <TableHead>Active Projects</TableHead>
              <TableHead>Portfolio Value</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {clients.map((client) => (
              <TableRow key={client.id} className="group">
                <TableCell>
                  <div className="font-medium text-foreground">{client.name}</div>
                  <div className="text-sm text-muted-foreground">{client.company}</div>
                </TableCell>
                <TableCell>
                  <div className="space-y-1">
                    <div className="flex items-center text-sm text-muted-foreground hover:text-foreground cursor-pointer transition-colors">
                      <Mail className="h-3 w-3 mr-2" />
                      {client.email}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Phone className="h-3 w-3 mr-2" />
                      {client.phone}
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="font-medium">{client.projects}</div>
                </TableCell>
                <TableCell>
                  <div className="font-medium">{client.value}</div>
                </TableCell>
                <TableCell>
                  <Badge variant="outline" className={`font-normal ${
                    client.status === 'Key Client' ? 'bg-primary/10 text-primary border-primary/20' :
                    client.status === 'Lead' ? 'bg-accent/10 text-accent border-accent/20' :
                    'bg-muted text-foreground border-border'
                  }`}>
                    {client.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  )
}
