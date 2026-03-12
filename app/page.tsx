import type { Metadata } from 'next'
import Script from 'next/script'
import Wrapper from "./Wrapper";
import HeroSection from "./components/HeroSection";
import ParallaxSecion from "./components/ParallaxSecion";
import WorksSection from "./components/WorksSection";

const BASE_URL = 'https://www.shamveel.dev'

export const metadata: Metadata = {
  title: 'Muhammed Shamveel — Full-Stack Developer & Freelancer | Kozhikode, Kerala',
  description:
    'Portfolio of Muhammed Shamveel — a passionate full-stack web developer and freelancer from Kozhikode, Kerala. Building modern, fast, and beautiful web applications with Next.js, React, TypeScript, and Node.js. Open to internships and jobs.',
  keywords: [
    'Muhammed Shamveel',
    'Shamveel portfolio',
    'full-stack developer Kerala',
    'web developer Kozhikode',
    'freelance developer India',
    'Next.js developer Kerala',
    'React developer Kozhikode',
    'MERN stack developer India',
    'hire web developer Kerala',
    'software engineer Calicut',
    'portfolio website developer Kerala',
  ],
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    type: 'website',
    url: BASE_URL,
    title: 'Muhammed Shamveel — Full-Stack Developer & Freelancer',
    description:
      'Passionate full-stack web developer from Kozhikode, Kerala. Building with Next.js, React, TypeScript & Node.js. Available for freelance and internships.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Muhammed Shamveel Portfolio' }],
    locale: 'en_IN',
    siteName: 'Muhammed Shamveel — Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Muhammed Shamveel — Full-Stack Developer & Freelancer',
    description: 'Full-stack developer from Kerala building with Next.js, React & Node.js.',
    images: ['/og-image.png'],
    creator: '@shamveel',
  },
}

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Muhammed Shamveel — Portfolio',
  url: BASE_URL,
  description: 'Portfolio of Muhammed Shamveel, full-stack web developer from Kozhikode, Kerala.',
  author: {
    '@type': 'Person',
    name: 'Muhammed Shamveel',
    url: BASE_URL,
  },
  potentialAction: {
    '@type': 'SearchAction',
    target: `${BASE_URL}/projects?q={search_term_string}`,
    'query-input': 'required name=search_term_string',
  },
}


export default function Home() {
  return (
    <Wrapper>
      <Script
        id="schema-website"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        strategy="beforeInteractive"
      />
      {/* ===== SPLASH SCREEN ===== */}
      <section
        id="splash-screen"
        className="w-full sections h-screen bg-black flex items-center justify-center flex-col px-4"
      >
        <h2 className="splash-text text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold font-stick-no-bills text-white text-center">
          wellcome
        </h2>
        <p className="text-white text-sm sm:text-base mt-2">scroll</p>
        <svg
          className="w-4 sm:w-5 m-1 animate-bounce"
          viewBox="0 -19.04 75.804 75.804"
          xmlns="http://www.w3.org/2000/svg"
          fill="#ffffff"
          stroke="#ffffff"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth={0} />
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <g id="SVGRepo_iconCarrier">
            {" "}
            <g
              id="Group_67"
              data-name="Group 67"
              transform="translate(-798.203 -587.815)"
            >
              {" "}
              <path
                id="Path_59"
                data-name="Path 59"
                d="M798.2,589.314a1.5,1.5,0,0,1,2.561-1.06l33.56,33.556a2.528,2.528,0,0,0,3.564,0l33.558-33.556a1.5,1.5,0,1,1,2.121,2.121l-33.558,33.557a5.53,5.53,0,0,1-7.807,0l-33.56-33.557A1.5,1.5,0,0,1,798.2,589.314Z"
                fill="#ffffff"
              />{" "}
            </g>{" "}
          </g>
        </svg>
      </section>

      {/* ===== PARALLAX / MAIN SECTION ===== */}
      <ParallaxSecion />

      {/* ===== HERO / INTRO SECTION ===== */}
      <HeroSection />

      {/* ===== WORKS (horizontal scroll, then normal scroll resumes) ===== */}
      <WorksSection />
    </Wrapper>
  );
}
