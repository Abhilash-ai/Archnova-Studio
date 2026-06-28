"use client"

import { ArrowRight } from "lucide-react"
import { HighlightedText } from "./highlighted-text"

export function CallToAction() {
  return (
    <section id="contact" className="py-32 md:py-29 bg-foreground text-primary-foreground">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <p className="font-sans text-primary-foreground/60 text-xs md:text-sm tracking-[0.4em] uppercase mb-12">Start a Project</p>

          <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl font-medium leading-[1.1] tracking-tight mb-12 text-balance">
            Ready to create
            <br />
            something <HighlightedText><span className="italic">extraordinary</span></HighlightedText>?
          </h2>

          <p className="font-sans text-primary-foreground/70 text-lg md:text-xl leading-relaxed mb-16 max-w-2xl mx-auto">
            Let's discuss how we can bring your vision to life. Every great space begins with a conversation.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:hello@archnova.com"
              className="inline-flex items-center justify-center gap-3 bg-primary-foreground text-foreground px-8 py-4 text-sm tracking-wide hover:bg-primary-foreground/90 transition-colors duration-300 group"
            >
              Begin the conversation
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="tel:+1234567890"
              className="inline-flex items-center justify-center gap-2 border border-primary-foreground/30 px-8 py-4 text-sm tracking-wide hover:bg-primary-foreground/10 transition-colors duration-300"
            >
              Schedule a call
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}