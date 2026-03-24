"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Reveal } from "@/components/ui/reveal"

const faqs = [
  {
    question: "¿Y si nunca he hecho deporte o estoy en muy baja forma?",
    answer: "Es el momento perfecto de empezar de verdad. Trabajaremos desde cero absoluto, a tu ritmo y sin presiones. Nuestro servicio está pensado para enseñar y acompañar, sin importar lo lejos que estés de tu objetivo ahora mismo."
  },
  {
    question: "Tengo lesiones previas o dolores articulares, ¿puedo entrenar?",
    answer: "Por supuesto. En la valoración inicial analizaremos tus limitaciones y antecedentes. Adaptaremos por completo la biomecánica de los ejercicios para que entrenes de forma totalmente segura, buscando rehabilitar el movimiento y que dejes de vivir con dolores."
  },
  {
    question: "¿Tengo que hacer una dieta estricta o eliminar carbohidratos?",
    answer: "En absoluto. La mejor dieta es la que puedes mantener en el tiempo. Te enseñaremos a nutrirte comiendo las cosas que más te gustan, ajustando las cantidades de macronutrientes a tus necesidades. Sin sufrir, sin pasar hambre y sin dejar de lado tu vida social."
  },
  {
    question: "¿Cuántos días a la semana de entrenamiento necesito?",
    answer: "Depende de tu disponibilidad y objetivos, pero con 2 o 3 sesiones semanales bien aprovechadas en nuestro centro, notarás un salto de calidad increíble. No se trata de machacarse todos los días de la semana, sino de dar el estímulo adecuado al cuerpo cuando vienes a vernos."
  },
  {
    question: "¿Cómo funciona exactamente la valoración inicial gratuita?",
    answer: "Es una primera toma de contacto de unos 30-45 minutos. Charlaremos sobre tu historial, tus frustraciones pasadas con el deporte y qué quieres conseguir. Evaluaremos tu movilidad general y te explicaremos con total transparencia cómo trabajamos. Sin compromisos ni técnicas de venta agresivas."
  }
]

export function FaqSection() {
  return (
    <section id="faq" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <Reveal>
            <span className="inline-block text-primary font-semibold text-sm tracking-wider uppercase mb-4">
              Preguntas Frecuentes
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
              Resolvemos tus dudas
            </h2>
          </Reveal>
        </div>

        <div className="max-w-2xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <Reveal key={index} delay={0.2 + (index * 0.1)}>
                <AccordionItem 
                  value={`item-${index}`}
                  className="bg-card border border-border rounded-xl px-6 overflow-hidden"
                >
                  <AccordionTrigger className="text-left text-foreground font-semibold py-6 hover:no-underline hover:text-primary transition-colors">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </Reveal>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
