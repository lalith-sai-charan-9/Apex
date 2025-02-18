import React, { useState } from 'react';
import { 
  Menu, 
  X, 
  Star, 
  ArrowRight, 
  ChevronDown, 
  Home, 
  Check, 
  Shield, 
  Clock, 
  Heart, 
  MessageSquare, 
  Building2, 
  Trees, 
  Factory, 
  MapPin, 
  Users2, 
  LayoutGrid, 
  CheckCircle, 
  ClipboardCheck, 
  Quote, 
  Settings2, 
  HeartHandshake, 
  Phone, 
  Mail, 
  Facebook, 
  Instagram, 
  Linkedin 
} from 'lucide-react';

function App() {
  // State for dropdowns and mobile menu
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cleaningDropdown, setCleaningDropdown] = useState(false);
  const [outdoorDropdown, setOutdoorDropdown] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Sticky Header */}
      <header className="fixed top-0 left-0 right-0 bg-white z-50 border-b border-gray-100">
        <nav className="max-w-7xl mx-auto px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a href="/" className="flex-shrink-0">
              <img 
                src="/logo.png" 
                alt="APEX Property Solutions" 
                className="h-12 w-auto"
              />
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex lg:items-center lg:gap-8">
              <a href="/" className="text-gray-700 hover:text-gray-900 font-medium">
                Home
              </a>
              <a href="/about" className="text-gray-700 hover:text-gray-900 font-medium">
                About Us
              </a>
              
              {/* Cleaning Services Dropdown */}
              <div className="relative">
                <button
                  className="flex items-center gap-1 text-gray-700 hover:text-gray-900 font-medium"
                  onMouseEnter={() => setCleaningDropdown(true)}
                  onMouseLeave={() => setCleaningDropdown(false)}
                >
                  Cleaning Services
                  <ChevronDown className="w-4 h-4" />
                </button>
                {cleaningDropdown && (
                  <div 
                    className="absolute top-full left-0 w-64 py-2 bg-white rounded-lg shadow-lg border border-gray-100 mt-1"
                    onMouseEnter={() => setCleaningDropdown(true)}
                    onMouseLeave={() => setCleaningDropdown(false)}
                  >
                    <a 
                      href="/residential-cleaning" 
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-50"
                    >
                      Residential Cleaning
                    </a>
                    <a 
                      href="/commercial-cleaning" 
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-50"
                    >
                      Commercial Cleaning
                    </a>
                  </div>
                )}
              </div>

              {/* Outdoor Care Services Dropdown */}
              <div className="relative">
                <button
                  className="flex items-center gap-1 text-gray-700 hover:text-gray-900 font-medium"
                  onMouseEnter={() => setOutdoorDropdown(true)}
                  onMouseLeave={() => setOutdoorDropdown(false)}
                >
                  Outdoor Care Services
                  <ChevronDown className="w-4 h-4" />
                </button>
                {outdoorDropdown && (
                  <div 
                    className="absolute top-full left-0 w-64 py-2 bg-white rounded-lg shadow-lg border border-gray-100 mt-1"
                    onMouseEnter={() => setOutdoorDropdown(true)}
                    onMouseLeave={() => setOutdoorDropdown(false)}
                  >
                    <a 
                      href="/residential-outdoor" 
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-50"
                    >
                      Residential Outdoor Care
                    </a>
                    <a 
                      href="/commercial-outdoor" 
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-50"
                    >
                      Commercial Outdoor Care
                    </a>
                  </div>
                )}
              </div>

              <a href="/contact" className="text-gray-700 hover:text-gray-900 font-medium">
                Contact Us
              </a>

              {/* CTA Button */}
              <a 
                href="/quote" 
                className="inline-flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-all"
              >
                Get a Free Quote
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden inline-flex items-center justify-center p-2 rounded-lg text-gray-700 hover:text-gray-900 hover:bg-gray-100"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="lg:hidden py-4 border-t border-gray-100">
              <div className="flex flex-col gap-4">
                <a href="/" className="text-gray-700 hover:text-gray-900 font-medium">
                  Home
                </a>
                <a href="/about" className="text-gray-700 hover:text-gray-900 font-medium">
                  About Us
                </a>
                
                {/* Mobile Cleaning Services */}
                <div>
                  <button
                    className="flex items-center gap-1 text-gray-700 hover:text-gray-900 font-medium"
                    onClick={() => setCleaningDropdown(!cleaningDropdown)}
                  >
                    Cleaning Services
                    <ChevronDown className={`w-4 h-4 transform transition-transform ${cleaningDropdown ? 'rotate-180' : ''}`} />
                  </button>
                  {cleaningDropdown && (
                    <div className="ml-4 mt-2 flex flex-col gap-2">
                      <a href="/residential-cleaning" className="text-gray-600 hover:text-gray-900">
                        Residential Cleaning
                      </a>
                      <a href="/commercial-cleaning" className="text-gray-600 hover:text-gray-900">
                        Commercial Cleaning
                      </a>
                    </div>
                  )}
                </div>

                {/* Mobile Outdoor Services */}
                <div>
                  <button
                    className="flex items-center gap-1 text-gray-700 hover:text-gray-900 font-medium"
                    onClick={() => setOutdoorDropdown(!outdoorDropdown)}
                  >
                    Outdoor Care Services
                    <ChevronDown className={`w-4 h-4 transform transition-transform ${outdoorDropdown ? 'rotate-180' : ''}`} />
                  </button>
                  {outdoorDropdown && (
                    <div className="ml-4 mt-2 flex flex-col gap-2">
                      <a href="/residential-outdoor" className="text-gray-600 hover:text-gray-900">
                        Residential Outdoor Care
                      </a>
                      <a href="/commercial-outdoor" className="text-gray-600 hover:text-gray-900">
                        Commercial Outdoor Care
                      </a>
                    </div>
                  )}
                </div>

                <a href="/contact" className="text-gray-700 hover:text-gray-900 font-medium">
                  Contact Us
                </a>

                {/* Mobile CTA */}
                <a 
                  href="/quote" 
                  className="inline-flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-all"
                >
                  Get a Free Quote
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          )}
        </nav>
      </header>

      <div className="h-20"></div>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] w-full overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
            alt="Luxury Property" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 via-gray-900/70 to-transparent"></div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute inset-0">
          <div className="absolute left-0 top-1/4 w-1/3 h-48 bg-gradient-to-r from-white/10 to-transparent blur-3xl"></div>
          <div className="absolute right-0 bottom-1/4 w-1/3 h-48 bg-gradient-to-l from-white/10 to-transparent blur-3xl"></div>
        </div>

        {/* Content */}
        <div className="relative h-full">
          <div className="max-w-7xl mx-auto px-8 h-full">
            <div className="h-full flex items-center">
              <div className="w-full max-w-4xl">
                {/* Accent Line */}
                <div className="w-24 h-1 bg-white mb-8 rounded-full"></div>

                {/* Main Content */}
                <div className="grid lg:grid-cols-[1fr,100px,1fr] items-start gap-6">
                  <div>
                    <h1 className="text-7xl font-bold text-white leading-tight">
                      The APEX Standard
                    </h1>
                  </div>

                  {/* Vertical Line */}
                  <div className="hidden lg:flex flex-col items-center gap-4">
                    <div className="w-px h-20 bg-gradient-to-b from-transparent via-white to-transparent"></div>
                  </div>

                  <div className="lg:pt-16">
                    <h2 className="text-4xl font-bold text-white leading-tight mb-4">
                      A Family Commitment to Excellence
                    </h2>
                    <p className="text-xl text-gray-300 leading-relaxed">
                      NSW's Leading Full Property Maintenance Experts, delivering comprehensive solutions with unmatched quality and care.
                    </p>
                  </div>
                </div>

                {/* CTAs */}
                <div className="mt-8 flex flex-wrap gap-6 items-center">
                  <a 
                    href="/assessment" 
                    className="group relative inline-flex items-center gap-2 bg-white text-gray-900 px-8 py-4 rounded-lg font-medium overflow-hidden transition-all hover:pr-12"
                  >
                    <span className="relative z-10">Book Assessment</span>
                    <ArrowRight className="w-5 h-5 absolute right-4 opacity-0 group-hover:opacity-100 transition-all transform translate-x-[-20px] group-hover:translate-x-0" />
                  </a>
                  <a 
                    href="/services" 
                    className="group inline-flex items-center gap-2 text-white font-medium transition-all"
                  >
                    <span className="border-b border-transparent group-hover:border-white pb-1">
                      View Services
                    </span>
                    <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>

                {/* Stats */}
                <div className="mt-16 grid grid-cols-3 gap-12 border-t border-white/10 pt-12">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white mb-2">15+</div>
                    <div className="text-sm text-gray-400 uppercase tracking-wider">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white mb-2">2,500+</div>
                    <div className="text-sm text-gray-400 uppercase tracking-wider">Properties Maintained</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white mb-2">98%</div>
                    <div className="text-sm text-gray-400 uppercase tracking-wider">Client Satisfaction</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2">
          <div className="text-sm text-white/60 uppercase tracking-wider">Scroll</div>
          <div className="w-px h-8 bg-gradient-to-b from-white/60 to-transparent"></div>
        </div>
      </section>

      {/* About Section - The APEX Standard */}
      <section className="relative py-24 bg-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,#f8f8f8,transparent_70%)]"></div>
        
        <div className="max-w-7xl mx-auto px-8 relative">
          {/* Section Header */}
          <div className="max-w-3xl mx-auto text-center mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              What is The APEX Standard?
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Built on core family values, we treat every property as our own and every client as part of the APEX family. 
              Our commitment is to deliver property care with personal attention, trust, and exceptional quality across NSW.
            </p>
          </div>

          {/* Four Pillars Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Family Values */}
            <div className="group relative bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-all">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white rounded-2xl -z-10"></div>
              <div className="mb-6 inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gray-900 text-white">
                <Heart className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Family Values
              </h3>
              <p className="text-gray-600">
                Personalized care & lasting relationships
              </p>
              <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-gray-900 to-gray-700 rounded-b-2xl transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform"></div>
            </div>

            {/* Professional Care */}
            <div className="group relative bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-all">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white rounded-2xl -z-10"></div>
              <div className="mb-6 inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gray-900 text-white">
                <Shield className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Professional Care
              </h3>
              <p className="text-gray-600">
                Expert service with consistent quality
              </p>
              <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-gray-900 to-gray-700 rounded-b-2xl transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform"></div>
            </div>

            {/* Personal Touch */}
            <div className="group relative bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-all">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white rounded-2xl -z-10"></div>
              <div className="mb-6 inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gray-900 text-white">
                <MessageSquare className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Personal Touch
              </h3>
              <p className="text-gray-600">
                Direct communication & tailored solutions
              </p>
              <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-gray-900 to-gray-700 rounded-b-2xl transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform"></div>
            </div>

            {/* Long-Term Commitment */}
            <div className="group relative bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-all">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white rounded-2xl -z-10"></div>
              <div className="mb-6 inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gray-900 text-white">
                <Clock className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Long-Term Commitment
              </h3>
              <p className="text-gray-600">
                Ongoing maintenance & proactive care
              </p>
              <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-gray-900 to-gray-700 rounded-b-2xl transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform"></div>
            </div>
          </div>

          {/* Bottom Accent */}
          <div className="absolute left-1/2 bottom-0 w-24 h-24 -translate-x-1/2 translate-y-1/2 bg-gradient-to-br from-gray-100 to-gray-50 rounded-full blur-2xl opacity-50"></div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section id="services" className="relative py-24 bg-gray-50">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#f8f8f8,transparent_70%)]"></div>
        <div className="absolute right-0 top-1/4 w-64 h-64 bg-gradient-to-br from-gray-100 to-white rounded-full blur-3xl opacity-70 -z-10"></div>
        <div className="absolute left-0 bottom-1/4 w-64 h-64 bg-gradient-to-br from-gray-100 to-white rounded-full blur-3xl opacity-70 -z-10"></div>
        
        <div className="max-w-7xl mx-auto px-8 relative">
          {/* Section Header */}
          <div className="max-w-3xl mx-auto text-center mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Our Comprehensive Property Solutions
            </h2>
            <p className="text-xl text-gray-600">
              Professional property maintenance services tailored to your needs, delivered with the APEX standard of excellence.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Residential Cleaning */}
            <div className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="aspect-w-16 aspect-h-9 relative">
                <img 
                  src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
                  alt="Residential Cleaning"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-gray-900/20"></div>
                <div className="absolute bottom-6 left-6">
                  <h3 className="text-2xl font-bold text-white mb-2">Residential Cleaning</h3>
                  <div className="flex items-center gap-2">
                    <Home className="w-5 h-5 text-white" />
                    <span className="text-white/90">Home & Apartment Care</span>
                  </div>
                </div>
              </div>
              <div className="p-8">
                <p className="text-gray-600 mb-6">
                  Thorough, tailored cleaning solutions for NSW homes. We bring the APEX standard of excellence to every corner of your living space.
                </p>
                <div className="flex items-center justify-between">
                  <a href="/residential-cleaning" className="inline-flex items-center gap-2 text-gray-900 font-medium hover:text-gray-700 transition-colors">
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </a>
                  <span className="text-sm text-gray-500">From $120/visit</span>
                </div>
              </div>
            </div>

            {/* Commercial Cleaning */}
            <div className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="aspect-w-16 aspect-h-9 relative">
                <img 
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2301&q=80" 
                  alt="Commercial Cleaning"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-gray-900/20"></div>
                <div className="absolute bottom-6 left-6">
                  <h3 className="text-2xl font-bold text-white mb-2">Commercial Cleaning</h3>
                  <div className="flex items-center gap-2">
                    <Building2 className="w-5 h-5 text-white" />
                    <span className="text-white/90">Office & Retail Spaces</span>
                  </div>
                </div>
              </div>
              <div className="p-8">
                <p className="text-gray-600 mb-6">
                  Professional cleaning solutions for commercial properties, focusing on quality, efficiency, and maintaining a pristine business environment.
                </p>
                <div className="flex items-center justify-between">
                  <a href="/commercial-cleaning" className="inline-flex items-center gap-2 text-gray-900 font-medium hover:text-gray-700 transition-colors">
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </a>
                  <span className="text-sm text-gray-500">Custom Quotes</span>
                </div>
              </div>
            </div>

            {/* Residential Outdoor Care */}
            <div className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="aspect-w-16 aspect-h-9 relative">
                <img 
                  src="https://images.unsplash.com/photo-1558904541-efa843a96f01?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
                  alt="Residential Outdoor Care"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-gray-900/20"></div>
                <div className="absolute bottom-6 left-6">
                  <h3 className="text-2xl font-bold text-white mb-2">Residential Outdoor Care</h3>
                  <div className="flex items-center gap-2">
                    <Trees className="w-5 h-5 text-white" />
                    <span className="text-white/90">Garden & Lawn Care</span>
                  </div>
                </div>
              </div>
              <div className="p-8">
                <p className="text-gray-600 mb-6">
                  Complete outdoor maintenance including lawn care, garden maintenance, and property upkeep for residential properties across NSW.
                </p>
                <div className="flex items-center justify-between">
                  <a href="/residential-outdoor" className="inline-flex items-center gap-2 text-gray-900 font-medium hover:text-gray-700 transition-colors">
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </a>
                  <span className="text-sm text-gray-500">From $150/visit</span>
                </div>
              </div>
            </div>

            {/* Commercial Outdoor Care */}
            <div className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="aspect-w-16 aspect-h-9 relative">
                <img 
                  src="https://images.unsplash.com/photo-1605146769289-440113cc3d00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
                  alt="Commercial Outdoor Care"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-gray-900/20"></div>
                <div className="absolute bottom-6 left-6">
                  <h3 className="text-2xl font-bold text-white mb-2">Commercial Outdoor Care</h3>
                  <div className="flex items-center gap-2">
                    <Factory className="w-5 h-5 text-white" />
                    <span className="text-white/90">Commercial Landscapes</span>
                  </div>
                </div>
              </div>
              <div className="p-8">
                <p className="text-gray-600 mb-6">
                  Expert outdoor maintenance for commercial properties, ensuring safety, curb appeal, and professional presentation year-round.
                </p>
                <div className="flex items-center justify-between">
                  <a href="/commercial-outdoor" className="inline-flex items-center gap-2 text-gray-900 font-medium hover:text-gray-700 transition-colors">
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </a>
                  <span className="text-sm text-gray-500">Custom Quotes</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 text-center">
            <a href="/contact" className="inline-flex items-center gap-2 bg-gray-900 text-white px-8 py-4 rounded-lg font-medium hover:bg-gray-800 transition-all">
              Get a Customized Quote
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="relative py-32 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gray-50"></div>
        <div className="absolute right-0 top-1/3 w-96 h-96 bg-gradient-to-br from-gray-100 to-white rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-8 relative">
          {/* Section Header */}
          <div className="max-w-xl">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why APEX Property Solutions?
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Experience the difference of working with NSW's most trusted property maintenance experts.
            </p>
          </div>

          {/* Main Content */}
          <div className="mt-20">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left Side - Features */}
              <div className="space-y-12">
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gray-900 flex items-center justify-center">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Licensed & Insured</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Full coverage and compliance for your peace of mind. We maintain all necessary certifications and insurance.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gray-900 flex items-center justify-center">
                    <Users2 className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Family-Owned Care</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Personal attention to every property, treating your space with the same care we would our own.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gray-900 flex items-center justify-center">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">24/7 Support</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Round-the-clock availability for emergencies and inquiries. We're always here when you need us.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Side - Images */}
              <div className="relative h-[600px]">
                {/* Main Image */}
                <div className="absolute right-0 top-0 w-4/5 h-80 rounded-xl overflow-hidden shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
                    alt="Professional Team" 
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Overlapping Image 1 */}
                <div className="absolute left-0 top-48 w-3/5 h-64 rounded-xl overflow-hidden shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
                    alt="Quality Service" 
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Overlapping Image 2 */}
                <div className="absolute right-12 bottom-0 w-1/2 h-56 rounded-xl overflow-hidden shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
                    alt="Property Excellence" 
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Decorative Elements */}
                <div className="absolute -right-4 top-16 w-24 h-24 rounded-full border-8 border-gray-100"></div>
                <div className="absolute left-8 bottom-24 w-16 h-16 rounded-full bg-gray-100"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative py-32 bg-gray-50 overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#f8f8f8,transparent_70%)]"></div>
        <div className="absolute right-0 top-1/4 w-96 h-96 bg-gradient-to-br from-gray-100 to-white rounded-full blur-3xl opacity-70 -z-10"></div>
        <div className="absolute left-0 bottom-1/4 w-96 h-96 bg-gradient-to-br from-gray-100 to-white rounded-full blur-3xl opacity-70 -z-10"></div>

        <div className="max-w-7xl mx-auto px-8 relative">
          {/* Section Header */}
          <div className="max-w-3xl mx-auto text-center mb-24">
            <h2 className="text-5xl font-bold text-gray-900 mb-8">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Don't just take our word for it. Here's what property owners across NSW have to say about the APEX standard of excellence.
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white rounded-2xl transition-all group-hover:scale-[1.02] duration-300"></div>
              <div className="relative p-8 rounded-2xl bg-white border border-gray-100 shadow-sm">
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative">
                    <div className="w-16 h-16 rounded-full overflow-hidden">
                      <img 
                        src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                        alt="Emily Richardson"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute -bottom-2 -right-2 bg-yellow-400 text-white p-1 rounded-full">
                      <Star className="w-4 h-4 fill-current" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Emily Richardson</h3>
                    <p className="text-sm text-gray-500">Homeowner, North Sydney</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-6">
                  "As a busy professional, I needed a reliable property maintenance service. APEX has exceeded my expectations. Their attention to detail in maintaining my garden and regular cleaning services has made my life so much easier."
                </p>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 stroke-yellow-400" />
                  ))}
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white rounded-2xl transition-all group-hover:scale-[1.02] duration-300"></div>
              <div className="relative p-8 rounded-2xl bg-white border border-gray-100 shadow-sm">
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative">
                    <div className="w-16 h-16 rounded-full overflow-hidden">
                      <img 
                        src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80" 
                        alt="Michael Zhang"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute -bottom-2 -right-2 bg-yellow-400 text-white p-1 rounded-full">
                      <Star className="w-4 h-4 fill-current" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Michael Zhang</h3>
                    <p className="text-sm text-gray-500">Property Manager, Parramatta</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-6">
                  "Managing multiple commercial properties requires reliable partners. APEX's comprehensive maintenance solutions have consistently delivered exceptional results. Their proactive approach to property care is invaluable."
                </p>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 stroke-yellow-400" />
                  ))}
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white rounded-2xl transition-all group-hover:scale-[1.02] duration-300"></div>
              <div className="relative p-8 rounded-2xl bg-white border border-gray-100 shadow-sm">
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative">
                    <div className="w-16 h-16 rounded-full overflow-hidden">
                      <img 
                        src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80" 
                        alt="Sophie Anderson"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute -bottom-2 -right-2 bg-yellow-400 text-white p-1 rounded-full">
                      <Star className="w-4 h-4 fill-current" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Sophie Anderson</h3>
                    <p className="text-sm text-gray-500">Business Owner, Bondi</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-6">
                  "The team at APEX understands the importance of first impressions. Their commercial cleaning and outdoor maintenance services have helped maintain our shop's professional appearance year-round."
                </p>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 stroke-yellow-400" />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24">
            <div className="text-center">
              <div className="text-4xl font-bold text-gray-900 mb-2">500+</div>
              <div className="text-gray-600">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gray-900 mb-2">15K+</div>
              <div className="text-gray-600">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gray-900 mb-2">98%</div>
              <div className="text-gray-600">Satisfaction Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gray-900 mb-2">24/7</div>
              <div className="text-gray-600">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="relative py-32 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,#f8f8f8,transparent_70%)]"></div>
        <div className="absolute right-0 top-1/3 w-64 h-64 bg-gradient-to-br from-gray-100 to-white rounded-full blur-3xl opacity-70 -z-10"></div>
        
        <div className="max-w-7xl mx-auto px-8 relative">
          {/* Section Header */}
          <div className="max-w-3xl mx-auto text-center mb-24">
            <h2 className="text-5xl font-bold text-gray-900 mb-8">
              Your Path to Hassle-Free Property Maintenance
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              We've simplified property maintenance to give you peace of mind. Here's how we work together.
            </p>
          </div>

          {/* Process Timeline */}
          <div className="relative">
            {/* Connecting Line */}
            <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 -translate-y-1/2 hidden lg:block"></div>

            <div className="grid lg:grid-cols-3 gap-12 lg:gap-8">
              {/* Step 1: Assessment */}
              <div className="relative group">
                <div className="relative z-10 text-center">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-white shadow-lg border border-gray-100 mb-6 group-hover:scale-110 transition-transform duration-300">
                    <ClipboardCheck className="w-10 h-10 text-gray-900" />
                  </div>
                  <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                    <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gray-900 text-white text-sm font-medium mb-6">
                      1
                    </div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                      Free Property Assessment
                    </h3>
                    <p className="text-gray-600 mb-6">
                      We start with a thorough evaluation of your property's unique needs and challenges to create a comprehensive maintenance strategy.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">On-site Inspection</span>
                      <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">Detailed Report</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 2: Plan */}
              <div className="relative group">
                <div className="relative z-10 text-center">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-white shadow-lg border border-gray-100 mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Settings2 className="w-10 h-10 text-gray-900" />
                  </div>
                  <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                    <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gray-900 text-white text-sm font-medium mb-6">
                      2
                    </div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                      Customized Plan
                    </h3>
                    <p className="text-gray-600 mb-6">
                      We develop a tailored maintenance plan that aligns with your property's needs, schedule, and budget requirements.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">Flexible Scheduling</span>
                      <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">Custom Solutions</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 3: Support */}
              <div className="relative group">
                <div className="relative z-10 text-center">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-white shadow-lg border border-gray-100 mb-6 group-hover:scale-110 transition-transform duration-300">
                    <HeartHandshake className="w-10 h-10 text-gray-900" />
                  </div>
                  <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                    <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gray-900 text-white text-sm font-medium mb-6">
                      3
                    </div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                      Ongoing Support
                    </h3>
                    <p className="text-gray-600 mb-6">
                      We provide regular maintenance, proactive service, and 24/7 support to ensure your property maintains its value and appeal.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">24/7 Support</span>
                      <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">Regular Updates</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="mt-20 text-center">
            <a 
              href="/get-started" 
              className="inline-flex items-center gap-2 bg-gray-900 text-white px-8 py-4 rounded-lg font-medium hover:bg-gray-800 transition-all group"
            >
              Start Your Free Assessment
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* CTA Banner Section */}
      <section className="relative py-24">
        <div className="max-w-7xl mx-auto px-8">
          <div className="relative overflow-hidden rounded-3xl">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0">
              <img 
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
                alt="Modern Property"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gray-900/70 mix-blend-multiply"></div>
            </div>

            {/* Content */}
            <div className="relative px-8 py-20">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-4xl font-bold text-white mb-6">
                  Ready to Experience Property Excellence?
                </h2>
                <p className="text-lg text-gray-200 mb-8">
                  Join hundreds of satisfied property owners who trust APEX for their maintenance needs.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-md text-gray-900 bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-white transition-all duration-300"
                  >
                    Get Started Today
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                  <a
                    href="#services"
                    className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-base font-medium rounded-md text-white hover:bg-white hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-white transition-all duration-300"
                  >
                    View Services
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section (kept for context) */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-32">
        {/* About section content... */}
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand Column */}
            <div className="space-y-6">
              <a href="/" className="block">
                <img 
                  src="/logo-white.png" 
                  alt="APEX Property Solutions" 
                  className="h-12 w-auto"
                />
              </a>
              <p className="text-gray-400 text-sm leading-relaxed">
                NSW's leading property maintenance service, delivering excellence through our comprehensive solutions and family-owned care.
              </p>
              {/* Secondary CTA */}
              <a 
                href="/quote" 
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-lg font-medium transition-all group"
              >
                Get a Free Quote
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-white font-semibold text-lg mb-6">Quick Links</h3>
              <ul className="space-y-4">
                <li>
                  <a href="/" className="hover:text-white transition-colors">Home</a>
                </li>
                <li>
                  <a href="/about" className="hover:text-white transition-colors">About Us</a>
                </li>
                <li>
                  <a href="/cleaning-services" className="hover:text-white transition-colors">Cleaning Services</a>
                </li>
                <li>
                  <a href="/outdoor-care" className="hover:text-white transition-colors">Outdoor Care Services</a>
                </li>
                <li>
                  <a href="/contact" className="hover:text-white transition-colors">Contact Us</a>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-white font-semibold text-lg mb-6">Our Services</h3>
              <ul className="space-y-4">
                <li>
                  <a href="/residential-cleaning" className="hover:text-white transition-colors">Residential Cleaning</a>
                </li>
                <li>
                  <a href="/commercial-cleaning" className="hover:text-white transition-colors">Commercial Cleaning</a>
                </li>
                <li>
                  <a href="/residential-outdoor" className="hover:text-white transition-colors">Residential Outdoor Care</a>
                </li>
                <li>
                  <a href="/commercial-outdoor" className="hover:text-white transition-colors">Commercial Outdoor Care</a>
                </li>
              </ul>
            </div>

            {/* Contact Information */}
            <div>
              <h3 className="text-white font-semibold text-lg mb-6">Contact Us</h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-gray-400" />
                  <a href="tel:1300883623" className="hover:text-white transition-colors">1300 883 623</a>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-gray-400 mt-1" />
                  <a href="mailto:customerservice@apexpropertysolutions.com.au" className="hover:text-white transition-colors break-all">
                    customerservice@apexpropertysolutions.com.au
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-gray-400" />
                  <span>24/7 Support Available</span>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-gray-400 mt-1" />
                  <span>Serving All of NSW</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800">
          <div className="max-w-7xl mx-auto px-8 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              {/* Copyright */}
              <div className="text-sm text-gray-400">
                &copy; {new Date().getFullYear()} APEX Property Solutions & Co. All Rights Reserved.
              </div>

              {/* Social Media */}
              <div className="flex items-center gap-4">
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;