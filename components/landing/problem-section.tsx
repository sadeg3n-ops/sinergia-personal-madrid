"use client"

import { TrendingDown, Users, AlertCircle } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const problems = [
  {
    icon: TrendingDown,
    title: "Falta de constancia",
    description: "Pagas cada mes, pero nunca encuentras el momento de ir. La motivación desaparece en semanas."
  },
  {
    icon: Users,
    title: "Máquinas ocupadas y miradas incómodas",
    description: "Esperas largas, gente que te mira, ambiente intimidante. ¿Para qué vas?"
  },
  {
    icon: AlertCircle,
    title: "Dolor articular por mala técnica",
    description: "Lesiones, dolores crónicos. Sin supervisión experta, cada repetición es un riesgo."
  }
]

export function ProblemSection() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 text-balance">
            ¿Cansado de pagar la cuota y no ir?
          </h2>
          <p className="text-lg text-slate-600">
            Estos problemas son más comunes de lo que crees. Y no es tu culpa.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {problems.map((problem, index) => (
            <Card 
              key={index}
              className="bg-slate-50 border-slate-200 hover:border-orange-500/50 transition-all duration-300 hover:shadow-lg group"
            >
              <CardContent className="p-6 md:p-8">
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
          ))}
        </div>
      </div>
    </section>
  )
}
