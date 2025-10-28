
"use client"

import { useState } from "react"
import { Home, Briefcase, Mail, FileText } from "lucide-react"
import { 
  Sidebar, 
  SidebarContent, 
  SidebarMenu, 
  SidebarMenuItem, 
  SidebarMenuButton, 
  SidebarProvider 
} from "@/components/ui/sidebar"

export default function LeftSidebar() {
  const [activeItem, setActiveItem] = useState<number | null>(null);

  const handleNavigation = (index: number) => {
    setActiveItem(index);
    
    const sectionMap = ["hero", "projects", "contact", "resume"]
    const section = sectionMap[index]
    
    const element = document.getElementById(section)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const navItems = [
    { title: "Home", icon: Home, id: 0 },
    { title: "Projects", icon: Briefcase, id: 1 },
    { title: "Contact", icon: Mail, id: 2 },
    { title: "Resume", icon: FileText, id: 3 },
  ]

  return (
    <Sidebar variant="floating" side="left" className="pt-8">
      <SidebarContent>
        <SidebarMenu>
          {navItems.map((item) => (
            <SidebarMenuItem key={item.id}>
              <SidebarMenuButton 
                isActive={activeItem === item.id}
                tooltip={item.title}
                onClick={() => handleNavigation(item.id)}
              >
                <item.icon />
                <span>{item.title}</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
    </Sidebar>
  )
}
