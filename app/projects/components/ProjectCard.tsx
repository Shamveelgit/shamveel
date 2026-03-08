import React from 'react'
import { Project } from '../data'
import Link from 'next/link'
import Image from 'next/image'


type ProjectCardProps = {
    project: Project
}

function ProjectCard({ project }: ProjectCardProps) {
    return (
        <article className="project-card group relative rounded-2xl bg-white/3 border border-white/6 overflow-hidden transition-all duration-500 hover:bg-white/6 hover:border-white/12 hover:shadow-[0_20px_60px_rgba(0,0,0,0.3)]">
            {/* Image */}
            <div className="relative overflow-hidden aspect-16/10">
                <Link key={project.id} href={`/projects/${project.slug}`}>

                    <Image
                        src={project.image}
                        alt={`${project.title} — ${project.description} | Project by Muhammed Shamveel, full-stack developer Kerala`}
                        title={`${project.title} — by Muhammed Shamveel`}
                        loading="lazy"
                        decoding="async"
                        width={800}
                        height={600}
                        className="w-full h-full object-top object-cover  transition-transform duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-105"
                    />
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-linear-to-t from-secondary via-secondary/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />

                    {/* Floating category badge */}
                    <span className="absolute top-4 left-4 font-poppins text-[0.65rem] sm:text-xs uppercase tracking-[0.15em] text-title/80 bg-secondary/70 backdrop-blur-md py-1.5 px-3 rounded-full border border-title/15">
                        {project.category}
                    </span>
                </Link>

                {/* Hover action buttons */}
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-400">
                    <Link
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/15 flex items-center justify-center text-white/70 hover:bg-white/20 hover:text-white transition-all duration-300"
                        aria-label="View source on GitHub"
                    >
                        <svg className="w-4 h-4 sm:w-4.5 sm:h-4.5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                    </Link>
                    <Link
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/15 flex items-center justify-center text-white/70 hover:bg-white/20 hover:text-white transition-all duration-300"
                        aria-label="View live project"
                    >
                        <svg className="w-4 h-4 sm:w-4.5 sm:h-4.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                    </Link>
                </div>
            </div>

            {/* Content */}
            <Link key={project.id} href={`/projects/${project.slug}`}>

                <div className="p-5 sm:p-6 md:p-7">
                    <h3 className="font-abhaya-libre text-[clamp(1.3rem,2.5vw,1.65rem)] text-white font-bold leading-tight mb-2 group-hover:text-title/90 transition-colors duration-400">
                        {project.title}
                    </h3>
                    <p className="font-poppins text-[0.8rem] sm:text-sm text-white/35 leading-relaxed mb-5 line-clamp-2">
                        {project.description}
                    </p>

                    {/* Tech tags */}
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                        {project.tech.map((t) => (
                            <span
                                key={t}
                                className="font-poppins text-[0.65rem] sm:text-xs py-1 px-3 rounded-full bg-white/5 text-white/40 border border-white/7 tracking-wide transition-all duration-300 group-hover:bg-title/10 group-hover:text-title/60 group-hover:border-title/15"
                            >
                                {t}
                            </span>
                        ))}
                    </div>
                </div>
            </Link>
        </article>
    )
}

export default ProjectCard
