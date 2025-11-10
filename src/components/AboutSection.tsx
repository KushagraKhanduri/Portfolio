
"use client"

import { motion } from "framer-motion"
import { useState } from "react"

export default function AboutSection() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <section className="py-24 px-4 md:px-6 bg-gradient-to-b from-[#030303] to-[#050505]" id="about">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <span className="text-sm font-medium bg-white/5 text-white/60 px-4 py-1.5 rounded-full">
                About me
              </span>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-white"
            >
              Crafting digital <span className="hero-text-gradient">experiences</span> with precision & care
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-white/60 text-lg mb-8 leading-relaxed"
            >I am a designer, developer, and engineer passionate about creating intuitive, 
              user-centric digital experiences that merge form and function. 
              With a minimalist approach inspired by clarity and purpose, 
              I build digital products that solve real-world problems.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="flex flex-wrap gap-3">
                {["UI/UX Design", "Frontend Development", "Vibe Coding", "Prompt Engineering", "AI Engineering"].map((skill, index) => (
                  <span 
                    key={index}
                    className="px-4 py-2 rounded-lg bg-white/5 text-white/70 text-sm border border-white/10"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="relative"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="relative rounded-2xl overflow-hidden aspect-square shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 via-transparent to-rose-500/20" />
              <div className="absolute inset-0 bg-[#0a0a0a] mix-blend-overlay opacity-50" />
              
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-rose-500/10 z-10"
                animate={{ 
                  opacity: isHovered ? 1 : 0.7,
                  scale: isHovered ? 1.05 : 1
                }}
                transition={{ duration: 0.5 }}
              />
              
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-24 h-24 md:w-32 md:h-32 bg-white/5 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/10">
                  <span className="text-white/80 font-medium tracking-widest text-xl">PHOTO</span>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-5 -right-5 w-24 h-24 bg-gradient-to-r from-indigo-500/30 to-rose-500/30 rounded-full blur-2xl" />
            <div className="absolute -top-5 -left-5 w-24 h-24 bg-gradient-to-r from-cyan-500/30 to-violet-500/30 rounded-full blur-2xl" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
