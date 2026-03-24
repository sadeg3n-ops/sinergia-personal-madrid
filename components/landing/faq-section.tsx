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
    <section id="faq" className="py-20 md:py-28 bg-background relative">
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
                  <AccordionTrigger className="text-center justify-center text-foreground font-semibold py-6 hover:no-underline hover:text-primary transition-colors relative [&>svg]:absolute [&>svg]:right-0 pr-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-6 leading-relaxed text-center">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </Reveal>
            ))}
          </Accordion>
        </div>
      </div>
      <div className="container mx-auto px-4 mt-20 flex flex-col items-center">
        <div className="max-w-xl w-full text-center bg-card border border-border rounded-2xl p-6 md:p-8 relative overflow-hidden shadow-xl">
          <div className="absolute inset-0 bg-gradient-to-br from-[#25D366]/10 to-transparent pointer-events-none" />
          
          <Reveal>
            <h3 className="text-xl font-bold text-foreground mb-2">
              ¿Tienes más dudas?
            </h3>
          </Reveal>
          
          <Reveal delay={0.1}>
            <p className="text-muted-foreground mb-6 text-sm">
              Escríbenos y te responderemos lo antes posible para ayudarte a dar el primer paso.
            </p>
          </Reveal>
          
          <Reveal delay={0.2}>
            <a 
              href="https://wa.me/34600000000?text=Hola,%20tengo%20algunas%20dudas%20sobre%20el%20entrenamiento%20personal." 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold px-6 py-3 rounded-xl transition-all hover:scale-105 shadow-lg shadow-[#25D366]/20 group text-sm"
            >
              <svg 
                viewBox="0 0 24 24" 
                width="20" 
                height="20" 
                stroke="currentColor" 
                strokeWidth="2" 
                fill="none" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="w-5 h-5 group-hover:-rotate-12 transition-transform"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              Escribir por WhatsApp
            </a>
          </Reveal>
        </div>

        {/* Subtle scroll indicator connecting to the next section */}
        <div className="mt-16 text-muted-foreground/40 animate-bounce">
          <svg 
            viewBox="0 0 24 24" 
            width="32" 
            height="32" 
            stroke="currentColor" 
            strokeWidth="1.5" 
            fill="none" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <path d="M12 5v14M19 12l-7 7-7-7"/>
          </svg>
        </div>
      </div>
    </section>
  )
}

