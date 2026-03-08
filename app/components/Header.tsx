"use client"
import React, { useState, useRef, useEffect } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import Link from 'next/link'
import Image from 'next/image'

function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const backdropRef = useRef<HTMLDivElement>(null)
  const tlRef = useRef<gsap.core.Timeline | null>(null)

  // Build a reusable GSAP timeline for open/close
  useGSAP(() => {
    if (!menuRef.current || !backdropRef.current) return

    const links = menuRef.current.querySelectorAll("li")

    const tl = gsap.timeline({ paused: true })
      .to(backdropRef.current, {
        opacity: 1,
        duration: 0.3,
        ease: "power2.out",
        pointerEvents: "auto",
      }, 0)
      .to(menuRef.current, {
        x: 0,
        duration: 0.4,
        ease: "power3.out",
      }, 0)
      .from(links, {
        x: 40,
        opacity: 0,
        duration: 0.3,
        stagger: 0.06,
        ease: "power2.out",
      }, 0.15)

    tlRef.current = tl
  }, { dependencies: [] })

  useEffect(() => {
    if (!tlRef.current) return
    if (isOpen) {
      tlRef.current.play()
      document.body.style.overflow = "hidden"
    } else {
      tlRef.current.reverse()
      document.body.style.overflow = ""
    }
  }, [isOpen])

  // Close on escape key
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false)
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [])

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Works", href: "/projects" },
    { label: "Contact", href: "/contact" },
  ]

  return (
    <>
      <header className="bg-white capitalize flex items-center justify-between px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-3 w-11/12 sm:w-10/12 md:w-9/12 lg:w-8/12 h-12 sm:h-14 mt-10 sm:mt-8 md:mt-6 rounded-full z-50">
        <div className="w-16 sm:w-20 md:w-24">
          <Image
            src="/Shamveel1.svg"
            alt="Muhammed Shamveel — Portfolio Logo"
            title="Muhammed Shamveel — Full-Stack Developer"
            width={96}
            height={96}
            className="w-full h-auto"
          />
        </div>

        {/* ── Desktop nav ── */}
        <nav className="flex max-md:hidden *:list-none items-center justify-between text-lg lg:text-xl font-semibold font-stick-no-bills gap-6 lg:gap-12">
          {navLinks.slice(0, 3).map((link) => (
            <li key={link.label}>
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}
        </nav>
        <div className="max-md:hidden">
          <Link href={"/contact"} className="bg-background-100 font-stick-no-bills rounded-xl w-20 lg:w-24 h-9 lg:h-10 text-sm lg:text-base text-white flex items-center justify-center">
            Contact
          </Link>
        </div>

        {/* ── Hamburger button ── */}
        <button
          onClick={() => setIsOpen((v) => !v)}
          className="md:hidden w-7 h-7 sm:w-8 sm:h-8 cursor-pointer relative z-60 flex items-center justify-center"
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          <div className="w-5 h-4 flex flex-col justify-between">
            <span className={`block h-0.5 w-full bg-black rounded transition-all duration-300 origin-center ${isOpen ? "rotate-45 translate-y-1.75" : ""}`} />
            <span className={`block h-0.5 w-3/4 bg-black rounded transition-all duration-300 ${isOpen ? "opacity-0 scale-x-0" : ""}`} />
            <span className={`block h-0.5 w-full bg-black rounded transition-all duration-300 origin-center ${isOpen ? "-rotate-45 -translate-y-1.75" : ""}`} />
          </div>
        </button>
      </header>

      {/* ── Backdrop ── */}
      <div
        ref={backdropRef}
        onClick={() => setIsOpen(false)}
        className="fixed inset-0 bg-black/50 opacity-0 pointer-events-none z-55 md:hidden"
      />

      {/* ── Mobile slide-out menu ── */}
      <div
        ref={menuRef}
        className="fixed top-0 right-0 h-dvh w-72 sm:w-80 bg-secondary z-58 md:hidden translate-x-full flex flex-col"
      >
        <div className="flex items-center justify-between px-6 pt-6 pb-4">
          <div className="w-20">
            <Image src="/Shamveel1.svg" alt="Muhammed Shamveel — Portfolio Logo" title="Muhammed Shamveel Portfolio" width={80} height={80} className="w-full h-auto invert" />
          </div>
          <button
            onClick={() => setIsOpen((v) => !v)}
            className="md:hidden w-7 h-7 sm:w-8 sm:h-8 cursor-pointer relative z-60 flex items-center justify-center"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            <div className="w-5 h-4 flex flex-col justify-between">
              <span className={`block h-0.5 w-full bg-black rounded transition-all duration-300 origin-center ${isOpen ? "rotate-45 translate-y-1.75" : ""}`} />
              <span className={`block h-0.5 w-3/4 bg-black rounded transition-all duration-300 ${isOpen ? "opacity-0 scale-x-0" : ""}`} />
              <span className={`block h-0.5 w-full bg-black rounded transition-all duration-300 origin-center ${isOpen ? "-rotate-45 -translate-y-1.75" : ""}`} />
            </div>
          </button>

        </div>

        <nav className="flex-1 px-6 pt-4">
          <ul className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block py-3 px-4 text-xl font-stick-no-bills font-semibold text-white rounded-lg hover:bg-white/10 transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="px-6 pb-8">
          <button
            onClick={() => setIsOpen(false)}
            className="w-full py-3 bg-background-100 font-stick-no-bills rounded-xl text-base text-white flex items-center justify-center hover:bg-background transition-colors"
          >
            Contact
          </button>
        </div>
      </div>
    </>
  )
}

export default Header