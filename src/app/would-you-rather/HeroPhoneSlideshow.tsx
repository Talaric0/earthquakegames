"use client"

import { useEffect, useState, type CSSProperties } from "react"
import { AnimatePresence, motion } from "motion/react"
import type { StaticImageData } from "next/image"

import { Iphone } from "@/components/ui/iphone"
import { cn } from "@/lib/utils"

interface HeroPhoneSlideshowProps {
  slides: StaticImageData[]
  className?: string
  intervalMs?: number
}

// Geometry taken from the Iphone component's internal screen mask so the
// slides land exactly where the mask cuts the frame.
const SCREEN_STYLE: CSSProperties = {
  left: "4.91%",
  top: "2.18%",
  width: "89.95%",
  height: "95.65%",
  borderRadius: "14.31% / 6.61%",
}

export function HeroPhoneSlideshow({
  slides,
  className,
  intervalMs = 2000,
}: HeroPhoneSlideshowProps) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (slides.length <= 1) return
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length)
    }, intervalMs)
    return () => clearInterval(id)
  }, [slides.length, intervalMs])

  return (
    <div className={cn("relative", className)}>
      <Iphone />
      <div
        className="pointer-events-none absolute overflow-hidden"
        style={SCREEN_STYLE}
      >
        <AnimatePresence initial={false}>
          <motion.img
            key={index}
            src={slides[index].src}
            alt=""
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.55, ease: [0.32, 0.72, 0, 1] }}
            className="absolute inset-0 h-full w-full object-cover"
          />
        </AnimatePresence>
      </div>

      {/* progress dots */}
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-[4%] left-1/2 z-10 flex -translate-x-1/2 gap-1.5"
      >
        {slides.map((_, i) => (
          <span
            key={i}
            className={cn(
              "block h-1 rounded-full transition-all duration-500",
              i === index ? "w-5 bg-white" : "w-1 bg-white/40"
            )}
          />
        ))}
      </div>
    </div>
  )
}
