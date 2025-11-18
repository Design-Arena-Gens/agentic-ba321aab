'use client';

import { motion } from 'framer-motion';

const sustainabilityFeatures = [
  {
    metric: '100%',
    label: 'Organic Cotton',
    description: 'Certified organic materials from sustainable farms',
  },
  {
    metric: '0',
    label: 'Carbon Neutral',
    description: 'Net-zero emissions across our entire supply chain',
  },
  {
    metric: 'Fair',
    label: 'Trade Certified',
    description: 'Ensuring fair wages and safe working conditions',
  },
  {
    metric: '95%',
    label: 'Less Water',
    description: 'Compared to conventional cotton production',
  },
];

export default function SustainabilitySection() {
  return (
    <section className="section-padding bg-primary-50">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Sustainable by Design
            </h2>
            <p className="text-lg text-neutral-600 mb-8">
              We believe great products shouldn't cost the earth. That's why we've built sustainability into every aspect of our business, from sourcing to shipping.
            </p>
            <p className="text-neutral-600 mb-8">
              Our commitment goes beyond just using organic materials. We partner with factories that share our values, ensuring fair wages and safe working conditions. Every purchase helps us invest in renewable energy and carbon offset programs.
            </p>
            <a href="/sustainability" className="btn-secondary inline-block">
              Read Our Impact Report
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-6"
          >
            {sustainabilityFeatures.map((feature, index) => (
              <motion.div
                key={feature.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-sm"
              >
                <div className="text-4xl font-bold text-primary-600 mb-2">
                  {feature.metric}
                </div>
                <div className="font-semibold mb-2">{feature.label}</div>
                <div className="text-sm text-neutral-600">{feature.description}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
