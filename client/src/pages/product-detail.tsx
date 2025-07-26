import { useRoute } from "wouter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, Heart, Share2, ShoppingCart } from "lucide-react";
import { Link } from "wouter";
import { useState } from "react";
import { products } from "../products";

export default function ProductDetail() {
  const [, params] = useRoute("/products/:slug");
  const slug = params?.slug;
  const [quantity, setQuantity] = useState(1);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  // Find product by id (as string)
  const product = products.find(p => p.slug === slug);

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto max-w-7xl px-4 py-8">
          <div className="text-center py-12">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Product Not Found</h1>
            <p className="text-gray-600 mb-6">The product you're looking for doesn't exist.</p>
            <Link href="/products">
              <Button>Browse Products</Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const hasDiscount = (product.discount ?? 0) > 0;
  const discountedPrice = hasDiscount ? (product.price * (1 - (product.discount ?? 0) / 100)).toFixed(2) : product.price.toFixed(2);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto max-w-7xl px-4 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 mb-6">
          <span className="flex items-center text-orange-600 hover:text-orange-500">
            <Link href="/products">
              <span className="flex items-center">
                <ArrowLeft className="w-4 h-4 mr-1" />
                Back to Products
              </span>
            </Link>
          </span>
          {product.category && (
            <span>
              <span className="text-gray-400">/</span>
              <span className="text-gray-600">{product.category}</span>
            </span>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Image Gallery */}
          <div className="relative">
           <div className="flex gap-4">
             {/* Thumbnails */}
             <div className="flex flex-col gap-2">
               {product.images.map((image, index) => (
                 <button
                   key={index}
                   onClick={() => setSelectedImageIndex(index)}
                   className={`w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                     index === selectedImageIndex 
                       ? 'border-orange-500' 
                       : 'border-gray-200 hover:border-gray-300'
                   }`}
                 >
                   <img 
                     src={image} 
                     alt={`${product.name} - Image ${index + 1}`}
                     className="w-full h-full object-cover"
                     onError={(e) => {
                       console.error(`Failed to load thumbnail image: ${image}`);
                       e.currentTarget.style.display = 'none';
                     }}
                     onLoad={() => console.log(`Successfully loaded thumbnail: ${image}`)}
                   />
                 </button>
               ))}
             </div>
             
             {/* Main Image */}
             <div className="flex-1 relative">
               <div className="aspect-square bg-white rounded-lg overflow-hidden shadow-lg">
                 <img 
                   src={product.images[selectedImageIndex]} 
                   alt={product.name}
                   className="w-full h-full object-cover"
                   onError={(e) => {
                     console.error(`Failed to load main image: ${product.images[selectedImageIndex]}`);
                     e.currentTarget.style.display = 'none';
                   }}
                   onLoad={() => console.log(`Successfully loaded main image: ${product.images[selectedImageIndex]}`)}
                 />
                 {hasDiscount && (
                   <Badge className="absolute top-4 left-4 bg-red-500 text-white">
                     {product.discount}% OFF
                   </Badge>
                 )}
                 {product.bestseller && (
                   <Badge className="absolute top-4 right-4 bg-orange-500 text-white">
                     BESTSELLER
                   </Badge>
                 )}
               </div>
             </div>
           </div>
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <div>
              {product.category && (
                <p className="text-sm text-gray-500 mb-2">{product.category}</p>
              )}
              <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                {product.name}
              </h1>
              {/* Price */}
              <div className="flex items-center space-x-3 mb-6">
                <span className="text-3xl font-bold text-orange-600">₹{discountedPrice}</span>
                {hasDiscount && (
                  <>
                    <span className="text-xl text-gray-500 line-through">₹{product.price.toFixed(2)}</span>
                    <Badge className="bg-red-500 text-white">
                      Save {product.discount}%
                    </Badge>
                  </>
                )}
              </div>
              {/* Stock Status */}
              <div className="mb-6">
                {product.inStock && product.stockCount && product.stockCount > 0 ? (
                  <Badge className="bg-green-100 text-green-800">
                    ✓ In Stock ({product.stockCount} available)
                  </Badge>
                ) : (
                  <Badge className="bg-red-100 text-red-800">
                    Out of Stock
                  </Badge>
                )}
              </div>
            </div>

            {/* Description */}
            <div>
              <h3 className="text-lg font-semibold mb-2">Description</h3>
              <p className="text-gray-700 leading-relaxed">
                {product.description}
              </p>
            </div>

            <Separator />

            {/* Quantity and Add to Cart */}
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <label htmlFor="quantity" className="font-medium">Quantity:</label>
                <div className="flex items-center border rounded-lg">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    disabled={quantity <= 1}
                  >
                    -
                  </Button>
                  <span className="px-4 py-2 min-w-12 text-center">{quantity}</span>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setQuantity(quantity + 1)}
                    disabled={product.stockCount ? quantity >= product.stockCount : false}
                  >
                    +
                  </Button>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Button 
                  className="flex-1 bg-orange-600 hover:bg-orange-500 text-white py-3"
                >
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  Add to Cart
                </Button>
                <Button variant="outline" size="lg" className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">
                  <Heart className="w-4 h-4 mr-2" />
                  Wishlist
                </Button>
                <Button variant="outline" size="lg">
                  <Share2 className="w-4 h-4 mr-2" />
                  Share
                </Button>
              </div>
            </div>

            {/* Features */}
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold mb-3">Why Choose Us?</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-orange-600 rounded-full mr-3"></span>
                  Fast same-day delivery available
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-orange-600 rounded-full mr-3"></span>
                  Premium quality printing
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-orange-600 rounded-full mr-3"></span>
                  Custom design support
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-orange-600 rounded-full mr-3"></span>
                  Bulk order discounts available
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
