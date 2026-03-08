import type { Metadata } from 'next'
import Script from 'next/script'
import React from 'react'
import Header from '@/app/components/Header'
import Link from 'next/link'

const BASE_URL = 'https://shamveel.dev'

export const metadata: Metadata = {
    title: 'Contact Muhammed Shamveel — Hire a Freelance Web Developer in Kerala',
    description:
        'Get in touch with Muhammed Shamveel — a freelance full-stack web developer based in Kozhikode, Kerala. Available for freelance projects, internships, and full-time positions. Reach out via email or social media.',
    keywords: [
        'contact Muhammed Shamveel',
        'hire web developer Kerala',
        'hire Next.js developer India',
        'hire React developer Kozhikode',
        'freelance developer contact',
        'web developer for hire India',
        'hire full-stack developer Kerala',
        'web development inquiry Kerala',
        'software developer internship contact',
        'shamveelmdr@gmail.com',
        'Muhammed Shamveel email',
        'Kozhikode web developer contact',
        'freelance web dev project India',
    ],
    alternates: {
        canonical: `${BASE_URL}/contact`,
    },
    openGraph: {
        type: 'website',
        url: `${BASE_URL}/contact`,
        title: 'Contact Muhammed Shamveel — Hire a Freelance Web Developer',
        description:
            'Reach out to Muhammed Shamveel for freelance web development projects, internships, or collaborations. Based in Kozhikode, Kerala.',
        images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Contact Muhammed Shamveel' }],
        locale: 'en_IN',
        siteName: 'Muhammed Shamveel — Portfolio',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Contact Muhammed Shamveel — Hire a Developer',
        description: 'Reach out for freelance projects, internships, or collaborations — Kozhikode, Kerala.',
        images: ['/og-image.png'],
        creator: '@shamveel',
    },
}

const contactPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact Muhammed Shamveel',
    url: `${BASE_URL}/contact`,
    description: 'Contact page for Muhammed Shamveel, freelance full-stack web developer in Kozhikode, Kerala.',
    mainEntity: {
        '@type': 'Person',
        name: 'Muhammed Shamveel',
        email: 'shamveelmdr@gmail.com',
        url: BASE_URL,
        jobTitle: 'Full-Stack Web Developer',
        address: {
            '@type': 'PostalAddress',
            addressLocality: 'Kozhikode',
            addressRegion: 'Kerala',
            addressCountry: 'IN',
        },
        sameAs: [
            'https://github.com/Shamveelgit',
            'https://www.linkedin.com/in/dev-shamveel',
            'https://www.instagram.com/_shmv.eel/',
            'https://x.com/MuhammedSh77205',
        ],
    },
    breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
            { '@type': 'ListItem', position: 2, name: 'Contact', item: `${BASE_URL}/contact` },
        ],
    },
}


export default function ContactPage() {
    return (
        <>
            <Script
                id="schema-contact"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}
                strategy="beforeInteractive"
            />
            <div className='w-full flex items-center justify-center absolute '>
                <Header />
            </div>
            <main className="min-h-screen bg-secondary pt-32 sm:pt-40 pb-20 overflow-hidden relative">
                {/* Background glow effects */}
                <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-title/10 rounded-full blur-[150px] pointer-events-none" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none" />

                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
                    <div className="text-center mb-16 max-w-2xl mx-auto">
                        <span className="inline-block font-poppins text-title text-sm font-semibold tracking-[0.2em] uppercase mb-4 px-4 py-1.5 rounded-full bg-title/10 border border-title/20 shadow-[0_0_20px_rgba(255,255,202,0.1)]">
                            Get In Touch
                        </span>
                        <h1 className="font-abhaya-libre text-5xl sm:text-6xl lg:text-7xl text-white font-bold leading-tight mb-6 drop-shadow-xl">
                            Let's Build Something <span className="text-title italic">Amazing</span>
                        </h1>
                        <p className="text-lg text-white/50 leading-relaxed font-poppins font-light">
                            I'm currently available for freelance projects and exciting collaborations. Reach out if you'd like to work together!
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-20 items-start">

                        {/* Contact Info Cards */}
                        <div className="flex flex-col gap-6">
                            {/* Email */}
                            <Link href="mailto:shamveelmdr@gmail.com" className="group p-8 rounded-3xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-title/30 transition-all duration-500 backdrop-blur-sm relative overflow-hidden">
                                <div className="absolute inset-0 bg-title/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]" />
                                <div className="w-14 h-14 rounded-2xl bg-title/10 flex items-center justify-center border border-title/20 mb-6 group-hover:scale-110 transition-transform duration-500 relative z-10">
                                    <svg className="w-7 h-7 text-title" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <h3 className="font-abhaya-libre text-3xl font-bold text-white mb-2 relative z-10">Email Me</h3>
                                <p className="text-lg font-poppins text-white/80 relative z-10">shamveelmdr@gmail.com</p>
                                <p className="text-sm text-white/40 font-poppins mt-2 font-light relative z-10">I usually respond within 24 hours.</p>
                            </Link>

                            {/* Location */}
                            <div className="p-8 rounded-3xl bg-white/5 border border-white/5 backdrop-blur-sm relative overflow-hidden group">
                                <div className="absolute inset-0 bg-indigo-500/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]" />
                                <div className="w-14 h-14 rounded-2xl bg-indigo-500/10 flex items-center justify-center border border-indigo-500/20 mb-6 relative z-10 group-hover:scale-110 transition-transform duration-500">
                                    <svg className="w-7 h-7 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <h3 className="font-abhaya-libre text-3xl font-bold text-white mb-2 relative z-10">Location</h3>
                                <p className="text-lg font-poppins text-white/80 relative z-10">Kozhikode (Calicut), Kerala</p>
                                <p className="text-sm text-white/40 font-poppins mt-2 font-light relative z-10">India</p>
                            </div>

                            {/* Socials Grid */}
                            <div className="grid grid-cols-4 gap-4">
                                {[
                                    { href: "https://www.instagram.com/_shmv.eel/", icon: <><rect width="20" height="20" x="2" y="2" rx="5" ry="5" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" /></>, label: "Instagram" },
                                    { href: "https://x.com/MuhammedSh77205", icon: <><path d="M4 4l11.733 16h4.267l-11.733 -16z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" /><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" /></>, label: "Twitter" },
                                    { href: "https://github.com/Shamveelgit", icon: <><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" /><path d="M9 18c-4.51 2-5-2-7-2" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" /></>, label: "GitHub" },
                                    { href: "https://www.linkedin.com/in/dev-shamveel", icon: <><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" /><rect width="4" height="12" x="2" y="9" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" /><circle cx="4" cy="4" r="2" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" /></>, label: "LinkedIn" }
                                ].map(social => (
                                    <Link key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" className="h-20 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center hover:bg-white/10 hover:-translate-y-1 hover:border-white/20 hover:text-title hover:shadow-[0_10px_30px_rgba(255,255,202,0.1)] transition-all duration-300 text-white/50">
                                        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor">{social.icon}</svg>
                                        <span className="sr-only">{social.label}</span>
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="bg-white/2 border border-white/5 rounded-3xl p-8 sm:p-10 lg:p-12 backdrop-blur-md relative overflow-hidden">
                            {/* Decorative glow behind form */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-title/5 rounded-full blur-[80px] pointer-events-none" />

                            <h3 className="font-abhaya-libre text-4xl text-white font-bold mb-8 relative z-10">Send a Message</h3>

                            <form className="space-y-6 relative z-10" action="mailto:shamveelmdr@gmail.com" method="post" encType="text/plain">
                                <div className="grid sm:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label htmlFor="name" className="text-xs font-poppins font-semibold text-white/60 uppercase tracking-[0.15em] pl-1">Name</label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            placeholder="John Doe"
                                            required
                                            className="w-full bg-black/20 border border-white/10 rounded-2xl px-5 py-4 font-poppins text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-title/50 focus:border-title/50 transition-all font-light"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="email" className="text-xs font-poppins font-semibold text-white/60 uppercase tracking-[0.15em] pl-1">Email</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            placeholder="john@example.com"
                                            required
                                            className="w-full bg-black/20 border border-white/10 rounded-2xl px-5 py-4 font-poppins text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-title/50 focus:border-title/50 transition-all font-light"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="subject" className="text-xs font-poppins font-semibold text-white/60 uppercase tracking-[0.15em] pl-1">Subject</label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        placeholder="Project Inquiry"
                                        className="w-full bg-black/20 border border-white/10 rounded-2xl px-5 py-4 font-poppins text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-title/50 focus:border-title/50 transition-all font-light"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-xs font-poppins font-semibold text-white/60 uppercase tracking-[0.15em] pl-1">Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={5}
                                        required
                                        placeholder="Tell me about your project or opportunity..."
                                        className="w-full bg-black/20 border border-white/10 rounded-2xl px-5 py-4 font-poppins text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-title/50 focus:border-title/50 transition-all font-light resize-none"
                                    ></textarea>
                                </div>

                                <div className="pt-2">
                                    <button type="submit" className="w-full relative overflow-hidden group px-6 py-5 rounded-2xl font-poppins text-background bg-title font-bold tracking-wide hover:shadow-[0_0_30px_rgba(255,255,202,0.3)] transition-all duration-500 hover:-translate-y-1 inline-flex items-center justify-center gap-3">
                                        <span className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-[0.25,0.46,0.45,0.94]" />
                                        <span className="relative z-10 text-base">Send Message</span>
                                        <svg className="w-5 h-5 relative z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                        </svg>
                                    </button>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </main>
        </>
    )
}
