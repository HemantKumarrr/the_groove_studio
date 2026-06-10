import type { Metadata } from 'next'
// @ts-ignore: CSS module side-effect import
import './globals.css'

export const metadata: Metadata = {
  title: 'The Groove Studio | Premium Music Production — Ghaziabad',
  description:
    'The Groove Studio is a premier music production house in Ghaziabad, UP. Bollywood, Rap, EDM, Devotional, POP, Haryanvi & Punjabi production. Book your session today.',
  keywords:
    'music studio ghaziabad, music production, bollywood music, rap production, EDM, devotional music, punjabi music, haryanvi music, recording studio UP',
  openGraph: {
    title: 'The Groove Studio | Premium Music Production',
    description: 'Your sound. Perfected. — C-906, Raj Nagar Extension, Ghaziabad',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
