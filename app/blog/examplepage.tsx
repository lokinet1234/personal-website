import Link from 'next/link';
import { motion } from 'framer-motion';

// This would typically come from a CMS or markdown files
const posts = [
  {
    slug: 'designing-with-swiss-precision',
    title: 'Designing with Swiss Precision',
    excerpt: 'Exploring the principles of Swiss design and how to apply them to modern web development.',
    date: '2025-07-24',
    readingTime: '4 min read',
  },
  {
    slug: 'the-art-of-minimalism',
    title: 'The Art of Minimalism',
    excerpt: 'How minimalism in design leads to better user experiences and cleaner code.',
    date: '2025-07-17',
    readingTime: '6 min read',
  },
];

export default function BlogPage() {
  return (
    <div className="parallax-container">
      {/* Background layer */}
      <div className="parallax-layer parallax-layer-back">
        <div className="absolute inset-0 bg-grid-white/[0.05] dark:bg-grid-black/[0.2]" />
      </div>

      {/* Content layer */}
      <div className="parallax-layer parallax-layer-base relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h1 className="text-4xl sm:text-5xl font-medium tracking-tight mb-12">
              Blog
            </h1>
            
            <div className="space-y-16">
              {posts.map((post, index) => (
                <motion.article
                  key={post.slug}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="group"
                >
                  <Link href={`/blog/${post.slug}`}>
                    <div className="relative">
                      <div className="absolute -inset-4 bg-gray-100 dark:bg-gray-900 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="relative p-6 md:p-8 rounded-lg transition-all duration-300 group-hover:-translate-x-1">
                        <div className="flex justify-between items-start mb-2">
                          <time className="text-sm text-gray-500 dark:text-gray-400">
                            {new Date(post.date).toLocaleDateString('en-US', {
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric',
                            })}
                          </time>
                          <span className="text-xs px-2 py-1 rounded-full bg-gray-100 dark:bg-gray-900 text-gray-500 dark:text-gray-400">
                            {post.readingTime}
                          </span>
                        </div>
                        <h2 className="text-2xl md:text-3xl font-medium mb-3 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
                          {post.title}
                        </h2>
                        <p className="text-gray-600 dark:text-gray-300 mb-4">
                          {post.excerpt}
                        </p>
                        <span className="inline-flex items-center text-sm font-medium text-gray-500 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
                          Read article
                          <svg
                            className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M14 5l7 7m0 0l-7 7m7-7H3"
                            />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>

            {/* Newsletter signup */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="mt-24 p-8 rounded-lg bg-gray-50 dark:bg-gray-900/50 border border-gray-100 dark:border-gray-800"
            >
              <div className="max-w-xl mx-auto text-center">
                <h2 className="text-2xl font-medium mb-4">Stay updated</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Get the latest articles and news delivered to your inbox.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="flex-1 px-4 py-2 rounded-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white focus:border-transparent"
                  />
                  <button className="px-6 py-2 bg-black dark:bg-white text-white dark:text-black font-medium rounded-md hover:opacity-90 transition-opacity">
                    Subscribe
                  </button>
                </div>
                <p className="mt-3 text-xs text-gray-500 dark:text-gray-400">
                  No spam, unsubscribe at any time.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}