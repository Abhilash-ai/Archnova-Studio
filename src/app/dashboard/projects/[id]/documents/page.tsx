import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { File, FileText, FileImage, FileCode2, Upload, MoreHorizontal, Download } from "lucide-react"

const documents = [
  { id: '1', name: 'A-101_Floor_Plans.pdf', type: 'pdf', size: '2.4 MB', date: 'Oct 24, 2026', uploader: 'Admin' },
  { id: '2', name: 'Site_Photos.zip', type: 'archive', size: '156.8 MB', date: 'Oct 23, 2026', uploader: 'Admin' },
  { id: '3', name: 'Client_Brief_v2.docx', type: 'doc', size: '1.1 MB', date: 'Oct 22, 2026', uploader: 'Sarah Jenkins' },
  { id: '4', name: 'Initial_Render.jpg', type: 'image', size: '8.4 MB', date: 'Oct 20, 2026', uploader: 'Admin' },
]

export default function DocumentsPage() {
  const getIcon = (type: string) => {
    switch (type) {
      case 'pdf': return <FileText className="h-5 w-5 text-destructive" />
      case 'image': return <FileImage className="h-5 w-5 text-blue-500" />
      case 'doc': return <FileCode2 className="h-5 w-5 text-blue-700" />
      default: return <File className="h-5 w-5 text-muted-foreground" />
    }
  }

  return (
    <div className="flex flex-col space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Project Documents</h2>
          <p className="text-muted-foreground text-sm mt-1">Manage files, drawings, and deliverables.</p>
        </div>
        <Button>
          <Upload className="mr-2 h-4 w-4" />
          Upload Files
        </Button>
      </div>

      <div className="border border-border rounded-md bg-card">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Size</TableHead>
              <TableHead>Uploaded By</TableHead>
              <TableHead>Date</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {documents.map((doc) => (
              <TableRow key={doc.id}>
                <TableCell className="font-medium flex items-center gap-3">
                  {getIcon(doc.type)}
                  {doc.name}
                </TableCell>
                <TableCell className="text-muted-foreground">{doc.size}</TableCell>
                <TableCell>{doc.uploader}</TableCell>
                <TableCell className="text-muted-foreground">{doc.date}</TableCell>
                <TableCell className="text-right">
                  <div className="flex items-center justify-end space-x-2">
                    <Button variant="ghost" size="icon">
                      <Download className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
