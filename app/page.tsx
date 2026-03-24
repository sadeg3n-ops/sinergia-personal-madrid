"use client"

import { useState } from "react"
import { Header } from "@/components/landing/header"
import { HeroSection } from "@/components/landing/hero-section"
import { ProblemSection } from "@/components/landing/problem-section"
import { SolutionSection } from "@/components/landing/solution-section"
import { TestimonialsSection } from "@/components/landing/testimonials-section"
import { PricingSection } from "@/components/landing/pricing-section"
import { GuaranteeSection } from "@/components/landing/guarantee-section"
import { FaqSection } from "@/components/landing/faq-section"
import { FooterSection } from "@/components/landing/footer-section"
import { CtaModal } from "@/components/landing/cta-modal"

export default function SinergiaLandingPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  return (
    <>
      <Header onCtaClick={openModal} />
      
      <main>
        <HeroSection onCtaClick={openModal} />
        <ProblemSection />
        <SolutionSection />
        <TestimonialsSection />
        <PricingSection onCtaClick={openModal} />
        <GuaranteeSection />
        <FaqSection />
      </main>

      <FooterSection onCtaClick={openModal} />

      <CtaModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  )
}
