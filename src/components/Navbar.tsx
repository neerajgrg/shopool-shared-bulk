
import React from 'react';
import { Link } from 'react-router-dom';
import { Search, ShoppingCart, User, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useIsMobile } from '@/hooks/use-mobile';

const Navbar = () => {
  const isMobile = useIsMobile();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <nav className="border-b">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-shopool-600">Shopool</span>
          </Link>

          {/* Search bar - hidden on mobile */}
          {!isMobile && (
            <div className="flex-1 mx-4 max-w-xl">
              <div className="relative">
                <Input
                  type="text"
                  placeholder="Search for bulk products..."
                  className="w-full py-2 pr-10 pl-4"
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
              </div>
            </div>
          )}

          {/* Desktop Navigation */}
          {!isMobile && (
            <div className="flex items-center space-x-4">
              <Button variant="ghost">Categories</Button>
              <Button variant="ghost">How It Works</Button>
              <Button variant="ghost">
                <ShoppingCart className="h-5 w-5" />
              </Button>
              <Button variant="outline">
                <User className="h-5 w-5 mr-2" />
                Sign In
              </Button>
              <Button>Sell on Shopool</Button>
            </div>
          )}

          {/* Mobile Navigation Button */}
          {isMobile && (
            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="icon">
                <Search className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <ShoppingCart className="h-5 w-5" />
              </Button>
              <Button 
                variant="ghost" 
                size="icon"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <Menu className="h-5 w-5" />
              </Button>
            </div>
          )}
        </div>

        {/* Mobile Menu */}
        {isMobile && isMenuOpen && (
          <div className="py-3 space-y-2">
            <div className="px-2 pb-3">
              <Input
                type="text"
                placeholder="Search for bulk products..."
                className="w-full"
              />
            </div>
            <Button variant="ghost" className="w-full justify-start">Categories</Button>
            <Button variant="ghost" className="w-full justify-start">How It Works</Button>
            <Button variant="ghost" className="w-full justify-start">Sign In</Button>
            <Button className="w-full">Sell on Shopool</Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
