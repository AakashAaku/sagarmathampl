"use client"

export default function Products() {
  const categories = [
    {
      name: "Fresh Vegetables",
      image: "/fresh-organic-vegetables.png",
      items: "Seasonal organic produce",
    },
    {
      name: "Organic Grains",
      image: "/organic-grains-rice-wheat.jpg",
      items: "Pure grain selections",
    },
    {
      name: "Vegetarian Foods",
      image: "/vegetarian-food-products.jpg",
      items: "Plant-based delights",
    },
    {
      name: "Spices & Condiments",
      image: "/organic-spices-condiments.jpg",
      items: "Natural flavor essentials",
    },
  ]

  return (
    <section id="products" className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Our Products & Services</h2>
          <p className="text-lg text-foreground/70">
            Curated organic selections certified for purity and sustainability
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg mb-4 h-64">
                <img
                  src={category.image || "/placeholder.svg"}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-4">
                  <div>
                    <h3 className="text-white font-bold text-lg">{category.name}</h3>
                  </div>
                </div>
              </div>
              <p className="text-foreground/70 text-sm">{category.items}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
