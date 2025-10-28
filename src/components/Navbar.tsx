"use client"

import { useState, useEffect } from "react"
import { Home, Briefcase, Mail, FileText } from "lucide-react"
import { ExpandableTabs } from "@/components/ui/expandable-tabs"

export default function Navbar() {
  const [activeTab, setActiveTab] = useState<number>(0)

  const tabs = [
    { title: "Home", icon: Home },
    { title: "Projects", icon: Briefcase },
    { title: "Contact", icon: Mail },
    { title: "Resume", icon: FileText },
  ]

  const handleTabChange = (index: number | null) => {
    if (index === null) return

    const sectionMap = ["hero", "projects", "contact", "resume"]
    const section = sectionMap[index]
    
    const element = document.getElementById(section)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setActiveTab(index)
    }
  }

  // Update active tab based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "projects", "contact", "resume"]
      const currentPosition = window.scrollY + 100 // offset to trigger slightly before reaching section
      
      // Find which section is currently in view
      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i])
        if (element && element.offsetTop <= currentPosition) {
          setActiveTab(i)
          break
        }
      }
    }
    
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4">
      <ExpandableTabs 
        tabs={tabs} 
        onChange={handleTabChange}
        activeIndex={activeTab}
        className="backdrop-blur-element bg-black/80 border-gray-700/50 text-white shadow-lg"
        activeColor="text-white"
      />
    </div>
  )
}