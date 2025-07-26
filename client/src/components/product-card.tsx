import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import type { Product } from "@/products";

interface ProductCardProps {
  product: Product;
  showCategory?: boolean;
}

export function ProductCard({ product, showCategory = false }: ProductCardProps) {

  const hasDiscount = product.discount && product.discount > 0;

  return (
    <Link href={`/products/${product.slug}`}>
      <div className="group cursor-pointer">
        <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300">
          <div className="aspect-w-1 aspect-h-1 h-48 bg-gray-100 overflow-hidden">
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            {hasDiscount && (
              <Badge className="absolute top-2 left-2 bg-red-500 text-white">
                SALE
              </Badge>
            )}
            {product.bestseller && (
              <Badge className="absolute top-2 right-2 bg-printo-orange text-white">
                BESTSELLER
              </Badge>
            )}
          </div>
          <div className="p-4">
            {showCategory && product.category && (
              <p className="text-sm text-gray-500 mb-1">{product.category}</p>
            )}
            <h3 className="font-semibold text-gray-800 mb-2 line-clamp-1">{product.name}</h3>
            <p className="text-gray-600 text-sm mb-3 line-clamp-2">{product.description}</p>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <span className="text-printo-orange font-bold text-lg">₹{product.price}</span>
                {hasDiscount && (
                  <span className="text-gray-500 line-through text-sm">₹{(product.price * (1 - product.discount! / 100)).toFixed(2)}</span>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
