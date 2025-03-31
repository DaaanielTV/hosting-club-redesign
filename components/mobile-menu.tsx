"use client"

import { useState } from "react"
import Link from "next/link"
import { X, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"

interface NavigationItem {
  href: string
  label: string
}

const navigation: NavigationItem[] = [
  { href: "#features", label: "Features" },
  { href: "#upgrades", label: "Upgrades" },
  { href: "#community", label: "Community" },
]

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  return (
    <div className="md:hidden">
      <Button variant="ghost" size="icon" onClick={toggleMenu} aria-label="Toggle menu">
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </Button>

      {isOpen && (
        <div className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm">
          <div className="container h-full flex flex-col">
            <div className="flex items-center justify-between py-4">
              <div className="flex items-center gap-2">
                <div className="relative h-8 w-8">
                  <div className="absolute inset-0 rotate-3 bg-emerald-500 rounded-md blur-[8px] opacity-70"></div>
                  <div className="absolute inset-0 bg-gray-950 rounded-md flex items-center justify-center border border-emerald-500/50">
                    <span className="text-emerald-400 text-lg font-bold">⚡</span>
                  </div>
                </div>
                <span className="font-bold text-white tracking-tight">HOSTING-CLUB.DE</span>
              </div>
              <Button variant="ghost" size="icon" onClick={closeMenu} aria-label="Close menu">
                <X className="h-6 w-6" />
              </Button>
            </div>

            <nav className="flex-1 flex flex-col justify-center">
              <ul className="space-y-8">
                {navigation.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-2xl font-medium text-foreground hover:text-emerald-400 transition-colors"
                      onClick={closeMenu}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="mt-12">
                <Button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-6" onClick={closeMenu}>
                  Join Discord
                </Button>
              </div>
            </nav>
          </div>
        </div>
      )}
    </div>
  )
}

