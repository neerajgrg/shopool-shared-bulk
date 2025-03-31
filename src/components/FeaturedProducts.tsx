
import React from 'react';
import ProductCard, { Product } from './ProductCard';

// Sample data
const featuredProducts: Product[] = [
  {
    id: 1,
    name: "Organic Sugar (Premium Quality)",
    description: "High-quality organic sugar sourced directly from farmers. Perfect for bakeries, restaurants, and households looking to stock up.",
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
    description: "Stone-ground whole wheat flour, preserving all the natural nutrients. Ideal for making healthy breads and pastries.",
    image: "https://images.unsplash.com/photo-1586444248902-2f64eddc13df?auto=format&fit=crop&w=800&q=80",
    price: 15000,
    totalUnits: 600,
    currentUnits: 150,
    unitType: "kg",
    category: "Groceries",
    daysLeft: 10
  },
  {
    id: 3,
    name: "Wireless Earbuds (Bulk Pack)",
    description: "High-quality wireless earbuds with noise cancellation. Bulk pack perfect for retailers or corporate gifts.",
    image: "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?auto=format&fit=crop&w=800&q=80",
    price: 250000,
    totalUnits: 100,
    currentUnits: 65,
    unitType: "unit",
    category: "Electronics",
    daysLeft: 15
  },
  {
    id: 4,
    name: "Stainless Steel Water Bottles",
    description: "Eco-friendly, double-walled stainless steel water bottles. Keeps drinks cold for 24 hours or hot for 12 hours.",
    image: "https://images.unsplash.com/photo-1523362628745-0c100150b504?auto=format&fit=crop&w=800&q=80",
    price: 180000,
    totalUnits: 200,
    currentUnits: 180,
    unitType: "unit",
    category: "Home & Kitchen",
    daysLeft: 3
  },
  {
    id: 5,
    name: "Natural Honey (Raw & Unfiltered)",
    description: "Pure, raw, and unfiltered honey sourced from local apiaries. No additives or preservatives.",
    image: "https://images.unsplash.com/photo-1587049352851-8d4e89133924?auto=format&fit=crop&w=800&q=80",
    price: 30000,
    totalUnits: 100,
    currentUnits: 25,
    unitType: "kg",
    category: "Groceries",
    daysLeft: 8
  },
  {
    id: 6,
    name: "Cotton T-Shirts (Assorted Colors)",
    description: "High-quality 100% cotton t-shirts in various colors and sizes. Perfect for custom printing or bulk retail.",
    image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=800&q=80",
    price: 200000,
    totalUnits: 500,
    currentUnits: 300,
    unitType: "unit",
    category: "Fashion",
    daysLeft: 12
  },
  {
    id: 7,
    name: "LED Light Bulbs (Energy Efficient)",
    description: "Energy-efficient LED bulbs with long life span. Available in warm white and cool white options.",
    image: "https://images.unsplash.com/photo-1550119614-4af6abe9e9e8?auto=format&fit=crop&w=800&q=80",
    price: 120000,
    totalUnits: 1000,
    currentUnits: 400,
    unitType: "unit",
    category: "Home & Kitchen",
    daysLeft: 6
  },
  {
    id: 8,
    name: "Basmati Rice (Premium Long Grain)",
    description: "Aromatic, long-grain basmati rice. Aged for 2 years for better flavor and texture.",
    image: "https://images.unsplash.com/photo-1603982524193-afaf9c987854?auto=format&fit=crop&w=800&q=80",
    price: 20000,
    totalUnits: 400,
    currentUnits: 295,
    unitType: "kg",
    category: "Groceries",
    daysLeft: 20
  }
];

const FeaturedProducts = () => {
  return (
    <div className="my-8">
      <h2 className="text-2xl font-bold mb-6">Featured Pools</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {featuredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
