"use client"

import type React from "react"

import { useState } from "react"
import { Reveal } from "@/components/reveal"
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiGit,
  SiGithub,
  SiFigma,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiAdobepremierepro,
} from "react-icons/si"

interface TechItem {
  name: string
  icon: React.ReactNode
  category: "frontend" | "backend" | "design" | "tools"
  description: string
}

export function TechStack() {
  const [activeCategory, setActiveCategory] = useState<string>("all")

  const techItems: TechItem[] = [
    {
      name: "JavaScript",
      icon: <SiJavascript className="text-yellow-400" />,
      category: "frontend",
      description: "Core language for web development",
    },
    {
      name: "TypeScript",
      icon: <SiTypescript className="text-blue-500" />,
      category: "frontend",
      description: "Type-safe JavaScript for better code quality",
    },
    {
      name: "React",
      icon: <SiReact className="text-blue-400" />,
      category: "frontend",
      description: "Library for building user interfaces",
    },
    {
      name: "Next.js",
      icon: <SiNextdotjs />,
      category: "frontend",
      description: "React framework for production",
    },
    {
      name: "Node.js",
      icon: <SiNodedotjs className="text-green-500" />,
      category: "backend",
      description: "JavaScript runtime for server-side code",
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss className="text-cyan-400" />,
      category: "frontend",
      description: "Utility-first CSS framework",
    },
    {
      name: "HTML5",
      icon: <SiHtml5 className="text-orange-500" />,
      category: "frontend",
      description: "Markup language for web pages",
    },
    {
      name: "CSS3",
      icon: <SiCss3 className="text-blue-500" />,
      category: "frontend",
      description: "Styling language for web pages",
    },
    {
      name: "Git",
      icon: <SiGit className="text-orange-600" />,
      category: "tools",
      description: "Version control system",
    },
    {
      name: "GitHub",
      icon: <SiGithub />,
      category: "tools",
      description: "Platform for code hosting and collaboration",
    },
    {
      name: "Figma",
      icon: <SiFigma className="text-purple-400" />,
      category: "design",
      description: "Design tool for UI/UX",
    },
    {
      name: "Photoshop",
      icon: <SiAdobephotoshop className="text-blue-600" />,
      category: "design",
      description: "Image editing software",
    },
    {
      name: "Illustrator",
      icon: <SiAdobeillustrator className="text-orange-500" />,
      category: "design",
      description: "Vector graphics editor",
    },
    {
      name: "Premiere Pro",
      icon: <SiAdobepremierepro className="text-purple-600" />,
      category: "design",
      description: "Video editing software",
    },
  ]

  const filteredTech =
    activeCategory === "all" ? techItems : techItems.filter((item) => item.category === activeCategory)

  const categories = [
    { id: "all", name: "All" },
    { id: "frontend", name: "Frontend" },
    { id: "backend", name: "Backend" },
    { id: "design", name: "Design" },
    { id: "tools", name: "Tools" },
  ]

  return (
    <section id="tech-stack" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <Reveal>
          <h2 className="text-4xl md:text-5xl font-bold mb-12 tracking-tighter">Tech Stack</h2>
        </Reveal>

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

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredTech.map((tech, index) => (
            <Reveal key={tech.name}>
              <div className="glass p-6 rounded-xl hover:border-purple-500/30 transition-all tech-card group">
                <div className="flex flex-col items-center text-center">
                  <div className="text-4xl mb-4 tech-icon">{tech.icon}</div>
                  <h3 className="text-lg font-medium mb-2">{tech.name}</h3>
                  <p className="text-sm text-foreground/70">{tech.description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
