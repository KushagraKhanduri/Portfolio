"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Twitter, Mail } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="py-12 px-4 md:px-6 bg-[#030303] border-t border-white/5">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold text-white mb-2">See Ya!</h3>
            <p className="text-white/60">Let's work together and build something GREAT!</p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex space-x-4"
          >
            <a 
              href="https://www.linkedin.com/in/kushagra-khanduri-06048126a" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4 text-white/80" />
            </a>
            <a 
              href="https://github.com/KushagraKhanduri" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors duration-200"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4 text-white/80" />
            </a>
            <a 
              href="https://x.com/Who_Kushagra" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors duration-200"
              aria-label="Twitter"
            >
              <Twitter className="w-4 h-4 text-white/80" />
            </a>
            <a 
              href="mailto:kushagrakhanduri3114@gmail.com" 
              className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors duration-200"
              aria-label="Email"
            >
              <Mail className="w-4 h-4 text-white/80" />
            </a>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-8 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-white/40 text-sm">© {currentYear} Kushagra Khanduri. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="text-white/40 hover:text-white/70 text-sm transition-colors duration-200">Privacy Policy</a>
            <a href="#" className="text-white/40 hover:text-white/70 text-sm transition-colors duration-200">Terms of Service</a>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}