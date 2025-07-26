import Navbar from './navbar';
import CategoryNav from './category-nav';

export function Header() {
  return (
    <header className="sticky top-0 z-50">
      <Navbar />
      <CategoryNav />
    </header>
  );
}
