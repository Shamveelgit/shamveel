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

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Muhammed Shamveel',
  url: BASE_URL,
  image: `${BASE_URL}/OFFICAL1.png`,
  jobTitle: 'Full-Stack Web Developer & Freelancer',
  description: 'Passionate full-stack web developer from Kozhikode, Kerala. Specializing in MERN stack and Next.js development.',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Kozhikode',
    addressRegion: 'Kerala',
    addressCountry: 'IN',
  },
  email: 'contact@shamveel.dev',
  sameAs: [
    'https://github.com/shamveelgit',
    'https://www.linkedin.com/in/dev-shamveel',
    'https://x.com/MuhammedSh77205',
  ],
  knowsAbout: [
    'React.js',
    'Next.js',
    'Node.js',
    'MongoDB',
    'Express.js',
    'JavaScript',
    'TypeScript',
    'MERN Stack',
    'Web Development',
    'Full-Stack Development',
  ],
  hasCredential: [
    {
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'degree',
      name: 'Bachelor of Computer Applications (BCA)',
      issuedBy: {
        '@type': 'EducationalOrganization',
        name: 'JDT Islam College',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Kozhikode',
          addressRegion: 'Kerala',
          addressCountry: 'IN',
        },
      },
    },
  ],
  workLocation: {
    '@type': 'Place',
    name: 'Kozhikode, Kerala, India',
  },
}

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Muhammed Shamveel — Portfolio',
  url: BASE_URL,
  description: 'Portfolio of Muhammed Shamveel, full-stack web developer from Kozhikode, Kerala.',
  author: personSchema,
  potentialAction: {
    '@type': 'SearchAction',
    target: `${BASE_URL}/projects?q={search_term_string}`,
    'query-input': 'required name=search_term_string',
  },
}

const homepageBreadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: BASE_URL,
    },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What technologies do you specialize in?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'I specialize in the MERN stack (MongoDB, Express.js, React, Node.js) and Next.js. I also work with TypeScript, Tailwind CSS, and modern web development tools and frameworks.',
      },
    },
    {
      '@type': 'Question',
      name: 'What services do you offer?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'I offer full-stack web development, frontend development, backend development, e-commerce solutions, performance optimization, and custom web applications. I work with startups, small businesses, and individual clients.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are you available for freelance projects?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, I am actively available for freelance web development projects. I also welcome full-time positions and internship opportunities. Contact me at contact@shamveel.dev to discuss your project.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does a typical project take?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Project timelines vary based on complexity and scope. Small websites typically take 2-4 weeks, while larger applications might take 2-4 months or more. I always provide a detailed timeline estimate before starting.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you build responsive websites?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Absolutely! All my projects are built with a mobile-first approach using responsive design principles. This ensures your website looks and works great on all devices — desktop, tablet, and mobile.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you help with website performance optimization?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, I specialize in web performance optimization including code splitting, image optimization, caching strategies, and Core Web Vitals improvements. A fast website improves user experience and SEO rankings.',
      },
    },
  ],
}


export default function Home() {
  return (
    <Wrapper>
      <Script
        id="schema-person"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        strategy="beforeInteractive"
      />
      <Script
        id="schema-website"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        strategy="beforeInteractive"
      />
      <Script
        id="schema-breadcrumb-home"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homepageBreadcrumbSchema) }}
        strategy="beforeInteractive"
      />
      <Script
        id="schema-faq-home"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
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
