'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useCartStore } from '@/store/cartStore';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const cartItems = useCartStore((state) => state.items);
  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-neutral-200">
      <nav className="container-custom py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold tracking-tight">
            ESSENTIAL
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/shop" className="text-sm font-medium hover:text-neutral-600 transition-colors uppercase tracking-wide">
              Shop
            </Link>
            <Link href="/collections" className="text-sm font-medium hover:text-neutral-600 transition-colors uppercase tracking-wide">
              Collections
            </Link>
            <Link href="/about" className="text-sm font-medium hover:text-neutral-600 transition-colors uppercase tracking-wide">
              About
            </Link>
            <Link href="/sustainability" className="text-sm font-medium hover:text-neutral-600 transition-colors uppercase tracking-wide">
              Sustainability
            </Link>
          </div>

          {/* Cart & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <Link href="/cart" className="relative">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-neutral-900 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>

            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-neutral-200 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <Link href="/shop" className="text-sm font-medium hover:text-neutral-600 transition-colors uppercase tracking-wide">
                Shop
              </Link>
              <Link href="/collections" className="text-sm font-medium hover:text-neutral-600 transition-colors uppercase tracking-wide">
                Collections
              </Link>
              <Link href="/about" className="text-sm font-medium hover:text-neutral-600 transition-colors uppercase tracking-wide">
                About
              </Link>
              <Link href="/sustainability" className="text-sm font-medium hover:text-neutral-600 transition-colors uppercase tracking-wide">
                Sustainability
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
