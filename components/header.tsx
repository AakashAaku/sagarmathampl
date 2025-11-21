"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const links = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Divisions", href: "#divisions" },
    { name: "Products", href: "#products" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur border-b border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
               <img
              src="/Capture-removebg-preview.png"
              alt="Organic vegetables"
              className="w-full h-auto rounded-xl shadow-lg"
            />
              
            </div>
            <span className="font-bold text-lg text-foreground hidden sm:block">Sagarmatha</span>
          </div>

          <nav className="hidden md:flex gap-8">
            {links.map((link) => (
              <a key={link.name} href={link.href} className="text-foreground/70 hover:text-primary transition-colors">
                {link.name}
              </a>
            ))}
          </nav>

          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <nav className="md:hidden pb-4 flex flex-col gap-4">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-foreground/70 hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>
  )
}
