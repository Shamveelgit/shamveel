import React from 'react'
import type { Metadata } from 'next'
import Script from 'next/script'
import ProjectsNav from './components/ProjectsNav'
import ProjectsHero from './components/ProjectsHero'
import FilterableProjects from './components/FilterableProjects'
import ProjectsCTA from './components/ProjectsCTA'
import ProjectsGsapWrapper from './components/ProjectsGsapWrapper'

const BASE_URL = 'https://www.shamveel.dev'

export const metadata: Metadata = {
    title: 'Projects by Muhammed Shamveel — Full-Stack Web Development Portfolio',
    description:
        'Explore full-stack web development projects by Muhammed Shamveel — including e-commerce platforms, community apps, and MERN stack applications. Built with Next.js, React, TypeScript, and MongoDB.',
    keywords: [
        'Muhammed Shamveel projects',
        'full-stack developer portfolio Kerala',
        'Next.js projects India',
        'React projects Kerala',
        'MERN stack projects',
        'web development projects Kozhikode',
        'TypeScript projects India',
        'e-commerce Next.js project',
        'MongoDB Express React Node projects',
        'developer portfolio Kerala',
        'freelance web projects India',
    ],
    alternates: {
        canonical: `${BASE_URL}/projects`,
    },
    openGraph: {
        type: 'website',
        url: `${BASE_URL}/projects`,
        title: 'Projects — Muhammed Shamveel | Full-Stack Developer Portfolio',
        description:
            'Browse full-stack web apps and case studies by Muhammed Shamveel — built with Next.js, React, MongoDB, and TypeScript.',
        images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Projects by Muhammed Shamveel' }],
        locale: 'en_IN',
        siteName: 'Muhammed Shamveel — Portfolio',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Projects — Muhammed Shamveel',
        description: 'Full-stack web projects: e-commerce, MERN apps, Next.js, React, MongoDB.',
        images: ['/og-image.png'],
        creator: '@shamveel',
    },
}

const projectsPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Projects by Muhammed Shamveel',
    url: `${BASE_URL}/projects`,
    description: 'A collection of full-stack web development projects by Muhammed Shamveel.',
    author: { '@type': 'Person', name: 'Muhammed Shamveel', url: BASE_URL },
    breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
            { '@type': 'ListItem', position: 2, name: 'Projects', item: `${BASE_URL}/projects` },
        ],
    },
}


function ProjectsPage() {
    return (
        <ProjectsGsapWrapper>
            <Script
                id="schema-projects"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(projectsPageSchema) }}
                strategy="beforeInteractive"
            />
            <ProjectsHero />
            <FilterableProjects />
            <ProjectsCTA />
        </ProjectsGsapWrapper>
    )
}

export default ProjectsPage
