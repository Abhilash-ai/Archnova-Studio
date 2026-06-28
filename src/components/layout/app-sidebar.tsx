"use client"

import Image from "next/image"
import Link from "next/link"

import {
  Briefcase,
  Calendar,
  FileText,
  Home,
  MessageSquare,
  Settings,
  Users,
  Box,
  BarChart3
} from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
} from "@/components/ui/sidebar"
import { useRouter, usePathname } from "next/navigation"

const items = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: Home,
  },
  {
    title: "Projects",
    url: "/dashboard/projects",
    icon: Briefcase,
  },
  {
    title: "AI Studio",
    url: "/dashboard/ai",
    icon: Box,
  },
  {
    title: "Clients",
    url: "/dashboard/clients",
    icon: Users,
  },
  {
    title: "Meetings",
    url: "/dashboard/meetings",
    icon: Calendar,
  },
  {
    title: "Documents",
    url: "/dashboard/documents",
    icon: FileText,
  },
  {
    title: "Reports",
    url: "/dashboard/reports",
    icon: BarChart3,
  },
  {
    title: "Team",
    url: "/dashboard/team",
    icon: MessageSquare,
  },
]

export function AppSidebar() {
  const router = useRouter()
  const pathname = usePathname()
  return (
    <Sidebar className="border-r border-border">
      <SidebarHeader className="h-16 flex items-center px-6 border-b border-border bg-card">
        <Link href="/" className="flex items-center gap-3 font-semibold text-lg tracking-tight">
          <Image src="/logo.png" alt="Archnova Logo" width={28} height={28} className="rounded-md object-cover border border-border" />
          <span>Archnova</span>
        </Link>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Workspace</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => {
                const isActive = pathname === item.url || (item.url !== "/dashboard" && pathname.startsWith(item.url))
                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton 
                      onClick={() => router.push(item.url)} 
                      isActive={isActive}
                      className={isActive ? "bg-primary/10 text-primary font-medium" : "text-muted-foreground"}
                    >
                      <item.icon />
                      <span>{item.title}</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                )
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton onClick={() => router.push('/dashboard/settings')}>
              <Settings />
              <span>Settings</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  )
}
