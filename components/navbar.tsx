"use client"

import { useState, useEffect } from "react"
import { Logo } from "@/components/ui/logo"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [scrolled])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setMobileMenuOpen(false)
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-nav py-3 dark:glass-nav-dark" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Logo />

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {[
            { name: "Home", id: "home" },
            { name: "About", id: "about" },
            { name: "Projects", id: "projects" },
            { name: "Tech Stack", id: "tech-stack" },
            { name: "Contact", id: "contact" },
          ].map((item) => (
            <button
              key={item.name}
              onClick={() => scrollToSection(item.id)}
              className="text-foreground/80 hover:text-foreground transition-colors font-medium relative nav-link"
            >
              {item.name}
            </button>
          ))}
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Button className="bg-purple-600 hover:bg-purple-700 interactive-button">Resume</Button>
          </div>
        </nav>

        {/* Mobile Menu Button and Theme Toggle */}
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <button
            className="text-foreground p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-nav dark:glass-nav-dark border-t border-border">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
            {[
              { name: "Home", id: "home" },
              { name: "About", id: "about" },
              { name: "Projects", id: "projects" },
              { name: "Tech Stack", id: "tech-stack" },
              { name: "Contact", id: "contact" },
            ].map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.id)}
                className="text-foreground/80 hover:text-foreground transition-colors py-2 font-medium text-left"
              >
                {item.name}
              </button>
            ))}
            <Button className="bg-purple-600 hover:bg-purple-700 mt-2 interactive-button">Resume</Button>
          </nav>
        </div>
      )}
    </header>
  )
}
