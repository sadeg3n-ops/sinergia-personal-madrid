"use client"

import { TrendingDown, Users, AlertCircle } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Reveal } from "@/components/ui/reveal"

const problems = [
  {
    icon: TrendingDown,
    title: "Cero adherencia y constancia",
    description: "Pagas tu cuota puntualmente, pero la motivación inicial se esfuma en pocas semanas y las excusas siempre ganan."
  },
  {
    icon: Users,
    title: "Masificación y miradas incómodas",
    description: "Tiempos de espera interminables, ambiente intimidante y distracciones constantes. Entrenar se vuelve un estrés añadido."
  },
  {
    icon: AlertCircle,
    title: "Dolores por mala ejecución",
    description: "Molestias y lesiones recurrentes por falta de supervisión. Sin un experto guiándote, cada repetición es un riesgo."
  }
]

export function ProblemSection() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <Reveal>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 text-balance">
              ¿Cansado de estar apuntado al gimnasio y no ir?
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-lg text-slate-600">
              La mayoría de gimnasios basan su negocio en que pagues y no vayas. No es tu falta de voluntad, es el entorno.
            </p>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {problems.map((problem, index) => (
            <Reveal key={index} delay={index * 0.15}>
              <Card 
                className="bg-slate-50 border-slate-200 hover:border-orange-500/50 transition-all duration-300 hover:shadow-lg group h-full"
              >
                <CardContent className="p-6 md:p-8 flex flex-col items-center text-center">
                  <div className="w-14 h-14 rounded-xl bg-orange-500/10 flex items-center justify-center mb-6 group-hover:bg-orange-500/20 transition-colors">
                    <problem.icon className="w-7 h-7 text-orange-500" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">
                    {problem.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {problem.description}
                  </p>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
