import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import DealStatusCard from '@/components/DealStatusCard';
import { Card } from '@/components/ui/card';
import { toast } from 'sonner';

// Import the sample products
import { Product } from '@/components/ProductCard';

// Import our new components
import ProductImageSection from '@/components/product/ProductImageSection';
import ProductHeader from '@/components/product/ProductHeader';
import ProductPricingSection from '@/components/product/ProductPricingSection';
import ProductDetailTabs from '@/components/product/ProductDetailTabs';

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
  const remainingUnits = product.totalUnits - product.currentUnits;
  
  // Deal metrics for visualization
  const dealMetrics = {
    totalBuyers: Math.ceil(product.currentUnits / 10),
    averageOrderSize: Math.round((product.currentUnits / Math.ceil(product.currentUnits / 10)) * 10) / 10,
    joinRate: Math.round(product.totalUnits / product.daysLeft / 24),
    timeLeft: product.daysLeft
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Product Image */}
            <ProductImageSection product={product} dealMetrics={dealMetrics} />
            
            {/* Product Info */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg p-6 shadow-sm border">
                <ProductHeader product={product} />
                
                <ProductPricingSection 
                  product={product}
                  quantity={quantity}
                  handleQuantityChange={handleQuantityChange}
                  handleJoinPool={handleJoinPool}
                  unitPrice={unitPrice}
                  totalPrice={totalPrice}
                  remainingUnits={remainingUnits}
                />
                
                {/* Deal Status Card for desktop */}
                <div className="hidden lg:block mb-6">
                  <DealStatusCard
                    currentAmount={product.currentUnits}
                    totalAmount={product.totalUnits}
                    daysLeft={product.daysLeft}
                    dealMetrics={dealMetrics}
                  />
                </div>
              </div>
              
              {/* Product Details Tabs */}
              <div className="bg-white rounded-lg mt-6 shadow-sm border">
                <ProductDetailTabs product={product} />
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
