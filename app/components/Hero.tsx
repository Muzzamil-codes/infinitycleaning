"use client";

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { FaCheck, FaClock, FaLeaf, FaUserTie } from 'react-icons/fa'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      {/* Background shape */}
      <div className="absolute right-0 top-0 w-3/4 h-full bg-[#E6F4FF] rounded-l-[50px] -z-10" />
      
      <div className="container mx-auto px-4 py-20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <motion.div 
            className="md:w-1/2 z-10"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Fast, Affordable Pest Control & Deep Cleaning Services
            </motion.h1>
            <motion.p 
              className="text-gray-600 text-lg mb-6 max-w-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Professional services for homes and businesses with guaranteed satisfaction.
            </motion.p>
            
            <motion.div 
              className="space-y-3 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <div className="flex items-center gap-2">
                <FaClock className="text-primary-blue" />
                <span className="text-gray-700">✓ 24/7 Emergency Service</span>
              </div>
              <div className="flex items-center gap-2">
                <FaLeaf className="text-primary-blue" />
                <span className="text-gray-700">✓ Eco-friendly Products</span>
              </div>
              <div className="flex items-center gap-2">
                <FaUserTie className="text-primary-blue" />
                <span className="text-gray-700">✓ Certified Professionals</span>
              </div>
            </motion.div>
            
            <motion.div 
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              whileHover="hover"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Link
                  href="/book-now"
                  className="bg-primary-red text-white px-8 py-3 rounded-full hover:bg-opacity-90 transition text-lg font-medium flex items-center gap-2"
                >
                  <span>Get a Free Quote</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Link
                  href="tel:+1234567890"
                  className="border-2 border-primary-blue text-primary-blue px-8 py-3 rounded-full hover:bg-primary-blue hover:text-white transition text-lg font-medium"
                >
                  Call Us Now
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="md:w-1/2 relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <motion.div 
              className="relative w-full aspect-[4/3] md:aspect-square max-w-2xl"
              animate={{
                y: [0, -10, 0],
                x: [0, 5, 0],
                rotate: [0, 1, 0]
              }}
              transition={{
                duration: 4,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "reverse"
              }}
            >
              <Image
                src="/cleaning-hero.png"
                alt="Professional Cleaning Service"
                fill
                className="object-contain"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 