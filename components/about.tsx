"use client"

export default function About() {
  const values = [
    { title: "Sustainability", description: "Committed to eco-friendly practices" },
    { title: "Innovation", description: "Leveraging technology for agriculture" },
    { title: "Community", description: "Empowering farmers and local communities" },
    { title: "Quality", description: "100% organic certified products" },
  ]

  return (
    <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary/10">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">About Sagarmatha</h2>
            <p className="text-lg text-foreground/70 leading-relaxed">
              Sagarmatha Multipurpose Pvt. Ltd. is revolutionizing Nepal's agricultural landscape through 100% pure
              vegetarian and organic products. Founded on principles of creativity, innovation, and social
              responsibility, we bridge the gap between sustainable farming practices and modern technology.
            </p>
            <div className="space-y-3">
              <h3 className="text-xl font-bold text-foreground">Our Mission</h3>
              <p className="text-foreground/70">
                To create a sustainable agricultural ecosystem that empowers farmers, provides consumers with authentic
                organic products, and drives positive social impact through innovation.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-background rounded-lg p-6 border border-border hover:border-primary transition-colors"
              >
                <h3 className="font-bold text-primary mb-2">{value.title}</h3>
                <p className="text-sm text-foreground/70">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
