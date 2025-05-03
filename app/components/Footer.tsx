import Image from 'next/image'
import Link from 'next/link'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/logo.png"
                alt="Infinity Cleaning Logo"
                width={180}
                height={50}
                className="h-12 w-auto brightness-0 invert"
                priority
              />
            </Link>
            <p className="text-gray-400 mb-6">
              Professional cleaning and pest control services for residential and commercial properties.
              Your trusted partner in maintaining a clean and pest-free environment.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-primary-blue hover:bg-primary-red transition p-2 rounded-full">
                <FaFacebookF />
              </a>
              <a href="#" className="bg-primary-blue hover:bg-primary-red transition p-2 rounded-full">
                <FaTwitter />
              </a>
              <a href="#" className="bg-primary-blue hover:bg-primary-red transition p-2 rounded-full">
                <FaInstagram />
              </a>
              <a href="#" className="bg-primary-blue hover:bg-primary-red transition p-2 rounded-full">
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-white transition">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-gray-400 hover:text-white transition">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-gray-400 hover:text-white transition">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6">Information</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-white transition">
                  Blog & News
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-gray-400 hover:text-white transition">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-400 hover:text-white transition">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6">Get In Touch</h3>
            <ul className="space-y-3">
              <li className="text-gray-400">
                Doha, Qatar
              </li>
              <li>
                <a href="tel:+1234567890" className="text-gray-400 hover:text-white transition">
                  +974 5555 5555
                </a>
              </li>
              <li>
                <a href="mailto:info@infinitycleaning.com" className="text-gray-400 hover:text-white transition">
                  info@infinitycleaning.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} Infinity Cleaning and Pest Control Services. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
} 