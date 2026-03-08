"use client"
import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import React, { useRef } from 'react'
import Image from 'next/image'
import Header from './Header';

function ParallaxSecion() {
  const mainRef = useRef<HTMLElement>(null);
  useGSAP(() => {
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth < 768;
    let maxMd: MediaQueryList = window.matchMedia("(max-width : 768px)")
    let maxSm = window.matchMedia("(max-width : 640px)")
    let pTl = gsap.timeline({
      scrollTrigger: {
        trigger: mainRef.current,
        start: "top 50%",
        end: "bottom top",
        scrub: 3,
        fastScrollEnd: true,
        // pin: true,
      },
    })
    pTl.from("header", {
      scrollTrigger: {
        trigger: ".person",
        fastScrollEnd: true,
        // scrub: 1,
        // markers: true,
        start: "top bottom+=400",
        end: "top top",
      },
      y: -200,
      autoAlpha: 0,
      ease: "power1.in",
      duration: .3
    }).to([".bird"], {
      x: 700,
      ease: "none",
      duration: 1
    }, "<").to(".soul", {
      y: maxMd.matches ? 0 : 60,
      scale: maxMd.matches ? 2 : 1,
      ease: "none",
      duration: 1
    }, "<")
      .to('.text', {
        y: 200,
        ease: "none",
        duration: 1,
      }, "<")
      .to(".mountain-1", {
        y: 30,
        ease: "none",
        duration: 1
      }, "<")
      .to(".mountain-2", {
        y: maxMd.matches ? maxSm.matches ? 0 : -30 : -50,
        ease: "none",
        duration: 1
      }, "<")
      .to(".mountain-3", {
        y: maxMd.matches ? -30 : -20,
        ease: "none",
        duration: 1
      }, "<")
      .to(".clouds", {
        y: -30,
        x: -100,
        ease: "none",
        duration: 1
      }, "<")
      .to(".person", {
        y: maxMd.matches ? maxSm.matches ? 200 : 350 : 200,
        scale: maxMd.matches ? 0.2 : 0.5,
        ease: "none",
        duration: 1
      }, "<")
      .to(".tree", {
        y: maxMd.matches ? 50 : 30,
        scale: maxMd.matches ? 1 : .75,
        ease: isMobile ? "power2.out" : "back.out(1.7)"
      }, "<")
      .to(".bag", {
        y: maxMd.matches ? maxSm.matches ? 50 : 200 : 50,
        scale: maxMd.matches ? .3 : .7,
        ease: isMobile ? "power2.out" : "back.out(1.7)"
      }, "<")
  }, { scope: mainRef })

  return (
    <section
      ref={mainRef}
      id="main"
      className="relative overflow-hidden h-[200vh]"
    >
      <div className='flex sections flex-col items-center gap-12 sm:gap-20 md:gap-28 lg:gap-36 bg-background h-screen w-full'>
        {/* --- HEADER / NAV --- */}
        <Header />
        {/* --- PARALLAX CONTENT --- */}
        <div
          id="content"
          className="bg-background w-full h-screen max-md:h-screen flex flex-col items-center gap-12 sm:gap-20 md:gap-28 lg:gap-36 relative"
        >
          <section className="max-w-full w-full">
            <h5 className="text font-poppins text-base sm:text-xl md:text-2xl lg:text-3xl text-white text-center">
              {/* Hello There, */}
            </h5>
            <div className="w-full *:absolute parallax-container bg-secondary">
              <Image
                className="bird h-auto"
                src="/bird.svg"
                alt="A bird flying across the parallax landscape on Muhammed Shamveel's portfolio"
                title="Flying bird element — Shamveel Portfolio"
                width={200} height={200}
              />
              <Image
                className="bag z-10 left-1/2 bottom-36 scale-75 max-md:scale-50 max-md:bottom-32 h-auto"
                src="/bag.svg"
                alt="A travel bag in the parallax scene — representing Muhammed Shamveel's developer journey"
                title="Travel bag — Shamveel Portfolio"
                width={200} height={200}
              />
              <Image
                className="clouds w-4/6 max-w-full bottom-60 max-md:bottom-80 mx-auto h-auto"
                src="/clouds.svg"
                alt="Clouds layer in the multi-depth parallax background on Shamveel's portfolio homepage"
                title="Clouds — Shamveel Portfolio"
                width={1200} height={400}
              />
              <img
                className="person right-1/2 translate-1/2 bottom-[16rem] z-10 scale-75 max-md:scale-50 max-md:bottom-52"
                src="/person.svg"
                alt="Silhouette of a person representing Muhammed Shamveel — full-stack developer from Kozhikode, Kerala"
                title="Person silhouette — Shamveel Portfolio"
              />
              <Image
                className="mountain-2 left-0 w-full max-w-full bottom-16 z-[6] max-sm:bottom-44 max-md:bottom-28 max-lg:bottom-20 h-auto"
                src="/mountain2.svg"
                alt="Mountain range front layer — parallax depth scene on Muhammed Shamveel's portfolio homepage"
                title="Front mountain range — Shamveel Portfolio"
                width={1920} height={800}
              />
              <Image
                className="mountain-3 left-0 w-full max-w-full bottom-48 max-md:bottom-24 max-lg:bottom-44 max-sm:bottom-52 h-auto"
                src="/mountain3.svg"
                alt="Mountain range mid layer — multi-depth parallax background on Shamveel's portfolio"
                title="Mid mountain range — Shamveel Portfolio"
                width={1920} height={800}
              />
              <Image
                className="mountain-1 left-0 w-full max-w-full max-md:bottom-40 bottom-10 z-[7] h-auto"
                src="/mountain1.svg"
                alt="Mountain range back layer — distant peaks in the parallax landscape on Shamveel's portfolio"
                title="Back mountain range — Shamveel Portfolio"
                width={1920} height={800}
              />
              <Image
                id="soul"
                className="soul left-0 bottom-0 w-full max-w-full z-[9] scale-125 max-md:bottom-20 max-md:scale-450 h-auto"
                src="/soal.svg"
                alt="Ground / soul layer of the parallax scene — base of the landscape illustration on Shamveel's portfolio"
                title="Ground layer — Shamveel Portfolio"
                width={1920} height={800}
              />
              <Image
                className="tree left-0 w-full max-w-full bottom-0 z-[8] max-md:bottom-40 h-auto"
                src="/tree.svg"
                alt="Trees in the foreground of the parallax landscape on Muhammed Shamveel's portfolio homepage"
                title="Trees — Shamveel Portfolio"
                width={1920} height={800}
              />
            </div>
          </section>
        </div>
      </div>
    </section>
  )
}

export default ParallaxSecion