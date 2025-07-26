import { Package, Award, Palette, Tag, Truck } from "lucide-react";

type Feature = {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
};

export function Features() {
  const features: Feature[] = [
    {
      icon: Package,
      title: "Diverse Collection",
      description: "A wide variety of gifts for every mood, moment, and milestone"
    },
    {
      icon: Award,
      title: "Superior Quality",
      description: "Premium materials and meticulous craftsmanship"
    },
    {
      icon: Palette,
      title: "Expert Customization",
      description: "From one-of-a-kind items to bulk orders, we personalize it all"
    },
    {
      icon: Tag,
      title: "Affordable Excellence",
      description: "High-end gifting without the high-end price"
    },
    {
      icon: Truck,
      title: "Reliable Delivery",
      description: "On-time, every time, with care and precision"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="text-center mb-16">
          <div className="inline-block text-center">
            <span className="text-printo-orange font-medium mb-2 block">
              Our Advantages
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 relative inline-block">
              Why Choose Us
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-printo-orange mt-2"></span>
            </h2>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div key={index} className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg hover:shadow-md transition-all duration-300 h-full">
                <div className="w-14 h-14 bg-printo-orange/10 rounded-full flex items-center justify-center mb-4">
                  <IconComponent className="text-printo-orange text-xl w-6 h-6" />
                </div>
                <h3 className="font-semibold text-lg mb-2 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
