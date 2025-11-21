"use client"

import { ArrowRight, Download } from "lucide-react"

export default function Hero() {
  return (
    <section
      id="home"
      className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/5 via-accent/5 to-background"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 fade-in-up">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Creativity, Your Own Product Concept
            </h1>
            <p className="text-xl text-foreground/70 leading-relaxed">
              Innovation with Social Impact. Experience 100% pure vegetarian & organic products from Nepal, bringing
              farm-to-table excellence through technology.
            </p>
            <p className="text-lg text-primary font-semibold">"Sagarmatha Multipurpose Pvt. Ltd"</p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-all flex items-center justify-center gap-2">
                Explore Now <ArrowRight size={20} />
              </button>
              <button className="border-2 border-primary text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary/10 transition-all flex items-center justify-center gap-2">
                <Download size={20} /> Download App
              </button>
            </div>
          </div>
          <div className="hidden md:block">
            <img
              src="/organic-vegetables-farm-fresh-produce-nepal.jpg"
              alt="Organic vegetables"
              className="w-full h-auto rounded-xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
