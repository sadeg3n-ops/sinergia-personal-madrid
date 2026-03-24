"use client"

import { Check, ArrowRight, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

interface PricingSectionProps {
  onCtaClick: () => void
}

const features = [
  "3 entrenos presenciales semanales",
  "Seguimiento personalizado",
  "App de entrenamiento incluida",
  "Asesoría nutricional completa",
  "Soporte 24/7 vía WhatsApp"
]

export function PricingSection({ onCtaClick }: PricingSectionProps) {
  return (
    <section id="precio" className="py-20 md:py-28 bg-background relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block text-primary font-semibold text-sm tracking-wider uppercase mb-4">
            Inversión
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Tu Plan de Transformación
          </h2>
          <p className="text-lg text-muted-foreground">
            Una inversión en tu salud que dura toda la vida.
          </p>
        </div>

        <Card className="max-w-lg mx-auto bg-card/50 backdrop-blur-sm border-primary/30 relative overflow-hidden">
          {/* Popular badge */}
          <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-4 py-1 text-sm font-semibold rounded-bl-lg flex items-center gap-1">
            <Sparkles className="w-4 h-4" />
            Más Popular
          </div>

          <CardHeader className="text-center pt-10 pb-4">
            <h3 className="text-2xl font-bold text-foreground mb-2">
              Programa Transformación 12 Semanas
            </h3>
            <div className="flex items-baseline justify-center gap-1">
              <span className="text-5xl md:text-6xl font-bold text-primary">390€</span>
              <span className="text-muted-foreground text-lg">/ mes</span>
            </div>
          </CardHeader>

          <CardContent className="pb-10">
            <ul className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-foreground">{feature}</span>
                </li>
              ))}
            </ul>

            <Button 
              onClick={onCtaClick}
              size="lg"
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg py-7 rounded-xl group transition-all hover:scale-[1.02]"
            >
              Solicitar Valoración Gratuita
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>

            <p className="text-center text-sm text-muted-foreground mt-4">
              Sin permanencia. Cancela cuando quieras.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
