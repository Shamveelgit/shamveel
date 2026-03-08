"use client"
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollSmoother } from 'gsap/ScrollSmoother'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'
import React from 'react'

gsap.registerPlugin(ScrollTrigger,ScrollSmoother,SplitText,useGSAP)

function GsapProvider({children}: {children: React.ReactNode}) {
  return (
    <>{children}</>
  )
}

export default GsapProvider