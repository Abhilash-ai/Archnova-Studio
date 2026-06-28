"use client"
import { useState } from "react"
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
import { 
  FileText, Folder, Upload, Search, Filter, 
  MoreVertical, FileImage, FileCode, CheckCircle2 
} from "lucide-react"

export default function DocumentsPage() {
  const [activeFolder, setActiveFolder] = useState("All Files")

  const folders = [
    { name: "All Files", count: 24 },
    { name: "Blueprints", count: 8 },
    { name: "Contracts", count: 3 },
    { name: "Permits", count: 2 },
    { name: "Renders", count: 11 },
  ]

  const files = [
    { id: 1, name: "Lake_House_Schematic_V2.pdf", type: "pdf", size: "4.2 MB", date: "Oct 24, 2026", folder: "Blueprints", status: "Approved" },
    { id: 2, name: "Master_Service_Agreement.pdf", type: "pdf", size: "1.1 MB", date: "Oct 22, 2026", folder: "Contracts", status: "Signed" },
    { id: 3, name: "Site_Survey_Report.docx", type: "doc", size: "856 KB", date: "Oct 15, 2026", folder: "All Files", status: "Review" },
    { id: 4, name: "Kitchen_Material_Board.jpg", type: "image", size: "8.4 MB", date: "Oct 14, 2026", folder: "Renders", status: "Approved" },
    { id: 5, name: "City_Zoning_Permit_App.pdf", type: "pdf", size: "2.3 MB", date: "Oct 10, 2026", folder: "Permits", status: "Pending" },
    { id: 6, name: "Exterior_Concept_01.png", type: "image", size: "12.1 MB", date: "Oct 05, 2026", folder: "Renders", status: "Review" },
  ]

  const filteredFiles = activeFolder === "All Files" 
    ? files 
    : files.filter(f => f.folder === activeFolder)

  return (
    <div className="flex flex-col space-y-6 pb-12">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-foreground">Documents</h1>
          <p className="text-muted-foreground mt-1">Manage project assets, blueprints, and contracts.</p>
        </div>
        <div className="flex gap-2 shrink-0">
          <Button variant="outline"><Folder className="mr-2 h-4 w-4" /> New Folder</Button>
          <Button><Upload className="mr-2 h-4 w-4" /> Upload File</Button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-12">
        {/* Sidebar */}
        <div className="md:col-span-3 space-y-4">
          <Card className="border-border bg-card">
            <CardContent className="p-4 space-y-1">
              {folders.map(folder => (
                <button 
                  key={folder.name}
                  onClick={() => setActiveFolder(folder.name)}
                  className={`w-full flex items-center justify-between px-3 py-2 text-sm rounded-md transition-colors ${
                    activeFolder === folder.name 
                      ? "bg-primary text-primary-foreground font-medium" 
                      : "text-muted-foreground hover:bg-muted hover:text-foreground"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <Folder className={`h-4 w-4 ${activeFolder === folder.name ? "fill-primary-foreground/20" : ""}`} />
                    {folder.name}
                  </div>
                  <span className={`text-xs ${activeFolder === folder.name ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                    {folder.count}
                  </span>
                </button>
              ))}
            </CardContent>
          </Card>

          <Card className="border-border bg-card">
            <CardContent className="p-4">
              <h3 className="text-sm font-medium mb-3">Storage Usage</h3>
              <div className="space-y-2">
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-muted-foreground">Used</span>
                  <span className="font-medium">4.2 GB / 10 GB</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div className="h-full bg-primary w-[42%] rounded-full"></div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Area */}
        <div className="md:col-span-9 space-y-4">
          <div className="flex items-center gap-2">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search documents..."
                className="pl-8 bg-card border-border"
              />
            </div>
            <Button variant="outline" size="icon" className="shrink-0 bg-card border-border">
              <Filter className="h-4 w-4 text-muted-foreground" />
            </Button>
          </div>

          <Card className="border-border bg-card overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow className="hover:bg-transparent">
                  <TableHead className="w-[300px]">Name</TableHead>
                  <TableHead>Size</TableHead>
                  <TableHead>Date Uploaded</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredFiles.map((file) => (
                  <TableRow key={file.id} className="group">
                    <TableCell className="font-medium">
                      <div className="flex items-center gap-3">
                        <div className={`p-2 rounded-md ${
                          file.type === 'pdf' ? 'bg-red-500/10 text-red-500' :
                          file.type === 'image' ? 'bg-blue-500/10 text-blue-500' :
                          'bg-primary/10 text-primary'
                        }`}>
                          {file.type === 'image' ? <FileImage className="h-4 w-4" /> : <FileText className="h-4 w-4" />}
                        </div>
                        <span className="group-hover:text-primary transition-colors cursor-pointer">{file.name}</span>
                      </div>
                    </TableCell>
                    <TableCell className="text-muted-foreground text-sm">{file.size}</TableCell>
                    <TableCell className="text-muted-foreground text-sm">{file.date}</TableCell>
                    <TableCell>
                      <Badge variant="outline" className={`font-normal ${
                        file.status === 'Approved' || file.status === 'Signed' ? 'border-green-500/50 text-green-600 dark:text-green-400' :
                        file.status === 'Pending' ? 'border-yellow-500/50 text-yellow-600 dark:text-yellow-400' :
                        'border-border text-muted-foreground'
                      }`}>
                        {file.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="icon" className="opacity-0 group-hover:opacity-100 transition-opacity">
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Card>
        </div>
      </div>
    </div>
  )
}
