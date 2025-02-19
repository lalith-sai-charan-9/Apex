import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const CleaningServices = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="relative py-20 bg-gray-900 overflow-hidden" aria-label="Cleaning Services Header">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 to-gray-900/90"></div>
          <div className="relative w-full h-full transform translate-y-0 transition-transform duration-1000 hover:translate-y-4">
            <img 
              src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80" 
              alt="Professional Cleaning Service"
              className="w-full h-full object-cover opacity-50"
            />
          </div>
        </div>

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-8">
          <div className="flex flex-col justify-center py-20">
            <div className="max-w-3xl">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-1 bg-white"></div>
                <p className="text-gray-300 uppercase tracking-wider text-sm font-medium">Professional Services</p>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Cleaning Services
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mb-8">
                Exceptional Cleaning Solutions for Residential and Commercial Properties
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 group"
                >
                  Schedule Your Cleaning Service
                  <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
                <Link
                  to="#services"
                  className="inline-flex items-center justify-center gap-2 bg-transparent text-white px-8 py-4 rounded-lg font-semibold border border-white/20 hover:bg-white/10 transition-colors duration-300"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Introduction Section */}
      <section className="relative py-20 overflow-hidden bg-white" aria-label="Introduction">
        <div className="absolute right-0 top-1/4 w-96 h-96 bg-gray-50 rounded-full blur-3xl opacity-50 -z-10"></div>
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Content */}
            <div className="flex-1">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-1 bg-gray-900"></div>
                <p className="text-gray-600 uppercase tracking-wider text-sm font-medium">Our Services</p>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                Professional Cleaning Services Tailored to Your Needs
              </h2>
              
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                At APEX Property Solutions & Co, our cleaning services are designed to provide a spotless environment with minimal disruption. Our expert teams use state-of-the-art equipment and techniques to ensure every corner is pristine.
              </p>
            </div>

            {/* Visual Element */}
            <div className="lg:w-1/3 relative">
              <div className="relative aspect-square rounded-2xl overflow-hidden bg-gray-100 shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900/5 to-gray-900/30"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg className="w-32 h-32 text-gray-900/80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714a2.25 2.25 0 001.241 2.013L16.5 14.5m-7.5 0h7.5m-7.5 0c-.287.0-.574.015-.857.043a2.25 2.25 0 00-1.851 1.89L5.14 19.904m11.72 0a2.25 2.25 0 001.851-1.89c.283-.028.57-.043.857-.043h0A2.25 2.25 0 0021 16.5v-7.5a2.25 2.25 0 00-1.241-2.013L18.5 5.809V5a2.25 2.25 0 00-2.25-2.25h-8.5A2.25 2.25 0 005.5 5v.809L4.241 6.982A2.25 2.25 0 003 9.5v7.5a2.25 2.25 0 001.241 2.013L5.5 19.5v.25a2.25 2.25 0 002.25 2.25h8.5a2.25 2.25 0 002.25-2.25v-.25l1.259-.687A2.25 2.25 0 0021 16.5v0z" />
                  </svg>
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gray-100 rounded-xl -z-10"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 border border-gray-200 rounded-xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Residential Cleaning Section */}
      <section className="relative py-20 bg-gray-50" aria-label="Residential Cleaning">
        <div className="absolute left-0 top-1/4 w-96 h-96 bg-white rounded-full blur-3xl opacity-50 -z-10"></div>
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image Column */}
            <div className="relative group">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80" 
                  alt="Residential Cleaning" 
                  className="w-full aspect-[4/3] object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gray-900/10 group-hover:bg-gray-900/0 transition-colors duration-700"></div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-gradient-to-br from-gray-100 to-white rounded-2xl -z-10"></div>
              <div className="absolute -top-6 -left-6 w-64 h-64 border border-gray-200 rounded-2xl -z-10"></div>
            </div>

            {/* Content Column */}
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-1 bg-gray-900"></div>
                <p className="text-gray-600 uppercase tracking-wider text-sm font-medium">For Your Home</p>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Residential Cleaning
              </h2>

              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Our residential cleaning services ensure your home is maintained to the highest standard. From regular upkeep to deep cleaning, we tailor our solutions to meet your unique needs.
              </p>

              {/* Services List */}
              <div className="space-y-4 mb-8">
                {[
                  'End of Lease Cleaning',
                  'Regular Home Cleaning',
                  'Deep Cleaning',
                  'Carpet & Upholstery Cleaning',
                  'Window Cleaning'
                ].map((service, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-gray-900/5 flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700">{service}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <Link
                to="/residential-cleaning"
                className="inline-flex items-center justify-center gap-2 bg-gray-900 text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-300 group"
              >
                Learn More
                <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Commercial Cleaning Section */}
      <section className="relative py-20 bg-white" aria-label="Commercial Cleaning">
        <div className="absolute right-0 top-1/4 w-96 h-96 bg-gray-50 rounded-full blur-3xl opacity-50 -z-10"></div>
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content Column */}
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-1 bg-gray-900"></div>
                <p className="text-gray-600 uppercase tracking-wider text-sm font-medium">For Your Business</p>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Commercial Cleaning
              </h2>

              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Our commercial cleaning services cater to businesses that demand the highest standards of cleanliness and efficiency. Whether it's an office, retail space, or industrial facility, we ensure your environment remains welcoming and hygienic.
              </p>

              {/* Services List */}
              <div className="space-y-4 mb-8">
                {[
                  'Office Cleaning',
                  'Commercial Space Cleaning',
                  'Window & Glass Cleaning',
                  'Carpet Cleaning',
                  'Floor Maintenance'
                ].map((service, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-gray-900/5 flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700">{service}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <Link
                to="/commercial-cleaning"
                className="inline-flex items-center justify-center gap-2 bg-gray-900 text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-300 group"
              >
                Learn More
                <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>

            {/* Image Column */}
            <div className="relative group">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80" 
                  alt="Commercial Cleaning" 
                  className="w-full aspect-[4/3] object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gray-900/10 group-hover:bg-gray-900/0 transition-colors duration-700"></div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-gradient-to-br from-gray-100 to-white rounded-2xl -z-10"></div>
              <div className="absolute -top-6 -left-6 w-64 h-64 border border-gray-200 rounded-2xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Assurance Section */}
      <section className="relative py-20 bg-gray-900 text-white overflow-hidden" aria-label="Quality Assurance">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-12 h-1 bg-white"></div>
              <p className="text-gray-300 uppercase tracking-wider text-sm font-medium">Quality Standards</p>
              <div className="w-12 h-1 bg-white"></div>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our Quality Promise
            </h2>
            
            <p className="text-lg text-gray-300 leading-relaxed">
              We pride ourselves on our attention to detail and commitment to excellence. Our cleaning teams adhere to strict quality control protocols to ensure your space is always immaculate.
            </p>
          </div>

          {/* Quality Standards Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Standard 1 */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-white/20 transition-colors duration-300">
              <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Certified Teams</h3>
              <p className="text-gray-300">Our cleaning professionals undergo rigorous training and certification to maintain the highest standards.</p>
            </div>

            {/* Standard 2 */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-white/20 transition-colors duration-300">
              <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Quality Products</h3>
              <p className="text-gray-300">We use eco-friendly, professional-grade cleaning products that are safe and effective.</p>
            </div>

            {/* Standard 3 */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-white/20 transition-colors duration-300">
              <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Regular Inspections</h3>
              <p className="text-gray-300">We conduct thorough quality checks to ensure consistent excellence in our service delivery.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="relative py-20 bg-white overflow-hidden" aria-label="Our Cleaning Process">
        <div className="absolute left-0 top-1/4 w-96 h-96 bg-gray-50 rounded-full blur-3xl opacity-50 -z-10"></div>
        <div className="max-w-7xl mx-auto px-8">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-12 h-1 bg-gray-900"></div>
              <p className="text-gray-600 uppercase tracking-wider text-sm font-medium">How We Work</p>
              <div className="w-12 h-1 bg-gray-900"></div>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Cleaning Process
            </h2>
          </div>

          {/* Process Timeline */}
          <div className="relative">
            {/* Connecting Line */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 transform -translate-y-1/2 hidden lg:block"></div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Step 1 */}
              <div className="relative group">
                <div className="relative z-10 bg-white p-8 rounded-xl border border-gray-200 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <div className="w-16 h-16 bg-gray-900 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Schedule Your Service</h3>
                  <p className="text-gray-600">Contact us to book your cleaning service at your convenience.</p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="relative group">
                <div className="relative z-10 bg-white p-8 rounded-xl border border-gray-200 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <div className="w-16 h-16 bg-gray-900 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Customized Cleaning Plan</h3>
                  <p className="text-gray-600">We design a plan tailored to your property's specific needs.</p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="relative group">
                <div className="relative z-10 bg-white p-8 rounded-xl border border-gray-200 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <div className="w-16 h-16 bg-gray-900 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Professional Service Delivery</h3>
                  <p className="text-gray-600">Our expert team provides top-notch cleaning, ensuring every detail is covered.</p>
                </div>
              </div>

              {/* Step 4 */}
              <div className="relative group">
                <div className="relative z-10 bg-white p-8 rounded-xl border border-gray-200 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <div className="w-16 h-16 bg-gray-900 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Quality Check & Follow-Up</h3>
                  <p className="text-gray-600">We perform regular quality checks and follow up to guarantee your satisfaction.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="relative py-24">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
            alt="Clean modern interior" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gray-900/70"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-8">
          <div className="max-w-3xl">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Experience the APEX Standard in Cleaning?
            </h2>
            <p className="text-xl text-gray-200 mb-8">
              Let us show you what professional cleaning truly means. Book your service today and see the difference.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold flex items-center gap-2">
                Book Now
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-lg font-semibold">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Rest of the content will go here */}
    </div>
  );
};

export default CleaningServices;
