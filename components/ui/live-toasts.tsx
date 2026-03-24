"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Bell } from "lucide-react"

const TOASTS = [
  { name: "Carlos", action: "acaba de reservar una valoración", time: "hace 2 min" },
  { name: "Lucía", action: "empezó el plan de 12 semanas", time: "hace 15 min" },
  { name: "Marcos", action: "perdió 2kg esta semana", time: "hace 1 hora" },
  { name: "Ana", action: "acaba de reservar una valoración", time: "hace 5 min" }
]

export function LiveToasts() {
  const [currentToast, setCurrentToast] = useState<typeof TOASTS[0] | null>(null)

  useEffect(() => {
    // Show first toast after 5s
    const firstTimer = setTimeout(() => {
      setCurrentToast(TOASTS[0])
      
      setTimeout(() => setCurrentToast(null), 5000)
    }, 5000)

    // Then show random toasts every 15-30s
    const interval = setInterval(() => {
      const randomToast = TOASTS[Math.floor(Math.random() * TOASTS.length)]
      setCurrentToast(randomToast)
      
      setTimeout(() => setCurrentToast(null), 5000)
    }, 25000)

    return () => {
      clearTimeout(firstTimer)
      clearInterval(interval)
    }
  }, [])

  return (
    <div className="fixed bottom-4 left-4 z-50 pointer-events-none">
      <AnimatePresence>
        {currentToast && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
            className="bg-card/90 backdrop-blur-md border border-border shadow-2xl rounded-xl p-4 flex items-start gap-3 max-w-xs"
          >
            <div className="w-8 h-8 rounded-full bg-primary/20 flex flex-shrink-0 items-center justify-center mt-0.5">
              <Bell className="w-4 h-4 text-primary" />
            </div>
            <div>
              <p className="text-sm text-foreground">
                <span className="font-semibold">{currentToast.name}</span> {currentToast.action}
              </p>
              <p className="text-xs text-muted-foreground mt-1">{currentToast.time}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
