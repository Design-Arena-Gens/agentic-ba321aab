'use client';

import { motion } from 'framer-motion';

const techStack = {
  frontend: {
    title: 'Front-end Architecture',
    technologies: [
      {
        name: 'Next.js 14',
        description: 'React framework with App Router for optimal performance and SEO',
        reasons: [
          'Server-side rendering for faster initial page loads',
          'Built-in image optimization and lazy loading',
          'API routes for serverless functions',
          'Excellent SEO capabilities crucial for e-commerce',
        ],
      },
      {
        name: 'TypeScript',
        description: 'Type-safe development for maintainable, scalable code',
        reasons: [
          'Catch errors at compile time',
          'Better developer experience with autocomplete',
          'Self-documenting code',
        ],
      },
      {
        name: 'Tailwind CSS',
        description: 'Utility-first CSS for rapid UI development',
        reasons: [
          'Consistent design system',
          'Small bundle size with purging',
          'Responsive design made easy',
        ],
      },
    ],
  },
  backend: {
    title: 'Back-end & Database',
    technologies: [
      {
        name: 'Headless CMS Approach',
        description: 'Flexibility with Shopify Plus or custom Node.js/Express',
        reasons: [
          'Shopify Plus: Battle-tested e-commerce features, PCI compliance, global CDN',
          'Custom API: Full control over business logic and data models',
          'Microservices architecture for scalability',
        ],
      },
      {
        name: 'PostgreSQL',
        description: 'Robust relational database for complex queries',
        reasons: [
          'ACID compliance for transaction integrity',
          'Advanced indexing for fast product searches',
          'JSON support for flexible product attributes',
        ],
      },
      {
        name: 'Redis',
        description: 'In-memory caching for performance',
        reasons: [
          'Cache frequently accessed product data',
          'Session management',
          'Real-time inventory updates',
        ],
      },
    ],
  },
  infrastructure: {
    title: 'Infrastructure & DevOps',
    technologies: [
      {
        name: 'Vercel',
        description: 'Edge network deployment for global performance',
        reasons: [
          'Automatic scaling',
          'CDN distribution',
          'Zero-config deployments',
        ],
      },
      {
        name: 'Stripe',
        description: 'Payment processing with PCI compliance',
        reasons: [
          'Industry-leading security',
          'Support for multiple payment methods',
          'Subscription management',
        ],
      },
    ],
  },
};

export default function TechnologyStack() {
  return (
    <section className="section-padding bg-neutral-900 text-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technology Stack
          </h2>
          <p className="text-lg text-neutral-400 max-w-3xl mx-auto">
            Built on modern, scalable architecture inspired by leading DTC brands like Everlane, Cuts Clothing, and Buck Mason
          </p>
        </motion.div>

        <div className="space-y-12">
          {/* Frontend */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="border-t border-neutral-800 pt-8"
          >
            <h3 className="text-2xl font-bold mb-6 text-primary-400">
              {techStack.frontend.title}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {techStack.frontend.technologies.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-neutral-800 p-6 rounded-lg"
                >
                  <h4 className="text-xl font-semibold mb-2">{tech.name}</h4>
                  <p className="text-neutral-400 text-sm mb-4">{tech.description}</p>
                  <ul className="space-y-2">
                    {tech.reasons.map((reason, idx) => (
                      <li key={idx} className="text-sm text-neutral-400 flex items-start">
                        <span className="text-primary-400 mr-2">•</span>
                        <span>{reason}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Backend */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="border-t border-neutral-800 pt-8"
          >
            <h3 className="text-2xl font-bold mb-6 text-primary-400">
              {techStack.backend.title}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {techStack.backend.technologies.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-neutral-800 p-6 rounded-lg"
                >
                  <h4 className="text-xl font-semibold mb-2">{tech.name}</h4>
                  <p className="text-neutral-400 text-sm mb-4">{tech.description}</p>
                  <ul className="space-y-2">
                    {tech.reasons.map((reason, idx) => (
                      <li key={idx} className="text-sm text-neutral-400 flex items-start">
                        <span className="text-primary-400 mr-2">•</span>
                        <span>{reason}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Infrastructure */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="border-t border-neutral-800 pt-8"
          >
            <h3 className="text-2xl font-bold mb-6 text-primary-400">
              {techStack.infrastructure.title}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {techStack.infrastructure.technologies.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-neutral-800 p-6 rounded-lg"
                >
                  <h4 className="text-xl font-semibold mb-2">{tech.name}</h4>
                  <p className="text-neutral-400 text-sm mb-4">{tech.description}</p>
                  <ul className="space-y-2">
                    {tech.reasons.map((reason, idx) => (
                      <li key={idx} className="text-sm text-neutral-400 flex items-start">
                        <span className="text-primary-400 mr-2">•</span>
                        <span>{reason}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Architecture Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 bg-primary-900 p-8 rounded-lg"
        >
          <h3 className="text-2xl font-bold mb-4">Why This Stack?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-2 text-primary-300">Performance</h4>
              <p className="text-neutral-400 text-sm">
                Fast page loads, optimized images, and edge caching ensure customers get the best experience globally.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2 text-primary-300">Scalability</h4>
              <p className="text-neutral-400 text-sm">
                Serverless architecture and CDN distribution handle traffic spikes during sales and launches.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2 text-primary-300">Security</h4>
              <p className="text-neutral-400 text-sm">
                PCI-compliant payment processing, HTTPS everywhere, and regular security audits protect customer data.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2 text-primary-300">Developer Experience</h4>
              <p className="text-neutral-400 text-sm">
                TypeScript, modern tooling, and comprehensive testing enable rapid feature development.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
