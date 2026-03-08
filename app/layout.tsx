import type { Metadata } from "next";
import { Abhaya_Libre, Akronim, Delius, Geist, Geist_Mono, Pacifico, Philosopher } from "next/font/google";
import "./globals.css";
import GsapProvider from "@/Providers/GsapProvider";
import Footer from "./components/Footer";
import {
  Poppins,
  Sofia_Sans,
  Sour_Gummy,
  Stick_No_Bills,
} from "next/font/google";

export const abhayaLibre = Abhaya_Libre({
  variable: "--font-abhaya-libre",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const akronim = Akronim({
  variable: "--font-akronim",
  subsets: ["latin"],
  weight: ["400"],
});

export const delius = Delius({
  variable: "--font-delius",
  subsets: ["latin"],
  weight: ["400"],
});

export const pacifico = Pacifico({
  variable: "--font-pacifico",
  subsets: ["latin"],
  weight: ["400"],
});

export const philosopher = Philosopher({
  variable: "--font-philosopher",
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
});

export const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

// Variable Fonts: Next.js automatically handles the weight ranges
export const sofiaSans = Sofia_Sans({
  variable: "--font-sofia-sans",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

export const sourGummy = Sour_Gummy({
  variable: "--font-sour-gummy",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

export const stickNoBills = Stick_No_Bills({
  variable: "--font-stick-no-bills",
  subsets: ["latin"],
  style: ["normal"],
});

const BASE_URL = 'https://shamveel.dev'

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'Muhammed Shamveel — Full-Stack Developer & Freelancer',
    template: '%s | Muhammed Shamveel',
  },
  description:
    'Muhammed Shamveel is a passionate full-stack web developer and freelancer based in Kozhikode, Kerala. Specialising in Next.js, React, TypeScript, Node.js, and MERN stack development. Open to internships and jobs.',
  keywords: [
    'Muhammed Shamveel',
    'Shamveel',
    'Muhammed Shamveel developer',
    'Shamveel portfolio',
    'full-stack developer Kerala',
    'web developer Kozhikode',
    'web developer Calicut',
    'software engineer Kerala',
    'freelance web developer India',
    'freelance developer Kozhikode',
    'Next.js developer Kerala',
    'React developer Kerala',
    'MERN stack developer India',
    'TypeScript developer India',
    'Node.js developer Kerala',
    'JavaScript developer India',
    'BCA student developer Kerala',
    'JDT Islam College developer',
    'hire web developer Kerala',
    'internship web developer Kerala',
    'junior full-stack developer India',
    'open to work developer Kerala',
    'portfolio web developer',
    'custom website development Kerala',
    'React Native developer India',
    'Python developer Kerala',
  ],
  authors: [{ name: 'Muhammed Shamveel', url: BASE_URL }],
  creator: 'Muhammed Shamveel',
  publisher: 'Muhammed Shamveel',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: BASE_URL,
    siteName: 'Muhammed Shamveel — Portfolio',
    title: 'Muhammed Shamveel — Full-Stack Developer & Freelancer',
    description:
      'Passionate full-stack web developer from Kozhikode, Kerala. Building modern web experiences with Next.js, React, and Node.js.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Muhammed Shamveel — Full-Stack Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Muhammed Shamveel — Full-Stack Developer & Freelancer',
    description:
      'Passionate full-stack developer from Kerala. Building with Next.js, React, TypeScript & Node.js.',
    images: ['/og-image.png'],
    creator: '@shamveel',
  },
  alternates: {
    canonical: BASE_URL,
  },
  verification: {
    google: 'googlef102abbed6e3dc29.html',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-KVZVB9G4');`,
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(c,l,a,r,i,t,y){
c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
})(window, document, "clarity", "script", "vsjmx8n8hv");`,
          }}
        />
      </head>
      <body
        className={` bg-background antialiased`}
      >
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KVZVB9G4"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <GsapProvider>
          {children}
          <Footer />
        </GsapProvider>
      </body>
    </html>
  );
}
