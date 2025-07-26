import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Link } from 'wouter';

// @ts-ignore - Ignore unused variable warning for this component

interface Category {
  name: string;
  products: string[];
}

const categories: Category[] = [
  {
    name: "Stationery Gifts",
    products: [
      "Personalized Diaries / Notebooks",
      "Engraved Pens",
      // "Desk Organizers",
      // "Corporate Planners",
      // "Sticky Note Sets",
      // "Pen Stands",
      // "Business Card Holders",
      // "Paperweights"
    ]
  },
  {
    name: "Corporate Gifts",
    products: [
      "Corporate Gift Sets",
      "Awards",
      "Welcome Kits for New Employees",
      // "Car Utility Trays",
      // "Branded Umbrellas"
    ]
  },
  {
    name: "Photo Gifts",
    products: [
      "Photo Mugs (Ceramic, Magic, Travel)",
      // "Photo Cushions / Pillows",
      "Photo Frames (Wooden, Collage, Engraved)",
      // "Rock Slates / Tiles",
      // "Personalized Photo Lamps (LED, Illusion)",
      // "Explosion Boxes / Scrapbooks",
      // "Photo Calendars",
      // "Photo Magnets",
      "Photo Keychains",
      // "Photo T-Shirts / Apparel",
      // "Photo Puzzles"
    ]
  },
  {
    name: "Drinkware",
    products: [
      "Personalized Mugs (Ceramic, Magic, Steel)",
      // "Sipper Bottles (Metal, Plastic)",
      // "Branded Coffee Mugs",
      // "Branded Tumblers / Travel Mugs",
      "Water Bottles (Steel / Plastic)"
    ]
  },
  {
    name: "Signs & Promo",
    products: [
      "Personalized Name Plates",
      "Engraved Wooden Plaques",
      "Customized Clocks",
      "Promotional Keychains",
      // "Branded Merchandise",
      "Wooden Event Cards"
    ]
  },
  // {
  //   name: "Apparel",
  //   products: [
  //     "Customized T-Shirts",
  //     "Personalized Aprons",
  //     "Customized Caps",
  //     "Branded Jackets / Hoodies",
  //     "Uniform Sets",
  //     "Photo T-Shirts"
  //   ]
  // },
  // {
  //   name: "Figurines & Décor",
  //   products: [
  //     "Miniature Figurines",
  //     "Personalized Sculptures",
  //     "Personalized Caricatures",
  //     "Personalized Clocks",
  //     "Name Lamps"
  //   ]
  // },
  // {
  //   name: "Labels & Packaging",
  //   products: [
  //     "Custom Gift Boxes",
  //     "Personalized Labels / Stickers",
  //     "Eco-friendly Gift Packaging",
  //     "Festival Hampers",
  //     "Corporate Hampers",
  //     "Wellness Kits"
  //   ]
  // }
];

const CategoryNav = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [mobileCategory] = useState('');

  const handleMouseEnter = (category: string) => {
    setActiveCategory(category);
  };

  const handleMouseLeave = () => {
    setActiveCategory(null);
  };

  const handleMobileCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    if (value) {
      window.location.href = `/category/${encodeURIComponent(value.toLowerCase().replace(/\s+/g, '-'))}`;
    }
  };

  return (
    <div className="bg-white shadow-soft w-full mt-16">
      <div className="container mx-auto">
        <div className="hidden lg:flex justify-center">
          {categories.map((category) => (
            <div
              key={category.name}
              className="relative group py-4 px-3"
              onMouseEnter={() => handleMouseEnter(category.name)}
              onMouseLeave={handleMouseLeave}
            >
              <button className="text-gray-700 hover:text-primary flex items-center font-medium text-sm">
                {category.name}
                <ChevronDown size={16} className="ml-1" />
              </button>
              
              {activeCategory === category.name && (
                <div className="absolute left-0 mt-2 w-64 bg-white shadow-lg rounded-lg py-2 z-50">
                  {category.products.map((product) => {
                    // Slug is generated but not used, keeping for future reference
                    // const slug = product.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
                    return (
                      <Link
                        key={product}
                        href={`/products?category=${encodeURIComponent(category.name)}&subcategory=${encodeURIComponent(product)}`}
                      >
                        <span className="block px-4 py-2 text-sm text-gray-700 hover:text-primary hover:bg-gray-50 transition-colors">
                          {product}
                        </span>
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="lg:hidden px-4 py-3">
          <select 
            value={mobileCategory}
            onChange={handleMobileCategoryChange}
            className="w-full p-2 border border-gray-200 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          >
            <option value="">Shop by Category</option>
            {categories.map((category) => (
              <option key={category.name} value={category.name}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default CategoryNav;
