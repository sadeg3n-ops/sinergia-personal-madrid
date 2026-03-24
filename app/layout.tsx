import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { LiveToasts } from '@/components/ui/live-toasts'
import { CustomCursor } from '@/components/ui/custom-cursor'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter"
});

export const metadata: Metadata = {
  title: 'Sinergia Personal | Centro de Entrenamiento Personal Premium en Madrid',
  description: 'Transforma tu cuerpo y tu salud con entrenamiento 100% privado en Madrid. Sin gimnasios masificados. Resultados garantizados en 12 semanas.',
  keywords: 'entrenador personal madrid, gimnasio privado, entrenamiento personalizado, transformación corporal',
}

export const viewport: Viewport = {
  themeColor: '#0f172a',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased bg-background text-foreground`}>
        <CustomCursor />
        {/* Film Grain Texture Overlay */}
        <div className="pointer-events-none fixed inset-0 z-[100] h-full w-full opacity-[0.03] mix-blend-overlay">
          <svg width="100%" height="100%">
            <filter id="noise">
              <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" stitchTiles="stitch" />
            </filter>
            <rect width="100%" height="100%" filter="url(#noise)" />
          </svg>
        </div>
        
        
        {children}
        <LiveToasts />
        <Analytics />
      </body>
    </html>
  )
}
