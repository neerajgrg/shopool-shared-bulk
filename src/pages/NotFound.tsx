
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { HomeIcon, Search } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow flex items-center justify-center bg-gray-50 py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="bg-white rounded-lg shadow-sm border p-8 max-w-2xl mx-auto">
            <h1 className="text-9xl font-bold text-shopool-300">404</h1>
            <h2 className="text-2xl font-bold text-gray-800 mt-4 mb-2">Page not found</h2>
            <p className="text-gray-600 mb-8">
              Oops! The page you're looking for doesn't exist or has been moved.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-shopool-600 hover:bg-shopool-700" asChild>
                <Link to="/">
                  <HomeIcon className="h-4 w-4 mr-2" />
                  Go to Homepage
                </Link>
              </Button>
              <Button variant="outline" className="border-shopool-600 text-shopool-600 hover:bg-shopool-50">
                <Search className="h-4 w-4 mr-2" />
                Search Products
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
