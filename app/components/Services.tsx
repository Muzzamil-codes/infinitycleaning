"use client";
import { IconType } from 'react-icons'
import { FaBug, FaHome, FaBuilding, FaBroom, FaSprayCan, FaTree, FaClipboardList, FaShieldAlt, FaCheck } from 'react-icons/fa'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Image from 'next/image'

interface ServiceCardProps {
  title: string
  description: string
  icon: IconType
  benefits: string[]
}

const ServiceCard = ({ title, description, icon: Icon, benefits }: ServiceCardProps) => {
  return (
    <motion.div 
      className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition group relative overflow-hidden"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      {/* Background decoration */}
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary-blue bg-opacity-5 rounded-full" />
      
      <motion.div 
        className="w-16 h-16 bg-primary-blue bg-opacity-10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary-red group-hover:bg-opacity-10 transition mx-auto relative"
        whileHover={{ rotate: [0, 10, -10, 0] }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <Icon className="w-8 h-8 text-primary-blue group-hover:text-primary-red transition" />
      </motion.div>
      
      <h3 className="text-xl font-semibold mb-2 text-center">{title}</h3>
      <p className="text-gray-600 mb-4 text-center">{description}</p>
      
      {/* Benefits list */}
      <ul className="space-y-2 mb-4">
        {benefits.map((benefit, idx) => (
          <li key={idx} className="flex items-start gap-2">
            <FaCheck className="text-primary-blue mt-1 flex-shrink-0" />
            <span className="text-sm text-gray-700">{benefit}</span>
          </li>
        ))}
      </ul>
      
      <div className="text-center">
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <Link
            href={`/services/${title.toLowerCase().replace(/\s+/g, '-')}`}
            className="inline-block text-primary-blue hover:text-primary-red transition font-medium"
          >
            Learn More
          </Link>
        </motion.div>
      </div>
    </motion.div>
  )
}

const services = [
  {
    title: 'Pest Control',
    description: 'Comprehensive pest control services for your home and business',
    icon: FaBug,
    benefits: ['Inspection included', 'Eco-friendly solutions', 'Long-term protection']
  },
  {
    title: 'Residential Pest',
    description: 'Specialized pest control solutions for residential properties',
    icon: FaHome,
    benefits: ['Safe for families & pets', 'Thorough treatment', 'Preventive maintenance']
  },
  {
    title: 'Commercial Pest',
    description: 'Professional pest management for commercial establishments',
    icon: FaBuilding,
    benefits: ['Minimizes business disruption', 'Compliance with regulations', 'Discreet service']
  },
  {
    title: 'Cleaning Services',
    description: 'Professional cleaning services for all types of spaces',
    icon: FaBroom,
    benefits: ['Deep cleaning', 'Sanitization', 'Customized cleaning plans']
  },
  {
    title: 'Fumigation Services',
    description: 'Complete fumigation solutions for pest elimination',
    icon: FaSprayCan,
    benefits: ['Total pest elimination', 'Safe re-entry protocols', 'Certified technicians']
  },
  {
    title: 'Landscaping Services',
    description: 'Professional landscaping and garden maintenance',
    icon: FaTree,
    benefits: ['Garden pest prevention', 'Eco-friendly methods', 'Regular maintenance']
  },
  {
    title: 'Weekly Plans',
    description: 'Customized maintenance plans for regular service',
    icon: FaClipboardList,
    benefits: ['Cost-effective packages', 'Regular inspections', 'Priority scheduling']
  },
  {
    title: 'Pest Guarding',
    description: 'Ongoing pest prevention and monitoring services',
    icon: FaShieldAlt,
    benefits: ['24/7 protection', 'Early detection', 'Guaranteed results']
  },
]

export default function Services() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-16 bg-gray-50 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute left-0 top-1/4 w-32 h-32 bg-primary-red opacity-5 rounded-full" />
      <div className="absolute right-0 bottom-1/4 w-48 h-48 bg-primary-blue opacity-5 rounded-full" />
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h2 
            className="text-3xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Our Services
          </motion.h2>
          <motion.p 
            className="text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            We offer a comprehensive range of pest control and cleaning services
            to keep your space clean, healthy, and pest-free.
          </motion.p>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              transition={{ duration: 0.5 }}
            >
              <ServiceCard {...service} />
            </motion.div>
          ))}
        </motion.div>
        
        {/* CTA Banner */}
        <motion.div 
          className="mt-16 bg-gradient-to-r from-primary-blue to-blue-700 rounded-xl p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div>
            <h3 className="text-2xl font-bold mb-2">Ready to Get Started?</h3>
            <p className="text-blue-100">Contact us today for a free consultation and quote.</p>
          </div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Link
              href="/book-now"
              className="bg-white text-primary-blue px-8 py-3 rounded-full font-medium hover:bg-opacity-90 transition inline-block"
            >
              Schedule an Inspection
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
} 