
import React from 'react';
import { Product } from '@/components/ProductCard';
import { Badge } from '@/components/ui/badge';
import { Clock } from 'lucide-react';

interface ProductHeaderProps {
  product: Product;
}

const ProductHeader: React.FC<ProductHeaderProps> = ({ product }) => {
  return (
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
  );
};

export default ProductHeader;
