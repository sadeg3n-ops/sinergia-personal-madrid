"use client"

import { useEffect, useRef } from "react"
import { motion, useInView, useAnimation, Variant } from "framer-motion"

interface RevealProps {
  children: React.ReactNode
  width?: "fit-content" | "100%"
  delay?: number
  duration?: number
  direction?: "up" | "down" | "left" | "right" | "none"
  className?: string
}

export function Reveal({
  children,
  width = "100%",
  delay = 0,
  duration = 0.5,
  direction = "up",
  className = "",
}: RevealProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })
  const mainControls = useAnimation()

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible")
    }
  }, [isInView, mainControls])

  const getVariants = (): { hidden: Variant; visible: Variant } => {
    const hiddenState = { opacity: 0 }
    
    switch (direction) {
      case "up":
        Object.assign(hiddenState, { y: 75 })
        break
      case "down":
        Object.assign(hiddenState, { y: -75 })
        break
      case "left":
        Object.assign(hiddenState, { x: 75 })
        break
      case "right":
        Object.assign(hiddenState, { x: -75 })
        break
      default:
        break
    }

    return {
      hidden: hiddenState,
      visible: { opacity: 1, y: 0, x: 0 },
    }
  }

  return (
    <div ref={ref} style={{ width }} className={`relative overflow-hidden ${className}`}>
      <motion.div
        variants={getVariants()}
        initial="hidden"
        animate={mainControls}
        transition={{ duration, delay, ease: [0.25, 0.46, 0.45, 0.94] }} // Custom quintic ease
      >
        {children}
      </motion.div>
    </div>
  )
}
