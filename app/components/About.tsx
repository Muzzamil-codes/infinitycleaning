"use client";

import Image from 'next/image'
import { FaCheck, FaHeadset } from 'react-icons/fa'
import { useState } from 'react'

// Low quality image placeholders
const blurDataURLs = {
  image1: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAGAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAhEAACAQIGAwAAAAAAAAAAAAABAgADBAURITEyEhNR8P/EABUBAQEAAAAAAAAAAAAAAAAAAAIB/8QAFhEBAQEAAAAAAAAAAAAAAAAAAQAR/9oADAMBAAIRAxEAPwCdwDDrZoe5VZM1qZdWXrXx+RiImki//9k=',
  image2: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAGAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAhEAACAQIGAwAAAAAAAAAAAAABAgADBAURITEyEhNR8P/EABUBAQEAAAAAAAAAAAAAAAAAAAIB/8QAFhEBAQEAAAAAAAAAAAAAAAAAAQAR/9oADAMBAAIRAxEAPwCdwDDrZoe5VZM1qZdWXrXx+RiImki//9k=',
  image3: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAGAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAhEAACAQIGAwAAAAAAAAAAAAABAgADBAURITEyEhNR8P/EABUBAQEAAAAAAAAAAAAAAAAAAAIB/8QAFhEBAQEAAAAAAAAAAAAAAAAAAQAR/9oADAMBAAIRAxEAPwCdwDDrZoe5VZM1qZdWXrXx+RiImki//9k='
};

export default function About() {
  const [isLoading, setIsLoading] = useState({
    image1: true,
    image2: true,
    image3: true
  });
  
  const handleImageLoad = (imageName: 'image1' | 'image2' | 'image3') => {
    setIsLoading(prev => ({
      ...prev,
      [imageName]: false
    }));
    console.log(`${imageName} loaded`);
  };
  
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 grid grid-cols-2 gap-4">
            <div className="relative h-[200px] overflow-hidden rounded-lg bg-gray-200">
              <Image
                src="/about-1.jpg"
                alt="Cleaning Service"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                className="object-cover rounded-lg"
                priority
                placeholder="blur"
                blurDataURL={blurDataURLs.image1}
                onLoad={() => handleImageLoad('image1')}
              />
            </div>
            <div className="relative h-[200px] mt-8 overflow-hidden rounded-lg bg-gray-200">
              <Image
                src="/about-2.jpg"
                alt="Pest Control Service"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                className="object-cover rounded-lg"
                placeholder="blur"
                blurDataURL={blurDataURLs.image2}
                onLoad={() => handleImageLoad('image2')}
              />
            </div>
            <div className="relative h-[200px] -mt-8 overflow-hidden rounded-lg bg-gray-200">
              <Image
                src="/about-3.jpg"
                alt="Commercial Cleaning"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                className="object-cover rounded-lg"
                placeholder="blur"
                blurDataURL={blurDataURLs.image3}
                onLoad={() => handleImageLoad('image3')}
              />
            </div>
            <div className="relative h-[200px]">
              <div className="absolute inset-0 bg-primary-blue rounded-lg flex items-center justify-center text-white text-4xl font-bold">
                25+
                <span className="text-lg ml-2">Years<br/>Experience</span>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold mb-6">
              About Us
            </h2>
            <h3 className="text-2xl font-semibold mb-4 text-primary-blue">
              Pest Control And Cleaning Services
            </h3>
            <p className="text-gray-600 mb-6">
              We are a pest control and cleaning service provider you can
              rely on. We take pride in our consistent and thorough service
              that has earned us the trust of countless satisfied customers.
            </p>
            <p className="text-gray-600 mb-8">
              We offer a professional deep cleaning service specializing in cleaning floors,
              carpets, upholstery, and providing specialized commercial and industrial cleaning
              services.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div className="flex items-center gap-2">
                <FaCheck className="text-primary-red" />
                <span>24/7 Online Support</span>
              </div>
              <div className="flex items-center gap-2">
                <FaCheck className="text-primary-red" />
                <span>Experienced Staff</span>
              </div>
              <div className="flex items-center gap-2">
                <FaCheck className="text-primary-red" />
                <span>Guaranteed Service</span>
              </div>
              <div className="flex items-center gap-2">
                <FaCheck className="text-primary-red" />
                <span>Customer Satisfaction</span>
              </div>
            </div>

            <div className="bg-gray-100 p-4 rounded-lg flex items-center gap-4">
              <div className="bg-primary-blue rounded-full p-3">
                <FaHeadset className="text-white text-2xl" />
              </div>
              <div>
                <p className="text-sm text-gray-600">For More Information</p>
                <a href="tel:+1234567890" className="text-xl font-bold text-primary-red">
                  +1 (234) 567-890
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 