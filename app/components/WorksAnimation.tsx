"use client"
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger, useGSAP)

export default function WorksAnimation() {
    useGSAP(() => {
        const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth < 768;
        const worksTrack = document.querySelector(".works-track") as HTMLElement;
        const workCards = gsap.utils.toArray<HTMLElement>(".work-card");
        const section = document.getElementById("works-section");

        if (!worksTrack || !workCards.length || !section) return;

        const getScrollAmount = () => {
            const trackOffset = worksTrack.offsetLeft;
            return -(worksTrack.scrollWidth + trackOffset - window.innerWidth);
        };

        // Animate title
        gsap.from(".works-title", {
            scrollTrigger: {
                trigger: section,
                start: "top 80%",
                once: true,
            },
            y: 60,
            autoAlpha: 0,
            duration: 1,
            ease: "power3.out",
        });

        gsap.from(".works-subtitle", {
            scrollTrigger: {
                trigger: section,
                start: "top 75%",
                once: true,
            },
            y: 30,
            autoAlpha: 0,
            duration: 0.8,
            delay: 0.2,
            ease: "power3.out",
        });

        // Horizontal scroll
        const horizontalScroll = gsap.to(worksTrack, {
            x: getScrollAmount,
            force3D: true,
            ease: "none",
            scrollTrigger: {
                trigger: section,
                start: "top top",
                end: () => `+=${Math.abs(getScrollAmount())}`,
                pin: true,
                scrub: isMobile ? 1 : 1,
                fastScrollEnd: false,
                invalidateOnRefresh: true,
            },
        });

        // Animate each card as it enters
        workCards.forEach((card, index) => {
            const yOffset = index % 2 === 0 ? 100 : -100;
            gsap.from(card, {
                scrollTrigger: {
                    trigger: card,
                    containerAnimation: horizontalScroll,
                    start: "left 85%",
                    end: "left 50%",
                    scrub: isMobile ? 0.1 : 1,
                    fastScrollEnd: false,
                },
                autoAlpha: 0,
                rotateZ: index % 2 === 0 ? -10 : 10,
                y: yOffset,
                scale: 0.85,
                rotateY: -20,
            });
        });
    });

    return null;
}
