
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock } from 'lucide-react';
import ProgressBar from './ProgressBar';

export interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  price: number;
  totalUnits: number;
  currentUnits: number;
  unitType: string;
  category: string;
  daysLeft: number;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const {
    id,
    name,
    image,
    price,
    totalUnits,
    currentUnits,
    unitType,
    category,
    daysLeft
  } = product;

  const progress = (currentUnits / totalUnits) * 100;
  const isAlmostFull = progress >= 75;
  const isNew = daysLeft >= 25;

  return (
    <Link to={`/product/${id}`}>
      <Card className="h-full overflow-hidden hover:shadow-md transition-shadow duration-300">
        <div className="relative">
          <img
            src={image}
            alt={name}
            className="h-48 w-full object-cover"
          />
          {isAlmostFull && (
            <Badge className="absolute top-2 left-2 bg-amber-500">
              Filling Fast
            </Badge>
          )}
          {isNew && (
            <Badge className="absolute top-2 right-2 bg-green-500">
              New
            </Badge>
          )}
        </div>
        <CardContent className="p-4">
          <div className="mb-2">
            <Badge variant="outline" className="text-xs bg-shopool-50 text-shopool-700 border-shopool-200">
              {category}
            </Badge>
          </div>
          <h3 className="font-semibold text-lg mb-1 line-clamp-1">{name}</h3>
          <div className="flex justify-between items-center mb-2">
            <p className="font-bold text-shopool-700">
              ₹{(price / totalUnits).toFixed(2)}/{unitType}
            </p>
            <div className="flex items-center text-sm text-gray-500">
              <Clock className="h-3 w-3 mr-1" />
              <span>{daysLeft} days left</span>
            </div>
          </div>
          <div className="text-sm text-gray-500 mb-2">
            Total: ₹{price.toLocaleString()} for {totalUnits} {unitType}s
          </div>
          <ProgressBar
            currentAmount={currentUnits}
            totalAmount={totalUnits}
          />
        </CardContent>
        <CardFooter className="bg-gray-50 p-4 border-t">
          <p className="text-sm text-gray-600">
            Join {Math.ceil(currentUnits / 10)} others in this bulk order
          </p>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default ProductCard;
