// Product data for Arbol Gifts
export interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  price: number;
  category: string;
  rating?: number;
  inStock: boolean;
  discount?: number; // percentage off, e.g., 25 for 25%
  bestseller?: boolean;
  stockCount?: number;
  slug: string;
  images: string[];
  [key: string]: any;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Personalized Diaries/Notebooks",
    slug: "personalized-diaries-notebooks",
    description: "Customizable diaries and notebooks with various personalization options. Choose from different sizes, covers, and paper types to create your perfect journal.",
    image: "/id1_1.jpeg", // Keep for backward compatibility
    images: [
      "/id1_1.jpeg",
      "/id1_2.jpeg",
    ],
    price: 29.99, // Base price
    category: "stationery",
    rating: 4.8,
    inStock: true,
    discount: 25,
    bestseller: true,
    stockCount: 100,
  },

  {
    id: 2,
    name: "Elegant Engraved Pens",
    slug: "elegant-engraved-pens",
    description: "Premium quality pens with elegant engravings. Perfect for gifting on special occasions. Choose from various designs and get them personalized with names, dates, or special messages.",
    image: "/id2_1.jpeg", // Keep for backward compatibility
    images: [
      "/id2_1.jpeg",
      "/id2_2.jpeg",
      "/id2_3.jpeg",
      "/id2_4.jpeg",
    ],
    price: 24.99,
    category: "stationery",
    rating: 4.9,
    inStock: true,
    discount: 0,
    bestseller: false,
    stockCount: 50,
  },

  {
    id: 3,
    name: "Corporate Gift Sets",
    slug: "corporate-gift-sets",
    description: "Premium corporate gift sets featuring a selection of practical and elegant items. Choose from our collection of bottles, mugs, diaries, and engraved pens - all perfect for corporate gifting with optional company branding. Mix and match to create the perfect gift for clients, employees, or business partners.",
    image: "/id3_1.jpeg",
    images: [
      "/id3_1.jpeg",
      "/id3_2.jpeg",
      "/id3_3.jpeg",
      "/id3_4.jpeg",  
      "/id3_5.jpeg",
      "/id3_6.jpeg",
    ],
    price: 59.99,
    category: "corporate-gifts",
    rating: 4.8,
    inStock: true,
    discount: 15,
    bestseller: true,
    stockCount: 120,
  },

  {
    id: 4,
    name: "Awards",
    slug: "awards",
    description: "Elegant and prestigious awards to recognize excellence and achievement. Our collection includes crystal, metal, and acrylic trophies, perfect for corporate events, sports competitions, and academic recognitions. Each piece can be customized with your logo, text, and design elements.",
    image: "/id4_1.jpeg",
    images: [
      "/id4_1.jpeg",
      "/id4_2.jpeg",
    ],
    price: 79.99,
    category: "corporate-gifts",
    rating: 4.9,
    inStock: true,
    discount: 10,
    bestseller: true,
    stockCount: 65,
  },

  {
    id: 5,
    name: "Welcome Kits for New Employees",
    slug: "welcome-kits-new-employees",
    description: "Comprehensive welcome kits designed to make a great first impression on your new hires. Each kit includes essential items to help them feel valued and prepared for their new role. Customize with your company branding for a personalized touch.",
    image: "/id3_2.jpeg",
    images: [
      "/id3_2.jpeg",
      "/id3_3.jpeg",
      "/id3_4.jpeg"
    ],
    price: 99.99,
    category: "corporate-gifts",
    rating: 4.8,
    inStock: true,
    discount: 15,
    bestseller: true,
    stockCount: 50,
  },

  {
    id: 6,
    name: "Photo Mugs",
    slug: "photo-mugs",
    description: "Personalized photo mugs that make perfect gifts for any occasion. Choose from ceramic, magic, or travel mugs, each customizable with your favorite photos, designs, or company branding. High-quality printing ensures your images stay vibrant and durable.",
    image: "/id6_1.jpeg",
    images: [
      "/id6_1.jpeg",
      "/id6_2.jpg",
      "/id6_3.jpg"
    ],
    price: 19.99,
    category: "photo-gifts",
    rating: 4.9,
    inStock: true,
    discount: 20,
    bestseller: true,
    stockCount: 200,
  },

  {
    id: 7,
    name: "Photo Frames",
    slug: "photo-frames",
    description: "Beautiful photo frames to preserve your precious memories. Choose from wooden, collage, or engraved frames, each customizable to showcase your favorite photos in style. Perfect for gifting on any occasion or adding a personal touch to your space.",
    image: "/id7_1.jpeg",
    images: [
      "/id7_1.jpeg",
      "/id7_2.jpg",
      "/id7_3.jpeg",
      "/id7_4.jpeg",
      "/id7_5.jpeg",
      "/id7_6.jpg",
      "/id7_7.jpeg"
    ],
    price: 34.99,
    category: "photo-gifts",
    rating: 4.8,
    inStock: true,
    discount: 15,
    bestseller: false,
    stockCount: 150,
  },

  {
    id: 8,
    name: "Photo Keychains",
    slug: "photo-keychains",
    description: "Capture your favorite memories with our high-quality photo keychains. These stylish and durable keychains feature crystal-clear photo inserts that preserve your special moments. Perfect for gifting or keeping your keys organized in a personal way. Each keychain is made with premium materials to ensure your photos stay vibrant and protected from daily wear.",
    image: "/id8_1.jpeg",
    images: [
      "/id8_1.jpeg",
      "/id8_2.jpeg",
      "/id8_3.jpeg",
      "/id8_4.jpeg",
      // "/id8_5.jpeg",
      "/id8_6.jpeg",
      "/id8_7.jpeg",
      "/id8_8.jpeg",
      // "/id8_9.jpeg",
    ],
    price: 12.99,
    category: "photo-gifts",
    rating: 4.7,
    inStock: true,
    discount: 10,
    bestseller: true,
    stockCount: 300,
  },

  {
    id: 9,
    name: "Personalized Mugs",
    slug: "personalized-mugs",
    description: "Make every sip special with our personalized mugs. Perfect for corporate gifts, special occasions, or everyday use. Customize with names, messages, or designs to create a truly unique drinking experience. Our high-quality ceramic mugs are microwave and dishwasher safe, ensuring your personalization lasts.",
    image: "/id9_1.jpg",
    images: [
      "/id9_1.jpg",
      "/id6_2.jpg",
      "/id6_3.jpg",
    ],
    price: 22.99,
    category: "drinkware",
    rating: 4.8,
    inStock: true,
    discount: 15,
    bestseller: true,
    stockCount: 180,
  },

  {
    id: 10,
    name: "Water Bottles",
    slug: "water-bottles",
    description: "Stay hydrated in style with our premium water bottles. Perfect for everyday use, gym sessions, or outdoor adventures. Our bottles are designed to keep your drinks cold for 24 hours or hot for 12 hours. Choose from stainless steel or BPA-free plastic options, all customizable with your logo, text, or design.",
    image: "/id10_1.jpeg",
    images: [
      "/id10_1.jpeg",
      "/id10_2.jpeg",
      "/id10_3.jpeg",
      "/id10_4.jpeg",
      "/id10_5.jpg",
      "/id10_6.jpeg",
    ],
    price: 29.99,
    category: "drinkware",
    rating: 4.9,
    inStock: true,
    discount: 10,
    bestseller: false,
    stockCount: 220,
  },
  {
    id: 11,
    name: "Personalized Name Plates",
    slug: "personalized-name-plates",
    description: "Elegant and professional name plates for offices, desks, and doors. Our personalized name plates are crafted with precision and attention to detail, perfect for corporate environments, home offices, or as thoughtful gifts. Choose from various materials, fonts, and styles to create a custom look that suits your needs.",
    image: "/id11_1.jpeg",
    images: [
      "/id11_1.jpeg",
      "/id11_5.jpeg",
      "/id11_2.jpeg",
      "/id11_3.jpeg",
      "/id11_4.jpeg",
    ],
    price: 39.99,
    category: "office",
    rating: 4.8,
    inStock: true,
    discount: 15,
    bestseller: true,
    stockCount: 95,
  },
  {
    id: 12,
    name: "Engraved Wooden Plaques",
    slug: "engraved-wooden-plaques",
    description: "Handcrafted wooden plaques with precision laser engraving. Each plaque is made from high-quality wood and can be customized with names, dates, messages, or logos. The natural wood grain adds a touch of elegance to any setting, making it a timeless keepsake.",
    image: "/id12_1.jpeg",
    images: [
      "/id12_1.jpeg",
      "/id12_2.jpeg",
      "/id12_3.jpeg",
      "/id12_4.jpeg",
      "/id12_5.jpeg",
      "/id12_6.jpeg",
    ],
    price: 49.99,
    category: "Sign & Promo",
    rating: 4.9,
    inStock: true,
    discount: 10,
    bestseller: true,
    stockCount: 75,
  },
  {
    id: 13,
    name: "Customized Clocks",
    slug: "customized-clocks",
    description: "Elegant and functional timepieces that can be personalized to suit any style or occasion. Our customized clocks make perfect gifts for retirements, anniversaries, or corporate recognition. Each clock can be tailored with names, dates, logos, or special messages, transforming a practical item into a cherished keepsake.",
    image: "/id13_1.jpeg",
    images: [
      "/id13_1.jpeg",
      "/id13_2.jpeg",
      "/id13_3.jpeg",
      "/id13_4.jpeg",
      "/id13_5.jpeg",
      "/id13_6.jpeg",
      "/id13_7.jpeg",
     
    ],
    price: 44.99,
    category: "Sign & Promo",
    rating: 4.7,
    inStock: true,
    discount: 15,
    bestseller: false,
    stockCount: 60,
  },
  {
    id: 14,
    name: "Promotional Keychains",
    slug: "promotional-keychains",
    description: "Affordable and effective promotional keychains that help keep your brand in the hands of your customers. Perfect for trade shows, corporate events, or as customer appreciation gifts. Our keychains are made from durable materials and can be customized with your logo, company name, or promotional message.",
    image: "/id14_4.jpeg",
    images: [
      "/id14_1.jpeg",
      "/id14_2.jpeg",
      "/id14_3.jpeg",
      "/id14_4.jpeg",
      "/id14_5.jpeg",
    ],
    price: 8.99,
    category: "Sign & Promo",
    rating: 4.6,
    inStock: true,
    discount: 20,
    bestseller: true,
    stockCount: 500,
  },
  {
    id: 15,
    name: "Wooden Engraved Event Cards",
    slug: "wooden-engraved-event-cards",
    description: "Elegant wooden engraved event cards perfect for weddings, corporate events, and special occasions. Each card is meticulously hand-engraved on high-quality wood, offering a unique and memorable way to announce your event. Customize with names, dates, and special messages for a personal touch that stands out from traditional paper invitations.",
    image: "/id15_1.jpeg",
    images: [
      "/id15_1.jpeg",
      "/id15_2.jpeg"
    ],
    price: 34.99,
    category: "Sign & Promo",
    rating: 4.9,
    inStock: true,
    discount: 15,
    bestseller: true,
    stockCount: 200
  }
];
