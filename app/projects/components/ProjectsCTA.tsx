import Link from 'next/link'
import React from 'react'

function ProjectsCTA() {
    return (
        <section className="border-t border-white/6 bg-secondary/50">
            <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 py-16 sm:py-20 text-center">
                <h2 className="cta-title font-akronim text-[clamp(2rem,5vw,3.5rem)] text-title uppercase tracking-widest mb-4">
                    Let&apos;s Work Together
                </h2>
                <p className="cta-subtitle font-poppins text-white/40 text-sm sm:text-base mb-8 max-w-md mx-auto">
                    Have a project in mind? I&apos;d love to hear about it and bring your vision to life.
                </p>
                <Link href="mailto:contact@shamveel.dev">
                    <button className="cta-button relative overflow-hidden group/btn px-7 py-3 sm:px-9 sm:py-4 rounded-2xl font-poppins font-medium text-sm sm:text-base text-white backdrop-blur-xl bg-white/10 border border-white/20 shadow-2xl hover:shadow-white/25 transition-all duration-500 hover:scale-105 hover:bg-white/20 hover:border-white/30 active:scale-95 active:bg-white/30 cursor-pointer before:absolute before:inset-0 before:bg-linear-to-r before:from-white/0 before:via-white/20 before:to-white/0 before:-translate-x-full before:transition-transform before:duration-700 hover:before:translate-x-full">
                        <span className="relative z-10">Get in Touch</span>
                    </button>
                </Link>
            </div>
        </section>
    )
}

export default ProjectsCTA
