
import React from 'react';
import { Product } from '@/components/ProductCard';
import DealStatusCard from '@/components/DealStatusCard';

interface ProductImageSectionProps {
  product: Product;
  dealMetrics: {
    totalBuyers: number;
    averageOrderSize: number;
    joinRate: number;
    timeLeft: number;
  };
}

const ProductImageSection: React.FC<ProductImageSectionProps> = ({ product, dealMetrics }) => {
  return (
    <div className="lg:col-span-1">
      <div className="bg-white rounded-lg overflow-hidden shadow-sm border">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-auto object-cover aspect-square"
        />
      </div>
      
      {/* Add Deal Status Card below image on mobile */}
      <div className="mt-6 lg:hidden">
        <DealStatusCard
          currentAmount={product.currentUnits}
          totalAmount={product.totalUnits}
          daysLeft={product.daysLeft}
          dealMetrics={dealMetrics}
        />
      </div>
    </div>
  );
};

export default ProductImageSection;
