import React from 'react'
import ProjectCard from './ProjectCard'
import { Project } from '../data'
import Link from 'next/link'

type ProjectsGridProps = {
    projects: Project[]
}

function ProjectsGrid({ projects }: ProjectsGridProps) {


    return (
        <section className="px-6 sm:px-8 md:px-12 max-w-7xl mx-auto pb-20 sm:pb-28">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
                {projects.map((project) => (
                    <ProjectCard key={project.id} project={project} />

                ))}
            </div>

            {/* Empty state */}
            {projects.length === 0 && (
                <div className="text-center py-20">
                    <p className="font-poppins text-white/30 text-lg">No projects found in this category.</p>
                </div>
            )}
        </section>
    )
}

export default ProjectsGrid
