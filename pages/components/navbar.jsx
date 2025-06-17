"use client"

import { Menu, X } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { href: "https://www.drunkies.co", label: "Play" },
    { href: "#gallery", label: "Gallery" },
    { href: "/pricing", label: "Pricing" },
  ]

  return (
    <nav className="fixed top-0 w-full bg-black/95 backdrop-blur-sm border-b border-gray-800 z-50">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="bg-gradient-to-r from-lime-500 to-cyan-500 text-black p-2 rounded-lg">
              <div className="w-6 h-6 flex items-center justify-center font-bold">🍻</div>
            </div>
            <span className="text-xl font-bold text-transparent bg-gradient-to-r from-lime-400 to-cyan-400 bg-clip-text">
              DRUNKIES
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-300 hover:text-lime-400 font-medium transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Button className="bg-gradient-to-r from-lime-500 to-cyan-500 hover:from-lime-400 hover:to-cyan-400 text-black font-bold">
              BOOK NOW! 🔥
            </Button>
          </div>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden text-gray-300">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-black border-gray-800">
              <div className="flex items-center justify-between mb-8">
                <Link href="/" className="flex items-center space-x-2" onClick={() => setIsOpen(false)}>
                  <div className="bg-gradient-to-r from-lime-500 to-cyan-500 text-black p-2 rounded-lg">
                    <div className="w-6 h-6 flex items-center justify-center font-bold">🍻</div>
                  </div>
                  <span className="text-xl font-bold text-transparent bg-gradient-to-r from-lime-400 to-cyan-400 bg-clip-text">
                    DRUNKIES
                  </span>
                </Link>
                <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} className="text-gray-300">
                  <X className="h-6 w-6" />
                </Button>
              </div>

              <div className="flex flex-col space-y-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-lg text-gray-300 hover:text-lime-400 font-medium transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
                <Button
                  className="bg-gradient-to-r from-lime-500 to-cyan-500 hover:from-lime-400 hover:to-cyan-400 text-black font-bold w-full mt-4"
                  onClick={() => setIsOpen(false)}
                >
                  BOOK NOW! 🔥
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  )
}
