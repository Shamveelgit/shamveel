"use client"
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useCallback, useEffect, useRef, useState } from 'react';
gsap.registerPlugin(ScrollTrigger, useGSAP);

function Wrapper({ children }: { children: React.ReactNode }) {
    const pageRef = useRef<HTMLDivElement>(null);
    const loaderRef = useRef<HTMLDivElement>(null);
    const [isReady, setIsReady] = useState(false);

    // ── Loading gate: wait for window load + next frame ──
    useEffect(() => {
        // Lock scroll while loading
        document.body.style.overflow = "hidden";

        const handleReady = () => {
            // Give GSAP one extra frame to finish registering
            requestAnimationFrame(() => {
                setIsReady(true);
            });
        };

        if (document.readyState === "complete") {
            handleReady();
        } else {
            window.addEventListener("load", handleReady);
            return () => window.removeEventListener("load", handleReady);
        }
    }, []);

    // ── Once ready, animate loader out, then unlock scroll & refresh ST ──
    useEffect(() => {
        if (!isReady || !loaderRef.current) return;

        const tl = gsap.timeline({
            onComplete: () => {
                // Unlock scroll
                document.body.style.overflow = "";
                // Recalculate all ScrollTrigger positions now that scroll is active
                ScrollTrigger.refresh();
            },
        });

        tl.to(loaderRef.current, {
            opacity: 0,
            duration: 0.6,
            ease: "power2.inOut",
        }).set(loaderRef.current, { display: "none" });

    }, [isReady]);

    // ── Section-stacking ScrollTrigger ──
    useGSAP(() => {
        if (!isReady) return;

        const sections = gsap.utils.toArray(".sections") as HTMLElement[];

        sections.forEach((section, index) => {
            const nextSection = sections[index + 1] as HTMLElement | undefined;
            const isLast = index === sections.length - 1;

            // Later sections slide OVER earlier pinned ones
            gsap.set(section, { position: "relative", zIndex: index + 1 });

            // Pin this section; unpin exactly when the NEXT section's top hits viewport top
            if (!isLast && nextSection) {
                ScrollTrigger.create({
                    trigger: section,
                    start: "top top",
                    endTrigger: nextSection,
                    scrub: 1,
                    end: "top top",
                    pin: true,
                    pinSpacing: false,
                    invalidateOnRefresh: true,
                });
            }
        });
    }, { dependencies: [isReady] });


    return (
        <>
            {/* ── Fullscreen loader overlay ── */}
            <div
                ref={loaderRef}
                id="loader"
                className="fixed inset-0 z-9999 flex items-center justify-center bg-black"
            >
                <div className="spinner">
                    <div className="bar1"></div>
                    <div className="bar2"></div>
                    <div className="bar3"></div>
                    <div className="bar4"></div>
                    <div className="bar5"></div>
                    <div className="bar6"></div>
                    <div className="bar7"></div>
                    <div className="bar8"></div>
                    <div className="bar9"></div>
                    <div className="bar10"></div>
                    <div className="bar11"></div>
                    <div className="bar12"></div>
                </div>
            </div>

            {/* ── Page content (always in DOM so GSAP can measure it) ── */}
            <div ref={pageRef} id="page" className="w-full h-full overflow-hidden">
                {children}
            </div>
        </>
    )
}

export default Wrapper