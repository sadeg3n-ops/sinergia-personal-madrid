"use client"

import { useState, useRef } from "react"
import { motion } from "framer-motion"

export function BeforeAfterSlider({ 
  beforeImage, 
  afterImage,
  beforeLabel = "Antes",
  afterLabel = "Después" 
}: { 
  beforeImage: string
  afterImage: string
  beforeLabel?: string
  afterLabel?: string
}) {
  const [sliderPosition, setSliderPosition] = useState(50)
  const containerRef = useRef<HTMLDivElement>(null)

  const handleDrag = (e: React.MouseEvent | React.TouchEvent) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    
    let clientX = 0
    if ("touches" in e) {
      clientX = e.touches[0].clientX
    } else {
      clientX = (e as React.MouseEvent).clientX
    }
    
    const x = clientX - rect.left
    const percent = Math.min(Math.max((x / rect.width) * 100, 0), 100)
    setSliderPosition(percent)
  }

  return (
    <div 
      ref={containerRef}
      className="relative w-full aspect-square sm:aspect-video rounded-xl overflow-hidden cursor-ew-resize select-none border border-border group"
      onMouseMove={(e) => {
        if (e.buttons === 1) handleDrag(e)
      }}
      onTouchMove={handleDrag}
      onMouseDown={handleDrag}
    >
      {/* Before Image */}
      <div className="absolute inset-0 w-full h-full bg-muted">
        {/* Placeholder if no image */}
        <div className="w-full h-full flex items-center justify-center text-muted-foreground/30 bg-secondary/50">
          <span className="text-xl font-bold">{beforeLabel}</span>
        </div>
        <img 
          src={beforeImage} 
          className="absolute inset-0 w-full h-full object-cover" 
          alt={beforeLabel} 
          onError={(e) => e.currentTarget.style.display = 'none'}
        />
      </div>

      {/* After Image with Clip Path */}
      <div 
        className="absolute inset-0 w-full h-full object-cover"
        style={{ 
          clipPath: `polygon(${sliderPosition}% 0, 100% 0, 100% 100%, ${sliderPosition}% 100%)` 
        }}
      >
        <div className="absolute inset-0 w-full h-full flex items-center justify-center text-primary/30 bg-primary/5">
          <span className="text-xl font-bold">{afterLabel}</span>
        </div>
        <img 
          src={afterImage} 
          className="absolute inset-0 w-full h-full object-cover" 
          alt={afterLabel} 
          onError={(e) => e.currentTarget.style.display = 'none'}
        />
        {/* Border line */}
        <div className="absolute left-0 top-0 bottom-0 w-[4px] bg-primary shadow-[0_0_10px_rgba(0,0,0,0.5)]" />
      </div>

      {/* Slider Handle */}
      <motion.div 
        className="absolute top-1/2 -translate-y-1/2 w-10 h-10 bg-primary rounded-full shadow-xl flex items-center justify-center pointer-events-none opacity-80 group-hover:opacity-100 transition-opacity border-2 border-background"
        style={{ left: `calc(${sliderPosition}% - 20px)` }}
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="flex gap-1">
          <div className="w-1 h-3 bg-primary-foreground rounded-full" />
          <div className="w-1 h-3 bg-primary-foreground rounded-full" />
        </div>
      </motion.div>
      
      {/* Labels */}
      <div className="absolute bottom-4 left-4 bg-background/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold text-foreground pointer-events-none">
        {beforeLabel}
      </div>
      <div className="absolute bottom-4 right-4 bg-primary/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold text-primary-foreground pointer-events-none">
        {afterLabel}
      </div>
    </div>
  )
}
