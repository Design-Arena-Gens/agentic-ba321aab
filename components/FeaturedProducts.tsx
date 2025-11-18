'use client';

import { motion } from 'framer-motion';
import ProductCard from './ProductCard';

const products = [
  {
    id: 1,
    name: 'Classic Crew Neck',
    price: 45,
    image: '/products/crew-neck.jpg',
    colors: ['Black', 'White', 'Navy', 'Grey'],
    description: 'Our signature crew neck in premium organic cotton',
  },
  {
    id: 2,
    name: 'V-Neck Essential',
    price: 42,
    image: '/products/v-neck.jpg',
    colors: ['Black', 'White', 'Navy'],
    description: 'Timeless v-neck with a modern fit',
  },
  {
    id: 3,
    name: 'Pocket Tee',
    price: 48,
    image: '/products/pocket-tee.jpg',
    colors: ['Olive', 'Navy', 'Black', 'Sand'],
    description: 'Elevated basics with a functional chest pocket',
  },
  {
    id: 4,
    name: 'Long Sleeve Crew',
    price: 52,
    image: '/products/long-sleeve.jpg',
    colors: ['Black', 'White', 'Grey', 'Navy'],
    description: 'Year-round staple in heavyweight cotton',
  },
];

export default function FeaturedProducts() {
  return (
    <section className="section-padding bg-neutral-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Shop Essentials
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Carefully crafted pieces designed to elevate your everyday wardrobe.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <a href="/shop" className="btn-primary inline-block">
            View All Products
          </a>
        </motion.div>
      </div>
    </section>
  );
}
