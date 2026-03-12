import React from 'react'
import type { Metadata } from 'next'
import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'
import Image from 'next/image'
import Script from 'next/script'

const BASE_URL = 'https://www.shamveel.dev'

// ─── Page-level SEO metadata ───────────────────────────────────────────────
export const metadata: Metadata = {
    title: 'About Muhammed Shamveel — Full-Stack Developer in Kozhikode, Kerala',
    description:
        'Learn about Muhammed Shamveel, a passionate full-stack web developer and BCA student at JDT Islam College, Kozhikode. Skilled in Next.js, React, TypeScript, Node.js, Express.js, and MongoDB. Currently freelancing and open to internships or job opportunities.',
    keywords: [
        // Identity
        'Muhammed Shamveel',
        'Shamveel',
        'Muhammed Shamveel developer',
        'Shamveel portfolio',
        'Shamveel web developer',
        // Location
        'full-stack developer Kozhikode',
        'web developer Kozhikode',
        'web developer Calicut',
        'software engineer Kozhikode',
        'software engineer Calicut',
        'developer Kerala',
        'web developer Kerala',
        'full-stack developer Kerala',
        'programmer Kerala',
        'coder Kerala',
        'developer India',
        'freelance developer India',
        'freelance web developer India',
        'freelance developer Kozhikode',
        'freelance developer Kerala',
        // Tech Stack
        'Next.js developer',
        'Next.js developer Kerala',
        'React developer',
        'React developer Kerala',
        'React developer Kozhikode',
        'TypeScript developer',
        'TypeScript developer India',
        'JavaScript developer Kerala',
        'Node.js developer India',
        'Express.js developer',
        'MongoDB developer',
        'MERN stack developer',
        'MERN stack developer Kerala',
        'MERN stack developer India',
        'React Native developer',
        'Python developer Kerala',
        'GSAP animation developer',
        'Tailwind CSS developer',
        'REST API developer',
        'full-stack JavaScript developer',
        // Job Intent
        'hire web developer Kerala',
        'hire Next.js developer India',
        'hire React developer Kerala',
        'web developer for hire India',
        'junior developer Kerala',
        'junior full-stack developer India',
        'internship web developer Kerala',
        'software internship Kozhikode',
        'web developer internship Kerala',
        'entry level developer India',
        'open to work developer Kerala',
        // Student / College
        'BCA student developer',
        'BCA developer Kerala',
        'JDT Islam College developer',
        'computer science student Kerala',
        'student web developer India',
        'college student programmer Kerala',
        // Services / General
        'website developer Kerala',
        'portfolio website developer',
        'web app developer India',
        'responsive web design Kerala',
        'modern website development India',
        'custom web development Kerala',
    ],
    alternates: {
        canonical: `${BASE_URL}/about`,
    },
    openGraph: {
        type: 'profile',
        url: `${BASE_URL}/about`,
        title: 'About Muhammed Shamveel — Full-Stack Developer, Kozhikode',
        description:
            'BCA student & full-stack developer from Kozhikode, Kerala. Freelancing with Next.js, React, Node.js & MongoDB. Open to internships and jobs.',
        images: [
            {
                url: '/shamveel.jpg',
                width: 800,
                height: 800,
                alt: 'Muhammed Shamveel — Full-Stack Web Developer',
                type: 'image/jpeg',
            },
        ],
        firstName: 'Muhammed',
        lastName: 'Shamveel',
        gender: 'male',
        locale: 'en_IN',
        siteName: 'Muhammed Shamveel — Portfolio',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'About Muhammed Shamveel — Full-Stack Developer',
        description:
            'BCA student & freelance web developer from Kozhikode. Skilled in Next.js, React, TypeScript & MERN stack.',
        images: ['/shamveel.jpg'],
        creator: '@shamveel',
    },
}

// ─── JSON-LD Schemas ────────────────────────────────────────────────────────
const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Muhammed Shamveel',
    alternateName: 'Shamveel',
    url: BASE_URL,
    image: `${BASE_URL}/shamveel.jpg`,
    description:
        'Passionate full-stack web developer and BCA student at JDT Islam College of Arts and Science, Kozhikode, Kerala. Specialising in Next.js, React, TypeScript, Node.js, Express.js, and MongoDB.',
    jobTitle: 'Full-Stack Web Developer',
    worksFor: {
        '@type': 'Organization',
        name: 'Freelance',
    },
    alumniOf: {
        '@type': 'EducationalOrganization',
        name: 'JDT Islam College of Arts and Science',
        address: {
            '@type': 'PostalAddress',
            addressLocality: 'Kozhikode',
            addressRegion: 'Kerala',
            addressCountry: 'IN',
        },
    },
    address: {
        '@type': 'PostalAddress',
        addressLocality: 'Kozhikode',
        addressRegion: 'Kerala',
        postalCode: '673012',
        addressCountry: 'IN',
    },
    knowsAbout: [
        'Next.js',
        'React',
        'TypeScript',
        'JavaScript',
        'Node.js',
        'Express.js',
        'MongoDB',
        'MERN Stack',
        'HTML',
        'CSS',
        'React Native',
        'Python',
        'GSAP',
        'RESTful APIs',
        'Web Development',
        'Full-Stack Development',
    ],
    sameAs: [
        'https://github.com/shamveel',
        'https://linkedin.com/in/shamveel',
    ],
    seeks: {
        '@type': 'Demand',
        name: 'Software Engineering Internship or Job',
    },
}

const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'About Muhammed Shamveel',
    description:
        'About page of Muhammed Shamveel, full-stack developer and freelancer based in Kozhikode, Kerala.',
    url: `${BASE_URL}/about`,
    isPartOf: {
        '@type': 'WebSite',
        name: 'Muhammed Shamveel — Portfolio',
        url: BASE_URL,
    },
    breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
            {
                '@type': 'ListItem',
                position: 1,
                name: 'Home',
                item: BASE_URL,
            },
            {
                '@type': 'ListItem',
                position: 2,
                name: 'About',
                item: `${BASE_URL}/about`,
            },
        ],
    },
    primaryImageOfPage: {
        '@type': 'ImageObject',
        url: `${BASE_URL}/shamveel.jpg`,
        width: 800,
        height: 800,
    },
    author: {
        '@type': 'Person',
        name: 'Muhammed Shamveel',
    },
    inLanguage: 'en-IN',
}

const profilePageSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    mainEntity: personSchema,
    dateCreated: '2024-01-01',
    dateModified: new Date().toISOString().split('T')[0],
}

// ─── Component ──────────────────────────────────────────────────────────────
const skills = [
    { label: 'Next.js', icon: '▲' },
    { label: 'React', icon: '⚛' },
    { label: 'TypeScript', icon: 'TS' },
    { label: 'JavaScript', icon: 'JS' },
    { label: 'HTML & CSS', icon: '</>' },
    { label: 'Node.js', icon: '⬡' },
    { label: 'Express.js', icon: '⚡' },
    { label: 'MongoDB', icon: '🍃' },
    { label: 'MERN Stack', icon: '🔗' },
    { label: 'React Native', icon: '📱' },
    { label: 'Python', icon: '🐍' },
    { label: 'GSAP', icon: '✦' },
]

const exploring = [
    { label: 'React Native', desc: 'Building cross-platform mobile apps' },
    { label: 'Python Automations', desc: 'Scripting and workflow automation' },
    { label: 'AI Integrations', desc: 'Exploring LLM-powered web apps' },
]

export default function AboutPage() {
    return (
        <>
            {/* ── JSON-LD Structured Data ── */}
            <Script
                id="schema-person"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
                strategy="beforeInteractive"
            />
            <Script
                id="schema-webpage"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
                strategy="beforeInteractive"
            />
            <Script
                id="schema-profilepage"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePageSchema) }}
                strategy="beforeInteractive"
            />

            <div className='w-full flex items-center justify-center bg-secondary'>
                <Header />
            </div>

            <main
                className="min-h-screen bg-secondary pt-32 sm:pt-40 pb-28 overflow-hidden relative"
                itemScope
                itemType="https://schema.org/AboutPage"
            >
                {/* Background glow effects */}
                <div aria-hidden="true" className="absolute top-0 right-0 w-[500px] h-[500px] bg-title/5 rounded-full blur-[150px] pointer-events-none" />
                <div aria-hidden="true" className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none" />
                <div aria-hidden="true" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-title/3 rounded-full blur-[180px] pointer-events-none" />

                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 space-y-24">

                    {/* ── Hero Row ── */}
                    <article
                        className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center"
                        itemScope
                        itemType="https://schema.org/Person"
                    >
                        <meta itemProp="name" content="Muhammed Shamveel" />
                        <meta itemProp="jobTitle" content="Full-Stack Web Developer" />
                        <meta itemProp="address" content="Kozhikode, Kerala, India" />
                        <link itemProp="url" href={BASE_URL} />

                        {/* Left — Photo */}
                        <div className="w-full lg:w-5/12 perspective-[1000px]">
                            <div className="relative group rounded-3xl overflow-hidden border border-white/10 shadow-[0_20px_80px_-20px_rgba(0,0,0,0.5)] transition-transform duration-700 hover:rotate-y-[5deg] hover:rotate-x-2">
                                <div className="absolute inset-0 bg-title/10 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none" />
                                <Image
                                    src="/shamveel.jpg"
                                    alt="Muhammed Shamveel — Full-Stack Web Developer based in Kozhikode, Kerala"
                                    width={600}
                                    height={800}
                                    priority
                                    itemProp="image"
                                    className="w-full h-auto object-cover scale-[1.03] group-hover:scale-100 transition-transform duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] bg-background-100"
                                />
                            </div>
                        </div>

                        {/* Right — Bio */}
                        <div className="w-full lg:w-7/12 space-y-8">
                            <div>
                                <span className="inline-block font-poppins text-title text-sm font-semibold tracking-[0.2em] uppercase mb-4 px-4 py-1.5 rounded-full bg-title/10 border border-title/20 shadow-[0_0_20px_rgba(255,255,202,0.1)]">
                                    About Me
                                </span>
                                <h1 className="font-abhaya-libre text-5xl sm:text-6xl lg:text-7xl text-white font-bold leading-[1.1] mb-6 drop-shadow-xl">
                                    Muhammed <span className="text-title italic" itemProp="givenName">Shamveel</span>
                                </h1>
                                <p className="font-poppins text-lg text-white/60 leading-relaxed font-light mb-4 text-justify" itemProp="description">
                                    Second-year BCA (Honours) student at{' '}
                                    <strong className="text-title/80 font-medium" itemProp="alumniOf">JDT Islam College of Arts and Science</strong>
                                    , Kozhikode — a passionate software engineer with hands-on experience in full-stack web development through self-learning and real-world projects.
                                </p>
                                <p className="font-poppins text-lg text-white/60 leading-relaxed font-light mb-6 text-justify">
                                    Skilled in building RESTful APIs using Express.js, implementing authentication with Auth.js, and developing responsive web applications using Next.js, React.js, TypeScript, and NoSQL databases. Currently working as a{' '}
                                    <strong className="text-title/80 font-medium">freelance developer</strong>{' '}
                                    while actively seeking internship or job opportunities to contribute to real-world products and grow professionally.
                                </p>

                                {/* Location + College badges */}
                                <div className="flex flex-wrap items-center gap-4 text-white/50 font-poppins text-sm mb-2">
                                    <span className="flex items-center gap-2 italic" itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
                                        <svg className="w-5 h-5 text-title/70 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                        <span itemProp="addressLocality">Calicut (Kozhikode)</span>,{' '}
                                        <span itemProp="addressRegion">Kerala</span>,{' '}
                                        <span itemProp="addressCountry">India</span>
                                    </span>
                                    <span className="flex items-center gap-2 italic">
                                        <svg className="w-5 h-5 text-title/70 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                                        </svg>
                                        JDT Islam College of Arts and Science
                                    </span>
                                </div>

                                {/* Availability banner */}
                                <div
                                    className="mt-6 flex items-center gap-4 p-4 rounded-2xl bg-emerald-500/5 border border-emerald-500/20 backdrop-blur-sm"
                                    role="status"
                                    aria-label="Availability status: Open to opportunities"
                                >
                                    <span className="relative flex h-3 w-3 shrink-0" aria-hidden="true">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                                        <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
                                    </span>
                                    <div>
                                        <p className="font-poppins text-sm font-semibold text-emerald-400 leading-tight">Open to Opportunities</p>
                                        <p className="font-poppins text-xs text-white/40 mt-0.5">Available for internships, full-time roles &amp; freelance projects</p>
                                    </div>
                                </div>
                            </div>

                            {/* Info Grid */}
                            <div className="grid sm:grid-cols-2 gap-6 pt-8 border-t border-white/10">
                                <div className="p-6 rounded-2xl bg-white/5 border border-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors duration-300">
                                    <div className="w-10 h-10 mb-4 rounded-xl bg-title/10 flex items-center justify-center border border-title/20">
                                        <svg className="w-5 h-5 text-title" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <h3 className="font-abhaya-libre text-2xl text-white font-bold mb-2">Freelance Works</h3>
                                    <p className="font-poppins text-sm text-white/50 leading-relaxed">
                                        Currently working as a freelance web developer — building modern, performant, and aesthetic web experiences for clients.
                                    </p>
                                </div>

                                <div className="p-6 rounded-2xl bg-white/5 border border-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors duration-300">
                                    <div className="w-10 h-10 mb-4 rounded-xl bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20">
                                        <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                        </svg>
                                    </div>
                                    <h3 className="font-abhaya-libre text-2xl text-white font-bold mb-2">Leadership Roles</h3>
                                    <p className="font-poppins text-sm text-white/50 leading-relaxed">
                                        Technical Lead of the Coding Club and IEDC Technical Lead in my college.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </article>

                    {/* ── Skills ── */}
                    <section aria-label="Skills and Tech Stack">
                        <header className="mb-10">
                            <span className="inline-block font-poppins text-title text-sm font-semibold tracking-[0.2em] uppercase mb-4 px-4 py-1.5 rounded-full bg-title/10 border border-title/20">
                                Skills &amp; Tech Stack
                            </span>
                            <h2 className="font-abhaya-libre text-4xl sm:text-5xl text-white font-bold leading-tight">
                                What I work with
                            </h2>
                        </header>
                        <ul className="flex flex-wrap gap-4 list-none p-0" aria-label="Technical skills">
                            {skills.map(({ label, icon }) => (
                                <li
                                    key={label}
                                    className="group flex items-center gap-3 px-5 py-3 rounded-2xl bg-white/5 border border-white/10 hover:bg-title/10 hover:border-title/30 transition-all duration-300"
                                    itemProp="knowsAbout"
                                >
                                    <span className="text-title text-base w-6 text-center font-mono" aria-hidden="true">{icon}</span>
                                    <span className="font-poppins text-sm text-white/70 group-hover:text-white transition-colors duration-300">{label}</span>
                                </li>
                            ))}
                        </ul>
                    </section>

                    {/* ── Currently Exploring ── */}
                    <section aria-label="Currently Exploring">
                        <header className="mb-10">
                            <span className="inline-block font-poppins text-indigo-400 text-sm font-semibold tracking-[0.2em] uppercase mb-4 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20">
                                Currently Exploring
                            </span>
                            <h2 className="font-abhaya-libre text-4xl sm:text-5xl text-white font-bold leading-tight">
                                Always learning something new
                            </h2>
                        </header>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {exploring.map(({ label, desc }) => (
                                <div
                                    key={label}
                                    className="p-6 rounded-2xl bg-white/5 border border-white/5 hover:bg-indigo-500/5 hover:border-indigo-500/20 transition-all duration-300 group"
                                >
                                    <div className="w-10 h-10 mb-4 rounded-xl bg-indigo-500/10 flex items-center justify-center border border-indigo-500/20 group-hover:bg-indigo-500/20 transition-colors duration-300">
                                        <svg className="w-5 h-5 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                        </svg>
                                    </div>
                                    <h3 className="font-abhaya-libre text-xl text-white font-bold mb-2">{label}</h3>
                                    <p className="font-poppins text-sm text-white/50 leading-relaxed">{desc}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* ── Education ── */}
                    <section aria-label="Education">
                        <header className="mb-10">
                            <span className="inline-block font-poppins text-title text-sm font-semibold tracking-[0.2em] uppercase mb-4 px-4 py-1.5 rounded-full bg-title/10 border border-title/20">
                                Education
                            </span>
                            <h2 className="font-abhaya-libre text-4xl sm:text-5xl text-white font-bold leading-tight">
                                Academic background
                            </h2>
                        </header>
                        <div className="relative pl-6 border-l border-white/10 space-y-10">
                            <div className="absolute left-0 top-1.5 -translate-x-1/2 w-3 h-3 rounded-full bg-title border-2 border-secondary" aria-hidden="true" />

                            <div
                                className="group p-8 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-title/20 transition-all duration-300"
                                itemScope
                                itemType="https://schema.org/EducationalOccupationalCredential"
                            >
                                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                                    <div>
                                        <h3 className="font-abhaya-libre text-2xl text-white font-bold mb-1" itemProp="name">
                                            BCA (Bachelor of Computer Application) —{' '}
                                            <span className="text-title">Honours</span>
                                        </h3>
                                        <p
                                            className="font-poppins text-base text-white/60"
                                            itemProp="recognizedBy"
                                            itemScope
                                            itemType="https://schema.org/EducationalOrganization"
                                        >
                                            <span itemProp="name">JDT Islam College of Arts and Science</span>, Kozhikode
                                        </p>
                                    </div>
                                    <span className="shrink-0 font-poppins text-xs text-title/70 px-3 py-1 rounded-full bg-title/10 border border-title/20 tracking-wider">
                                        2024 — Present
                                    </span>
                                </div>
                                <p className="font-poppins text-sm text-white/50 leading-relaxed">
                                    Currently in the second year. Active member and Technical Lead of the college Coding Club, and IEDC Technical Lead — organising workshops, hackathons, and mentoring peers in programming and web development.
                                </p>
                            </div>
                        </div>
                    </section>

                </div>
            </main>
        </>
    )
}
