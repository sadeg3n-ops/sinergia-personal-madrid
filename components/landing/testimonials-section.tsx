"use client"

import { Star, Quote } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Reveal } from "@/components/ui/reveal"
import { BeforeAfterSlider } from "@/components/ui/before-after-slider"

const testimonials = [
  {
    name: "Laura S.",
    age: "42 años",
    avatar: "/images/avatar-1.jpg",
    quote: "Llevaba 5 años apuntada al gimnasio sin resultados. Con Sinergia, perdí 12kg en 3 meses entrenando 3 días a la semana sin dolor de espalda.",
    result: "-12kg en 3 meses",
    beforeImage: "/images/before-1.jpg",
    afterImage: "/images/after-1.jpg"
  },
  {
    name: "Carlos M.",
    age: "35 años",
    avatar: "/images/avatar-2.jpg",
    quote: "Después de dos hernias discales, pensé que nunca podría entrenar bien. Aquí aprendí a moverme sin dolor y gané 6kg de músculo en 4 meses.",
    result: "+6kg músculo",
    beforeImage: "/images/before-2.jpg",
    afterImage: "/images/after-2.jpg"
  }
]

export function TestimonialsSection() {
  return (
    <section className="py-20 md:py-28 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <Reveal>
            <span className="inline-block text-primary font-semibold text-sm tracking-wider uppercase mb-4">
              Testimonios
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
              Historias de Transformación Real
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-lg text-muted-foreground">
              Personas como tú que decidieron dar el paso.
            </p>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Reveal key={index} delay={0.3 + index * 0.15}>
              <Card 
                className="bg-card border-border hover:border-primary/30 transition-all duration-300 h-full flex flex-col"
              >
                <CardContent className="p-6 md:p-8 flex-1 flex flex-col">
                  {/* Before/After Slider */}
                  <div className="mb-6 -mx-2 md:-mx-4">
                    <BeforeAfterSlider 
                      beforeImage={testimonial.beforeImage} 
                      afterImage={testimonial.afterImage} 
                    />
                  </div>
                  
                  {/* Quote icon */}
                  <Quote className="w-10 h-10 text-primary/20 mb-4" />
                
                {/* Quote text */}
                <p className="text-foreground text-lg leading-relaxed mb-6">
                  {`"${testimonial.quote}"`}
                </p>

                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>

                {/* Author */}
                <div className="flex items-center justify-between mt-auto pt-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.age}</p>
                    </div>
                  </div>
                  <div className="px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm whitespace-nowrap">
                    {testimonial.result}
                  </div>
                </div>
              </CardContent>
            </Card>
          </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
