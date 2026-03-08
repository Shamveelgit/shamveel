import projectsData from '@/data/projects.json'

export type Project = {
    id: string
    slug: string
    title: string
    description: string
    image: string
    category: string
    github: string
    live: string
    tech: string[]
}

// Map the full project data to the simplified card shape
export const projects: Project[] = projectsData.map((p) => ({
    id: p.id,
    slug: p.slug || p.id, // Fallback to id if slug is missing
    title: p.title,
    description: p.description || p.tagline,
    image: p.heroImage,
    category: p.meta.platform,
    github: p.links.repository,
    live: p.links.live,
    tech: p.technologies.map(t => t.name),
}))

export const categories = ["All", ...Array.from(new Set(projects.map((p) => p.category)))]
