"use client"

import { Bell, Search, User, Plus } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button, buttonVariants } from "@/components/ui/button"
import { SidebarTrigger } from "@/components/ui/sidebar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuGroup,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useRouter } from "next/navigation"

import { ThemeToggle } from "@/components/theme-toggle"
import { useState } from "react"
import { NewProjectModal } from "@/components/new-project-modal"

export function TopNav() {
  const router = useRouter()
  const [isNewProjectModalOpen, setIsNewProjectModalOpen] = useState(false)
  
  return (
    <>
    <header className="h-16 border-b border-border flex items-center px-4 shrink-0 bg-card w-full">
      <SidebarTrigger className="mr-4" />
      <div className="flex-1 max-w-xl flex items-center">
        <div className="relative w-full">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search projects, documents, or clients..."
            className="w-full pl-9 bg-background border-border"
          />
        </div>
      </div>
      <div className="ml-auto flex items-center space-x-4">
        <Button onClick={() => setIsNewProjectModalOpen(true)} size="sm" className="hidden sm:flex gap-1">
          <Plus className="h-4 w-4" />
          <span>New Project</span>
        </Button>
        <ThemeToggle />
        <Button variant="ghost" size="icon" className="relative text-muted-foreground hover:text-foreground">
          <Bell className="h-5 w-5" />
          <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-destructive border-2 border-card"></span>
        </Button>
        
        <DropdownMenu>
          <DropdownMenuTrigger className={buttonVariants({ variant: "ghost", className: "relative h-8 w-8 rounded-full" })}>
            <Avatar className="h-8 w-8">
              <AvatarImage src="" alt="User" />
              <AvatarFallback className="bg-primary text-primary-foreground">AR</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56" align="end">
            <DropdownMenuGroup>
              <DropdownMenuLabel className="font-normal">
                <div className="flex flex-col space-y-1">
                  <p className="text-sm font-medium leading-none">Architect</p>
                  <p className="text-xs leading-none text-muted-foreground">
                    arch@studio.com
                  </p>
                </div>
              </DropdownMenuLabel>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => router.push('/dashboard/team')}>
              Profile
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => router.push('/dashboard/settings')}>
              Billing
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => router.push('/dashboard/settings')}>
              Settings
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-destructive" onClick={() => router.push('/login')}>
              Log out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
    <NewProjectModal open={isNewProjectModalOpen} onOpenChange={setIsNewProjectModalOpen} />
    </>
  )
}
