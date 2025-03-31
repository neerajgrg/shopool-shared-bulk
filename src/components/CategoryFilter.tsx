
import React from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Button } from '@/components/ui/button';

const categories = [
  "All Categories",
  "Groceries",
  "Electronics",
  "Home & Kitchen",
  "Fashion",
  "Beauty & Personal Care",
  "Sports & Outdoors",
  "Health & Wellness",
  "Office Supplies",
  "Industrial & Scientific",
  "Toys & Games"
];

const CategoryFilter = () => {
  const [selectedCategory, setSelectedCategory] = React.useState("All Categories");

  return (
    <div className="my-6">
      <ScrollArea className="w-full whitespace-nowrap">
        <div className="flex space-x-2 p-1">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              className={`rounded-full px-4 py-2 ${
                selectedCategory === category 
                  ? "bg-shopool-600 hover:bg-shopool-700" 
                  : "hover:bg-shopool-50"
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};

export default CategoryFilter;
