import Link from "next/link";
import Image from "next/image";

import HeroAnimation from "./HeroAnimation";

function HeroSection() {
  return (
    <section
      id="hero-section"
      className="capitalize sections pb-10 sm:pb-16 md:pb-20 w-full bg-secondary flex items-center justify-around flex-col pt-5 px-5 sm:px-8 md:px-10 will-change-transform"
    >
      <HeroAnimation />

      {/* "Introducing" heading */}
      <div>
        <h2 className="font-akronim text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-title p-6 sm:p-10 md:p-16 lg:p-20 text-center">
          indroducing
        </h2>
      </div>

      {/* Two-column layout: text + image */}
      <div className="w-full flex items-center justify-around gap-6 sm:gap-8 lg:gap-10 flex-col md:flex-row flex-wrap">
        {/* Left: Text content */}
        <aside className="flex-1 min-w-0 max-w-lg max-md:max-w-full max-md:w-full md:order-1 max-md:text-center">
          <div className="space-y-4 sm:space-y-5 md:space-y-6 mb-8 sm:mb-10 md:mb-12">
            <h6 className="hero-text greetings font-poppins text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed">
              Hello there, Nice to meet you ❤️, I AM
            </h6>
            <h3 className="hero-text font-abhaya-libre text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl text-title font-bold leading-tight name">
              shamveel
            </h3>
            <p className="hero-text bio font-poppins text-gray-200 text-sm sm:text-base md:text-lg leading-relaxed max-w-md">
              passionate web designer dedicated to creating visually stunning
              and highly functional websites. I specialize in crafting unique
              online experiences that captivate users and drive engagement.
            </p>
            <Link
              href="mailto:shamveelmdr@gmail.com"
              className="max-md:inline-block"
            >
              <button className="hero-text relative overflow-hidden group px-5 py-3 sm:px-6 sm:py-3 md:px-8 md:py-4 rounded-2xl font-poppins font-medium text-sm sm:text-base md:text-lg text-white backdrop-blur-xl bg-white/10 border border-white/20 shadow-2xl hover:shadow-white/25 transition-all duration-500 hover:scale-105 hover:bg-white/20 hover:border-white/30 active:scale-95 active:bg-white/30 active:shadow-white/40 active:duration-150 before:absolute before:inset-0 before:bg-gradient-to-r before:from-white/0 before:via-white/20 before:to-white/0 before:translate-x-[-100%] before:transition-transform before:duration-700 hover:before:translate-x-[100%] after:absolute after:inset-0 after:bg-gradient-to-br after:from-white/30 after:to-transparent after:opacity-0 after:transition-opacity after:duration-150 active:after:opacity-100 mt-4">
                <span className="relative z-10">schedule a call</span>
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 to-transparent opacity-50"></div>
              </button>
            </Link>
          </div>
          <div className="hero-text space-y-3 sm:space-y-4 max-md:flex max-md:flex-col max-md:items-center">
            <Link
              className="font-poppins text-white text-base sm:text-lg font-medium flex items-center gap-2 hover:text-gray-300 transition-colors duration-300"
              href=""
            >
              latest work
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                ></path>
              </svg>
            </Link>
            <div id="latest-works" className="mt-2 sm:mt-4"></div>
            <Link
              className="font-poppins text-white text-base sm:text-lg font-medium flex items-center gap-2 hover:text-gray-300 transition-colors duration-300"
              href=""
            >
              view all
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                ></path>
              </svg>
            </Link>
          </div>
        </aside>

        {/* Right: Profile image + icons */}
        <aside
          id="my-image"
          className="flex-1 min-w-0 max-w-lg max-md:max-w-xs max-md:w-full md:order-2"
        >
          <div className="flex justify-center items-center flex-col lg:items-end">
            <Image
              className="w-48 sm:w-56 md:w-64 lg:w-72 xl:w-96 profile h-auto border border-secondary shadow-lg shadow-black/30 rounded-full"
              src="/OFFICAL1.png"
              alt="Muhammed Shamveel — Full-Stack Web Developer and Freelancer from Kozhikode, Kerala"
              title="Muhammed Shamveel — Full-Stack Developer"
              width={384}
              height={384}
              priority
            />
            <span
              id="icon-box"
              className="w-48 sm:w-56 md:w-64 lg:w-72 xl:w-96 rounded-3xl lg:rounded-l-3xl h-10 sm:h-12 md:h-14 lg:h-16 xl:h-20 bg-white *:w-6 *:h-6 sm:*:w-7 sm:*:h-7 md:*:w-8 md:*:h-8 lg:*:w-10 lg:*:h-10 xl:*:w-12 xl:*:h-12 *:m-0.5 sm:*:m-1 flex items-center justify-around shadow-lg relative"
            >
              <Image
                className="icon h-auto"
                src="/icons/nextjs.svg"
                alt="Next.js logo — Muhammed Shamveel uses Next.js for full-stack web development"
                title="Next.js"
                width={48}
                height={48}
              />
              <Image
                className="icon h-auto"
                src="/icons/tailwind.svg"
                alt="Tailwind CSS logo — used by Shamveel for responsive UI design"
                title="Tailwind CSS"
                width={48}
                height={48}
              />
              <Image
                className="icon h-auto"
                src="/icons/react.svg"
                alt="React logo — Shamveel specialises in React and Next.js development"
                title="React"
                width={48}
                height={48}
              />
              <Image
                className="icon h-auto"
                src="/icons/js.svg"
                alt="JavaScript logo — Shamveel builds with vanilla JavaScript and TypeScript"
                title="JavaScript"
                width={48}
                height={48}
              />
              <Image
                className="icon h-auto"
                src="/icons/css.svg"
                alt="CSS3 logo — Shamveel writes modern CSS including animations and layouts"
                title="CSS3"
                width={48}
                height={48}
              />
              <Image
                className="icon h-auto"
                src="/icons/html5.svg"
                alt="HTML5 logo — Shamveel writes semantic, accessible HTML"
                title="HTML5"
                width={48}
                height={48}
              />
            </span>
          </div>
        </aside>
      </div>
    </section>
  );
}

export default HeroSection;
