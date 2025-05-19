"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Reveal } from "@/components/reveal"

interface Project {
  id: number
  title: string
  description: string
  image: string
  category: string
}

export function ProjectFilter() {
  const [activeCategory, setActiveCategory] = useState("all")

  const projects: Project[] = [
    {
      id: 1,
      title: "Portfolio Website",
      description: "A personal portfolio website built with Next.js and Tailwind CSS.",
      image: "/placeholder.svg?height=300&width=500&text=Portfolio",
      category: "web",
    },
    {
      id: 2,
      title: "E-commerce Platform",
      description: "A full-stack e-commerce platform with payment integration.",
      image: "/placeholder.svg?height=300&width=500&text=E-commerce",
      category: "web",
    },
    {
      id: 3,
      title: "Mobile App UI",
      description: "UI/UX design for a fitness tracking mobile application.",
      image: "/placeholder.svg?height=300&width=500&text=Mobile+UI",
      category: "design",
    },
    {
      id: 4,
      title: "Brand Identity",
      description: "Complete brand identity design for a tech startup.",
      image: "/placeholder.svg?height=300&width=500&text=Brand+Identity",
      category: "design",
    },
    {
      id: 5,
      title: "Promotional Video",
      description: "A promotional video for a new product launch.",
      image: "/placeholder.svg?height=300&width=500&text=Promo+Video",
      category: "video",
    },
    {
      id: 6,
      title: "Dashboard UI",
      description: "Admin dashboard interface with data visualization.",
      image: "/placeholder.svg?height=300&width=500&text=Dashboard",
      category: "web",
    },
  ]

  const filteredProjects = activeCategory === "all" ? projects : projects.filter((p) => p.category === activeCategory)

  const categories = [
    { id: "all", name: "All Projects" },
    { id: "web", name: "Web Development" },
    { id: "design", name: "Design" },
    { id: "video", name: "Video" },
  ]

  return (
    <div>
      <Reveal>
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full transition-all ${
                activeCategory === category.id
                  ? "bg-purple-600 text-white"
                  : "glass hover:bg-purple-600/20 text-foreground/80"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </Reveal>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 project-grid">
        {filteredProjects.map((project) => (
          <Reveal key={project.id}>
            <Card className="glass-card overflow-hidden hover:border-purple-500/50 transition-all duration-300">
              <div className="aspect-video relative bg-zinc-800">
                <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-foreground/70 mb-4">{project.description}</p>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-xs border-border hover:bg-background/20 interactive-button"
                  >
                    View Project
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-xs text-purple-500 hover:bg-purple-950/50 interactive-button"
                  >
                    Source Code
                  </Button>
                </div>
              </CardContent>
            </Card>
          </Reveal>
        ))}
      </div>
    </div>
  )
}
