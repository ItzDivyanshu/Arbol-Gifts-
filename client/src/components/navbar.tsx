import { useState, useEffect } from 'react';
import { Menu, X, Search, User } from 'lucide-react';
import { Link } from 'wouter';


const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 h-16 flex items-center ${
      isScrolled ? 'bg-white shadow-soft' : 'bg-white/90 backdrop-blur-sm'
    }`}>
      <div className="w-full container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <button 
            className="lg:hidden mr-4 text-gray-700 hover:text-primary transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <Link href="/">
  <span className="text-2xl font-display font-bold text-gray-800">Arbol Gifts</span>
</Link>
        </div>
        
        <div className={`fixed inset-0 bg-white z-40 lg:static lg:bg-transparent lg:flex ${
          isMenuOpen ? 'flex flex-col pt-20 px-6' : 'hidden'
        }`}>
          {isMenuOpen && (
            <button 
              className="absolute top-4 right-4 lg:hidden text-gray-700 hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          )}
          <ul className={`flex ${isMenuOpen ? 'flex-col space-y-4' : 'lg:flex-row lg:space-x-8'} lg:items-center`}>
            <li>
              <Link href="/">
  <span className="text-gray-700 hover:text-primary font-medium transition-colors">Home</span>
</Link>
            </li>
            <li>
              <Link href="/products">
  <span className="text-gray-700 hover:text-primary font-medium transition-colors">All Products</span>
</Link>
            </li>
            <li>
              <Link href="/about">
  <span className="text-gray-700 hover:text-primary font-medium transition-colors">About Us</span>
</Link>
            </li>
            {/* <li>
              <Link href="/products/3">
  <span className="text-gray-700 hover:text-primary font-medium transition-colors">Stationary gifts: Personalized notebooks</span>
</Link>
            </li> */}
            <li>
              <Link href="/contact">
  <span className="text-gray-700 hover:text-primary font-medium transition-colors">Contact Us</span>
</Link>
            </li>
          </ul>
        </div>
        
        <div className="flex items-center space-x-6">
          <button className="text-gray-700 hover:text-primary transition-colors" aria-label="Search">
            <Search size={20} />
          </button>
          <Link href="/account" aria-label="Account">
            <span className="text-gray-700 hover:text-primary transition-colors">
              <User size={20} />
            </span>
          </Link>
          {/* <Link href="/cart" className="text-gray-700 hover:text-primary transition-colors relative" aria-label="Cart">
            <ShoppingBag size={20} />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-primary text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </Link> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
