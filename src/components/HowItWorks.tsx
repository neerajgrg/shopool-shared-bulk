
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Search, Users, ShoppingBag, Truck } from 'lucide-react';

const steps = [
  {
    icon: <Search className="h-10 w-10 text-shopool-600" />,
    title: "Find Pools",
    description: "Browse through a wide range of wholesale products available for group buying."
  },
  {
    icon: <Users className="h-10 w-10 text-shopool-600" />,
    title: "Join a Pool",
    description: "Specify the quantity you need and join others in splitting the wholesale order."
  },
  {
    icon: <ShoppingBag className="h-10 w-10 text-shopool-600" />,
    title: "Pay Your Share",
    description: "Pay only for your portion at wholesale prices and save together."
  },
  {
    icon: <Truck className="h-10 w-10 text-shopool-600" />,
    title: "Receive Your Items",
    description: "Once the pool is filled, the order is placed and delivered to all participants."
  }
];

const HowItWorks = () => {
  return (
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-2">How Shopool Works</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Shopool connects you with others to join wholesale pools, 
            allowing you to buy exactly what you need at wholesale prices.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <Card key={index} className="border-2 border-shopool-100 hover:border-shopool-300 transition-colors duration-300">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4 p-3 bg-shopool-50 rounded-full">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
