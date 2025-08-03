import { Clock, ArrowRight, Banknote, Zap, Navigation, Radio, Globe } from 'lucide-react';
import Header from '@/react-app/components/Header';
import Footer from '@/react-app/components/Footer';
import { useState, useEffect } from 'react';

export default function Routes() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  

  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('[data-animate]');
      elements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
        
        if (isVisible && !element.classList.contains('animate-slide-up')) {
          element.classList.add('animate-slide-up');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const routes = [
    {
      category: 'Metro Lines',
      routes: [
        { 
          from: 'Nairobi CBD', 
          to: 'Thika', 
          duration: '90 mins', 
          fare: 'KSh 120', 
          frequency: 'Every 30 mins',
          status: 'Operating',
          type: 'city',
          features: ['Comfortable seating', 'Professional drivers', 'Safe travel']
        },
        { 
          from: 'Nairobi CBD', 
          to: 'Ruiru', 
          duration: '60 mins', 
          fare: 'KSh 80', 
          frequency: 'Every 45 mins',
          status: 'Operating',
          type: 'city',
          features: ['Direct route', 'Affordable fares', 'Regular service']
        },
        { 
          from: 'Westlands', 
          to: 'Kasarani', 
          duration: '45 mins', 
          fare: 'KSh 60', 
          frequency: 'Every 40 mins',
          status: 'Operating',
          type: 'city',
          features: ['Cross-city connection', 'Multiple stops', 'Daily service']
        },
        { 
          from: 'Karen', 
          to: 'CBD', 
          duration: '40 mins', 
          fare: 'KSh 70', 
          frequency: 'Every 35 mins',
          status: 'Operating',
          type: 'city',
          features: ['Comfortable seating', 'Regular service', 'Safe travel']
        },
        { 
          from: 'Eastleigh', 
          to: 'Westlands', 
          duration: '50 mins', 
          fare: 'KSh 65', 
          frequency: 'Every 50 mins',
          status: 'Operating',
          type: 'city',
          features: ['Cross-city link', 'Multiple stops', 'Daily service']
        },
        { 
          from: 'Kibera', 
          to: 'CBD', 
          duration: '35 mins', 
          fare: 'KSh 50', 
          frequency: 'Every 25 mins',
          status: 'Operating',
          type: 'city',
          features: ['Community service', 'Affordable pricing', 'Regular service']
        },
      ]
    },
    {
      category: 'Airport Shuttle',
      routes: [
        { 
          from: 'JKIA Airport', 
          to: 'Nairobi CBD', 
          duration: '45 mins', 
          fare: 'KSh 100', 
          frequency: 'Every 30 mins',
          status: 'Operating',
          type: 'airport',
          features: ['Luggage space', 'Direct route', 'Comfortable seating']
        },
        { 
          from: 'JKIA Airport', 
          to: 'Westlands', 
          duration: '60 mins', 
          fare: 'KSh 120', 
          frequency: 'Every 45 mins',
          status: 'Operating',
          type: 'airport',
          features: ['Express service', 'Luggage storage', 'Professional drivers']
        }
      ]
    }
  ];

  const filteredRoutes = selectedCategory === 'all' 
    ? routes 
    : routes.filter(category => 
        category.routes.some(route => route.type === selectedCategory)
      ).map(category => ({
        ...category,
        routes: category.routes.filter(route => route.type === selectedCategory)
      }));

  const networkStats = [
    { icon: Globe, number: '12+', label: 'Active Routes', color: 'from-sky-500 to-cyan-400' },
    { icon: Navigation, number: '80+', label: 'Bus Stops', color: 'from-emerald-500 to-teal-400' },
    { icon: Radio, number: '100+', label: 'Fleet Size', color: 'from-purple-500 to-pink-400' },
    { icon: Zap, number: '6AM-10PM', label: 'Daily Service', color: 'from-amber-500 to-orange-400' },
  ];

  return (
    <div className="min-h-screen bg-slate-900">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 gradient-city city-silhouette"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-sky-500/20 to-transparent animate-pulse"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <div className="flex items-center justify-center mb-6">
              <div className="flex items-center space-x-2 glass px-4 py-2 rounded-full">
                <Navigation className="h-4 w-4 text-emerald-400" />
                <span className="text-sky-200 text-sm font-body">Smart Network</span>
              </div>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight font-display">
              Intelligent
              <span className="block bg-gradient-to-r from-sky-400 via-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                Route Network
              </span>
            </h1>
            
            <p className="text-xl text-slate-300 max-w-3xl mx-auto font-body">
              Comprehensive bus route network serving Nairobi and surrounding areas with reliable daily service
            </p>
          </div>
        </div>
      </section>

      {/* Network Stats */}
      <section className="py-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {networkStats.map((stat, index) => (
              <div 
                key={index} 
                className="text-center group hover-scale" 
                data-animate
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative mb-6">
                  <div className={`absolute inset-0 bg-gradient-to-r ${stat.color} rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity`}></div>
                  <div className="relative w-16 h-16 mx-auto glass rounded-2xl border border-slate-600/30 flex items-center justify-center group-hover:border-sky-500/50 transition-all duration-300">
                    <stat.icon className="h-8 w-8 text-white" />
                  </div>
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2 font-display">
                  {stat.number}
                </div>
                <div className="text-slate-400 font-body">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 sticky top-20 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass rounded-2xl p-6 border border-slate-600/30">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-r from-sky-500 to-emerald-500 rounded-lg flex items-center justify-center">
                  <Navigation className="h-4 w-4 text-white" />
                </div>
                <span className="text-white font-medium font-body">Filter Routes:</span>
              </div>
              
              <div className="flex gap-2">
                {[
                  { value: 'all', label: 'All Routes' },
                  { value: 'city', label: 'City Routes' },
                  { value: 'airport', label: 'Airport Shuttle' }
                ].map((option) => (
                  <button
                    key={option.value}
                    onClick={() => setSelectedCategory(option.value)}
                    className={`px-6 py-2 rounded-lg font-medium font-body transition-all duration-300 ${
                      selectedCategory === option.value
                        ? 'bg-gradient-to-r from-sky-500 to-emerald-500 text-white'
                        : 'text-slate-400 hover:text-white hover:bg-slate-800'
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Routes Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredRoutes.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-20">
              <div className="text-center mb-12" data-animate>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-display">
                  {category.category}
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-sky-400 to-emerald-400 mx-auto rounded-full"></div>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                {category.routes.map((route, index) => (
                  <div 
                    key={index} 
                    className="group glass rounded-2xl p-6 border border-slate-600/30 hover:border-sky-500/50 transition-all duration-300 hover-scale"
                    data-animate
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {/* Route Header */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                        <span className="text-emerald-400 text-sm font-medium font-body">{route.status}</span>
                      </div>
                      <span className="text-2xl font-bold text-sky-400 font-display">{route.fare}</span>
                    </div>
                    
                    {/* Route Path */}
                    <div className="mb-6">
                      <div className="flex items-center justify-between mb-4">
                        <span className="font-semibold text-white font-body">{route.from}</span>
                        <div className="flex-1 mx-4 border-t border-dashed border-slate-600 relative">
                          <ArrowRight className="h-4 w-4 text-slate-400 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-slate-900 px-1" />
                        </div>
                        <span className="font-semibold text-white font-body">{route.to}</span>
                      </div>
                    </div>
                    
                    {/* Route Details */}
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center justify-between text-sm">
                        <span className="flex items-center text-slate-400">
                          <Clock className="h-4 w-4 mr-2" />
                          Duration
                        </span>
                        <span className="font-medium text-white font-body">{route.duration}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="flex items-center text-slate-400">
                          <Banknote className="h-4 w-4 mr-2" />
                          Frequency
                        </span>
                        <span className="font-medium text-emerald-400 font-body">{route.frequency}</span>
                      </div>
                    </div>
                    
                    {/* Features */}
                    <div className="space-y-2 mb-6">
                      <span className="text-slate-400 text-sm font-body">Smart Features:</span>
                      <div className="flex flex-wrap gap-2">
                        {route.features.map((feature, featureIndex) => (
                          <span 
                            key={featureIndex}
                            className="px-2 py-1 bg-slate-800/50 text-slate-300 text-xs rounded-full font-body"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    {/* Action Button */}
                    <button className="w-full py-3 bg-gradient-to-r from-slate-800 to-slate-700 hover:from-sky-500/20 hover:to-emerald-500/20 rounded-lg border border-slate-600/30 hover:border-sky-500/50 transition-all duration-300 group">
                      <div className="flex items-center justify-center space-x-2 text-slate-300 group-hover:text-white">
                        <span className="font-body">View Route Details</span>
                        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Interactive Map Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-12" data-animate>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-display">
              Route Network <span className="bg-gradient-to-r from-sky-400 to-emerald-400 bg-clip-text text-transparent">Coverage</span>
            </h2>
            <p className="text-xl text-slate-400 font-body">
              Comprehensive bus route coverage across Nairobi and surrounding areas
            </p>
          </div>
          
          <div className="glass rounded-3xl p-12 border border-slate-600/30" data-animate>
            <div className="text-center text-slate-400">
              <div className="relative mb-8">
                <div className="absolute inset-0 bg-gradient-to-r from-sky-500 to-emerald-500 rounded-2xl blur-xl opacity-30"></div>
                <div className="relative w-24 h-24 mx-auto glass rounded-2xl border border-slate-600/30 flex items-center justify-center">
                  <Globe className="h-12 w-12 text-sky-400 animate-float" />
                </div>
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4 font-display">Route Network Map</h3>
              <p className="font-body">Our comprehensive bus route network serves Nairobi CBD and extends to surrounding areas including Thika, Ruiru, Kasarani, Karen, Westlands, Eastleigh, and Kibera with reliable daily service.</p>
              
              <div className="mt-8 flex items-center justify-center space-x-4">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-emerald-400 rounded-full"></div>
                  <span className="text-emerald-400 text-sm font-body">City Routes</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-sky-400 rounded-full"></div>
                  <span className="text-sky-400 text-sm font-body">Airport Shuttle</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
                  <span className="text-purple-400 text-sm font-body">Daily Service</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
