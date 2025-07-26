import { Link } from "wouter";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-printo-gray text-white py-12">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Link href="/" className="inline-block mb-4">
              <div className="bg-printo-orange text-white px-3 py-2 rounded-lg font-bold text-xl">
                Arbol Gifts
              </div>
            </Link>
            <p className="text-gray-300 mb-4">
              Your trusted partner for professional printing and corporate solutions across India.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-printo-orange transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-printo-orange transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-printo-orange transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-printo-orange transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Products</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/products?category=business-stationery" className="text-gray-300 hover:text-printo-orange transition-colors">
                  Business Cards
                </Link>
              </li>
              <li>
                <Link href="/products?category=corporate-gifts" className="text-gray-300 hover:text-printo-orange transition-colors">
                  Corporate Gifts
                </Link>
              </li>
              <li>
                <Link href="/products?category=apparel" className="text-gray-300 hover:text-printo-orange transition-colors">
                  Custom Apparel
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-gray-300 hover:text-printo-orange transition-colors">
                  Promotional Items
                </Link>
              </li>
              <li>
                <Link href="/products?category=business-stationery" className="text-gray-300 hover:text-printo-orange transition-colors">
                  Stationery
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-printo-orange transition-colors">Same Day Delivery</a></li>
              <li><a href="#" className="text-gray-300 hover:text-printo-orange transition-colors">Bulk Orders</a></li>
              <li><a href="#" className="text-gray-300 hover:text-printo-orange transition-colors">Custom Design</a></li>
              <li><a href="#" className="text-gray-300 hover:text-printo-orange transition-colors">Business Solutions</a></li>
              <li><a href="#" className="text-gray-300 hover:text-printo-orange transition-colors">Store Locator</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-printo-orange transition-colors">Help Center</a></li>
              <li><a href="#" className="text-gray-300 hover:text-printo-orange transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-printo-orange transition-colors">Track Order</a></li>
              <li><a href="#" className="text-gray-300 hover:text-printo-orange transition-colors">Return Policy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-printo-orange transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            &copy; 2024 Arbol Products. All rights reserved. | Made with ❤️ for businesses across India
          </p>
        </div>
      </div>
    </footer>
  );
}
