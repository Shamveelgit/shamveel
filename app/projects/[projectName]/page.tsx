import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Script from 'next/script'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import type { ProjectCollection } from '@/types/ProjectCollections'
import projectsData from '@/data/projects.json'

const BASE_URL = 'https://shamveel.dev'

type Props = {
  params: Promise<{ projectName: string }>
}

// ─── Dynamic per-project SEO metadata ──────────────────────────────────────
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { projectName } = await params
  const projects = projectsData as ProjectCollection
  const project = projects.find((p) => p.slug === projectName)

  if (!project) {
    return {
      title: 'Project Not Found | Muhammed Shamveel',
      description: 'This project could not be found.',
    }
  }

  const techNames = project.technologies.map((t) => t.name).join(', ')

  return {
    title: `${project.title} — Case Study by Muhammed Shamveel`,
    description: `${project.tagline} Built by Muhammed Shamveel using ${techNames}. Full case study including overview, challenges, solutions, and key features.`,
    keywords: [
      project.title,
      'Muhammed Shamveel project',
      'full-stack project Kerala',
      'web development case study',
      ...project.technologies.map((t) => `${t.name} project`),
      'Next.js case study',
      'MERN stack project India',
      'Kerala developer portfolio project',
    ],
    alternates: {
      canonical: `${BASE_URL}/projects/${project.slug}`,
    },
    openGraph: {
      type: 'article',
      url: `${BASE_URL}/projects/${project.slug}`,
      title: `${project.title} — Case Study`,
      description: project.tagline,
      images: [
        {
          url: project.heroImage || '/og-image.png',
          width: 1200,
          height: 630,
          alt: `${project.title} — Muhammed Shamveel`,
        },
      ],
      locale: 'en_IN',
      siteName: 'Muhammed Shamveel — Portfolio',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${project.title} — by Muhammed Shamveel`,
      description: project.tagline,
      images: [project.heroImage || '/og-image.png'],
      creator: '@shamveel',
    },
  }
}


async function ProjectDetailPage({ params }: Props) {
  const { projectName } = await params
  const projects = projectsData as ProjectCollection


  const project = projects.find((p) => p.slug === projectName)


  if (!project) {
    notFound()
  }

  const currentIndex = projects.findIndex((p) => p.id === projectName)
  const nextProject = projects[(currentIndex + 1) % projects.length]

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-linear-to-b from-secondary via-background-100 to-background overflow-hidden">
        {/* Abstract Background */}
        <div className="absolute top-0 inset-x-0 h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />
        <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[50%] bg-title/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[50%] bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8">
          {/* Breadcrumb */}
          <div className="mb-12">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-white/60 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300 backdrop-blur-md"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              View All Projects
            </Link>
          </div>

          {/* Main Hero Content */}
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-20 items-center mb-24">
            <div className="flex-1 w-full text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-title/10 border border-title/20 text-title text-xs font-semibold tracking-widest uppercase mb-8">
                <span className="w-2 h-2 rounded-full bg-title animate-pulse"></span>
                Featured Case Study
              </div>
              <h1 className="font-abhaya-libre text-[clamp(2.5rem,5vw,5rem)] font-bold mb-6 leading-[1.1] text-white drop-shadow-xl">
                {project.title}
              </h1>
              <p className="font-poppins text-lg md:text-xl text-white/50 leading-relaxed mb-10 max-w-2xl mx-auto lg:mx-0 font-light">
                {project.tagline}
              </p>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-5">
                {project.links.live && (
                  <Link
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative px-8 py-4 rounded-full bg-white text-background font-semibold flex items-center gap-2.5 transition-all duration-300 hover:scale-105 hover:bg-title focus:outline-none focus:ring-2 focus:ring-title focus:ring-offset-2 focus:ring-offset-background group"
                  >
                    <span className="font-poppins text-sm tracking-wide">Visit Live Site</span>
                    <svg className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </Link>
                )}
                {project.links.repository && (
                  <Link
                    href={project.links.repository}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-4 rounded-full border border-white/20 text-white font-semibold flex items-center gap-2.5 transition-all duration-300 hover:bg-white/10 hover:border-white/40"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    <span className="font-poppins text-sm tracking-wide">Source Code</span>
                  </Link>
                )}
              </div>
            </div>

            {/* Hero Image */}
            <div className="flex-1 w-full max-w-2xl mx-auto lg:max-w-none perspective-[2000px]">
              <div className="relative rounded-2xl overflow-hidden shadow-[0_20px_80px_-20px_rgba(0,0,0,0.5)] border border-white/10 group transition-transform duration-700 ease-out hover:rotate-y-[-5deg] hover:rotate-x-2">
                <div className="absolute inset-0 bg-title/10 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none" />
                {/* <img
                  src={project.heroImage}
                  alt={project.title}
                  className="w-full aspect-4/3 object-cover scale-[1.02] group-hover:scale-100 transition-transform duration-700 ease-out"
                /> */}
                <iframe src={project.links.live} className="w-full h-full aspect-4/3" />
              </div>
            </div>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-10 border-y border-white/10 bg-white/2 rounded-3xl backdrop-blur-sm px-8 lg:px-12">
            {[
              { label: "Client", value: project.meta.client },
              { label: "Role", value: project.meta.role },
              { label: "Timeline", value: project.meta.timeline },
              { label: "Platform", value: project.meta.platform }
            ].map((stat) => (
              <div key={stat.label} className="text-center md:text-left">
                <p className="font-poppins text-[0.65rem] md:text-xs text-white/40 uppercase tracking-[0.2em] mb-2">{stat.label}</p>
                <p className="font-abhaya-libre text-lg md:text-xl font-bold text-white tracking-wide">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Overview & Stack Section */}
      <section className="py-24 px-6 relative bg-background border-b border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-[1fr_400px] gap-16 lg:gap-24">

            {/* Overview Content */}
            <div className="space-y-8">
              <div>
                <h2 className="font-abhaya-libre text-4xl md:text-5xl font-bold text-white mb-8 border-b border-white/10 pb-6">
                  Project Overview
                </h2>
                <div className="prose prose-invert prose-lg max-w-none">
                  <p className="font-poppins text-white/60 leading-loose text-lg font-light">
                    {project.overview}
                  </p>
                </div>
              </div>
            </div>

            {/* Sidebar Data */}
            <div className="space-y-12">
              {/* Architecture Info if available */}
              {project.architecture && (
                <div className="p-8 rounded-3xl bg-secondary border border-white/5 shadow-2xl">
                  <h3 className="font-abhaya-libre text-2xl font-bold text-white mb-6 flex items-center gap-3">
                    <svg className="w-6 h-6 text-title" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                    Architecture
                  </h3>
                  <ul className="space-y-4">
                    {Object.entries(project.architecture).map(([key, val]) => (
                      <li key={key} className="flex justify-between items-center border-b border-white/5 pb-3 last:border-0 last:pb-0">
                        <span className="font-poppins text-white/40 capitalize text-sm">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
                        <span className="font-poppins text-white font-medium text-sm text-right max-w-[60%]">{val as string}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Technologies */}
              <div>
                <h3 className="font-poppins text-sm uppercase tracking-[0.2em] text-white/40 mb-5 font-semibold">Technologies</h3>
                <div className="flex flex-wrap gap-2.5">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech.name}
                      className="px-4 py-2 bg-white/5 text-white/80 rounded border border-white/10 text-xs font-poppins font-medium tracking-wide hover:bg-white/10 hover:border-white/20 transition-all duration-300 backdrop-blur-sm"
                    >
                      {tech.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Screenshots Gallery Section (If Available) */}
      {project.screenshots && project.screenshots.length > 0 && (
        <section className="py-24 px-6 bg-linear-to-b from-background to-secondary/50 relative">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-abhaya-libre text-4xl md:text-5xl font-bold text-white">
                Gallery
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {project.screenshots.map((src, i) => (
                <div key={i} className="rounded-2xl overflow-hidden border border-white/10 shadow-xl group">
                  <Image src={src} alt={`${project.title} screenshot ${i + 1}`} width={800} height={600} className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700 ease-out" />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Challenges & Solutions */}
      <section className="py-24 px-6 relative bg-background border-b border-white/5 overflow-hidden">
        {/* Abstract Glows */}
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-red-500/5 rounded-full blur-[120px] -translate-y-1/2 -translate-x-1/2 pointer-events-none" />
        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-abhaya-libre text-4xl md:text-5xl font-bold text-white mb-4">
              Behind the Scenes
            </h2>
            <p className="font-poppins text-white/50 text-lg max-w-2xl mx-auto">Navigating obstacles and crafting targeted solutions.</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Challenges */}
            <div className="bg-white/2 border border-white/5 rounded-3xl p-8 md:p-12 hover:bg-white/4 transition-colors duration-500">
              <div className="flex items-center gap-4 mb-8 border-b border-white/10 pb-6">
                <div className="w-12 h-12 rounded-2xl bg-red-500/10 flex items-center justify-center border border-red-500/20">
                  <svg className="w-6 h-6 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <h3 className="font-abhaya-libre text-3xl font-bold text-white">Challenges</h3>
              </div>
              <ul className="space-y-6">
                {project.challenges.map((challenge, i) => (
                  <li key={i} className="flex gap-4 group">
                    <span className="shrink-0 w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-xs font-poppins text-white/40 group-hover:bg-red-500/20 group-hover:text-red-400 transition-colors duration-300">
                      {(i + 1).toString().padStart(2, '0')}
                    </span>
                    <span className="font-poppins text-white/60 leading-relaxed text-[0.95rem] pt-1">{challenge}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Solutions */}
            <div className="bg-white/2 border border-white/5 rounded-3xl p-8 md:p-12 hover:bg-white/4 transition-colors duration-500 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-[80px]" />
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-8 border-b border-white/10 pb-6">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20">
                    <svg className="w-6 h-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="font-abhaya-libre text-3xl font-bold text-white">Solutions</h3>
                </div>
                <ul className="space-y-6">
                  {project.solutions.map((solution, i) => (
                    <li key={i} className="flex gap-4 group">
                      <div className="flex-shrink-0 mt-1.5">
                        <svg className="w-5 h-5 text-emerald-400/50 group-hover:text-emerald-400 transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="font-poppins text-white/60 leading-relaxed text-[0.95rem]">{solution}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      {project.features && project.features.length > 0 && (
        <section className="py-32 px-6 relative bg-linear-to-b from-background to-secondary/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-24">
              <span className="font-poppins text-xs font-semibold text-title uppercase tracking-[0.2em] mb-4 block">
                Core Capabilities
              </span>
              <h2 className="font-abhaya-libre text-5xl md:text-6xl font-bold text-white">
                Key Features
              </h2>
            </div>
            <div className="space-y-24 md:space-y-32">
              {project.features.map((feature, index) => (
                <div key={feature.title} className="flex flex-col md:flex-row gap-12 lg:gap-20 items-center">
                  {/* Image side */}
                  <div className={`w-full md:w-1/2 ${index % 2 !== 0 ? 'md:order-2' : ''}`}>
                    <div className="relative group perspective-[1000px]">
                      <div className="absolute inset-0 bg-title/10 rounded-2xl blur-3xl group-hover:bg-title/20 transition-colors duration-700" />
                      <Image
                        src={feature.image}
                        alt={feature.title}
                        loading="lazy"
                        width={800}
                        height={450}
                        className="relative w-full rounded-2xl border border-white/10 object-cover aspect-video shadow-2xl transition-[transform] duration-[700ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-[1.03] group-hover:-translate-y-2"
                      />
                    </div>
                  </div>
                  {/* Text side */}
                  <div className={`w-full md:w-1/2 ${index % 2 !== 0 ? 'md:order-1' : ''}`}>
                    <span className="inline-block text-[3rem] font-abhaya-libre font-bold text-white/10 leading-none mb-4 tracking-tighter">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <h3 className="font-abhaya-libre text-3xl md:text-4xl font-bold mb-5 text-white">
                      {feature.title}
                    </h3>
                    <p className="font-poppins text-white/50 text-lg leading-relaxed font-light">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Results Section */}
      {project.metrics && project.metrics.length > 0 && (
        <section className="py-20 px-6 relative bg-background border-t border-white/5 overflow-hidden">
          <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-title/5 rounded-full blur-[150px] pointer-events-none" />
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-12">
              <div className="inline-flex py-1.5 px-4 rounded-full bg-white/5 border border-white/10 mb-4 backdrop-blur-md">
                <span className="font-poppins text-xs font-medium text-white/70 uppercase tracking-[0.2em]">Impact & Results</span>
              </div>
              <h2 className="font-abhaya-libre text-4xl md:text-5xl font-bold text-white mb-6">
                Measurable Outcomes
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {project.metrics.map((metric, i) => (
                <div
                  key={metric.name}
                  className={`p-6 lg:p-8 rounded-3xl border border-white/5 relative overflow-hidden group transition-all duration-500 hover:-translate-y-2 hover:border-title/30 ${i === 1 ? 'bg-title/5' : 'bg-white/2'}`}
                >
                  <div className="absolute inset-0 bg-linear-to-br from-title/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative z-10 text-center">
                    <div className="font-abhaya-libre text-4xl lg:text-5xl font-bold text-white/90 drop-shadow-md mb-2 tracking-wide group-hover:text-title transition-colors duration-500">
                      {metric.value}
                    </div>
                    <p className="font-poppins text-white/50 text-xs md:text-sm font-medium tracking-wide uppercase">{metric.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Next Project */}
      {nextProject && (
        <section className="py-24 px-6 relative bg-background border-t border-white/5 overflow-hidden group/section">
          <div className="absolute inset-0 bg-linear-to-b from-transparent to-title/5 opacity-0 group-hover/section:opacity-100 transition-opacity duration-1000 pointer-events-none" />
          <div className="max-w-7xl mx-auto text-center relative z-10">
            <Link href={`/projects/${nextProject.slug || nextProject.id}`} className="inline-block group">
              <span className="font-poppins text-xs font-semibold text-title uppercase tracking-[0.3em] mb-6 block">
                Up Next
              </span>
              <h3 className="font-abhaya-libre text-5xl md:text-7xl font-bold text-white group-hover:text-title transition-colors duration-500 mb-6 drop-shadow-xl">
                {nextProject.title}
              </h3>
              <p className="font-poppins text-white/50 max-w-2xl mx-auto text-lg leading-relaxed font-light mb-10">
                {nextProject.description || nextProject.tagline}
              </p>

              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/5 border border-white/10 group-hover:bg-title group-hover:border-title transition-all duration-500 group-hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]">
                <svg
                  className="w-6 h-6 text-white group-hover:text-secondary group-hover:translate-x-1.5 transition-all duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-32 px-6 relative overflow-hidden bg-secondary">
        {/* Layered background details */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--color-title)_0%,transparent_60%)] opacity-[0.05]" />

        {/* Abstract shapes */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-title/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-title/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-3 mb-10 px-6 py-3 rounded-full bg-background border border-white/10 shadow-xl backdrop-blur-md">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-title opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-title"></span>
            </span>
            <span className="font-poppins text-xs font-semibold text-white/80 uppercase tracking-widest">Available for new opportunities</span>
          </div>

          <h2 className="font-abhaya-libre text-[clamp(3rem,6vw,6rem)] font-bold text-white mb-8 leading-[1.1] drop-shadow-2xl">
            Let&apos;s build something <br className="hidden md:block" />
            <span className="text-title italic pr-2">extraordinary</span>.
          </h2>
          <p className="font-poppins text-white/50 text-lg md:text-xl relative mb-14 leading-relaxed max-w-2xl mx-auto font-light">
            Whether you have a specific project in mind or just want to explore possibilities, I&apos;m here to help turn your ideas into digital reality.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Link
              href="mailto:contact@shamveel.dev"
              className="relative px-10 py-5 rounded-full bg-title text-secondary font-bold hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:-translate-y-1 transition-all duration-300 overflow-hidden group inline-flex items-center justify-center gap-3"
            >
              <span className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
              <span className="relative font-poppins text-sm tracking-wide">Start a Conversation</span>
              <svg className="relative w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
            <Link
              href="/projects"
              className="px-10 py-5 rounded-full border border-white/20 text-white font-poppins text-sm font-semibold tracking-wide hover:bg-white/5 hover:border-white/40 hover:-translate-y-1 transition-all duration-300 inline-flex items-center justify-center group"
            >
              <span className="group-hover:-translate-x-1 transition-transform duration-300">View All Projects</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default ProjectDetailPage