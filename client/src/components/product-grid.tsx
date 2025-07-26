import { useQuery } from "@tanstack/react-query";
import { ProductCard } from "./product-card";
import { Skeleton } from "@/components/ui/skeleton";
import type { Product } from "@/products";
import { SectionHeading } from "./ui/section-heading";

interface ProductGridProps {
  title: string;
  queryKey: string[];
  showCategory?: boolean;
  limit?: number;
  className?: string;
}

export function ProductGrid({ 
  title, 
  queryKey, 
  showCategory = false,
  limit,
  className = ""
}: ProductGridProps) {
  const { data: products, isLoading } = useQuery<Product[]>({
    queryKey
  });

  const displayProducts = limit ? products?.slice(0, limit) : products;

  if (isLoading) {
    return (
      <section className={`py-16 bg-white ${className}`.trim()}>
        <div className="container mx-auto max-w-7xl px-4">
          <div className="mb-12">
            <SectionHeading title={title} />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                <Skeleton className="h-48 w-full" />
                <div className="p-4">
                  <Skeleton className="h-6 w-3/4 mb-2" />
                  <Skeleton className="h-4 w-full mb-3" />
                  <div className="flex items-center justify-between">
                    <Skeleton className="h-6 w-16" />
                    <Skeleton className="h-9 w-20" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (!displayProducts?.length) {
    return (
      <section className={`py-16 bg-white ${className}`.trim()}>
        <div className="container mx-auto max-w-7xl px-4">
          <SectionHeading title={title} />
          <div className="text-center py-12">
            <p className="text-gray-500">No products found.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={`py-16 ${className}`.trim()}>
      <div className="container mx-auto max-w-7xl px-4">
        <div className="mb-12">
          <SectionHeading title={title} />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayProducts.map((product) => (
            <ProductCard 
              key={product.id} 
              product={product} 
              showCategory={showCategory}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
