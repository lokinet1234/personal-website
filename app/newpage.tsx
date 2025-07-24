'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 py-24 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
          className="max-w-6xl mx-auto w-full"
        >
          <div className="mb-8">
            <span className="text-sm font-medium text-gray-500 uppercase tracking-wider">
              Digital Experience Designer
            </span>
            <h1 className="text-huge mt-4">
              Mike <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">Castillo</span>
            </h1>
          </div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="max-w-2xl"
          >
            <p className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed">
              I design and build digital experiences that are fast, beautiful, and user-focused. Currently crafting the future of the web.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a href="#work" className="btn btn-primary">
                View My Work
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a href="#contact" className="btn btn-secondary">
                Get in Touch
              </a>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Work Section */}
      <section id="work" className="py-24 px-6 md:px-12 lg:px-24 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <h2 className="text-h2 mb-4">Selected Work</h2>
            <p className="text-xl text-gray-600 max-w-2xl">
              A collection of projects that showcase my approach to design and development.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[1, 2, 3, 4].map((item) => (
              <motion.div
                key={item}
                whileHover={{ y: -8 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="h-64 bg-gradient-to-br from-blue-400 to-purple-500"></div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">Project {item}</h3>
                  <p className="text-gray-600 mb-4">
                    A brief description of the project and the role I played in its creation.
                  </p>
                  <a href="#" className="text-black font-medium hover:underline inline-flex items-center">
                    View Project
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-h2 mb-8">About Me</h2>
            <div className="space-y-6 text-gray-700">
              <p>
                I'm a designer and developer with a passion for creating digital experiences that are both beautiful and functional. With expertise in modern web technologies, I help bring ideas to life through clean, efficient code and thoughtful design.
              </p>
              <p>
                My approach combines technical expertise with creative problem-solving, ensuring that every project I work on delivers real value to users while pushing the boundaries of what's possible on the web.
              </p>
              <div className="pt-4">
                <a href="#" className="text-black font-medium hover:underline inline-flex items-center">
                  Download Resume
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative h-96"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-purple-100 rounded-3xl overflow-hidden">
              <div className="h-full w-full flex items-center justify-center">
                <span className="text-gray-400">Profile Image</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 md:px-12 lg:px-24 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-h2 mb-8">Let's Work Together</h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Have a project in mind or want to discuss potential opportunities? I'd love to hear from you.
          </p>
          <a 
            href="mailto:hello@mikecastillo.com" 
            className="inline-block bg-white text-black px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-100 transition-colors duration-300"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
}
