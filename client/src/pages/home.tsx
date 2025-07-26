import { HeroBanner } from "@/components/hero-banner";
import { Features } from "@/components/features";
import { PopularCategories } from "@/components/popular-categories";
import { ProductCard } from "@/components/product-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { products } from "../products";

export default function Home() {
  // Featured: bestseller products
  const featuredProducts = products.filter((p) => p.bestseller).slice(0, 4);
  // More Products: not featured, just more
  const moreProducts = products.filter((p) => !p.bestseller).slice(0, 10);

  return (
    <div className="min-h-screen">
      <HeroBanner />
      <PopularCategories />

      {/* Featured Products */}
      <section className="py-16 bg-white">
        <div className="container mx-auto max-w-7xl px-4">
          <SectionHeading title="Featured Products" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* More Products */}
      <section className="py-16 bg-printo-light">
        <div className="container mx-auto max-w-7xl px-4">
          <SectionHeading title="More Products" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {moreProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <Features />

      {/* Call to Action */}
      <section className="py-16 bg-printo-orange">
        <div className="container mx-auto max-w-7xl px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-white opacity-90 mb-8 max-w-2xl mx-auto">
            Join thousands of businesses who trust Arbol Gifts for their printing and corporate gifting needs. 
            Fast delivery, premium quality, competitive prices.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/products">
              <Button className="bg-white text-printo-orange px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-300">
                Browse Products
              </Button>
            </Link>
            {/* <Button variant="outline" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-printo-orange transition-colors duration-300">
              Contact Sales Team
            </Button> */}
          </div>
        </div>
      </section>
    </div>
  );
}
