
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, ShoppingCart, User, Menu, Tags } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useIsMobile } from '@/hooks/use-mobile';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { toast } from 'sonner';

const Navbar = () => {
  const isMobile = useIsMobile();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleTagsClick = () => {
    toast.info("Browsing by tags", {
      description: "Showing all available product categories"
    });
    // In a real app, this would navigate to a tags/categories page
    navigate('/#categories');
  };

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
                  placeholder="Search for pools and products..."
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
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="flex items-center gap-1">
                    <Tags className="h-4 w-4" />
                    Categories
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56 bg-white">
                  <DropdownMenuItem onClick={() => navigate('/?category=groceries')}>
                    Groceries
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => navigate('/?category=electronics')}>
                    Electronics
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => navigate('/?category=clothing')}>
                    Clothing
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => navigate('/?category=furniture')}>
                    Furniture
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <Button variant="ghost" onClick={() => navigate('/#how-it-works')}>How It Works</Button>
              <Button variant="ghost">
                <ShoppingCart className="h-5 w-5" />
              </Button>
              <Button variant="outline">
                <User className="h-5 w-5 mr-2" />
                Sign In
              </Button>
              <Button>Create a Pool</Button>
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
                placeholder="Search for pools and products..."
                className="w-full"
              />
            </div>
            <Button 
              variant="ghost" 
              className="w-full justify-start"
              onClick={handleTagsClick}
            >
              <Tags className="h-4 w-4 mr-2" />
              Categories
            </Button>
            <Button variant="ghost" className="w-full justify-start">How It Works</Button>
            <Button variant="ghost" className="w-full justify-start">Sign In</Button>
            <Button className="w-full">Create a Pool</Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
