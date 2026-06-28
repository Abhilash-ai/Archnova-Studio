"use client"

import { useState, useEffect, useRef } from "react"
import { ArrowUpRight } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "Chhatrapati Shivaji Terminus",
    category: "Victorian Gothic",
    location: "Mumbai, India",
    year: "1888",
    image: "/images/project-1.jpg",
  },
  {
    id: 2,
    title: "Mysore Palace",
    category: "Indo-Saracenic",
    location: "Mysuru, India",
    year: "1912",
    image: "/images/project-2.jpg",
  },
  {
    id: 3,
    title: "Hawa Mahal",
    category: "Rajput Architecture",
    location: "Jaipur, India",
    year: "1799",
    image: "/images/project-3.jpg",
  },
  {
    id: 4,
    title: "Lotus Temple",
    category: "Modern Expressive",
    location: "New Delhi, India",
    year: "1986",
    image: "/images/project-4.jpg",
  },
]

export function Projects() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)
  const [revealedImages, setRevealedImages] = useState<Set<number>>(new Set())
  const imageRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = imageRefs.current.indexOf(entry.target as HTMLDivElement)
            if (index !== -1) {
              setRevealedImages((prev) => new Set(prev).add(projects[index].id))
            }
          }
        })
      },
      { threshold: 0.2 },
    )

    imageRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section id="projects" className="py-32 md:py-29 bg-secondary/50">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <p className="font-sans text-muted-foreground text-xs md:text-sm tracking-[0.4em] uppercase mb-6">Selected Works</p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight">Featured Projects</h2>
          </div>
          <a
            href="#"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group"
          >
            View all projects
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <article
              key={project.id}
              className="group cursor-pointer"
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div ref={(el) => { imageRefs.current[index] = el }} className="relative overflow-hidden aspect-[4/3] rounded-sm mb-6">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className={`w-full h-full object-cover transition-all duration-700 grayscale-[0.5] brightness-[0.85] group-hover:grayscale-0 group-hover:brightness-100 ${
                    hoveredId === project.id ? "scale-105" : "scale-100"
                  }`}
                />
                <div
                  className="absolute inset-0 bg-primary origin-top"
                  style={{
                    transform: revealedImages.has(project.id) ? "scaleY(0)" : "scaleY(1)",
                    transition: "transform 1.5s cubic-bezier(0.76, 0, 0.24, 1)", // Increased duration from 0.6s to 1.5s for slower reveal
                  }}
                />
              </div>

              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-serif text-2xl md:text-3xl mb-2 group-hover:underline underline-offset-4">{project.title}</h3>
                  <p className="font-sans text-muted-foreground text-sm md:text-base">
                    {project.category} · {project.location}
                  </p>
                </div>
                <span className="text-muted-foreground/60 text-sm">{project.year}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}