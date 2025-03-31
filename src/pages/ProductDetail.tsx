import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { 
  Clock, 
  Truck, 
  Package, 
  Info, 
  User, 
  MessageSquare,
  ShieldCheck
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProgressBar from '@/components/ProgressBar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import { toast } from 'sonner';

// Import the sample products
import { Product } from '@/components/ProductCard';

// Sample product data (in a real app, this would come from an API)
const featuredProducts: Product[] = [
  {
    id: 1,
    name: "Organic Sugar (Premium Quality)",
    description: "High-quality organic sugar sourced directly from farmers. Perfect for bakeries, restaurants, and households looking to stock up. This product meets all organic certification standards and is free from chemicals and pesticides. The sugar is processed with minimal heat to retain its natural nutrients and flavor profile.",
    image: "https://images.unsplash.com/photo-1581093196277-9f6e9b8fbb09?auto=format&fit=crop&w=800&q=80",
    price: 12000,
    totalUnits: 500,
    currentUnits: 320,
    unitType: "kg",
    category: "Groceries",
    daysLeft: 5
  },
  {
    id: 2,
    name: "Whole Wheat Flour (Stone Ground)",
    description: "Stone-ground whole wheat flour, preserving all the natural nutrients. Ideal for making healthy breads and pastries. Our flour is milled from premium wheat grains and contains the entire wheat kernel including the bran, germ, and endosperm, providing more fiber, vitamins, and minerals than refined flour.",
    image: "https://images.unsplash.com/photo-1586444248902-2f64eddc13df?auto=format&fit=crop&w=800&q=80",
    price: 15000,
    totalUnits: 600,
    currentUnits: 150,
    unitType: "kg",
    category: "Groceries",
    daysLeft: 10
  },
  // ... other products would be here
];

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [quantity, setQuantity] = useState(1);
  
  // Find the product based on the ID from the URL
  const product = featuredProducts.find(p => p.id === Number(id)) || featuredProducts[0];
  
  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value > 0) {
      // Ensure the quantity doesn't exceed the available units
      const maxAvailable = product.totalUnits - product.currentUnits;
      setQuantity(Math.min(value, maxAvailable));
    }
  };
  
  const handleJoinPool = () => {
    toast.success(`Added ${quantity} ${product.unitType}${quantity > 1 ? 's' : ''} to your cart!`);
  };
  
  const unitPrice = product.price / product.totalUnits;
  const totalPrice = unitPrice * quantity;
  const percentageFilled = (product.currentUnits / product.totalUnits) * 100;
  const remainingUnits = product.totalUnits - product.currentUnits;
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Product Image */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg overflow-hidden shadow-sm border">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-auto object-cover aspect-square"
                />
              </div>
            </div>
            
            {/* Product Info */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg p-6 shadow-sm border">
                <div className="flex flex-wrap items-start justify-between mb-4">
                  <div>
                    <Badge className="mb-2 bg-shopool-100 text-shopool-800 hover:bg-shopool-200">
                      {product.category}
                    </Badge>
                    <h1 className="text-2xl md:text-3xl font-bold mb-2">{product.name}</h1>
                  </div>
                  <div className="flex items-center text-amber-500 bg-amber-50 px-3 py-1 rounded-full">
                    <Clock className="h-4 w-4 mr-1" />
                    <span className="text-sm font-medium">{product.daysLeft} days left</span>
                  </div>
                </div>
                
                <div className="mb-6">
                  <div className="flex items-baseline mb-1">
                    <span className="text-3xl font-bold text-shopool-700">₹{unitPrice.toFixed(2)}</span>
                    <span className="text-gray-600 ml-1">per {product.unitType}</span>
                  </div>
                  <p className="text-gray-500">
                    Total bulk order: ₹{product.price.toLocaleString()} for {product.totalUnits} {product.unitType}s
                  </p>
                </div>
                
                <div className="mb-6">
                  <ProgressBar 
                    currentAmount={product.currentUnits} 
                    totalAmount={product.totalUnits}
                    className="mb-2"
                  />
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">
                      <span className="font-medium">{Math.ceil(product.currentUnits / 10)}</span> buyers so far
                    </span>
                    <span className="text-gray-600">
                      <span className="font-medium">{remainingUnits}</span> {product.unitType}s remaining
                    </span>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row gap-4 mb-6">
                  <div className="w-full md:w-1/3">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Quantity ({product.unitType}s)
                    </label>
                    <Input
                      type="number"
                      min="1"
                      max={remainingUnits}
                      value={quantity}
                      onChange={handleQuantityChange}
                      className="w-full"
                    />
                  </div>
                  <div className="w-full md:w-2/3">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Your Estimated Total
                    </label>
                    <div className="bg-gray-50 p-3 rounded-md border border-gray-200 flex justify-between items-center">
                      <span className="font-medium">₹{totalPrice.toFixed(2)}</span>
                      <span className="text-sm text-gray-500">
                        for {quantity} {product.unitType}{quantity > 1 ? 's' : ''}
                      </span>
                    </div>
                  </div>
                </div>
                
                <Button 
                  onClick={handleJoinPool}
                  className="w-full bg-shopool-600 hover:bg-shopool-700 h-12 text-lg"
                >
                  Join This Bulk Order
                </Button>
                
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6">
                  <div className="flex items-center">
                    <Truck className="h-5 w-5 text-shopool-600 mr-2" />
                    <span className="text-sm">Free shipping</span>
                  </div>
                  <div className="flex items-center">
                    <Package className="h-5 w-5 text-shopool-600 mr-2" />
                    <span className="text-sm">Bulk packaging</span>
                  </div>
                  <div className="flex items-center">
                    <ShieldCheck className="h-5 w-5 text-shopool-600 mr-2" />
                    <span className="text-sm">Secure payment</span>
                  </div>
                </div>
              </div>
              
              {/* Product Details Tabs */}
              <div className="bg-white rounded-lg mt-6 shadow-sm border">
                <Tabs defaultValue="description">
                  <TabsList className="w-full grid grid-cols-3 bg-gray-50 rounded-t-lg">
                    <TabsTrigger value="description">Description</TabsTrigger>
                    <TabsTrigger value="details">Details</TabsTrigger>
                    <TabsTrigger value="seller">Seller</TabsTrigger>
                  </TabsList>
                  <TabsContent value="description" className="p-6">
                    <p className="text-gray-700 leading-relaxed">
                      {product.description}
                    </p>
                  </TabsContent>
                  <TabsContent value="details" className="p-6">
                    <div className="space-y-4">
                      <div className="flex flex-col md:flex-row md:gap-8">
                        <div className="md:w-1/2">
                          <h4 className="font-medium mb-2">Product Specifications</h4>
                          <ul className="space-y-2">
                            <li className="flex justify-between">
                              <span className="text-gray-600">Category</span>
                              <span>{product.category}</span>
                            </li>
                            <li className="flex justify-between">
                              <span className="text-gray-600">Unit Type</span>
                              <span>{product.unitType}</span>
                            </li>
                            <li className="flex justify-between">
                              <span className="text-gray-600">Total Quantity</span>
                              <span>{product.totalUnits} {product.unitType}s</span>
                            </li>
                            <li className="flex justify-between">
                              <span className="text-gray-600">Packaging</span>
                              <span>Bulk</span>
                            </li>
                          </ul>
                        </div>
                        <div className="md:w-1/2 mt-4 md:mt-0">
                          <h4 className="font-medium mb-2">Shipping Information</h4>
                          <ul className="space-y-2">
                            <li className="flex justify-between">
                              <span className="text-gray-600">Delivery</span>
                              <span>7-10 business days</span>
                            </li>
                            <li className="flex justify-between">
                              <span className="text-gray-600">Shipping</span>
                              <span>Free</span>
                            </li>
                            <li className="flex justify-between">
                              <span className="text-gray-600">Returns</span>
                              <span>Not accepted</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                  <TabsContent value="seller" className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="bg-shopool-100 rounded-full p-3 mr-3">
                        <User className="h-8 w-8 text-shopool-600" />
                      </div>
                      <div>
                        <h4 className="font-medium">Wholesale Distributors Ltd</h4>
                        <p className="text-sm text-gray-600">Member since June 2023</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 mb-4">
                      <div className="flex">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <svg key={star} className="h-5 w-5 text-yellow-400 fill-current" viewBox="0 0 24 24">
                            <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                          </svg>
                        ))}
                      </div>
                      <span className="text-sm text-gray-600">4.9 (120 ratings)</span>
                    </div>
                    <Separator className="my-4" />
                    <div className="flex justify-between items-center">
                      <Button variant="outline" className="flex items-center">
                        <MessageSquare className="h-4 w-4 mr-2" />
                        Contact Seller
                      </Button>
                      <Button variant="ghost" className="flex items-center text-gray-600">
                        <Info className="h-4 w-4 mr-2" />
                        Report Listing
                      </Button>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetail;
