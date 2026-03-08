"use client"
import { useEffect } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import _SplitText, { SplitText } from 'gsap/SplitText'

gsap.registerPlugin(ScrollTrigger, _SplitText, useGSAP)

export default function HeroAnimation() {
  useGSAP(() => {
    const isMobile = window.innerWidth < 768;
    const section = document.getElementById("hero-section");
    if (!section) return;

    // ─── "Introducing" heading fade-in ───
    gsap.from(section.querySelector("h2"), {
      scrollTrigger: {
        trigger: section,
        start: "top 85%",
        once: true,
      },
      y: 40,
      autoAlpha: 0,
      duration: 0.8,
      ease: "power3.out",
    });

    // ─── SplitText: greetings ───
    const greetingsEl = section.querySelector(".greetings");
    if (greetingsEl) {
      const greetings = SplitText.create(greetingsEl, {
        type: isMobile ? "words" : "words,chars",
      });
      gsap.from(greetings[isMobile ? "words" : "chars"], {
        scrollTrigger: { trigger: greetingsEl, once: true },
        autoAlpha: 0,
        y: 15,
        stagger: isMobile ? 0.08 : 0.03,
        duration: isMobile ? 0.3 : 0.5,
        ease: "power2.out",
      });
    }

    // ─── SplitText: name ───
    const nameEl = section.querySelector(".name");
    if (nameEl) {
      const name = SplitText.create(nameEl, {
        type: isMobile ? "words" : "words,chars",
      });
      gsap.from(name[isMobile ? "words" : "chars"], {
        scrollTrigger: { trigger: nameEl, once: true },
        y: isMobile ? 40 : 80,
        autoAlpha: 0,
        stagger: 0.08,
        duration: isMobile ? 0.5 : 0.8,
        ease: "power2.out",
      });
    }

    // ─── SplitText: bio ───
    const bioEl = section.querySelector(".bio");
    if (bioEl) {
      const bio = SplitText.create(bioEl, { type: "words" });
      gsap.from(bio.words, {
        scrollTrigger: { trigger: bioEl, once: true },
        y: isMobile ? 20 : 35,
        autoAlpha: 0,
        stagger: isMobile ? 0.03 : 0.05,
        duration: isMobile ? 0.5 : 0.8,
        ease: "power2.out",
      });
    }

    // ─── CTA button & links fade-up ───
    gsap.from(
      section.querySelectorAll(".hero-text:not(.greetings):not(.name):not(.bio)"),
      {
        scrollTrigger: { trigger: section.querySelector(".bio"), once: true },
        y: 30,
        autoAlpha: 0,
        stagger: 0.12,
        duration: 0.6,
        delay: 0.3,
        ease: "power2.out",
      }
    );

    // ─── Profile image ───
    const profile = section.querySelector(".profile");
    if (profile) {
      gsap.from(profile, {
        scrollTrigger: { trigger: profile, once: true },
        x: 80,
        autoAlpha: 0,
        duration: 0.8,
        ease: "power3.out",
      });
    }

    // ─── Icon box stagger ───
    const icons = section.querySelectorAll(".icon");
    if (icons.length) {
      gsap.from(icons, {
        scrollTrigger: {
          trigger: section.querySelector("#icon-box"),
          once: true,
        },
        x: 60,
        autoAlpha: 0,
        stagger: 0.15,
        duration: 0.7,
        ease: isMobile ? "power2.out" : "back.out(1.7)",
      });
    }
  });

  return null;
}
