import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'

export default function Contact() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Make An Appointment</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Schedule your service appointment today and experience our professional cleaning and pest control services.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <input
                    type="text"
                    placeholder="First Name"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-blue focus:ring-2 focus:ring-primary-blue focus:ring-opacity-20 outline-none transition"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-blue focus:ring-2 focus:ring-primary-blue focus:ring-opacity-20 outline-none transition"
                  />
                </div>
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-blue focus:ring-2 focus:ring-primary-blue focus:ring-opacity-20 outline-none transition"
                />
              </div>
              <div>
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-blue focus:ring-2 focus:ring-primary-blue focus:ring-opacity-20 outline-none transition"
                />
              </div>
              <div>
                <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-blue focus:ring-2 focus:ring-primary-blue focus:ring-opacity-20 outline-none transition">
                  <option value="">Select Service</option>
                  <option value="pest-control">Pest Control</option>
                  <option value="cleaning">Cleaning Services</option>
                  <option value="fumigation">Fumigation</option>
                  <option value="landscaping">Landscaping</option>
                </select>
              </div>
              <div>
                <textarea
                  placeholder="Additional Message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-blue focus:ring-2 focus:ring-primary-blue focus:ring-opacity-20 outline-none transition"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-primary-red text-white py-3 px-6 rounded-lg hover:bg-opacity-90 transition"
              >
                Submit Request
              </button>
            </form>
          </div>

          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="bg-primary-blue bg-opacity-10 p-3 rounded-lg">
                <FaPhone className="text-primary-blue text-xl" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">Phone Number</h3>
                <p className="text-gray-600">+1 (234) 567-890</p>
                <p className="text-gray-600">+1 (234) 567-891</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-primary-blue bg-opacity-10 p-3 rounded-lg">
                <FaEnvelope className="text-primary-blue text-xl" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">Email Address</h3>
                <p className="text-gray-600">info@infinitycleaning.com</p>
                <p className="text-gray-600">support@infinitycleaning.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-primary-blue bg-opacity-10 p-3 rounded-lg">
                <FaMapMarkerAlt className="text-primary-blue text-xl" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">Office Location</h3>
                <p className="text-gray-600">
                  123 Business Street, Suite 100<br />
                  New York, NY 10001
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 