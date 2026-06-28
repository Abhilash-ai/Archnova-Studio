"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle2, CreditCard, Download, Bell, Moon, Sun, Key, Building2, User, Paintbrush, Globe } from "lucide-react"

export default function SettingsPage() {
  return (
    <div className="flex flex-col space-y-8 pb-12">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-foreground">Settings</h1>
        <p className="text-muted-foreground mt-1">Manage your studio preferences, integrations, and billing.</p>
      </div>

      <Tabs defaultValue="general" className="w-full">
        <div className="flex justify-center md:justify-start overflow-x-auto pb-2 border-b border-border">
          <TabsList className="bg-transparent space-x-2 w-full justify-start md:w-auto h-auto p-0">
            <TabsTrigger 
              value="general" 
              className="data-[state=active]:bg-card data-[state=active]:border-border border border-transparent rounded-t-lg rounded-b-none px-6 py-3"
            >
              <User className="w-4 h-4 mr-2" />
              General
            </TabsTrigger>
            <TabsTrigger 
              value="organization" 
              className="data-[state=active]:bg-card data-[state=active]:border-border border border-transparent rounded-t-lg rounded-b-none px-6 py-3"
            >
              <Building2 className="w-4 h-4 mr-2" />
              Organization
            </TabsTrigger>
            <TabsTrigger 
              value="billing" 
              className="data-[state=active]:bg-card data-[state=active]:border-border border border-transparent rounded-t-lg rounded-b-none px-6 py-3"
            >
              <CreditCard className="w-4 h-4 mr-2" />
              Billing
            </TabsTrigger>
            <TabsTrigger 
              value="integrations" 
              className="data-[state=active]:bg-card data-[state=active]:border-border border border-transparent rounded-t-lg rounded-b-none px-6 py-3"
            >
              <Key className="w-4 h-4 mr-2" />
              Integrations
            </TabsTrigger>
          </TabsList>
        </div>
        
        {/* General Settings */}
        <TabsContent value="general" className="mt-6 space-y-6 max-w-4xl">
          <Card className="border-border bg-card shadow-sm">
            <CardHeader>
              <CardTitle>Profile Information</CardTitle>
              <CardDescription>Update your personal details and how you appear to clients.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="space-y-4 flex-1">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" defaultValue="Sarah" className="bg-background" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" defaultValue="Jenkins" className="bg-background" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" defaultValue="sarah@archnova.com" className="bg-background" />
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center space-y-4 md:px-8">
                  <div className="h-32 w-32 rounded-full bg-muted border-4 border-background shadow-sm flex items-center justify-center text-4xl font-medium text-muted-foreground overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400" alt="Avatar" className="h-full w-full object-cover" />
                  </div>
                  <Button variant="outline" size="sm">Change Avatar</Button>
                </div>
              </div>
            </CardContent>
            <CardFooter className="border-t border-border pt-6">
              <Button>Save Changes</Button>
            </CardFooter>
          </Card>

          <Card className="border-border bg-card shadow-sm">
            <CardHeader>
              <CardTitle>Preferences</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between border-b border-border pb-4">
                <div>
                  <h4 className="font-medium flex items-center"><Bell className="h-4 w-4 mr-2" /> Email Notifications</h4>
                  <p className="text-sm text-muted-foreground mt-1">Receive daily digests of project updates.</p>
                </div>
                <div className="relative inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background bg-primary">
                  <span className="pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform translate-x-5" />
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium flex items-center"><Paintbrush className="h-4 w-4 mr-2" /> Interface Theme</h4>
                  <p className="text-sm text-muted-foreground mt-1">Select or customize your UI theme.</p>
                </div>
                <div className="flex items-center p-1 bg-muted rounded-md border border-border">
                  <div className="px-3 py-1 text-sm bg-background shadow-sm rounded-sm cursor-pointer flex items-center"><Sun className="h-3 w-3 mr-1" /> Light</div>
                  <div className="px-3 py-1 text-sm text-muted-foreground cursor-pointer flex items-center"><Moon className="h-3 w-3 mr-1" /> Dark</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Organization Settings */}
        <TabsContent value="organization" className="mt-6 space-y-6 max-w-4xl">
          <Card className="border-border bg-card shadow-sm">
            <CardHeader>
              <CardTitle>Studio Details</CardTitle>
              <CardDescription>Update your firm's global branding and contact information.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="orgName">Studio Name</Label>
                <Input id="orgName" defaultValue="Archnova Studio" className="bg-background" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="orgEmail">Support Email</Label>
                  <Input id="orgEmail" type="email" defaultValue="hello@archnova.com" className="bg-background" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="orgPhone">Phone</Label>
                  <Input id="orgPhone" defaultValue="+1 (555) 000-0000" className="bg-background" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="address">Headquarters Address</Label>
                <Input id="address" defaultValue="100 Architecture Way, Suite 400" className="bg-background" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="website">Website</Label>
                <div className="relative flex items-center">
                  <Globe className="absolute left-3 h-4 w-4 text-muted-foreground" />
                  <Input id="website" defaultValue="archnova.studio" className="pl-9 bg-background" />
                </div>
              </div>
            </CardContent>
            <CardFooter className="border-t border-border pt-6">
              <Button>Save Studio Settings</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        
        {/* Billing Settings */}
        <TabsContent value="billing" className="mt-6 space-y-6 max-w-4xl">
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="border-primary bg-primary/5 shadow-sm">
              <CardHeader>
                <CardTitle className="text-primary flex items-center justify-between">
                  <span>Pro Plan</span>
                  <Badge variant="default" className="bg-primary text-primary-foreground">Active</Badge>
                </CardTitle>
                <CardDescription>For established architectural studios.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-4xl font-bold text-foreground">$149<span className="text-sm font-normal text-muted-foreground">/mo</span></div>
                <ul className="space-y-3 text-sm text-muted-foreground mt-6">
                  <li className="flex items-center"><CheckCircle2 className="mr-3 h-4 w-4 text-primary" /> Unlimited Active Projects</li>
                  <li className="flex items-center"><CheckCircle2 className="mr-3 h-4 w-4 text-primary" /> Unlimited AI Cost Analyses</li>
                  <li className="flex items-center"><CheckCircle2 className="mr-3 h-4 w-4 text-primary" /> Advanced Blueprint Rendering</li>
                  <li className="flex items-center"><CheckCircle2 className="mr-3 h-4 w-4 text-primary" /> 1TB Cloud Asset Storage</li>
                </ul>
              </CardContent>
              <CardFooter className="flex gap-3 pt-4">
                <Button variant="default" className="w-full">Upgrade to Enterprise</Button>
                <Button variant="outline" className="w-full bg-background">Manage Stripe</Button>
              </CardFooter>
            </Card>

            <div className="space-y-6">
              <Card className="border-border bg-card shadow-sm">
                <CardHeader>
                  <CardTitle>Payment Method</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between p-4 border border-border rounded-lg bg-background">
                    <div className="flex items-center gap-4">
                      <div className="bg-muted p-2 rounded">
                        <CreditCard className="h-6 w-6 text-foreground" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">Visa ending in 4242</p>
                        <p className="text-xs text-muted-foreground">Expires 12/2028</p>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm">Edit</Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border bg-card shadow-sm">
                <CardHeader>
                  <CardTitle>Billing History</CardTitle>
                </CardHeader>
                <CardContent className="space-y-0 p-0">
                  <div className="flex items-center justify-between p-4 border-b border-border">
                    <div>
                      <p className="font-medium text-sm">Oct 1, 2026</p>
                      <p className="text-xs text-muted-foreground">Pro Plan - Monthly</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="font-medium text-sm">$149.00</span>
                      <Button variant="ghost" size="icon" className="h-8 w-8"><Download className="h-4 w-4" /></Button>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-4 border-b border-border">
                    <div>
                      <p className="font-medium text-sm">Sep 1, 2026</p>
                      <p className="text-xs text-muted-foreground">Pro Plan - Monthly</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="font-medium text-sm">$149.00</span>
                      <Button variant="ghost" size="icon" className="h-8 w-8"><Download className="h-4 w-4" /></Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        {/* Integrations Settings */}
        <TabsContent value="integrations" className="mt-6 space-y-6 max-w-4xl">
          <Card className="border-border bg-card shadow-sm">
            <CardHeader>
              <CardTitle>API & Webhooks</CardTitle>
              <CardDescription>Connect Archnova to your external tools and AI pipelines.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label>Archnova API Key</Label>
                <div className="flex gap-2">
                  <Input type="password" value="sk-archnova-1234567890abcdefg" readOnly className="bg-background font-mono text-muted-foreground" />
                  <Button variant="secondary">Reveal</Button>
                  <Button variant="outline">Revoke</Button>
                </div>
                <p className="text-xs text-muted-foreground mt-2">Do not share your API key. It provides full administrative access to your workspace.</p>
              </div>

              <div className="pt-6 border-t border-border">
                <h4 className="font-medium mb-4">Active Integrations</h4>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 border border-border rounded-lg bg-background">
                    <div className="flex items-center gap-4">
                      <div className="h-10 w-10 bg-[#5436DA] rounded-md flex items-center justify-center text-white font-bold">St</div>
                      <div>
                        <p className="font-medium text-foreground">Stripe</p>
                        <p className="text-xs text-muted-foreground">Payments and Invoicing</p>
                      </div>
                    </div>
                    <Badge variant="outline" className="text-green-500 border-green-500/20 bg-green-500/10">Connected</Badge>
                  </div>
                  <div className="flex items-center justify-between p-4 border border-border rounded-lg bg-background">
                    <div className="flex items-center gap-4">
                      <div className="h-10 w-10 bg-[#0061FF] rounded-md flex items-center justify-center text-white font-bold">Db</div>
                      <div>
                        <p className="font-medium text-foreground">Dropbox</p>
                        <p className="text-xs text-muted-foreground">Blueprint Cloud Sync</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">Connect</Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
