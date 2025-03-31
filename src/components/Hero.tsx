
import React from 'react';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';

const Hero = () => {
  const isMobile = useIsMobile();

  return (
    <div className="bg-gradient-to-r from-shopool-50 to-shopool-100 py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Join the Pool, <br />
              <span className="text-shopool-600">Save Together</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-6 max-w-lg">
              Shopool connects you with others to join wholesale pools. Get exactly what you need at wholesale prices without the bulk commitment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-shopool-600 hover:bg-shopool-700">
                Browse Pools
              </Button>
              <Button size="lg" variant="outline" className="border-shopool-600 text-shopool-600 hover:bg-shopool-50">
                How It Works
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-shopool-200 rounded-full opacity-70"></div>
              <div className="relative z-10 bg-white p-4 rounded-lg shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80" 
                  alt="People shopping together" 
                  className="rounded-md w-full max-w-md h-auto"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-shopool-300 rounded-full opacity-70"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
