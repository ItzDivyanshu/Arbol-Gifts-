import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Link } from 'wouter';

// @ts-ignore - Ignore unused variable warning for this component

interface ProductLink {
  name: string;
  slug: string;
}

interface Category {
  name: string;
  products: ProductLink[];
}

const categories: Category[] = [
  {
    name: "Stationery Gifts",
    products: [
      { name: "Personalized Diaries / Notebooks", slug: "personalized-diaries-notebooks" },
      { name: "Engraved Pens", slug: "elegant-engraved-pens" },
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
      { name: "Corporate Gift Sets", slug: "corporate-gift-sets" },
      { name: "Awards", slug: "awards" },
      { name: "Welcome Kits for New Employees", slug: "welcome-kits-new-employees" },
      // "Car Utility Trays",
      // "Branded Umbrellas"
    ]
  },
  {
    name: "Photo Gifts",
    products: [
      { name: "Photo Mugs (Ceramic, Magic, Travel)", slug: "photo-mugs" },
      // "Photo Cushions / Pillows",
      { name: "Photo Frames (Wooden, Collage, Engraved)", slug: "photo-frames" },
      // { name: "Rock Slates / Tiles", slug: "rock-slates-tiles" },
      // { name: "Personalized Photo Lamps (LED, Illusion)", slug: "photo-lamps" },
      // { name: "Explosion Boxes / Scrapbooks", slug: "explosion-boxes" },
      // { name: "Photo Calendars", slug: "photo-calendars" },
      // { name: "Photo Magnets", slug: "photo-magnets" },
      { name: "Photo Keychains", slug: "photo-keychains" },
      // "Photo T-Shirts / Apparel",
      // "Photo Puzzles"
    ]
  },
  {
    name: "Drinkware",
    products: [
      { name: "Personalized Mugs (Ceramic, Magic, Steel)", slug: "personalized-mugs" },
      // { name: "Sipper Bottles (Metal, Plastic)", slug: "sipper-bottles" },
      // { name: "Branded Coffee Mugs", slug: "branded-coffee-mugs" },
      // { name: "Branded Tumblers / Travel Mugs", slug: "branded-tumblers" },
      { name: "Water Bottles (Steel / Plastic)", slug: "water-bottles" }
    ]
  },
  {
    name: "Signs & Promo",
    products: [
      { name: "Personalized Name Plates", slug: "personalized-name-plates" },
      { name: "Engraved Wooden Plaques", slug: "engraved-wooden-plaques" },
      { name: "Customized Clocks", slug: "customized-clocks" },
      { name: "Promotional Keychains", slug: "promotional-keychains" },
      // { name: "Branded Merchandise", slug: "branded-merchandise" },
      { name: "Wooden Event Cards", slug: "wooden-engraved-event-cards" }
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

  const handleMouseEnter = (category: string) => {
    setActiveCategory(category);
  };

  const handleMouseLeave = () => {
    setActiveCategory(null);
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
                  {category.products.map((product) => (
                    <div key={product.slug} className="block">
                      <Link href={`/products/${product.slug}`}>
                        <span className="block px-4 py-2 text-sm text-gray-700 hover:text-primary hover:bg-gray-50 transition-colors">
                          {product.name}
                        </span>
                      </Link>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryNav;
