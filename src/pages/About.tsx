import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Target } from 'lucide-react';
import { Eye } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="relative py-16 bg-gray-900 overflow-hidden" aria-label="About APEX Property Solutions">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 to-gray-900/90"></div>
          <div className="relative w-full h-full transform translate-y-0 transition-transform duration-1000 hover:translate-y-4">
            <img 
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
              alt="Modern Sydney Building"
              className="w-full h-full object-cover opacity-50"
            />
          </div>
        </div>

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-8">
          <div className="flex flex-col justify-center py-12">
            <div className="max-w-3xl">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-1 bg-white"></div>
                <p className="text-gray-300 uppercase tracking-wider text-sm font-medium">About Us</p>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
                APEX Property Solutions & Co
              </h1>
              
              <p className="text-lg md:text-xl text-gray-300 max-w-2xl">
                Your Trusted Partner in Full Property Maintenance Across NSW
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Our Story Section */}
      <section className="relative py-24 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#f8f8f8,transparent_70%)]"></div>
        <div className="absolute right-0 top-1/4 w-96 h-96 bg-gradient-to-br from-gray-100 to-white rounded-full blur-3xl opacity-70 -z-10"></div>
        <div className="absolute left-0 bottom-1/4 w-96 h-96 bg-gradient-to-tr from-gray-100 to-white rounded-full blur-3xl opacity-70 -z-10"></div>

        <div className="max-w-7xl mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image Column */}
            <div className="relative group">
              {/* Main Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80" 
                  alt="APEX Property Solutions Team" 
                  className="w-full h-[600px] object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gray-900/10 group-hover:bg-gray-900/0 transition-colors duration-700"></div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-gradient-to-br from-gray-100 to-white rounded-2xl -z-10"></div>
              <div className="absolute -top-6 -left-6 w-64 h-64 border border-gray-200 rounded-2xl -z-10"></div>
            </div>

            {/* Content Column */}
            <div className="relative">
              {/* Section Title */}
              <div className="mb-8">
                <div className="w-12 h-1 bg-gray-900 mb-4"></div>
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Story</h2>
              </div>

              {/* Story Content */}
              <div className="prose prose-lg text-gray-600 max-w-none">
                <p className="mb-6 text-xl leading-relaxed">
                  Founded with a passion for excellence and a commitment to family values, APEX Property Solutions & Co has grown into NSW's leading full property maintenance provider. Our story is built on trust, dedication, and a desire to treat every property as our own.
                </p>
                
                {/* Additional Story Details */}
                <div className="grid md:grid-cols-2 gap-8 mt-12">
                  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Our Heritage</h3>
                    <p className="text-gray-600">Built on generations of experience in property maintenance and a deep understanding of NSW's unique property landscape.</p>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Our Promise</h3>
                    <p className="text-gray-600">Committed to delivering excellence in every project, treating each property with the care and attention it deserves.</p>
                  </div>
                </div>

                {/* Decorative Quote */}
                <blockquote className="mt-12 border-l-4 border-gray-900 pl-6 italic text-gray-700">
                  "We believe in creating lasting relationships through exceptional service and unwavering dedication to quality."
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="relative py-24 bg-gray-50 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,#f8f8f8,transparent_70%)]"></div>
        <div className="absolute right-0 top-1/4 w-96 h-96 bg-gradient-to-br from-gray-100 to-white rounded-full blur-3xl opacity-70 -z-10"></div>
        <div className="absolute left-0 bottom-1/4 w-96 h-96 bg-gradient-to-tr from-gray-100 to-white rounded-full blur-3xl opacity-70 -z-10"></div>

        <div className="max-w-7xl mx-auto px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="w-12 h-1 bg-gray-900 mx-auto mb-4"></div>
            <h2 className="text-4xl font-bold text-gray-900">Our Mission & Vision</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Mission Column */}
            <div className="relative">
              <div className="bg-white rounded-2xl p-10 shadow-lg h-full">
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-gray-100 to-transparent -z-10"></div>
                <div className="absolute -top-4 -right-4 w-32 h-32 border border-gray-200 rounded-2xl -z-20"></div>
                
                <div className="relative">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                    <div className="w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Target className="w-5 h-5 text-white" />
                    </div>
                    Our Mission
                  </h3>
                  
                  <div className="prose prose-lg text-gray-600">
                    <p className="leading-relaxed">
                      Our mission is to deliver exceptional property care through family values and professional excellence. We treat every property as our own and every client as family, setting the standard for comprehensive maintenance solutions that build lasting relationships and enhance property value.
                    </p>
                    <p className="leading-relaxed mt-4">
                      Through The APEX Standard, we combine traditional family values with modern expertise to create a legacy of trust, quality, and superior service across NSW.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Vision Column */}
            <div className="relative">
              <div className="bg-white rounded-2xl p-10 shadow-lg h-full">
                {/* Decorative Elements */}
                <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-gray-100 to-transparent -z-10"></div>
                <div className="absolute -top-4 -left-4 w-32 h-32 border border-gray-200 rounded-2xl -z-20"></div>
                
                <div className="relative">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                    <div className="w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Eye className="w-5 h-5 text-white" />
                    </div>
                    Our Vision
                  </h3>
                  
                  <div className="prose prose-lg text-gray-600">
                    <blockquote className="border-l-4 border-gray-900 pl-6 mb-6 italic">
                      "To be NSW's most trusted family property solutions provider, setting The APEX Standard through comprehensive, innovative, and sustainable property care services that enhance the value and longevity of every property we touch, just as we would our own."
                    </blockquote>
                    
                    <p className="leading-relaxed">
                      Our vision is to be the leading family-owned property solutions provider in New South Wales, setting The APEX Standard through our comprehensive, innovative, and sustainable approach to property care.
                    </p>
                    <p className="leading-relaxed mt-4">
                      We aim to redefine industry excellence by treating every property as our own, combining traditional family values with modern expertise and technology. Our ultimate goal is to enhance the value and longevity of every property we serve, building lasting relationships that benefit our clients and strengthen our community.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="relative py-24 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#f8f8f8,transparent_70%)]"></div>
        <div className="absolute right-0 top-1/4 w-96 h-96 bg-gradient-to-br from-gray-100 to-white rounded-full blur-3xl opacity-70 -z-10"></div>
        <div className="absolute left-0 bottom-1/4 w-96 h-96 bg-gradient-to-tr from-gray-100 to-white rounded-full blur-3xl opacity-70 -z-10"></div>

        <div className="max-w-7xl mx-auto px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="w-12 h-1 bg-gray-900 mx-auto mb-4"></div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our dedicated team of professionals brings years of experience and a passion for excellence to every project.
            </p>
          </div>

          {/* Team Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Team Member 1 */}
            <div className="group">
              <div className="relative rounded-2xl overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2344&q=80" 
                  alt="John Mitchell" 
                  className="w-full aspect-[4/5] object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h3 className="text-2xl font-bold text-white mb-2">John Mitchell</h3>
                  <p className="text-gray-300 mb-4">Founder & CEO</p>
                  <p className="text-gray-400 line-clamp-3 group-hover:line-clamp-none transition-all duration-300">
                    With over 20 years of experience in property maintenance, John leads our team with a vision for excellence and innovation in every project we undertake.
                  </p>
                </div>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className="group">
              <div className="relative rounded-2xl overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2338&q=80" 
                  alt="Sarah Thompson" 
                  className="w-full aspect-[4/5] object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h3 className="text-2xl font-bold text-white mb-2">Sarah Thompson</h3>
                  <p className="text-gray-300 mb-4">Operations Director</p>
                  <p className="text-gray-400 line-clamp-3 group-hover:line-clamp-none transition-all duration-300">
                    Sarah ensures smooth operation of all our services, bringing her expertise in project management and client relations to deliver exceptional results.
                  </p>
                </div>
              </div>
            </div>

            {/* Team Member 3 */}
            <div className="group">
              <div className="relative rounded-2xl overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80" 
                  alt="Michael Chen" 
                  className="w-full aspect-[4/5] object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h3 className="text-2xl font-bold text-white mb-2">Michael Chen</h3>
                  <p className="text-gray-300 mb-4">Technical Director</p>
                  <p className="text-gray-400 line-clamp-3 group-hover:line-clamp-none transition-all duration-300">
                    Michael's innovative approach to property maintenance and deep technical knowledge helps us stay at the forefront of industry best practices.
                  </p>
                </div>
              </div>
            </div>

            {/* Team Member 4 */}
            <div className="group">
              <div className="relative rounded-2xl overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1361&q=80" 
                  alt="Emily Roberts" 
                  className="w-full aspect-[4/5] object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h3 className="text-2xl font-bold text-white mb-2">Emily Roberts</h3>
                  <p className="text-gray-300 mb-4">Client Relations Manager</p>
                  <p className="text-gray-400 line-clamp-3 group-hover:line-clamp-none transition-all duration-300">
                    Emily's dedication to client satisfaction ensures that every project meets and exceeds our clients' expectations.
                  </p>
                </div>
              </div>
            </div>

            {/* Team Member 5 */}
            <div className="group">
              <div className="relative rounded-2xl overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80" 
                  alt="David Wilson" 
                  className="w-full aspect-[4/5] object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h3 className="text-2xl font-bold text-white mb-2">David Wilson</h3>
                  <p className="text-gray-300 mb-4">Maintenance Supervisor</p>
                  <p className="text-gray-400 line-clamp-3 group-hover:line-clamp-none transition-all duration-300">
                    David's extensive experience in property maintenance ensures the highest quality standards in all our service deliveries.
                  </p>
                </div>
              </div>
            </div>

            {/* Team Member 6 */}
            <div className="group">
              <div className="relative rounded-2xl overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1590649880765-91b1956b8276?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80" 
                  alt="Jessica Lee" 
                  className="w-full aspect-[4/5] object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h3 className="text-2xl font-bold text-white mb-2">Jessica Lee</h3>
                  <p className="text-gray-300 mb-4">Sustainability Coordinator</p>
                  <p className="text-gray-400 line-clamp-3 group-hover:line-clamp-none transition-all duration-300">
                    Jessica leads our initiatives in sustainable property maintenance, ensuring we minimize environmental impact while maximizing property value.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quality & Commitment Section */}
      <section className="relative py-24 bg-gray-900 overflow-hidden" aria-label="Our Quality and Commitment">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#111827,transparent_70%)]"></div>
        <div className="absolute right-0 top-0 w-1/3 h-full bg-gradient-to-l from-gray-800 to-transparent"></div>
        
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>

        <div className="max-w-7xl mx-auto px-8 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content Column */}
            <div>
              {/* Section Title */}
              <div className="mb-12">
                <div className="w-12 h-1 bg-white mb-4"></div>
                <h2 className="text-4xl font-bold text-white mb-8">Quality and Commitment</h2>
                <p className="text-xl text-gray-300 leading-relaxed">
                  At APEX Property Solutions & Co, our commitment goes beyond maintenance. Every service is a promise of quality, attention to detail, and a dedication to treat your property as if it were our own.
                </p>
              </div>

              {/* Quality Indicators */}
              <div className="grid sm:grid-cols-2 gap-8">
                {/* Quality Card 1 */}
                <div className="group bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:translate-y-[-4px]" role="article">
                  <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-white/20 transition-colors duration-300">
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Certified Excellence</h3>
                  <p className="text-gray-400">Industry-leading standards and certifications ensure top-tier service delivery.</p>
                </div>

                {/* Quality Card 2 */}
                <div className="group bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:translate-y-[-4px]" role="article">
                  <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-white/20 transition-colors duration-300">
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Rapid Response</h3>
                  <p className="text-gray-400">24/7 emergency support and swift resolution for all maintenance needs.</p>
                </div>
              </div>
            </div>

            {/* Image Column */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80" 
                  alt="APEX Team at Work" 
                  className="w-full h-[700px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent"></div>
              </div>
              
              {/* Stats Overlay */}
              <div className="absolute bottom-8 left-8 right-8 bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20">
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <p className="text-4xl font-bold text-white mb-1">98%</p>
                    <p className="text-gray-300">Client Satisfaction</p>
                  </div>
                  <div>
                    <p className="text-4xl font-bold text-white mb-1">15+</p>
                    <p className="text-gray-300">Years Experience</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2301&q=80" 
            alt="Modern Property" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gray-900/80"></div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute inset-0">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent absolute top-0"></div>
          <div className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent absolute bottom-0"></div>
        </div>

        {/* Content */}
        <div className="max-w-7xl mx-auto px-8 relative">
          <div className="text-center max-w-3xl mx-auto">
            {/* Main Content */}
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Ready to Experience The APEX Difference?
            </h2>
            <p className="text-xl text-gray-300 mb-12 leading-relaxed">
              Learn more about our journey and how we can help enhance your property's value.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 group"
              >
                Get in Touch
                <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center justify-center gap-2 bg-transparent text-white px-8 py-4 rounded-lg font-semibold border border-white/20 hover:bg-white/10 transition-colors duration-300"
              >
                View Our Services
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="flex flex-col items-center transform transition-all duration-700 hover:scale-110">
                <p className="text-3xl font-bold text-white mb-1 animate-fade-in" role="text" aria-label="Over 500 Projects Completed">500+</p>
                <p className="text-gray-400 text-sm">Projects Completed</p>
              </div>
              <div className="flex flex-col items-center transform transition-all duration-700 hover:scale-110">
                <p className="text-3xl font-bold text-white mb-1 animate-fade-in" role="text" aria-label="98 Percent Client Satisfaction">98%</p>
                <p className="text-gray-400 text-sm">Client Satisfaction</p>
              </div>
              <div className="flex flex-col items-center transform transition-all duration-700 hover:scale-110">
                <p className="text-3xl font-bold text-white mb-1 animate-fade-in" role="text" aria-label="Over 15 Years Experience">15+</p>
                <p className="text-gray-400 text-sm">Years Experience</p>
              </div>
              <div className="flex flex-col items-center transform transition-all duration-700 hover:scale-110">
                <p className="text-3xl font-bold text-white mb-1 animate-fade-in" role="text" aria-label="24/7 Support Available">24/7</p>
                <p className="text-gray-400 text-sm">Support Available</p>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Decorative Elements */}
        <div className="absolute left-0 bottom-0 w-64 h-64 bg-gradient-to-r from-white/5 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute right-0 top-0 w-64 h-64 bg-gradient-to-l from-white/5 to-transparent rounded-full blur-3xl"></div>
      </section>
    </div>
  );
};

export default About;
