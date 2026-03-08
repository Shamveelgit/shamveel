"use client"
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useRef } from 'react'

gsap.registerPlugin(useGSAP)

function ProjectsGsapWrapper({ children }: { children: React.ReactNode }) {
    const wrapperRef = useRef<HTMLDivElement>(null)

    useGSAP(() => {
        const wrapper = wrapperRef.current
        if (!wrapper) return

        // ─── Nav: back link ───
        const backLink = wrapper.querySelector(".back-link")
        if (backLink) {
            gsap.fromTo(backLink,
                { x: -30, autoAlpha: 0 },
                { x: 0, autoAlpha: 1, duration: 0.6, delay: 0.1, ease: "power2.out" }
            )
        }

        // ─── Hero: title ───
        const heroTitle = wrapper.querySelector(".projects-hero-title")
        if (heroTitle) {
            gsap.fromTo(heroTitle,
                { y: 80, autoAlpha: 0 },
                { y: 0, autoAlpha: 1, duration: 1, ease: "power3.out" }
            )
        }

        // ─── Hero: subtitle ───
        const heroSubtitle = wrapper.querySelector(".projects-hero-subtitle")
        if (heroSubtitle) {
            gsap.fromTo(heroSubtitle,
                { y: 40, autoAlpha: 0 },
                { y: 0, autoAlpha: 1, duration: 0.8, delay: 0.2, ease: "power3.out" }
            )
        }

        // ─── Filter buttons ───
        const filterBtns = wrapper.querySelectorAll(".filter-btn")
        if (filterBtns.length) {
            gsap.fromTo(filterBtns,
                { y: 20, autoAlpha: 0 },
                { y: 0, autoAlpha: 1, stagger: 0.08, duration: 0.5, delay: 0.4, ease: "power2.out" }
            )
        }

        // ─── CTA section ───
        const ctaTitle = wrapper.querySelector(".cta-title")
        if (ctaTitle) {
            gsap.fromTo(ctaTitle,
                { y: 40, autoAlpha: 0 },
                { y: 0, autoAlpha: 1, duration: 0.8, delay: 0.3, ease: "power3.out" }
            )
        }

        const ctaSubtitle = wrapper.querySelector(".cta-subtitle")
        if (ctaSubtitle) {
            gsap.fromTo(ctaSubtitle,
                { y: 30, autoAlpha: 0 },
                { y: 0, autoAlpha: 1, duration: 0.6, delay: 0.5, ease: "power2.out" }
            )
        }

        const ctaButton = wrapper.querySelector(".cta-button")
        if (ctaButton) {
            gsap.fromTo(ctaButton,
                { y: 20, autoAlpha: 0 },
                { y: 0, autoAlpha: 1, duration: 0.6, delay: 0.7, ease: "power2.out" }
            )
        }
    }, { scope: wrapperRef })

    return (
        <div ref={wrapperRef} className="min-h-screen bg-secondary overflow-hidden">
            {children}
        </div>
    )
}

export default ProjectsGsapWrapper
