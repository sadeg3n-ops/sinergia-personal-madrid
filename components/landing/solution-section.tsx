"use client"

import { Lock, Target, Apple } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Reveal } from "@/components/ui/reveal"
import { Tilt } from "@/components/ui/tilt"

const features = [
  {
    icon: Lock,
    title: "Sala Privada",
    subtitle: "Solo tú y tu entrenador",
    description: "Sin esperas, sin distracciones, sin miradas. Un espacio diseñado exclusivamente para tu entrenamiento."
  },
  {
    icon: Target,
    title: "Programación a Medida",
    subtitle: "Fuerza e hipertrofia",
    description: "Cada sesión está diseñada según tus objetivos, tu nivel y tu historial. Progreso real, medible."
  },
  {
    icon: Apple,
    title: "Nutrición Realista",
    subtitle: "Sin dietas extremas",
    description: "Te enseñamos a comer lo que te gusta ajustando las cantidades. Sin restricciones absurdas."
  }
]

export function SolutionSection() {
  return (
    <section id="resultados" className="py-20 md:py-28 bg-background relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <Reveal>
            <span className="inline-block text-primary font-semibold text-sm tracking-wider uppercase mb-4">
              La Solución
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
              Tu Centro Privado de Alto Rendimiento
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-lg text-muted-foreground">
              Todo lo que necesitas para transformarte, en un solo lugar.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto auto-rows-fr">
          {features.map((feature, index) => (
            <Reveal 
              key={index} 
              delay={0.3 + index * 0.15}
              className={index === 0 ? "lg:col-span-2 lg:row-span-2" : ""}
            >
              <Tilt className="h-full">
                <Card 
                  className="h-full bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 group"
                >
                  <CardContent className={`p-6 md:p-8 flex flex-col justify-center h-full ${index === 0 ? "md:p-12 items-center text-center" : ""}`}>
                    <div className={`w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors ${index === 0 ? "w-20 h-20 mb-8" : ""}`}>
                      <feature.icon className={`text-primary ${index === 0 ? "w-10 h-10" : "w-7 h-7"}`} />
                    </div>
                    <h3 className={`font-semibold text-foreground mb-1 ${index === 0 ? "text-3xl" : "text-xl"}`}>
                      {feature.title}
                    </h3>
                    <p className={`text-primary font-medium mb-3 ${index === 0 ? "text-lg" : "text-sm"}`}>
                      {feature.subtitle}
                    </p>
                    <p className={`text-muted-foreground leading-relaxed ${index === 0 ? "max-w-md mx-auto" : ""}`}>
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </Tilt>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
