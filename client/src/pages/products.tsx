import { useState, useEffect } from "react";
// import { useQuery } from "@tanstack/react-query";
import { useLocation } from "wouter";
import { ProductCard } from "@/components/product-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Search, Filter, X } from "lucide-react";
import { products } from "@/products";

// Add fallback category for demo purposes
const productsWithCategory = products.map(p => ({
  ...p,
  category: p.category || 'general',
}));

export default function Products() {
  const [location, setLocation] = useLocation();
  const getCategoryFromLocation = (loc: string) => {
    const params = new URLSearchParams(loc.split('?')[1] || '');
    return params.get('category') || 'all';
  };
  const [selectedCategory, setSelectedCategoryState] = useState(getCategoryFromLocation(location));
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('name');

  // When the URL changes, update the filter
  useEffect(() => {
    setSelectedCategoryState(getCategoryFromLocation(location));
  }, [location]);

  // When the user changes the filter, update the URL
  const handleCategoryChange = (cat: string) => {
    setSelectedCategoryState(cat);
    const params = new URLSearchParams(location.split('?')[1] || '');
    if (cat === 'all') {
      params.delete('category');
    } else {
      params.set('category', cat);
    }
    setLocation(`/products${params.toString() ? `?${params.toString()}` : ''}`);
  };

  // Get unique categories from products
  const categories = Array.from(new Set(productsWithCategory.map((p) => p.category).filter(Boolean)));

  // Filter products
  let filteredProducts = productsWithCategory.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) || product.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || (product.category && product.category === selectedCategory);
    return matchesSearch && matchesCategory;
  });

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'name':
      default:
        return a.name.localeCompare(b.name);
    }
  });

  const clearFilters = () => {
  setSearchQuery('');
  setSelectedCategoryState('all');
  setSortBy('name');
};

  const hasActiveFilters = searchQuery || (selectedCategory && selectedCategory !== 'all');

  const getPageTitle = () => {
    if (searchQuery) return `Search Results for "${searchQuery}"`;
    if (selectedCategory && selectedCategory !== 'all') {
      return categories.find((c) => c === selectedCategory) || 'Products';
    }
    return 'All Products';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto max-w-7xl px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-printo-gray mb-4">
            {getPageTitle()}
          </h1>
          {/* Filters */}
          <div className="flex flex-col lg:flex-row gap-4 mb-6">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            {/* Category Filter */}
            <Select value={selectedCategory} onValueChange={handleCategoryChange}>
              <SelectTrigger className="w-full lg:w-48">
                <Filter className="w-4 h-4 mr-2" />
                <SelectValue placeholder="All Categories" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                {categories?.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {/* Sort */}
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-full lg:w-48">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="name">Name A-Z</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
              </SelectContent>
            </Select>
            {/* Clear Filters */}
            {hasActiveFilters && (
              <Button
                variant="outline"
                onClick={clearFilters}
                className="whitespace-nowrap"
              >
                <X className="w-4 h-4 mr-2" />
                Clear Filters
              </Button>
            )}
          </div>
          {/* Active Filters */}
          {hasActiveFilters && (
            <div className="flex flex-wrap gap-2 mb-4">
              {searchQuery && (
                <Badge variant="secondary" className="flex items-center gap-1">
                  Search: {searchQuery}
                  <X 
                    className="w-3 h-3 cursor-pointer" 
                    onClick={() => setSearchQuery('')}
                  />
                </Badge>
              )}
              {selectedCategory && selectedCategory !== 'all' && (
                <Badge variant="secondary" className="flex items-center gap-1">
                  Category: {selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)}
                  <X 
                    className="w-3 h-3 cursor-pointer" 
                    onClick={() => setSelectedCategoryState('all')}
                  />
                </Badge>
              )}
            </div>
          )}
          {/* Results Count */}
          <p className="text-gray-600">
            {sortedProducts.length} product{sortedProducts.length !== 1 ? 's' : ''} found
          </p>
        </div>
        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {sortedProducts.length > 0 ? (
            sortedProducts.map((product) => (
              <ProductCard 
                key={product.id} 
                product={product} 
                showCategory={selectedCategory === 'all'}
              />
            ))
          ) : (
            <div className="text-center py-12 col-span-full">
              <p className="text-gray-500 text-lg mb-4">No products found.</p>
              {hasActiveFilters && (
                <Button onClick={clearFilters} variant="outline">
                  Clear filters to see all products
                </Button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
