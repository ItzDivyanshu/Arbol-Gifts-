import { Briefcase, Coffee, Frame, Award, PenTool, BookOpen } from 'lucide-react';

const categories = [
  {
    id: 1,
    name: 'Corporate Gifts',
    icon: Briefcase,
    count: 120,
    url: '/products/corporate-gifts',
    gradient: 'from-blue-500 to-blue-700',
  },
  {
    id: 2,
    name: 'Mugs & Bottles',
    icon: Coffee,
    count: 95,
    url: '/products/drinkware',
    gradient: 'from-green-500 to-teal-600',
  },
  {
    id: 3,
    name: 'Stationery',
    icon: PenTool,
    count: 78,
    url: '/products/stationery',
    gradient: 'from-amber-500 to-orange-600',
  },
  {
    id: 4,
    name: 'Photo Frames',
    icon: Frame,
    count: 65,
    url: '/products/photo-frames',
    gradient: 'from-purple-500 to-pink-600',
  },
  {
    id: 5,
    name: 'Awards & Trophies',
    icon: Award,
    count: 42,
    url: '/products/awards',
    gradient: 'from-rose-500 to-red-600',
  },
  {
    id: 6,
    name: 'Diaries & Planners',
    icon: BookOpen,
    count: 56,
    url: '/products/diaries',
    gradient: 'from-indigo-500 to-blue-600',
  },
];

export function FeaturedCategories() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Shop by Category
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our wide range of personalized gifts and find the perfect item for any occasion
          </p>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((category) => (
            <a 
              key={category.id} 
              href={category.url}
              className="group block"
              onClick={(e) => {
                e.preventDefault();
                window.location.href = category.url;
              }}
            >
              <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 h-full flex flex-col items-center text-center">
                <div 
                  className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 bg-gradient-to-br ${category.gradient} text-white group-hover:scale-110 transition-transform duration-300`}
                >
                  <category.icon size={28} />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">{category.name}</h3>
                <p className="text-sm text-gray-500">{category.count} items</p>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a 
            href="/categories" 
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-printo-orange hover:bg-printo-orange-dark shadow-sm transition-colors duration-200 cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              window.location.href = '/categories';
            }}
          >
            View All Categories
            <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
