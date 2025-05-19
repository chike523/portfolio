"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"

interface RevealProps {
  children: React.ReactNode
  className?: string
}

export function Reveal({ children, className = "" }: RevealProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      {
        threshold: 0.1,
      },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [])

  return (
    <div ref={ref} className={`reveal ${isVisible ? "active" : ""} ${className}`}>
      {children}
    </div>
  )
}
