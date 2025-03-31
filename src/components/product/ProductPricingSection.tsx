
import React from 'react';
import { Product } from '@/components/ProductCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Truck, Package, ShieldCheck } from 'lucide-react';

interface ProductPricingSectionProps {
  product: Product;
  quantity: number;
  handleQuantityChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleJoinPool: () => void;
  unitPrice: number;
  totalPrice: number;
  remainingUnits: number;
}

const ProductPricingSection: React.FC<ProductPricingSectionProps> = ({
  product,
  quantity,
  handleQuantityChange,
  handleJoinPool,
  unitPrice,
  totalPrice,
  remainingUnits
}) => {
  return (
    <>
      <div className="mb-6">
        <div className="flex items-baseline mb-1">
          <span className="text-3xl font-bold text-shopool-700">₹{unitPrice.toFixed(2)}</span>
          <span className="text-gray-600 ml-1">per {product.unitType}</span>
        </div>
        <p className="text-gray-500">
          Total pool: ₹{product.price.toLocaleString()} for {product.totalUnits} {product.unitType}s
        </p>
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
        Join This Pool
      </Button>
      
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6">
        <div className="flex items-center">
          <Truck className="h-5 w-5 text-shopool-600 mr-2" />
          <span className="text-sm">Free shipping</span>
        </div>
        <div className="flex items-center">
          <Package className="h-5 w-5 text-shopool-600 mr-2" />
          <span className="text-sm">Pool packaging</span>
        </div>
        <div className="flex items-center">
          <ShieldCheck className="h-5 w-5 text-shopool-600 mr-2" />
          <span className="text-sm">Secure payment</span>
        </div>
      </div>
    </>
  );
};

export default ProductPricingSection;
