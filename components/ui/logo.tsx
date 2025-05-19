import Link from "next/link"
import Image from "next/image"
import { useTheme } from "next-themes"

export function Logo({ size = "small" }: { size?: "small" | "medium" | "large" }) {
  const { theme } = useTheme()
  const dimensions = {
    small: { width: 32, height: 32 },
    medium: { width: 48, height: 48 },
    large: { width: 64, height: 64 },
  }

  return (
    <Link href="/" className="relative flex items-center gap-2 group">
      <div
        className={`relative w-${dimensions[size].width / 4} h-${
          dimensions[size].height / 4
        } overflow-hidden rounded-md`}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <Image 
            src={theme === "dark" ? "/logo.png" : "/logo-dark.png"} 
            alt="Chike Logo" 
            width={dimensions[size].width} 
            height={dimensions[size].height}
            className="object-contain"
          />
        </div>
      </div>
      <span className="font-medium text-sm md:text-base text-foreground group-hover:text-purple-400 transition-colors">
        Chike
      </span>
    </Link>
  )
}
