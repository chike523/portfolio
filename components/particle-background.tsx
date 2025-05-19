"use client"

import { useCallback, useEffect, useRef } from "react"
import { useTheme } from "next-themes"

interface Particle {
  x: number
  y: number
  size: number
  speedX: number
  speedY: number
  color: string
}

export function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { theme } = useTheme()

  const drawParticles = useCallback(
    (ctx: CanvasRenderingContext2D, particles: Particle[], width: number, height: number) => {
      ctx.clearRect(0, 0, width, height)

      // Draw particles
      particles.forEach((particle) => {
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = particle.color
        ctx.fill()
      })

      // Draw connections
      ctx.strokeStyle = theme === "dark" ? "rgba(255, 255, 255, 0.05)" : "rgba(0, 0, 0, 0.05)"
      ctx.lineWidth = 0.5

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 150) {
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
          }
        }
      }
    },
    [theme],
  )

  const updateParticles = useCallback((particles: Particle[], width: number, height: number) => {
    return particles.map((particle) => {
      // Update position
      particle.x += particle.speedX
      particle.y += particle.speedY

      // Bounce off edges
      if (particle.x > width || particle.x < 0) {
        particle.speedX = -particle.speedX
      }
      if (particle.y > height || particle.y < 0) {
        particle.speedY = -particle.speedY
      }

      return particle
    })
  }, [])

  const initParticles = useCallback(
    (width: number, height: number, count: number): Particle[] => {
      const particles: Particle[] = []
      const baseColor = theme === "dark" ? "255, 255, 255" : "0, 0, 0"
      const accentColor = "147, 51, 234" // Purple

      for (let i = 0; i < count; i++) {
        const useAccent = Math.random() > 0.8 // 20% chance for accent color
        const color = useAccent ? accentColor : baseColor
        const opacity = useAccent ? Math.random() * 0.5 + 0.2 : Math.random() * 0.2 + 0.05

        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          size: Math.random() * 2 + 0.5,
          speedX: (Math.random() - 0.5) * 0.5,
          speedY: (Math.random() - 0.5) * 0.5,
          color: `rgba(${color}, ${opacity})`,
        })
      }

      return particles
    },
    [theme],
  )

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    handleResize()
    window.addEventListener("resize", handleResize)

    let particles = initParticles(canvas.width, canvas.height, 80)
    let animationFrameId: number

    const animate = () => {
      particles = updateParticles(particles, canvas.width, canvas.height)
      drawParticles(ctx, particles, canvas.width, canvas.height)
      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", handleResize)
      cancelAnimationFrame(animationFrameId)
    }
  }, [drawParticles, initParticles, updateParticles])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
      style={{ opacity: 0.7 }}
      aria-hidden="true"
    />
  )
}
