"use client"
import React, { useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

import ProjectsGrid from './ProjectsGrid'
import { categories, projects } from '../data'

gsap.registerPlugin(useGSAP)

function FilterableProjects() {
    const [activeFilter, setActiveFilter] = useState("All")
    const sectionRef = useRef<HTMLDivElement>(null)

    const filteredProjects = activeFilter === "All"
        ? projects
        : projects.filter((p) => p.category === activeFilter)

    // Animate cards on mount and every filter change
    useGSAP(() => {
        const cards = sectionRef.current?.querySelectorAll(".project-card")
        if (cards?.length) {
            gsap.fromTo(cards,
                { y: 60, autoAlpha: 0 },
                { y: 0, autoAlpha: 1, stagger: 0.1, duration: 0.7, ease: "power3.out" }
            )
        }
    }, { scope: sectionRef, dependencies: [activeFilter] })

    return (
        <div ref={sectionRef}>
            {/* ===== FILTER TABS ===== */}
            <section className="px-6 sm:px-8 md:px-12 max-w-7xl mx-auto pb-10 sm:pb-14">
                <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveFilter(cat)}
                            className={`filter-btn font-poppins text-[0.75rem] sm:text-sm py-2 px-4 sm:px-5 rounded-full border tracking-wide transition-all duration-400 cursor-pointer
                                ${activeFilter === cat
                                    ? "bg-title/15 text-title border-title/30 shadow-[0_0_20px_rgba(255,255,202,0.08)]"
                                    : "bg-white/4 text-white/40 border-white/8 hover:bg-white/8 hover:text-white/60 hover:border-white/15"
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </section>

            {/* ===== PROJECTS GRID ===== */}
            <ProjectsGrid projects={filteredProjects} />
        </div>
    )
}

export default FilterableProjects
