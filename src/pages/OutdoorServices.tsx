import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Timer, Leaf, Building2, Users2, Home, ClipboardCheck, FileEdit, Users, BadgeCheck } from 'lucide-react';

const OutdoorServices: React.FC = () => {
  const processSteps = [
    { title: 'Assessment', description: 'We evaluate your property\'s outdoor needs.' },
    { title: 'Customized Plan', description: 'Tailor a maintenance plan that fits your schedule and budget.' },
    { title: 'Professional Service', description: 'Our expert team delivers top-quality outdoor care.' },
    { title: 'Quality Check', description: 'We ensure every detail is attended to for lasting beauty.' },
  ];

  const residentialServices = [
    'Lawn Mowing & Maintenance',
    'Garden Maintenance',
    'Hedge Trimming',
    'Landscaping & Edging',
    'Seasonal Clean-Ups',
  ];

  const commercialServices = [
    'Large-Scale Lawn & Grounds Maintenance',
    'Landscaping & Hardscape Cleaning',
    'Commercial Property Clean-Ups',
    'Custom Outdoor Maintenance Programs',
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Parallax Effect */}
        <div className="absolute inset-0 transform scale-105 group-hover:scale-100 transition-transform duration-500">
          <img
            src="https://images.unsplash.com/photo-1558904541-efa843a96f01?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80"
            alt="Well-maintained outdoor property"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/60"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
          {/* Decorative Element */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-12 h-1 bg-green-500"></div>
            <span className="text-green-400 uppercase tracking-wider text-sm font-medium">Professional & Reliable</span>
            <div className="w-12 h-1 bg-green-500"></div>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Outdoor Care Services
          </h1>
          
          <p className="text-xl md:text-2xl mb-12 text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Comprehensive Outdoor Care Solutions for Residential and Commercial Properties
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link
              to="/assessment"
              className="inline-flex items-center justify-center px-8 py-4 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl min-w-[250px] group"
            >
              Schedule Your Free Assessment
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            <Link
              to="#services"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300 group min-w-[250px]"
            >
              Learn More
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
            <span className="text-sm text-gray-300 mb-2">Scroll to explore</span>
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>

        {/* Overlay Pattern */}
        <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10"></div>
      </section>

      {/* Introduction Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute right-0 top-0 w-1/2 h-full bg-green-50/50 -skew-x-12 transform origin-top"></div>
        <div className="max-w-7xl mx-auto px-4 relative">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute -left-4 -top-4 w-24 h-24 bg-green-100 rounded-full opacity-50"></div>
              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Transform Your Outdoor Spaces
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  Our outdoor care services are designed to enhance your property's curb appeal and maintain pristine grounds. 
                  We treat every outdoor space as if it were our own, ensuring a healthy, vibrant environment for your home or business.
                </p>
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 bg-green-600 rounded-lg flex items-center justify-center">
                    <Leaf className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Professional Care</p>
                    <p className="text-gray-600">Expert outdoor maintenance services</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80" 
                alt="Beautiful landscaped garden" 
                className="rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-green-100 rounded-full opacity-50 -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          {/* Residential Services */}
          <div className="grid lg:grid-cols-2 gap-12 mb-24">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1558904541-efa843a96f01?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80" 
                alt="Residential outdoor care" 
                className="rounded-2xl shadow-xl h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-2xl"></div>
              <div className="absolute bottom-8 left-8 text-white">
                <Home className="w-12 h-12 mb-4" />
                <p className="text-sm uppercase tracking-wider">Residential Care</p>
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Residential Outdoor Care
              </h3>
              <p className="text-lg text-gray-600 mb-8">
                Tailored solutions to keep your home's outdoor areas in impeccable condition.
              </p>
              <ul className="space-y-4 mb-8">
                {residentialServices.map((service, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{service}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/residential-outdoor"
                className="inline-flex items-center gap-2 text-green-600 font-semibold hover:text-green-700 transition-colors duration-300 group"
              >
                Learn More
                <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </div>

          {/* Commercial Services */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col justify-center order-2 lg:order-1">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Commercial Outdoor Care
              </h3>
              <p className="text-lg text-gray-600 mb-8">
                Expert outdoor care services designed for the unique demands of commercial properties.
              </p>
              <ul className="space-y-4 mb-8">
                {commercialServices.map((service, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{service}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/commercial-outdoor"
                className="inline-flex items-center gap-2 text-green-600 font-semibold hover:text-green-700 transition-colors duration-300 group"
              >
                Learn More
                <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
            <div className="relative order-1 lg:order-2">
              <img 
                src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80" 
                alt="Commercial outdoor care" 
                className="rounded-2xl shadow-xl h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-2xl"></div>
              <div className="absolute bottom-8 left-8 text-white">
                <Building2 className="w-12 h-12 mb-4" />
                <p className="text-sm uppercase tracking-wider">Commercial Care</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-72 h-72 bg-green-50 rounded-full blur-3xl"></div>
        <div className="absolute right-0 top-1/4 w-96 h-96 bg-green-50 rounded-full blur-3xl"></div>
        <div className="max-w-7xl mx-auto px-4 relative">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Outdoor Care Process
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We follow a systematic approach to ensure your outdoor spaces receive the highest quality care and attention.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Assessment Step */}
            <div className="relative p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <ClipboardCheck className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Assessment</h3>
              <p className="text-gray-600">We evaluate your property's outdoor needs.</p>
              <div className="absolute top-0 right-0 w-24 h-24 bg-green-50 rounded-bl-full -z-10"></div>
            </div>

            {/* Customized Plan Step */}
            <div className="relative p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <FileEdit className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Customized Plan</h3>
              <p className="text-gray-600">Tailor a maintenance plan that fits your schedule and budget.</p>
              <div className="absolute top-0 right-0 w-24 h-24 bg-green-50 rounded-bl-full -z-10"></div>
            </div>

            {/* Professional Service Step */}
            <div className="relative p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Professional Service</h3>
              <p className="text-gray-600">Our expert team delivers top-quality outdoor care.</p>
              <div className="absolute top-0 right-0 w-24 h-24 bg-green-50 rounded-bl-full -z-10"></div>
            </div>

            {/* Quality Check Step */}
            <div className="relative p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <BadgeCheck className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Quality Check</h3>
              <p className="text-gray-600">We ensure every detail is attended to for lasting beauty.</p>
              <div className="absolute top-0 right-0 w-24 h-24 bg-green-50 rounded-bl-full -z-10"></div>
            </div>
          </div>

          {/* Process Timeline */}
          <div className="hidden lg:block h-1 bg-green-100 absolute top-1/2 left-1/4 right-1/4 -translate-y-1/2 -z-10">
            <div className="h-full w-3/4 bg-green-500"></div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1558904541-efa843a96f01?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
            alt="Beautiful landscaped garden" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gray-900/70"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-8">
          <div className="max-w-3xl">
            <h2 className="text-4xl font-bold text-white mb-6">
              Transform Your Outdoor Space with APEX
            </h2>
            <p className="text-xl text-gray-200 mb-8">
              From lawn care to complete landscape transformations, we'll help you create the outdoor space you've always wanted.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold flex items-center gap-2"
              >
                Get Started
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/services"
                className="border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-lg font-semibold"
              >
                View Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OutdoorServices;
