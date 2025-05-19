import type React from "react"
import "../styles/globals.css"
import { Inter, Orbitron } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"

// Use Inter as our techy, modern font
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const orbitron = Orbitron({ subsets: ['latin'] })

export const metadata = {
  title: "Chike | Portfolio",
  description:
    "Personal portfolio of Chike - Software Developer, Front End Developer, Videographer, and Graphics Designer",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${orbitron.className} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
