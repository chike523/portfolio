"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Github, Linkedin, Mail, Twitter, ArrowDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/navbar"
import { Loader } from "@/components/loader"
import { Reveal } from "@/components/reveal"
import { ParticleBackground } from "@/components/particle-background"
import { ProjectFilter } from "@/components/project-filter"
import { TechStack } from "@/components/tech-stack"
import { HeroCircles } from "@/components/hero-circles"
import ScrambleGlitch from "@/components/ScrambleGlitch"
import { Logo } from "@/components/ui/logo"

export default function Portfolio() {
  const roles = ["Software Developer", "Front End Developer", "Videographer", "Graphics Designer"];
  const [currentRole, setCurrentRole] = useState(roles[0]);
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const typingSpeed = 100; // Speed for typing
    const deletingSpeed = 50; // Speed for deleting
    const pauseTime = 2000; // Time to pause after typing

    const handleTyping = () => {
      if (isDeleting) {
        if (charIndex > 0) {
          setCharIndex(charIndex - 1);
        } else {
          setIsDeleting(false);
          setCurrentRole(roles[(roles.indexOf(currentRole) + 1) % roles.length]);
        }
      } else {
        if (charIndex < currentRole.length) {
          setCharIndex(charIndex + 1);
        } else {
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      }
    };

    const timer = setTimeout(handleTyping, isDeleting ? deletingSpeed : typingSpeed);
    return () => clearTimeout(timer);
  }, [currentRole, charIndex, isDeleting]);

  return (
    <>
      <Loader />
      <Navbar />
      <ParticleBackground />
      <main className="min-h-screen bg-background text-foreground">
        {/* Hero Section */}
        <section id="home" className="relative h-screen flex items-center overflow-hidden">
          <HeroCircles />
          <div className="container mx-auto px-4 md:px-12 lg:px-24 z-10 flex flex-col md:flex-row items-start justify-between gap-12 border border-border">
            <div className="md:w-1/2 space-y-6 text-left items-start">
              <h1 className="text-5xl md:text-7xl font-bold tracking-tighter font-orbitron">
                Hi, I&apos;m <ScrambleGlitch text="Chike" />
              </h1>
              <div className="h-20">
                <p className="text-3xl md:text-5xl font-light font-inter">
                  and I&apos;m a{" "}
                  <span className="text-purple-accent font-medium transition-all duration-500 ease-in-out font-orbitron">
                    {currentRole.substring(0, charIndex)}
                  </span>
                </p>
              </div>
              <div className="pt-6 flex gap-4">
                <Button className="bg-purple-600 hover:bg-purple-700 interactive-button">My Work</Button>
                <Button
                  variant="outline"
                  className="border-purple-600 text-purple-500 hover:bg-purple-950/50 interactive-button"
                >
                  Contact Me
                </Button>
              </div>
            </div>
            <div className="w-full md:w-1/2 flex justify-center md:justify-end">
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-purple-500/50">
                <Image src="/hero-me.png?height=400&width=400" alt="Chike" fill className="object-cover" priority />
              </div>
            </div>
          </div>

          <a
            href="#about"
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-foreground/70 hover:text-foreground transition-colors"
          >
            <span className="text-sm mb-2">Scroll Down</span>
            <ArrowDown className="animate-bounce" />
          </a>
        </section>

        {/* About Section */}
        <section id="about" className="py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <Reveal>
              <h2 className="text-4xl md:text-5xl font-bold mb-12 tracking-tighter font-orbitron">About Me</h2>
            </Reveal>
            <div className="grid md:grid-cols-2 gap-12">
              <Reveal>
                <div className="glass p-6 rounded-xl">
                  <p className="text-lg text-foreground/80 leading-relaxed font-inter">
                    I'm a passionate creator with expertise across multiple disciplines. My journey in tech and design
                    has equipped me with a unique perspective that I bring to every project. I believe in creating
                    solutions that are not only functional but also aesthetically pleasing and user-friendly.
                  </p>
                  <p className="text-lg text-foreground/80 leading-relaxed mt-4 font-inter">
                    When I'm not coding or designing, you can find me exploring new technologies, creating videos, or
                    working on personal creative projects.
                  </p>
                </div>
              </Reveal>
              <div className="space-y-6">
                <Reveal>
                  <h3 className="text-2xl font-semibold text-purple-500 font-orbitron">Skills</h3>
                </Reveal>
                <div className="grid grid-cols-2 gap-4">
                  <Reveal>
                    <div className="glass p-4 rounded-lg">
                      <h4 className="font-medium text-foreground mb-3 font-orbitron">Development</h4>
                      <ul className="text-foreground/70 space-y-2">
                        <li className="flex items-center gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-purple-500"></span>
                          JavaScript / TypeScript
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-purple-500"></span>
                          React / Next.js
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-purple-500"></span>
                          Node.js
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-purple-500"></span>
                          HTML / CSS
                        </li>
                      </ul>
                    </div>
                  </Reveal>
                  <Reveal>
                    <div className="glass p-4 rounded-lg">
                      <h4 className="font-medium text-foreground mb-3 font-orbitron">Design</h4>
                      <ul className="text-foreground/70 space-y-2">
                        <li className="flex items-center gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-purple-500"></span>
                          UI/UX Design
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-purple-500"></span>
                          Graphic Design
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-purple-500"></span>
                          Video Editing
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-purple-500"></span>
                          Motion Graphics
                        </li>
                      </ul>
                    </div>
                  </Reveal>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-24">
          <div className="container mx-auto px-4">
            <Reveal>
              <h2 className="text-4xl md:text-5xl font-bold mb-12 tracking-tighter font-orbitron">My Projects</h2>
            </Reveal>
            <ProjectFilter />
          </div>
        </section>

        {/* Tech Stack Section */}
        <TechStack />

        {/* Contact Section */}
        <section id="contact" className="py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <Reveal>
              <h2 className="text-4xl md:text-5xl font-bold mb-12 tracking-tighter font-orbitron">Get In Touch</h2>
            </Reveal>
            <div className="grid md:grid-cols-2 gap-12">
              <Reveal>
                <div>
                  <p className="text-lg text-foreground/80 mb-8 font-inter">
                    I'm always open to discussing new projects, creative ideas or opportunities to be part of your
                    vision.
                  </p>
                  <div className="space-y-4">
                    <a
                      href="#"
                      className="flex items-center gap-3 text-foreground/80 hover:text-purple-500 transition-colors"
                    >
                      <Mail className="h-5 w-5" />
                      <span>hello@chikeportfolio.com</span>
                    </a>
                    <div className="flex gap-4 pt-4">
                      <a
                        href="#"
                        className="glass p-3 rounded-full hover:bg-purple-900/30 hover:text-purple-500 transition-all"
                      >
                        <Twitter className="h-5 w-5" />
                      </a>
                      <a
                        href="#"
                        className="glass p-3 rounded-full hover:bg-purple-900/30 hover:text-purple-500 transition-all"
                      >
                        <Github className="h-5 w-5" />
                      </a>
                      <a
                        href="#"
                        className="glass p-3 rounded-full hover:bg-purple-900/30 hover:text-purple-500 transition-all"
                      >
                        <Linkedin className="h-5 w-5" />
                      </a>
                    </div>
                  </div>
                </div>
              </Reveal>
              <Reveal>
                <div className="glass-form p-8">
                  <form className="space-y-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="w-full glass-input rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full glass-input rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">
                        Message
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        className="w-full glass-input rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
                      ></textarea>
                    </div>
                    <Button className="w-full bg-purple-600 hover:bg-purple-700 interactive-button">
                      Send Message
                    </Button>
                  </form>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 border-t border-border">
          <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
            <p className="text-foreground/60">© {new Date().getFullYear()} Chike. All rights reserved.</p>
            <div className="flex gap-8 mt-4 md:mt-0">
              <a href="#" className="text-foreground/60 hover:text-purple-500 transition-colors">
                Privacy
              </a>
              <a href="#" className="text-foreground/60 hover:text-purple-500 transition-colors">
                Terms
              </a>
            </div>
          </div>
        </footer>
      </main>
    </>
  )
}
