
import React from 'react';
import { Product } from '@/components/ProductCard';
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { User, MessageSquare, Info } from 'lucide-react';

interface ProductDetailTabsProps {
  product: Product;
}

const ProductDetailTabs: React.FC<ProductDetailTabsProps> = ({ product }) => {
  return (
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
  );
};

export default ProductDetailTabs;
