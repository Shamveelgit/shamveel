import Link from 'next/link'
import type { Metadata } from 'next'
import Header from '@/app/components/Header'

export const metadata: Metadata = {
  title: 'Page Not Found (404) — Muhammed Shamveel',
  description:
    'The page you are looking for does not exist. Return to Muhammed Shamveel\'s portfolio to explore my projects, learn about me, or get in touch.',
  robots: {
    index: false,
    follow: false,
  },
}

export default function NotFound() {
  return (
    <>
      <div className="w-full flex items-center justify-center absolute z-50">
        <Header />
      </div>
      <main className="min-h-screen bg-secondary flex items-center justify-center px-4 pt-20">
        <div className="text-center max-w-md">
          {/* 404 Visual */}
          <div className="mb-8">
            <h1 className="text-8xl md:text-9xl font-bold text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text mb-4">
              404
            </h1>
            <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6" />
          </div>

          {/* Error Message */}
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Page Not Found
          </h2>
          <p className="text-gray-400 mb-8 leading-relaxed">
            The page you're looking for doesn't exist or has been moved. Don't worry, let me help you find what you need.
          </p>

          {/* Navigation Links */}
          <div className="space-y-3 mb-8">
            <Link
              href="/"
              className="block px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300"
            >
              Back to Home
            </Link>
            <Link
              href="/projects"
              className="block px-6 py-3 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-300 border border-white/20"
            >
              View My Projects
            </Link>
            <Link
              href="/about"
              className="block px-6 py-3 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-300 border border-white/20"
            >
              Learn About Me
            </Link>
            <Link
              href="/contact"
              className="block px-6 py-3 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-300 border border-white/20"
            >
              Get in Touch
            </Link>
          </div>

          {/* Help Text */}
          <p className="text-sm text-gray-500">
            If you believe this is a mistake, please{' '}
            <Link href="/contact" className="text-blue-400 hover:text-blue-300 underline">
              contact me
            </Link>
            .
          </p>
        </div>

        {/* Background gradient effects */}
        <div className="absolute top-[-10%] right-[-5%] w-125 h-125 bg-blue-500/10 rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute bottom-[-10%] left-[-10%] w-100 h-100 bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />
      </main>
    </>
  )
}
