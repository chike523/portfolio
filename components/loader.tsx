"use client"

import { useEffect, useState } from "react"

export function Loader() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  if (!loading) return null

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black">
      <div className="flex flex-col items-center">
        <div className="relative">
          <div className="logo-container">
            <div className="logo-inner">
              <span className="font-bold text-2xl">CHIKE'S PORTFOLIO</span>
            </div>
            <div className="logo-reflection"></div>
          </div>
        </div>
        <p className="mt-4 text-white/80 font-medium text-sm animate-pulse">Loading...</p>
      </div>
    </div>
  )
}
