import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";

import { useToast } from "@/hooks/use-toast";
import type { ProductWithCategory } from "@shared/schema";

interface ProductCardProps {
  product: ProductWithCategory;
  showCategory?: boolean;
}

export function ProductCard({ product, showCategory = false }: ProductCardProps) {

  const { toast } = useToast();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent navigation when clicking the button
    e.stopPropagation();
    
    
  };

  const hasDiscount = product.originalPrice && parseFloat(product.originalPrice) > parseFloat(product.price);

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
            {product.isBestSelling && (
              <Badge className="absolute top-2 right-2 bg-printo-orange text-white">
                BESTSELLER
              </Badge>
            )}
            {product.isNewArrival && (
              <Badge className="absolute top-2 right-2 bg-green-500 text-white">
                NEW
              </Badge>
            )}
          </div>
          <div className="p-4">
            {showCategory && product.category && (
              <p className="text-sm text-gray-500 mb-1">{product.category.name}</p>
            )}
            <h3 className="font-semibold text-gray-800 mb-2 line-clamp-1">{product.name}</h3>
            <p className="text-gray-600 text-sm mb-3 line-clamp-2">{product.description}</p>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <span className="text-printo-orange font-bold text-lg">₹{product.price}</span>
                {hasDiscount && (
                  <span className="text-gray-500 line-through text-sm">₹{product.originalPrice}</span>
                )}
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
