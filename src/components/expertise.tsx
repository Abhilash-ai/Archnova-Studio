"use client"

import { useEffect, useRef, useState } from "react"
import { Home, Building, Armchair, Trees } from "lucide-react"
import { HighlightedText } from "./highlighted-text"

const expertiseAreas = [
  {
    title: "Residential Design",
    description: "Creating homes that balance beauty with livability, where every space serves both form and function.",
    icon: Home,
  },
  {
    title: "Commercial Architecture",
    description:
      "Designing workspaces that inspire productivity and reflect the values of forward-thinking organizations.",
    icon: Building,
  },
  {
    title: "Interior Architecture",
    description:
      "Curating interiors that harmonize with their architectural shells, creating cohesive spatial experiences.",
    icon: Armchair,
  },
  {
    title: "Urban Planning",
    description:
      "Shaping communities through thoughtful integration of public spaces, structures, and natural elements.",
    icon: Trees,
  },
]

export function Expertise() {
  const [visibleItems, setVisibleItems] = useState<number[]>([])
  const sectionRef = useRef<HTMLElement>(null)
  const itemRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute("data-index"))
          if (entry.isIntersecting) {
            setVisibleItems((prev) => [...new Set([...prev, index])])
          }
        })
      },
      { threshold: 0.2 },
    )

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section id="services" ref={sectionRef} className="py-32 md:py-29">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-3xl mb-20">
          <p className="font-sans text-muted-foreground text-xs md:text-sm tracking-[0.4em] uppercase mb-12">What We Do</p>
          <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[1.1] tracking-tight mb-8 text-balance">
            <HighlightedText><span className="italic">Expertise</span></HighlightedText> refined
            <br />
            through practice
          </h2>
          <p className="font-sans text-muted-foreground text-lg md:text-xl leading-relaxed max-w-2xl">
            Every project draws from decades of collective experience, resulting in architecture that is both innovative
            and timeless.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-16">
          {expertiseAreas.map((area, index) => {
            const Icon = area.icon
            return (
              <div
                key={area.title}
                ref={(el) => {
                  itemRefs.current[index] = el
                }}
                data-index={index}
                className={`relative pl-8 border-l border-border transition-all duration-700 ${
                  visibleItems.includes(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div
                  className={`transition-all duration-1000 ${
                    visibleItems.includes(index) ? "animate-draw-stroke" : ""
                  }`}
                  style={{
                    transitionDelay: `${index * 150}ms`,
                  }}
                >
                  <Icon className="w-10 h-10 mb-4 text-foreground" strokeWidth={1.25} />
                </div>
                <h3 className="font-serif text-2xl md:text-3xl mb-4">{area.title}</h3>
                <p className="font-sans text-muted-foreground leading-relaxed text-sm md:text-base max-w-sm">{area.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}