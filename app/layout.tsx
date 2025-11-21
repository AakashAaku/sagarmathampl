import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Sagarmatha Multipurpose - Organic & Vegetarian Products",
  description:
    "Sagarmatha Multipurpose Pvt. Ltd. - Organic, vegetarian products with innovation and social impact in Nepal",
  generator: "v0.app",
  openGraph: {
    title: "Sagarmatha Multipurpose",
    description: "Creativity, Your Own Product Concept, and Innovation with Social Impact",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
