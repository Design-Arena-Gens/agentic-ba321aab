'use client';

import { useState } from 'react';
import { useCartStore } from '@/store/cartStore';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  colors: string[];
  description: string;
}

export default function ProductCard({ product }: { product: Product }) {
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const addItem = useCartStore((state) => state.addItem);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
      color: selectedColor,
    });
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 2000);
  };

  return (
    <div className="group relative">
      {/* Product Image */}
      <div className="relative aspect-[3/4] bg-neutral-200 mb-4 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <svg className="w-24 h-24 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </div>

        {/* Quick Add Button */}
        <button
          onClick={handleAddToCart}
          className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white text-neutral-900 px-6 py-2 text-sm font-medium uppercase tracking-wide opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-neutral-100"
        >
          Quick Add
        </button>

        {showSuccess && (
          <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-neutral-900 text-white px-4 py-2 text-sm rounded animate-fade-in">
            Added to cart!
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="space-y-2">
        <h3 className="font-semibold text-lg">{product.name}</h3>
        <p className="text-sm text-neutral-600">{product.description}</p>

        {/* Color Options */}
        <div className="flex gap-2 items-center">
          {product.colors.map((color) => (
            <button
              key={color}
              onClick={() => setSelectedColor(color)}
              className={`w-6 h-6 rounded-full border-2 transition-all ${
                selectedColor === color ? 'border-neutral-900 scale-110' : 'border-neutral-300'
              }`}
              style={{
                backgroundColor: color.toLowerCase() === 'sand' ? '#C2B280' :
                               color.toLowerCase() === 'olive' ? '#808000' :
                               color.toLowerCase()
              }}
              title={color}
            />
          ))}
        </div>

        {/* Price */}
        <p className="font-semibold text-lg">${product.price}</p>
      </div>
    </div>
  );
}
