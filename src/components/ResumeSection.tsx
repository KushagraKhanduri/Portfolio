"use client"

import { motion } from "framer-motion"
import { Download, Briefcase, GraduationCap, Award } from "lucide-react"
import { useState } from "react"

export default function ResumeSection() {
  const [isDownloading, setIsDownloading] = useState(false)

  const handleDownload = () => {
    setIsDownloading(true)
    
    // Your actual Google Drive file ID
    const fileId = '15PJePYc5Z3ge0eDwL0PbJCB_U4Dxjb8O'
    const downloadUrl = `https://drive.google.com/uc?export=download&id=${fileId}`
    
    // Open download link in new tab
    window.open(downloadUrl, '_blank')
    
    // Reset downloading state after a short delay
    setTimeout(() => {
      setIsDownloading(false)
    }, 2000)
  }

  return (
    <section className="py-24 px-4 md:px-6 bg-[#030303]" id="resume">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-4"
          >
            <span className="text-sm font-medium bg-white/5 text-white/60 px-4 py-1.5 rounded-full">
              My Background
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4 tracking-tight text-white"
          >
            Professional <span className="hero-text-gradient">Resume</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-white/60 max-w-2xl mx-auto mb-8"
          >
            A summary of my professional experience, education, and achievements.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="inline-block"
          >
            <button 
              onClick={handleDownload}
              disabled={isDownloading}
              className="flex items-center gap-2 bg-white/5 hover:bg-white/10 text-white/80 hover:text-white px-6 py-3 rounded-lg transition-colors duration-200 border border-white/10 hover:border-white/20 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Download className="w-4 h-4" />
              <span>{isDownloading ? "Downloading..." : "Download CV"}</span>
            </button>
          </motion.div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center">
                <Briefcase className="w-5 h-5 text-white/80" />
              </div>
              <h3 className="text-2xl font-bold text-white">Experience</h3>
            </div>
            
            <div className="space-y-8">
              {experiences.map((experience, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  viewport={{ once: true }}
                  className="relative pl-6 border-l border-white/10"
                >
                  <div className="absolute w-3 h-3 bg-indigo-500 rounded-full -left-[6.5px] top-[6px]" />
                  <span className="text-sm font-medium bg-white/5 text-white/60 px-3 py-1 rounded-full">
                    {experience.period}
                  </span>
                  <h4 className="text-xl font-semibold text-white mt-3">{experience.role}</h4>
                  <p className="text-white/60 mt-1">{experience.company}</p>
                  <p className="text-white/60 mt-3">{experience.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
          
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-white/80" />
              </div>
              <h3 className="text-2xl font-bold text-white">Education</h3>
            </div>
            
            <div className="space-y-8 mb-12">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  viewport={{ once: true }}
                  className="relative pl-6 border-l border-white/10"
                >
                  <div className="absolute w-3 h-3 bg-rose-500 rounded-full -left-[6.5px] top-[6px]" />
                  <span className="text-sm font-medium bg-white/5 text-white/60 px-3 py-1 rounded-full">
                    {edu.period}
                  </span>
                  <h4 className="text-xl font-semibold text-white mt-3">{edu.degree}</h4>
                  <p className="text-white/60 mt-1">{edu.institution}</p>
                  <p className="text-white/60 mt-3">{edu.description}</p>
                </motion.div>
              ))}
            </div>
            
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center">
                <Award className="w-5 h-5 text-white/80" />
              </div>
              <h3 className="text-2xl font-bold text-white">Skills</h3>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="flex flex-wrap gap-3"
            >
              {skills.map((skill, index) => (
                <div 
                  key={index}
                  className="px-4 py-2 rounded-lg bg-white/5 text-white/70 text-sm border border-white/10"
                >
                  {skill}
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

const experiences = [
  {
    period: "2025 - Present",
    role: "Aspiring AI Engineer & UI/UX Designer",
    company: "Independent Projects",
    description:"Developing a system that could reduce or nullify AI agent API costs, making AI more accessible and cost-effective Leading the design and development of a post-disaster management platform connecting victims with NGOs, government organizations, and volunteers for efficient relief efforts."
  },
  {
    company:"Independent Project",
    description:"Curating an AI-powered R&D optimization platform, helping companies maximize research investments and improve innovation efficiency."
  },
  {
    period: "2023 - 2024",
    role: "Blockchain Development & Web Development",
    company: "Independent Projects",
    description: "Used IoT and Blockchain to create a secure supply chain management system for live tracking of high value goods"
  },
  {
    period: "2022-2023",
    role: "UI/UX Designing & IoT Projects",
    company: "Independent Project",
    description: ""
  }
]

const education = [
  {
    period: "2022 - 2026",
    degree: "Bachelor of Technology in Computer Science",
    institution: "Gyan Ganga Institute of Technology & Science, Jabalpur, M.P.",
    description: "Expected Graduation: 2026 | Cisco NetCad: CCMAv_1 | AICTE Cisco Virtual Internship: Cybersecurity | Programming Essentials in C++ | Winner – IDE Bootcamp Edition-2 Phase-2 (Secure Supply Chain Platform using IoT & Blockchain)"
  },
  {
    period: "2021 - 2022",
    degree: "Higher Secondary Education",
    institution: "Class XII",
    description: "Completed higher school education with focus on science and mathematics"
  },
  {
    period: "2019 - 2020",
    degree: "Secondary Education", 
    institution: "Class X",
    description: "Completed secondary school education with strong academic foundation"
  }
]

const skills = [
  "UI/UX Design", 
  "Figma Prototyping", 
  "Wireframing", 
  "Framer", 
  "Figma", 
  "React",  
  "Tailwind CSS", 
  "AI Engineering", 
  "Product Management",
  "Prompt Engineering"
]