"use client";

import { FaStar, FaQuoteLeft } from 'react-icons/fa';
import Image from 'next/image';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Homeowner",
    comment: "Excellent service! The team was professional and thorough. My house has never been cleaner and pest-free.",
    rating: 5,
    image: "/customer1.jpg"
  },
  {
    name: "Mike Williams",
    role: "Business Owner",
    comment: "Reliable and efficient pest control services. They've helped keep our restaurant pest-free for over a year now.",
    rating: 5,
    image: "/customer2.jpg"
  },
  {
    name: "Emily Davis",
    role: "Property Manager",
    comment: "Great attention to detail in their cleaning services. Very satisfied with their work across all our properties.",
    rating: 5,
    image: "/customer3.jpg"
  }
];

// // Certification images
// const certifications = [
//   { name: "Eco-Friendly Certified", image: "/eco-cert.png" },
//   { name: "Professional Cleaning Association", image: "/cleaning-cert.png" },
//   { name: "Pest Control Experts", image: "/pest-cert.png" }
// ];

// // Before/After images
// const beforeAfterImages = [
//   { before: "/before1.jpg", after: "/after1.jpg", title: "Kitchen Deep Cleaning" },
//   { before: "/before2.jpg", after: "/after2.jpg", title: "Pest Removal" }
// ];

export default function Testimonials() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-4">
            Trusted by Hundreds of Happy Customers
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers have to say about our services.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-md relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
              whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
            >
              <div className="absolute top-0 right-0 bg-primary-blue w-24 h-24 rounded-bl-full -mt-8 -mr-8 opacity-10" />
              <div className="flex items-center mb-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                  <Image 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    fill 
                    sizes="48px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
              
              <div className="flex mb-2">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400" />
                ))}
              </div>
              
              <div className="relative">
                <FaQuoteLeft className="text-gray-200 text-4xl absolute -top-2 -left-1 opacity-50" />
                <p className="text-gray-600 mb-2 italic relative z-10 pl-6">"{testimonial.comment}"</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Before/After Images
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-2xl font-bold mb-8 text-center">Our Results Speak for Themselves</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {beforeAfterImages.map((item, index) => (
              <motion.div 
                key={index} 
                className="bg-white p-6 rounded-lg shadow-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
              >
                <h4 className="text-lg font-semibold mb-4 text-center">{item.title}</h4>
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-1 relative">
                    <div className="absolute top-2 left-2 bg-black bg-opacity-70 text-white text-xs py-1 px-2 rounded z-10">
                      BEFORE
                    </div>
                    <div className="relative h-48 w-full rounded overflow-hidden">
                      <Image 
                        src={item.before} 
                        alt="Before cleaning" 
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className="flex-1 relative">
                    <div className="absolute top-2 left-2 bg-primary-blue text-white text-xs py-1 px-2 rounded z-10">
                      AFTER
                    </div>
                    <div className="relative h-48 w-full rounded overflow-hidden">
                      <Image 
                        src={item.after} 
                        alt="After cleaning" 
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certifications */}
        {/*<motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3 className="text-xl font-bold mb-6">Our Certifications</h3>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {certifications.map((cert, index) => (
              <motion.div 
                key={index}
                className="relative w-32 h-32 grayscale hover:grayscale-0 transition duration-300"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 + 0.7 }}
                whileHover={{ scale: 1.05 }}
              >
                <Image 
                  src={cert.image} 
                  alt={cert.name} 
                  fill
                  sizes="(max-width: 640px) 96px, 128px"
                  className="object-contain"
                />
              </motion.div>
            ))}
          </div>
        </motion.div> */}
      </div>
    </section>
  );
} 