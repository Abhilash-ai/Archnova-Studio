"use client"
import { motion } from "framer-motion"
import { Hammer, Sparkles } from "lucide-react"

export function ComingSoon({ title, description }: { title: string, description: string }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative"
      >
        <div className="absolute -inset-1 bg-gradient-to-r from-primary to-primary/50 rounded-full blur opacity-20 animate-pulse"></div>
        <div className="relative bg-card border border-border p-6 rounded-full shadow-lg mb-8">
          <Hammer className="h-10 w-10 text-primary" />
        </div>
      </motion.div>

      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-3xl font-bold tracking-tight mb-3 flex items-center gap-2 text-foreground"
      >
        {title} <Sparkles className="h-6 w-6 text-yellow-500" />
      </motion.h1>
      
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-muted-foreground max-w-md mx-auto text-lg"
      >
        {description}
      </motion.p>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mt-12 p-6 rounded-2xl bg-muted/50 border border-border max-w-xl w-full"
      >
        <div className="flex items-center justify-between text-sm">
          <span className="text-muted-foreground font-medium">Development Progress</span>
          <span className="text-primary font-bold">In Works</span>
        </div>
        <div className="w-full h-2 bg-border rounded-full mt-3 overflow-hidden">
          <motion.div 
            className="h-full bg-primary"
            initial={{ width: 0 }}
            animate={{ width: "65%" }}
            transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
          />
        </div>
      </motion.div>
    </div>
  )
}
