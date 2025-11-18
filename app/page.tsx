'use client';

import Hero from "@/components/Hero";
import FeaturedProducts from "@/components/FeaturedProducts";
import Features from "@/components/Features";
import SustainabilitySection from "@/components/SustainabilitySection";
import TechnologyStack from "@/components/TechnologyStack";
import Newsletter from "@/components/Newsletter";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <FeaturedProducts />
      <SustainabilitySection />
      <TechnologyStack />
      <Newsletter />
    </>
  );
}
