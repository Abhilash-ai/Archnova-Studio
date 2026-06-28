"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Download, TrendingUp, DollarSign, Activity, FileSpreadsheet } from "lucide-react"

export default function ReportsPage() {
  const profitability = [
    { id: 1, project: "Lake House Renovation", revenue: "$150,000", estCost: "$80,000", actCost: "$85,000", margin: "43%", status: "On Track" },
    { id: 2, project: "Downtown Commercial", revenue: "$1,200,000", estCost: "$800,000", actCost: "$790,000", margin: "34%", status: "Under Budget" },
    { id: 3, project: "Museum Pavilion", revenue: "$850,000", estCost: "$500,000", actCost: "$540,000", margin: "36%", status: "Over Budget" },
    { id: 4, project: "Highland Residences", revenue: "$400,000", estCost: "$250,000", actCost: "$250,000", margin: "37%", status: "Completed" },
  ]

  return (
    <div className="flex flex-col space-y-8 pb-12">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-foreground">Financial Reports</h1>
          <p className="text-muted-foreground mt-1">Track studio revenue, project profitability, and expenses.</p>
        </div>
        <div className="flex gap-2 shrink-0">
          <Button variant="outline"><FileSpreadsheet className="mr-2 h-4 w-4" /> Export CSV</Button>
          <Button><Download className="mr-2 h-4 w-4" /> Download PDF</Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="border-border bg-card shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-foreground">Total Revenue (YTD)</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">$3,450,000</div>
            <p className="text-xs text-green-500 mt-1 flex items-center">
              <TrendingUp className="h-3 w-3 mr-1" /> +14.5% from last year
            </p>
          </CardContent>
        </Card>
        
        <Card className="border-border bg-card shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-foreground">Outstanding Invoices</CardTitle>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">$420,000</div>
            <p className="text-xs text-muted-foreground mt-1">Across 8 active projects</p>
          </CardContent>
        </Card>

        <Card className="border-border bg-card shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-foreground">Avg Profit Margin</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">36.8%</div>
            <p className="text-xs text-green-500 mt-1 flex items-center">
              <TrendingUp className="h-3 w-3 mr-1" /> +2.1% from Q2
            </p>
          </CardContent>
        </Card>

        <Card className="border-border bg-card shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-foreground">Studio Overhead</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">$185,000</div>
            <p className="text-xs text-muted-foreground mt-1">Monthly run rate</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {/* Main Table Column */}
        <div className="md:col-span-2 space-y-6">
          <Card className="border-border bg-card shadow-sm overflow-hidden">
            <CardHeader>
              <CardTitle>Project Profitability</CardTitle>
              <CardDescription>Estimated vs actual costs across all active workspaces.</CardDescription>
            </CardHeader>
            <Table>
              <TableHeader>
                <TableRow className="hover:bg-transparent">
                  <TableHead>Project</TableHead>
                  <TableHead>Studio Fee</TableHead>
                  <TableHead>Est. Cost</TableHead>
                  <TableHead>Actual Cost</TableHead>
                  <TableHead>Margin</TableHead>
                  <TableHead className="text-right">Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {profitability.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell className="font-medium">{item.project}</TableCell>
                    <TableCell>{item.revenue}</TableCell>
                    <TableCell className="text-muted-foreground">{item.estCost}</TableCell>
                    <TableCell className={item.status === 'Over Budget' ? 'text-red-500 font-medium' : ''}>
                      {item.actCost}
                    </TableCell>
                    <TableCell>{item.margin}</TableCell>
                    <TableCell className="text-right">
                      <Badge variant="outline" className={`font-normal ${
                        item.status === 'Under Budget' ? 'border-green-500/50 text-green-600 dark:text-green-400' :
                        item.status === 'Over Budget' ? 'border-red-500/50 text-red-600 dark:text-red-400' :
                        'border-border text-muted-foreground'
                      }`}>
                        {item.status}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Card>
        </div>

        {/* Expense Breakdown Column */}
        <div className="space-y-6">
          <Card className="border-border bg-card shadow-sm">
            <CardHeader>
              <CardTitle>Expense Breakdown</CardTitle>
              <CardDescription>YTD studio expenses</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="font-medium text-foreground">Personnel & Payroll</span>
                  <span className="text-muted-foreground">65%</span>
                </div>
                <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                  <div className="h-full bg-primary w-[65%]" />
                </div>
              </div>
              
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="font-medium text-foreground">Software & Tech</span>
                  <span className="text-muted-foreground">15%</span>
                </div>
                <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                  <div className="h-full bg-accent w-[15%]" />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="font-medium text-foreground">Office & Rent</span>
                  <span className="text-muted-foreground">12%</span>
                </div>
                <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                  <div className="h-full bg-muted-foreground/50 w-[12%]" />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="font-medium text-foreground">Travel & Site Visits</span>
                  <span className="text-muted-foreground">8%</span>
                </div>
                <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                  <div className="h-full bg-muted-foreground/30 w-[8%]" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
