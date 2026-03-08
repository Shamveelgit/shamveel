// Define the structure for external links
interface ProjectLinks {
    live: string;
    repository: string;
    caseStudy: string;
}

// Define the structure for metadata about the project
interface ProjectMeta {
    client: string;
    role: string;
    timeline: string;
    platform: string;
    year: number;
    status: string;
}

// Define the structure for individual feature items
interface ProjectFeature {
    title: string;
    description: string;
    image: string;
}

// Define the structure for metrics
interface ProjectMetrics {
    name: string;
    value: string;
}

// Define the structure for technologies
interface ProjectTechnologies {
    name: string;
    type: string;
}

// Define the structure for architecture
interface ProjectArchitecture {
    frontend: string;
    backend: string;
    database: string;
    mediaStorage: string;
    hosting: string;
    cdn: string;
}

// Main Project interface representing the entire object
export interface Project {
    id: string;
    slug: string;
    title: string;
    tagline: string;
    description: string;
    heroImage: string;
    links: ProjectLinks;
    meta: ProjectMeta;
    overview: string;
    challenges: string[];
    solutions: string[];
    technologies: ProjectTechnologies[];
    architecture: ProjectArchitecture;
    features: ProjectFeature[];
    screenshots: string[];
    metrics: ProjectMetrics[];
}

// Optional: If you expect an array of projects
export type ProjectCollection = Project[];