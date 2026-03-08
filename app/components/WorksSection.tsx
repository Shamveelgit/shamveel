import React from "react";
import Link from "next/link";
import Image from "next/image";

import { projects } from "../projects/data";
import WorksAnimation from "./WorksAnimation";

function WorksSection() {
  return (
    <section
      id="works-section"
      className="works-section py-10  relative w-full h-fit min-h-screen overflow-hidden bg-gradient-to-b from-secondary via-[#071e2e] to-secondary pt-[clamp(3rem,6vw,6rem)]"
    >
      <WorksAnimation />
      {/* Section Header */}
      <div className="text-center px-6 pb-8">
        <h2 className="works-title font-akronim text-[clamp(3rem,8vw,6rem)] text-title uppercase tracking-[0.15em] leading-tight mb-2 drop-shadow-[0_0_40px_rgba(255,255,202,0.15)]">
          Works
        </h2>
        <p className="works-subtitle font-poppins text-[clamp(0.85rem,1.5vw,1.1rem)] text-white/50 font-light tracking-wider">
          Selected projects I&apos;ve crafted with passion
        </p>
      </div>

      {/* Horizontal Scroll Container */}
      <div className="w-full overflow-hidden pl-20 md:pl-96 ">
        <div className="works-track flex items-center gap-[clamp(2rem,4vw,4.5rem)] pl-[6vw] pr-[15vw] md:pr-[25vw] py-16 pb-24 w-max will-change-transform backface-hidden">
          {projects.map((project) => (
            <div
              key={project.id}
              className="work-card group shrink-0 w-[clamp(340px,38vw,480px)] max-md:w-[clamp(340px,85vw,440px)] max-[480px]:w-[clamp(320px,92vw,400px)] relative p-2 bg-amber-50/10 rounded-xl"
            >
              <Link
                href={`/projects/${project.slug || project.id}`}
                className="block w-full h-full"
              >
                {/* Tablet Device Frame */}
                <div className="tablet-frame relative perspective-[1000px] transition-transform duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]">
                  <div className="tablet-bezel relative bg-linear-to-br from-[#e8e8e8] via-[#d4d4d4_30%,#f5f5f5_70%] to-[#e0e0e0] rounded-[20px] max-md:rounded-[16px] max-[480px]:rounded-[14px] p-[18px] max-md:p-[14px] max-[480px]:p-[10px] shadow-[0_30px_60px_rgba(0,0,0,0.35),0_15px_30px_rgba(0,0,0,0.25),inset_0_1px_0_rgba(255,255,255,0.8),inset_0_-1px_0_rgba(0,0,0,0.05)] [transform:rotateY(-8deg)_rotateX(4deg)] max-md:[transform:rotateY(-6deg)_rotateX(3deg)] max-[480px]:[transform:rotateY(-4deg)_rotateX(2deg)] [transform-style:preserve-3d] transition-all duration-600 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:[transform:rotateY(-2deg)_rotateX(1deg)_scale(1.02)] max-md:group-hover:[transform:rotateY(-2deg)_rotateX(1deg)_scale(1.01)] group-hover:shadow-[0_40px_80px_rgba(0,0,0,0.4),0_20px_40px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.8),inset_0_-1px_0_rgba(0,0,0,0.05)]">
                    <div className="relative rounded-md max-md:rounded max-[480px]:rounded overflow-hidden bg-[#111] aspect-[4/3] shadow-[inset_0_0_8px_rgba(0,0,0,0.3)] after:content-[''] after:absolute after:inset-0 after:bg-gradient-to-br after:from-white/[0.08] after:to-transparent after:pointer-events-none after:rounded-md">
                      <Image
                        src={project.image}
                        alt={`${project.title} — web development project by Muhammed Shamveel, full-stack developer from Kozhikode, Kerala`}
                        title={project.title}
                        loading="lazy"
                        decoding="async"
                        width={800}
                        height={600}
                        className="w-full h-full object-cover object-top block transition-[transform] duration-[800ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-[1.06]"
                      />
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 px-5 pt-10 pb-4 pointer-events-none bg-linear-to-t from-black/70 to-transparent rounded-b-[12px]">
                    <span className="font-poppins text-[0.6rem] uppercase tracking-[0.2em] text-title font-semibold drop-shadow-[0_1px_4px_rgba(0,0,0,1)] block mb-0.5">
                      {project.category}
                    </span>
                    <h3 className="font-abhaya-libre text-[clamp(1.2rem,2.2vw,1.7rem)] text-white font-bold leading-tight drop-shadow-[0_2px_6px_rgba(0,0,0,1)] truncate mb-2">
                      {project.title}
                    </h3>
                    <div className="flex flex-wrap gap-1.5 w-full items-center overflow-hidden h-[22px]">
                      {project.tech.slice(0, 3).map((t) => (
                        <span
                          key={t}
                          className="font-poppins text-[0.55rem] py-0.5 px-2 rounded-full bg-black/50 text-white/90 border border-white/20 tracking-wide backdrop-blur-sm truncate max-w-[90px]"
                        >
                          {t}
                        </span>
                      ))}
                      {project.tech.length > 3 && (
                        <span className="font-poppins text-[0.55rem] py-0.5 px-2 rounded-full bg-title/20 text-title border border-title/30 tracking-wide backdrop-blur-sm">
                          +{project.tech.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

              </Link>
            </div>
          ))}

          {/* View All Projects Card */}
          <div className="work-card group shrink-0 w-[clamp(340px,38vw,480px)] max-md:w-[clamp(340px,85vw,440px)] max-[480px]:w-[clamp(320px,92vw,400px)] relative p-2 rounded-xl flex flex-col items-center justify-center">
            <Link
              href="/projects"
              className="relative w-full aspect-4/3 flex flex-col items-center justify-center gap-4 md:gap-8 bg-amber-50/5 border border-white/10 rounded-[20px] max-md:rounded-[16px] max-[480px]:rounded-[14px] p-4 md:p-8 shadow-[0_15px_30px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.05)] transition-all duration-600 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] hover:bg-amber-50/10 hover:border-white/20 hover:shadow-[0_30px_60px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.1)] hover:-translate-y-2"
            >
              <div className="w-16 h-16 md:w-24 md:h-24 rounded-full border-2 border-white/20 flex items-center justify-center bg-white/5 transition-all duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:bg-white/10 group-hover:border-white/40 group-hover:scale-110">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-8 h-8 md:w-9 md:h-9 text-white/70 transition-colors duration-500 group-hover:text-white"
                >
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </div>
              <div className="space-y-2 md:space-y-3 text-center">
                <h3 className="font-abhaya-libre text-[clamp(1.5rem,2.8vw,2.4rem)] text-white font-bold leading-tight drop-shadow-[0_0_15px_rgba(255,255,255,0.1)] transition-all duration-500 group-hover:drop-shadow-[0_0_25px_rgba(255,255,255,0.3)]">
                  Explore All Projects
                </h3>
                <p className="font-poppins text-[clamp(0.7rem,1.2vw,1rem)] text-white/40 tracking-widest uppercase font-medium transition-colors duration-500 group-hover:text-white/70">
                  View the complete archive
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WorksSection;
