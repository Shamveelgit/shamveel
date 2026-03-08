import React from 'react'

function ProjectsHero() {
    return (
        <section className="pt-32 sm:pt-36 md:pt-40 pb-12 sm:pb-16 px-6 sm:px-8 md:px-12 max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto">
                <h1 className="projects-hero-title font-akronim text-[clamp(3.5rem,10vw,7rem)] text-title uppercase tracking-[0.12em] leading-none mb-4 drop-shadow-[0_0_60px_rgba(255,255,202,0.12)]">
                    Projects
                </h1>
                <p className="projects-hero-subtitle font-poppins text-[clamp(0.9rem,1.8vw,1.15rem)] text-white/45 font-light leading-relaxed tracking-wide max-w-xl mx-auto">
                    A curated collection of projects where design meets function — each one crafted with care and intention.
                </p>
            </div>

            {/* Decorative line */}
            <div className="flex items-center justify-center mt-10 sm:mt-14 gap-3">
                <span className="block w-12 h-px bg-linear-to-r from-transparent to-title/30" />
                <span className="block w-1.5 h-1.5 rounded-full bg-title/40" />
                <span className="block w-12 h-px bg-linear-to-l from-transparent to-title/30" />
            </div>
        </section>
    )
}

export default ProjectsHero
