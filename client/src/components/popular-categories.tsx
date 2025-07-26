import { products } from "../products";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";

// Helper to get unique categories with a representative image
const getCategories = () => {
  const map = new Map();
  for (const product of products) {
    if (!map.has(product.category)) {
      map.set(product.category, {
        name: product.category.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase()),
        slug: product.category,
        image: product.image,
      });
    }
  }
  return Array.from(map.values());
};

export function PopularCategories() {
  const categories = getCategories().slice(0, 4);

  return (
    <section className="py-16 bg-printo-light">
      <div className="container mx-auto max-w-7xl px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-printo-gray mb-12">Popular Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category) => (
            <Link key={category.slug} href={`/products?category=${category.slug}`}>
              <div className="group cursor-pointer">
                <div className="bg-white rounded-xl shadow-md overflow-hidden transform transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl">
                  <div className="h-48 bg-gray-100 flex items-center justify-center overflow-hidden">
                    <img 
                      src={category.image} 
                      alt={category.name} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="font-semibold text-lg text-printo-gray mb-2">{category.name}</h3>
                    <Badge className="bg-printo-orange hover:bg-printo-orange-light text-white">
                      BEST SELLING
                    </Badge>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
