import React from 'react'
import Link from 'next/link'
import Header from '@/app/components/Header'

function ProjectsNav() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl border-white/6 pb-4">
            <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 h-12 sm:h-16 flex items-center justify-center">
                {/* <Link
                    href="/"
                    className="back-link invisible flex items-center gap-2 text-white/70 hover:text-title transition-colors duration-300 font-poppins text-sm sm:text-base group"
                >
                    <svg
                        className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:-translate-x-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                    </svg>
                    Back to Home
                </Link> */}
                {/* <div className="w-16 sm:w-20">
                    <img src="/Shamveel1.svg" alt="Muhammed Shamveel — Portfolio Logo" title="Muhammed Shamveel Portfolio" className="w-full invert" />
                </div> */}
                <Header />
            </div>
        </nav>
    )
}

export default ProjectsNav
